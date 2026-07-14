/**
 * Learning Engine — Orchestrates the complete learning experience.
 *
 * Combines:
 * - SM-2 spaced repetition for optimal review scheduling
 * - Interleaving for better long-term retention
 * - Adaptive session building based on user knowledge
 * - XP/mastery scoring
 */

export { buildSession } from './session-builder';
export {
  calculateNextReview,
  createDefaultMastery,
  qualityFromOutcome,
  isDueForReview,
  sortByUrgency,
} from './spaced-repetition';
export type { SessionOutcome } from './spaced-repetition';
export { interleaveExercises, mixExerciseTypes } from './interleaving';
export { calculateSessionSummary } from './scoring';
export { evaluateNewBadges } from './badges';
export type { Session, SessionItem, ItemResult, SessionSummary } from './types';
