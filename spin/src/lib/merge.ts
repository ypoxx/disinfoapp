import type { TechniqueMastery } from '@content/types';
import type { StreakState } from '@/engine/streak';

/**
 * Field-wise merge of local and cloud store snapshots.
 * Pure functions — no store or Firebase access — so they are unit-testable.
 *
 * Persisted zustand shape: { state: {...}, version: n }
 */

export interface PersistEnvelope<T> {
  state: T;
  version?: number;
}

interface KnowledgeSnapshot {
  techniques?: Record<string, TechniqueMastery>;
  answeredExercises?: Record<string, string>;
}

interface ProgressSnapshot {
  xp?: number;
  streak?: StreakState;
  earnedBadges?: string[];
  totalPracticeTime?: number;
  sessionsCompleted?: number;
  totalQuestionsAnswered?: number;
  recentScores?: number[];
}

/** Per technique: the entry practiced more recently wins */
export function mergeKnowledge(
  local: KnowledgeSnapshot,
  cloud: KnowledgeSnapshot
): KnowledgeSnapshot {
  const merged: Record<string, TechniqueMastery> = { ...(cloud.techniques ?? {}) };
  for (const [id, localEntry] of Object.entries(local.techniques ?? {})) {
    const cloudEntry = merged[id];
    if (!cloudEntry || localEntry.lastPracticed >= cloudEntry.lastPracticed) {
      merged[id] = localEntry;
    }
  }

  // Per exercise: the most recent answer timestamp wins (no-repeat memory)
  const answered: Record<string, string> = { ...(cloud.answeredExercises ?? {}) };
  for (const [id, ts] of Object.entries(local.answeredExercises ?? {})) {
    if (!answered[id] || ts >= answered[id]) answered[id] = ts;
  }

  return { techniques: merged, answeredExercises: answered };
}

/** Monotonic counters take the max, badges union, streak = most recent */
export function mergeProgress(
  local: ProgressSnapshot,
  cloud: ProgressSnapshot
): ProgressSnapshot {
  const localStreak = local.streak;
  const cloudStreak = cloud.streak;
  let streak: StreakState | undefined;
  if (!localStreak) streak = cloudStreak;
  else if (!cloudStreak) streak = localStreak;
  else {
    streak =
      (localStreak.lastActiveDate ?? '') >= (cloudStreak.lastActiveDate ?? '')
        ? localStreak
        : cloudStreak;
    streak = { ...streak, longest: Math.max(localStreak.longest ?? 0, cloudStreak.longest ?? 0) };
  }

  return {
    xp: Math.max(local.xp ?? 0, cloud.xp ?? 0),
    streak,
    earnedBadges: [...new Set([...(local.earnedBadges ?? []), ...(cloud.earnedBadges ?? [])])],
    totalPracticeTime: Math.max(local.totalPracticeTime ?? 0, cloud.totalPracticeTime ?? 0),
    sessionsCompleted: Math.max(local.sessionsCompleted ?? 0, cloud.sessionsCompleted ?? 0),
    totalQuestionsAnswered: Math.max(
      local.totalQuestionsAnswered ?? 0,
      cloud.totalQuestionsAnswered ?? 0
    ),
    // Rolling corridor window: the more active snapshot carries the signal
    recentScores:
      (local.totalQuestionsAnswered ?? 0) >= (cloud.totalQuestionsAnswered ?? 0)
        ? local.recentScores ?? []
        : cloud.recentScores ?? [],
  };
}

/** Settings are device preferences: local wins, cloud only fills gaps */
export function mergeSettings<T extends Record<string, unknown>>(local: T, cloud: T): T {
  return { ...cloud, ...local };
}

/** Merge one persisted envelope by store key */
export function mergeEnvelope(
  key: string,
  local: PersistEnvelope<Record<string, unknown>>,
  cloud: PersistEnvelope<Record<string, unknown>>
): PersistEnvelope<Record<string, unknown>> {
  const version = Math.max(local.version ?? 0, cloud.version ?? 0);
  switch (key) {
    case 'spin-knowledge':
      return { state: mergeKnowledge(local.state, cloud.state) as Record<string, unknown>, version };
    case 'spin-progress':
      return { state: mergeProgress(local.state, cloud.state) as Record<string, unknown>, version };
    default:
      return { state: mergeSettings(local.state, cloud.state), version };
  }
}
