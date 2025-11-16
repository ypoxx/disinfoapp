import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DiscoverState {
  // Track which techniques have been seen
  seenTechniques: Set<string>;

  // Track when user last visited discover feed
  lastVisit: number | null;

  // Current index in the feed
  currentIndex: number;

  // Actions
  markAsSeen: (techniqueId: string) => void;
  resetSeen: () => void;
  updateLastVisit: () => void;
  setCurrentIndex: (index: number) => void;
}

export const useDiscoverStore = create<DiscoverState>()(
  persist(
    (set) => ({
      seenTechniques: new Set<string>(),
      lastVisit: null,
      currentIndex: 0,

      markAsSeen: (techniqueId: string) =>
        set((state) => ({
          seenTechniques: new Set([...state.seenTechniques, techniqueId]),
        })),

      resetSeen: () =>
        set({
          seenTechniques: new Set<string>(),
          currentIndex: 0,
        }),

      updateLastVisit: () =>
        set({
          lastVisit: Date.now(),
        }),

      setCurrentIndex: (index: number) =>
        set({
          currentIndex: index,
        }),
    }),
    {
      name: 'discover-storage',
      // Custom serialization for Set
      partialize: (state) => ({
        seenTechniques: Array.from(state.seenTechniques),
        lastVisit: state.lastVisit,
        currentIndex: state.currentIndex,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Convert array back to Set
          state.seenTechniques = new Set(state.seenTechniques);
        }
      },
    }
  )
);
