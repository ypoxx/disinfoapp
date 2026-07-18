import type { ItemResult, SessionSummary } from './types';

/** XP rewards per action */
const XP_PER_CORRECT = 10;
const XP_PER_EXERCISE = 5;
const XP_BONUS_STREAK = 5; // Bonus for each consecutive correct answer
const XP_BONUS_PERFECT = 25; // Bonus for perfect session

/** Calculate XP and summary for a completed session */
export function calculateSessionSummary(
  sessionId: string,
  results: ItemResult[]
): SessionSummary {
  const correctCount = results.filter(r => r.correct).length;
  const totalItems = results.length;
  // Accuracy honours partial credit: a half-right multi-select counts half
  const scoreSum = results.reduce((sum, r) => sum + r.score, 0);
  const accuracy = totalItems > 0 ? Math.round((scoreSum / totalItems) * 100) : 0;
  const timeSpent = results.reduce((sum, r) => sum + r.timeSpent, 0);

  // Calculate XP
  let xp = totalItems * XP_PER_EXERCISE; // Base XP for attempting
  xp += Math.round(scoreSum * XP_PER_CORRECT); // Bonus scaled by (partial) correctness

  // Streak bonus: consecutive correct answers
  let currentStreak = 0;
  for (const result of results) {
    if (result.correct) {
      currentStreak++;
      if (currentStreak >= 3) {
        xp += XP_BONUS_STREAK;
      }
    } else {
      currentStreak = 0;
    }
  }

  // Perfect session bonus
  if (correctCount === totalItems && totalItems >= 3) {
    xp += XP_BONUS_PERFECT;
  }

  // Collect unique techniques
  const techniqueSet = new Set<string>();
  for (const result of results) {
    if (result.techniqueId) techniqueSet.add(result.techniqueId);
  }

  return {
    sessionId,
    totalItems,
    correctCount,
    accuracy,
    xpEarned: xp,
    timeSpent,
    techniquesReviewed: [...techniqueSet],
    newTechniquesLearned: [], // Populated by the caller based on knowledge store
  };
}
