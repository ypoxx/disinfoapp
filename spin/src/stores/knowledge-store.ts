import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TechniqueMastery } from '@content/types';
import {
  calculateNextReview,
  createDefaultMastery,
  qualityFromOutcome,
  isDueForReview,
  type SessionOutcome,
} from '@/engine/spaced-repetition';

interface KnowledgeState {
  /** Per-technique mastery data */
  techniques: Record<string, TechniqueMastery>;

  /**
   * exerciseId → ISO date of the last answer. No-repeat memory: the
   * session builder excludes exercises answered within the cooldown
   * window (Ausbau-Plan R2).
   */
  answeredExercises: Record<string, string>;

  /** Record answered exercise IDs at session end */
  recordAnswered: (exerciseIds: string[]) => void;

  /**
   * Mark a technique as introduced (learn item). Creates the SM-2 entry so
   * the technique enters the review cycle and is never re-introduced.
   */
  markSeen: (techniqueId: string) => void;

  /**
   * Apply the aggregated outcomes of ONE completed session.
   * Exactly one SM-2 update per technique.
   */
  applySessionOutcomes: (outcomes: Record<string, SessionOutcome>) => void;

  /** Get mastery for a specific technique */
  getMastery: (techniqueId: string) => TechniqueMastery | undefined;

  /** Get all techniques due for review */
  getDueReviews: () => TechniqueMastery[];

  /** Get overall mastery score (0-100) */
  getOverallMastery: () => number;

  /** Get techniques sorted by weakness */
  getWeakestTechniques: (limit?: number) => TechniqueMastery[];
}

export const useKnowledgeStore = create<KnowledgeState>()(
  persist(
    (set, get) => ({
      techniques: {},
      answeredExercises: {},

      recordAnswered: (exerciseIds) => {
        if (exerciseIds.length === 0) return;
        const now = new Date().toISOString();
        set((s) => {
          const answeredExercises = { ...s.answeredExercises };
          for (const id of exerciseIds) answeredExercises[id] = now;
          return { answeredExercises };
        });
      },

      markSeen: (techniqueId) => {
        if (get().techniques[techniqueId]) return;
        const entry = createDefaultMastery(techniqueId);
        // First review due tomorrow — introduction is not recall
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        entry.nextReview = tomorrow.toISOString();
        entry.encounterCount = 1;
        set((s) => ({ techniques: { ...s.techniques, [techniqueId]: entry } }));
      },

      applySessionOutcomes: (outcomes) => {
        set((s) => {
          const techniques = { ...s.techniques };
          for (const [techniqueId, outcome] of Object.entries(outcomes)) {
            const current = techniques[techniqueId] || createDefaultMastery(techniqueId);
            const quality = qualityFromOutcome(outcome);
            techniques[techniqueId] = calculateNextReview(current, quality);
          }
          return { techniques };
        });
      },

      getMastery: (techniqueId) => get().techniques[techniqueId],

      getDueReviews: () => {
        const now = new Date();
        return Object.values(get().techniques).filter((m) => isDueForReview(m, now));
      },

      getOverallMastery: () => {
        const all = Object.values(get().techniques);
        if (all.length === 0) return 0;
        return Math.round(all.reduce((sum, m) => sum + m.masteryLevel, 0) / all.length);
      },

      getWeakestTechniques: (limit = 5) => {
        return Object.values(get().techniques)
          .sort((a, b) => a.masteryLevel - b.masteryLevel)
          .slice(0, limit);
      },
    }),
    {
      name: 'spin-knowledge',
      version: 2,
      // v0 → v1: peakRepetitions introduced (optional, seeded from repetitions)
      // v1 → v2: answeredExercises no-repeat memory introduced
      migrate: (persisted) => {
        const state = persisted as {
          techniques?: Record<string, TechniqueMastery>;
          answeredExercises?: Record<string, string>;
        };
        if (state?.techniques) {
          for (const m of Object.values(state.techniques)) {
            if (m.peakRepetitions === undefined) m.peakRepetitions = m.repetitions;
          }
        }
        if (!state.answeredExercises) state.answeredExercises = {};
        return state as KnowledgeState;
      },
    }
  )
);
