import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '@/lib/firebase';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

/** localStorage keys whose data is synced to Firestore. */
const SYNCED_STORE_KEYS = [
  'user-progress',
  'knowledge-store',
  'achievements',
  'badge-storage',
  'streak-storage',
  'challenges',
  'discover-storage',
  'onboarding-storage',
] as const;

type StoreKey = (typeof SYNCED_STORE_KEYS)[number];

const DEBOUNCE_MS = 2_000;
const FIRESTORE_COLLECTION = 'users';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

let debounceTimer: ReturnType<typeof setTimeout> | null = null;
let pendingKeys = new Set<StoreKey>();

/**
 * Read a Zustand-persist value from localStorage and parse it.
 * Zustand persist stores under `{ state: ..., version: ... }`.
 */
function readLocalStore(key: string): Record<string, unknown> | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.state ?? null;
  } catch {
    return null;
  }
}

/**
 * Write a Zustand-persist value back into localStorage, preserving the
 * wrapper format `{ state, version }`.
 */
function writeLocalStore(key: string, state: Record<string, unknown>): void {
  try {
    const raw = localStorage.getItem(key);
    const existing = raw ? JSON.parse(raw) : { version: 0 };
    localStorage.setItem(key, JSON.stringify({ ...existing, state }));
  } catch {
    // Quota exceeded or other storage error -- ignore silently.
  }
}

// ---------------------------------------------------------------------------
// UID accessor -- set by authStore to avoid circular imports.
// ---------------------------------------------------------------------------

let uidAccessor: (() => string | null) | null = null;

/**
 * Called once by authStore to register a way to read the current UID
 * without creating a circular import.
 */
export function registerUidAccessor(fn: () => string | null): void {
  uidAccessor = fn;
}

function currentUid(): string | null {
  return uidAccessor?.() ?? null;
}

// ---------------------------------------------------------------------------
// Firestore read / write
// ---------------------------------------------------------------------------

/** Collect all synced stores into a single flat object for Firestore. */
function gatherLocalStores(): Record<string, unknown> {
  const payload: Record<string, unknown> = {};
  for (const key of SYNCED_STORE_KEYS) {
    const data = readLocalStore(key);
    if (data) payload[key] = data;
  }
  return payload;
}

/** Debounced write: batches all pending store changes into one Firestore write. */
function scheduleSyncToCloud(): void {
  if (debounceTimer) clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    const uid = currentUid();
    if (!uid || !db) return;

    const payload = gatherLocalStores();
    if (Object.keys(payload).length === 0) return;

    try {
      const docRef = doc(db, FIRESTORE_COLLECTION, uid);
      await setDoc(
        docRef,
        {
          ...payload,
          lastSynced: serverTimestamp(),
        },
        { merge: true }
      );
    } catch (err) {
      // Offline writes are queued automatically by Firestore SDK.
      console.warn('[sync] Write to Firestore failed (will retry):', err);
    }

    pendingKeys.clear();
    debounceTimer = null;
  }, DEBOUNCE_MS);
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Call this whenever a synced Zustand store changes.
 * It marks the store key as dirty and schedules a debounced Firestore write.
 *
 * Usage (inside each store's `persist.onRehydrateStorage` or a subscribe):
 *   syncMiddleware.notifyChange('user-progress');
 */
export function notifyChange(key: StoreKey): void {
  if (!isFirebaseConfigured) return;
  pendingKeys.add(key);
  scheduleSyncToCloud();
}

/**
 * Called on login: loads the cloud document and merges with local data.
 * Strategy: for each store key, keep whichever side has the newer
 * `lastSynced` / `lastUpdated` timestamp. If we cannot determine which
 * is newer, cloud wins (the user just signed in, so cloud is canonical).
 */
export async function loadCloudData(uid: string): Promise<void> {
  if (!db) return;

  try {
    const docRef = doc(db, FIRESTORE_COLLECTION, uid);
    const snap = await getDoc(docRef);

    if (!snap.exists()) {
      // First login ever -- push local data to cloud immediately.
      const payload = gatherLocalStores();
      if (Object.keys(payload).length > 0) {
        await setDoc(docRef, { ...payload, lastSynced: serverTimestamp() });
      }
      return;
    }

    const cloudData = snap.data() as Record<string, unknown>;

    for (const key of SYNCED_STORE_KEYS) {
      const cloudState = cloudData[key] as Record<string, unknown> | undefined;
      const localState = readLocalStore(key);

      if (!cloudState && !localState) continue;

      if (!cloudState) {
        // Only local data exists -- keep it (will be pushed on next change).
        continue;
      }

      if (!localState) {
        // Only cloud data exists -- write it locally.
        writeLocalStore(key, cloudState);
        continue;
      }

      // Both exist -- pick the newer one based on common timestamp fields.
      const cloudTs = extractTimestamp(cloudState);
      const localTs = extractTimestamp(localState);

      if (localTs > cloudTs) {
        // Local is newer -- keep local, schedule push to cloud.
        pendingKeys.add(key);
      } else {
        // Cloud is newer (or equal / indeterminate) -- overwrite local.
        writeLocalStore(key, cloudState);
      }
    }

    // If any local stores were newer, push them.
    if (pendingKeys.size > 0) {
      scheduleSyncToCloud();
    }

    // Trigger a page-level rehydration so Zustand picks up merged data.
    // The simplest reliable way is to reload the persisted stores.
    rehydrateStores();
  } catch (err) {
    console.warn('[sync] Failed to load cloud data:', err);
    // App continues with localStorage data -- fully offline-capable.
  }
}

/**
 * Extract the most meaningful timestamp from a store state object.
 * Returns epoch ms, or 0 if no timestamp is found.
 */
function extractTimestamp(state: Record<string, unknown>): number {
  // Try common field names that carry a "last modified" semantic.
  for (const field of ['lastSynced', 'lastUpdated', 'lastActivity', 'lastVisitDate', 'lastVisit']) {
    const value = state[field];
    if (!value) continue;
    if (typeof value === 'number') return value;
    const d = new Date(value as string);
    if (!isNaN(d.getTime())) return d.getTime();
  }

  // Firestore Timestamps have { seconds, nanoseconds }.
  const ts = state['lastSynced'] as { seconds?: number } | undefined;
  if (ts?.seconds) return ts.seconds * 1000;

  return 0;
}

/**
 * Ask each Zustand store to re-read its persisted data from localStorage.
 * We dynamically import stores to avoid circular dependencies.
 */
function rehydrateStores(): void {
  // Zustand persist exposes `rehydrate()` on the store's persist API.
  // We import each store lazily.
  const storeModules = [
    () => import('@/stores/progressStore').then((m) => m.useProgressStore),
    () => import('@/stores/knowledgeStore').then((m) => m.useKnowledgeStore),
    () => import('@/stores/achievementStore').then((m) => m.useAchievementStore),
    () => import('@/stores/badgeStore').then((m) => m.useBadgeStore),
    () => import('@/stores/streakStore').then((m) => m.useStreakStore),
    () => import('@/stores/challengeStore').then((m) => m.useChallengeStore),
    () => import('@/stores/discoverStore').then((m) => m.useDiscoverStore),
    () => import('@/stores/onboardingStore').then((m) => m.useOnboardingStore),
  ];

  for (const load of storeModules) {
    load()
      .then((store) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (store as any).persist?.rehydrate?.();
      })
      .catch(() => {
        // Store may not be initialised yet -- safe to ignore.
      });
  }
}

// ---------------------------------------------------------------------------
// localStorage listener -- detect changes made by Zustand persist and
// schedule a cloud sync automatically.
// ---------------------------------------------------------------------------

if (typeof window !== 'undefined' && isFirebaseConfigured) {
  const syncedKeySet = new Set<string>(SYNCED_STORE_KEYS);

  // Zustand persist writes to localStorage synchronously via setItem.
  // We monkey-patch setItem so we are notified *in the same tab*.
  const originalSetItem = localStorage.setItem.bind(localStorage);

  localStorage.setItem = (key: string, value: string) => {
    originalSetItem(key, value);
    if (syncedKeySet.has(key)) {
      notifyChange(key as StoreKey);
    }
  };

  // Also listen for storage events from *other* tabs.
  window.addEventListener('storage', (e) => {
    if (e.key && syncedKeySet.has(e.key)) {
      notifyChange(e.key as StoreKey);
    }
  });
}
