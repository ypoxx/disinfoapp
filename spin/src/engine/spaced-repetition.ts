import type { TechniqueMastery } from '@content/types';

/**
 * SM-2 Spaced Repetition Algorithm
 *
 * Based on the SuperMemo SM-2 algorithm by Piotr Wozniak.
 * Adapted for technique mastery tracking.
 *
 * Quality scale:
 *   5 = perfect response, no hesitation
 *   4 = correct after brief thought
 *   3 = correct with difficulty
 *   2 = incorrect, but close (remembered after seeing answer)
 *   1 = incorrect, vague memory
 *   0 = complete blackout
 */

export function calculateNextReview(
  mastery: TechniqueMastery,
  quality: number
): TechniqueMastery {
  const q = Math.max(0, Math.min(5, quality));
  let { easeFactor, interval, repetitions } = mastery;

  if (q >= 3) {
    // Successful recall
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else {
    // Failed recall — reset
    repetitions = 0;
    interval = 1;
  }

  // Update ease factor (minimum 1.3)
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  );

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  const newCorrectCount = mastery.correctCount + (q >= 3 ? 1 : 0);
  const newEncounterCount = mastery.encounterCount + 1;
  const accuracy = newEncounterCount > 0
    ? (newCorrectCount / newEncounterCount) * 100
    : 0;

  // Mastery = weighted blend of accuracy (60%) and repetition depth (40%)
  const masteryLevel = Math.min(
    100,
    Math.round(accuracy * 0.6 + Math.min(100, repetitions * 10) * 0.4)
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
    masteryLevel,
  };
}

/** Map a boolean answer to SM-2 quality */
export function qualityFromAnswer(correct: boolean, responseTimeMs: number): number {
  if (!correct) return 1;
  // Fast correct = 5, slow correct = 3
  if (responseTimeMs < 3000) return 5;
  if (responseTimeMs < 8000) return 4;
  return 3;
}

/** Check if a technique is due for review */
export function isDueForReview(mastery: TechniqueMastery): boolean {
  return new Date(mastery.nextReview) <= new Date();
}

/** Sort techniques by urgency (most overdue first) */
export function sortByUrgency(masteries: TechniqueMastery[]): TechniqueMastery[] {
  const now = Date.now();
  return [...masteries].sort((a, b) => {
    const overdueA = now - new Date(a.nextReview).getTime();
    const overdueB = now - new Date(b.nextReview).getTime();
    return overdueB - overdueA; // Most overdue first
  });
}
