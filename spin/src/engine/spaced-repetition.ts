import type { TechniqueMastery } from '@content/types';

/**
 * SM-2 Spaced Repetition Algorithm
 *
 * Based on the SuperMemo SM-2 algorithm by Piotr Wozniak.
 * Adapted for technique mastery tracking.
 *
 * This is the single SM-2 implementation of the app. Exactly ONE update
 * per technique per session — never per answered exercise (multiple
 * answers per session are aggregated via qualityFromOutcome()).
 *
 * Quality scale:
 *   5 = perfect response, no hesitation
 *   4 = correct after brief thought
 *   3 = correct with difficulty
 *   2 = incorrect, but close (remembered after seeing answer)
 *   1 = incorrect, vague memory
 *   0 = complete blackout
 */

/** Aggregated per-technique result of one session */
export interface SessionOutcome {
  correct: number;
  total: number;
  /** Technique was only shown passively (review card without active recall) */
  passive?: boolean;
}

export function createDefaultMastery(techniqueId: string, now: Date = new Date()): TechniqueMastery {
  const iso = now.toISOString();
  return {
    techniqueId,
    masteryLevel: 0,
    encounterCount: 0,
    correctCount: 0,
    lastPracticed: iso,
    easeFactor: 2.5,
    interval: 1,
    repetitions: 0,
    peakRepetitions: 0,
    nextReview: iso,
  };
}

export function calculateNextReview(
  mastery: TechniqueMastery,
  quality: number,
  now: Date = new Date()
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
    // Failed recall — reset scheduling
    repetitions = 0;
    interval = 1;
  }

  // Update ease factor (minimum 1.3). Increases at q=5, stable at q=4,
  // decreases below — reachable in both directions via qualityFromOutcome().
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  );

  const nextReview = new Date(now);
  nextReview.setDate(nextReview.getDate() + interval);

  const newCorrectCount = mastery.correctCount + (q >= 3 ? 1 : 0);
  const newEncounterCount = mastery.encounterCount + 1;
  const accuracy = newEncounterCount > 0
    ? (newCorrectCount / newEncounterCount) * 100
    : 0;

  // High-water mark of repetition depth. A single lapse resets the SM-2
  // schedule but must not crater the displayed mastery (no 40-point cliff):
  // the depth component falls back to half the peak instead of zero.
  const peakRepetitions = Math.max(mastery.peakRepetitions ?? 0, repetitions);
  const effectiveRepetitions = Math.max(repetitions, Math.ceil(peakRepetitions * 0.5));

  // Mastery = weighted blend of accuracy (60%) and repetition depth (40%)
  const masteryLevel = Math.min(
    100,
    Math.round(accuracy * 0.6 + Math.min(100, effectiveRepetitions * 10) * 0.4)
  );

  return {
    ...mastery,
    easeFactor,
    interval,
    repetitions,
    peakRepetitions,
    nextReview: nextReview.toISOString(),
    lastPracticed: now.toISOString(),
    encounterCount: newEncounterCount,
    correctCount: newCorrectCount,
    masteryLevel,
  };
}

/**
 * Map the aggregated per-technique session result to an SM-2 quality.
 * Passive reviews (card shown, no recall test) cap at 3 so intervals
 * still progress, but never as fast as demonstrated recall.
 */
export function qualityFromOutcome(outcome: SessionOutcome): number {
  if (outcome.passive) return 3;
  if (outcome.total <= 0) return 0;
  const accuracy = outcome.correct / outcome.total;
  if (accuracy === 1) return outcome.total >= 2 ? 5 : 4;
  if (accuracy >= 0.5) return 3;
  if (accuracy > 0) return 2;
  return 1;
}

/** Check if a technique is due for review */
export function isDueForReview(mastery: TechniqueMastery, now: Date = new Date()): boolean {
  return new Date(mastery.nextReview) <= now;
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
