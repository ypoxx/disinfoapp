import { create } from 'zustand';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from '@/lib/firebase';
import { loadCloudData, registerUidAccessor } from '@/lib/syncMiddleware';

interface AuthState {
  /** Firebase UID or null when not signed in. */
  uid: string | null;
  /** User photo URL for the avatar (kept in memory only, never persisted). */
  photoURL: string | null;
  /** True while we are waiting for the initial auth state to resolve. */
  loading: boolean;
  /** Human-readable error message from the last auth attempt. */
  error: string | null;

  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  uid: null,
  photoURL: null,
  loading: isFirebaseConfigured, // only loading if Firebase is set up
  error: null,

  signInWithGoogle: async () => {
    if (!auth) return;
    set({ error: null, loading: true });
    try {
      await signInWithPopup(auth, googleProvider);
      // onAuthStateChanged will update uid / photoURL
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Anmeldung fehlgeschlagen';
      set({ error: message, loading: false });
    }
  },

  logout: async () => {
    if (!auth) return;
    set({ error: null });
    try {
      await signOut(auth);
      // onAuthStateChanged will clear uid / photoURL
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Abmeldung fehlgeschlagen';
      set({ error: message });
    }
  },

  clearError: () => set({ error: null }),
}));

// Register UID accessor so syncMiddleware can read the current user
// without importing authStore (which would be circular).
registerUidAccessor(() => useAuthStore.getState().uid);

// ---------------------------------------------------------------------------
// Listen to Firebase auth state changes and reconcile with the store.
// ---------------------------------------------------------------------------
if (auth) {
  onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      useAuthStore.setState({
        uid: user.uid,
        photoURL: user.photoURL,
        loading: false,
      });
      // Merge cloud data into local stores (newer wins).
      await loadCloudData(user.uid);
    } else {
      useAuthStore.setState({
        uid: null,
        photoURL: null,
        loading: false,
      });
    }
  });
}
