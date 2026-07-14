import { create } from 'zustand';

interface User {
  uid: string;
  photoURL: string | null;
}

export type SyncStatus = 'idle' | 'ok' | 'error';

interface AuthState {
  user: User | null;
  loading: boolean;
  /** Last cloud sync result — 'error' is surfaced in the profile */
  syncStatus: SyncStatus;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setSyncStatus: (status: SyncStatus) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  loading: true,
  syncStatus: 'idle',
  setUser: (user) => set({ user, loading: false }),
  setLoading: (loading) => set({ loading }),
  setSyncStatus: (syncStatus) => set({ syncStatus }),
}));
