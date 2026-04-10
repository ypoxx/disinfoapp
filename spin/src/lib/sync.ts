import { useAuthStore } from '@/stores/auth-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useProgressStore } from '@/stores/progress-store';
import { useSettingsStore } from '@/stores/settings-store';
import { saveUserData, loadUserData } from './firebase';

/** Keys that are synced to Firestore */
const SYNC_KEYS = ['spin-knowledge', 'spin-progress', 'spin-settings'] as const;

let syncTimeout: ReturnType<typeof setTimeout> | null = null;

/**
 * Debounced sync: saves local state to Firestore after 2 seconds of inactivity.
 * Only syncs if user is authenticated.
 */
export function scheduleSyncToCloud(): void {
  const user = useAuthStore.getState().user;
  if (!user) return;

  if (syncTimeout) clearTimeout(syncTimeout);
  syncTimeout = setTimeout(() => {
    syncToCloud(user.uid);
  }, 2000);
}

/** Push local state to Firestore */
async function syncToCloud(uid: string): Promise<void> {
  const data: Record<string, unknown> = {};
  for (const key of SYNC_KEYS) {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        data[key] = JSON.parse(stored);
      } catch { /* skip invalid */ }
    }
  }
  await saveUserData(uid, data);
}

/** Pull cloud state and merge with local (newer wins) */
export async function syncFromCloud(uid: string): Promise<void> {
  const cloudData = await loadUserData(uid);
  if (!cloudData) return;

  let needsRehydrate = false;

  for (const key of SYNC_KEYS) {
    const cloudValue = cloudData[key] as { state?: Record<string, unknown> } | undefined;
    if (!cloudValue?.state) continue;

    const localRaw = localStorage.getItem(key);
    const localValue = localRaw ? JSON.parse(localRaw) : null;

    // Simple merge: cloud wins if no local data exists
    if (!localValue) {
      localStorage.setItem(key, JSON.stringify(cloudValue));
      needsRehydrate = true;
      continue;
    }

    // Both exist — we keep the one with more data (by key count in state)
    const cloudKeyCount = Object.keys(cloudValue.state || {}).length;
    const localKeyCount = Object.keys(localValue.state || {}).length;

    if (cloudKeyCount > localKeyCount) {
      localStorage.setItem(key, JSON.stringify(cloudValue));
      needsRehydrate = true;
    }
  }

  // Rehydrate Zustand stores from updated localStorage (no page reload needed)
  if (needsRehydrate) {
    useKnowledgeStore.persist.rehydrate();
    useProgressStore.persist.rehydrate();
    useSettingsStore.persist.rehydrate();
  }
}

/** Set up automatic sync on store changes */
export function initSync(): void {
  // Subscribe to store changes and trigger cloud sync
  useKnowledgeStore.subscribe(scheduleSyncToCloud);
  useProgressStore.subscribe(scheduleSyncToCloud);
  useSettingsStore.subscribe(scheduleSyncToCloud);

  // Sync from cloud on login
  useAuthStore.subscribe((state, prevState) => {
    if (state.user && !prevState.user) {
      syncFromCloud(state.user.uid);
    }
  });
}
