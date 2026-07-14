import { useAuthStore } from '@/stores/auth-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useProgressStore } from '@/stores/progress-store';
import { useSettingsStore } from '@/stores/settings-store';
import { saveUserData, loadUserData } from './firebase';
import { mergeEnvelope, type PersistEnvelope } from './merge';

/** Keys that are synced to Firestore */
const SYNC_KEYS = ['spin-knowledge', 'spin-progress', 'spin-settings'] as const;

let syncTimeout: ReturnType<typeof setTimeout> | null = null;
let applyingCloudState = false;

/**
 * Debounced sync: saves local state to Firestore after 2 seconds of inactivity.
 * Only syncs if user is authenticated.
 */
export function scheduleSyncToCloud(): void {
  if (applyingCloudState) return; // don't echo cloud-applied state back immediately
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

/**
 * Pull cloud state and merge field-wise with local state.
 * No page reload: stores are rehydrated in place from the merged snapshot.
 */
export async function syncFromCloud(uid: string): Promise<void> {
  const cloudData = await loadUserData(uid);
  if (!cloudData) return;

  applyingCloudState = true;
  try {
    for (const key of SYNC_KEYS) {
      const cloudValue = cloudData[key] as PersistEnvelope<Record<string, unknown>> | undefined;
      if (!cloudValue?.state) continue;

      let merged = cloudValue;
      const localRaw = localStorage.getItem(key);
      if (localRaw) {
        try {
          const localValue = JSON.parse(localRaw) as PersistEnvelope<Record<string, unknown>>;
          if (localValue?.state) {
            merged = mergeEnvelope(key, localValue, cloudValue);
          }
        } catch { /* corrupt local — cloud wins */ }
      }
      localStorage.setItem(key, JSON.stringify(merged));
    }

    // Rehydrate stores from the merged localStorage snapshots (no reload)
    await Promise.all([
      useKnowledgeStore.persist.rehydrate(),
      useProgressStore.persist.rehydrate(),
      useSettingsStore.persist.rehydrate(),
    ]);

    // Push the merged result back so the cloud copy is complete too
    await syncToCloud(uid);
  } finally {
    applyingCloudState = false;
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
