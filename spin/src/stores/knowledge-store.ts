import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TechniqueMastery } from '@content/types';

interface KnowledgeState {
  /** Per-technique mastery data */
  techniques: Record<string, TechniqueMastery>;

  /** Record an encounter with a technique */
  recordEncounter: (techniqueId: string, correct: boolean) => void;

  /** Get mastery for a specific technique */
  getMastery: (techniqueId: string) => TechniqueMastery | undefined;

  /** Get all techniques due for review */
  getDueReviews: () => TechniqueMastery[];

  /** Get overall mastery score (0-100) */
  getOverallMastery: () => number;

  /** Get techniques sorted by weakness */
  getWeakestTechniques: (limit?: number) => TechniqueMastery[];
}

function createDefaultMastery(techniqueId: string): TechniqueMastery {
  const today = new Date().toISOString();
  return {
    techniqueId,
    masteryLevel: 0,
    encounterCount: 0,
    correctCount: 0,
    lastPracticed: today,
    easeFactor: 2.5,
    interval: 1,
    repetitions: 0,
    nextReview: today,
  };
}

/**
 * SM-2 Algorithm: Calculate next review interval
 * Based on SuperMemo SM-2 with minor adaptations
 */
function updateSM2(mastery: TechniqueMastery, quality: number): TechniqueMastery {
  // quality: 0-5 (0=complete failure, 5=perfect)
  const q = Math.max(0, Math.min(5, quality));

  let { easeFactor, interval, repetitions } = mastery;

  if (q >= 3) {
    // Correct response
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else {
    // Incorrect — reset
    repetitions = 0;
    interval = 1;
  }

  // Update ease factor
  easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  easeFactor = Math.max(1.3, easeFactor);

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  // Update mastery level based on accuracy
  const newCorrectCount = mastery.correctCount + (q >= 3 ? 1 : 0);
  const newEncounterCount = mastery.encounterCount + 1;
  const accuracy = newEncounterCount > 0 ? (newCorrectCount / newEncounterCount) * 100 : 0;
  const masteryLevel = Math.round(
    accuracy * 0.6 + Math.min(100, repetitions * 10) * 0.4
  );

  return {
    ...mastery,
    easeFactor,
    interval,
    repetitions,
    nextReview: nextReview.toISOString(),
    lastPracticed: new Date().toISOString(),
    encounterCount: newEncounterCount,
    correctCount: newCorrectCount,
    masteryLevel: Math.min(100, masteryLevel),
  };
}

export const useKnowledgeStore = create<KnowledgeState>()(
  persist(
    (set, get) => ({
      techniques: {},

      recordEncounter: (techniqueId, correct) => {
        const current = get().techniques[techniqueId] || createDefaultMastery(techniqueId);
        // Map boolean to SM-2 quality: correct=4, incorrect=1
        const quality = correct ? 4 : 1;
        const updated = updateSM2(current, quality);

        set((s) => ({
          techniques: { ...s.techniques, [techniqueId]: updated },
        }));
      },

      getMastery: (techniqueId) => get().techniques[techniqueId],

      getDueReviews: () => {
        const now = new Date().toISOString();
        return Object.values(get().techniques).filter(
          (m) => m.nextReview <= now
        );
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
    { name: 'spin-knowledge' }
  )
);
