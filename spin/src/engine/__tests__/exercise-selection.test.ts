import { describe, it, expect } from 'vitest';
import type { Difficulty, Exercise, TechniqueMastery } from '@content/types';
import {
  selectExercises,
  masteryBand,
  isWithinBand,
  isOnCooldown,
  daysSinceAnswered,
  overallMasteryOf,
  EXERCISE_COOLDOWN_DAYS,
} from '../exercise-selection';

const NOW = new Date('2026-07-15T12:00:00Z');
const DAY_MS = 86_400_000;

/** Deterministic "shuffle" so ordering assertions are stable. */
const identity = <T>(items: T[]): T[] => items;

function ex(
  id: string,
  primary: string,
  difficulty: Difficulty = 'beginner',
  related?: string[]
): Exercise {
  return {
    id,
    type: 'technique-match',
    difficulty,
    question: { de: 'q', en: 'q' },
    options: [
      { de: 'a', en: 'a' },
      { de: 'b', en: 'b' },
      { de: 'c', en: 'c' },
      { de: 'd', en: 'd' },
    ],
    correctAnswers: [0],
    explanation: { de: 'e', en: 'e' },
    points: 10,
    primaryTechniqueId: primary,
    relatedTechniques: related ?? [primary],
  };
}

function mastery(techniqueId: string, masteryLevel: number): TechniqueMastery {
  const iso = NOW.toISOString();
  return {
    techniqueId,
    masteryLevel,
    encounterCount: 1,
    correctCount: 1,
    lastPracticed: iso,
    easeFactor: 2.5,
    interval: 1,
    repetitions: 1,
    peakRepetitions: 1,
    nextReview: iso,
  };
}

function daysAgo(days: number): string {
  return new Date(NOW.getTime() - days * DAY_MS).toISOString();
}

describe('mastery band helpers', () => {
  it('maps overall mastery to a band', () => {
    expect(masteryBand(0)).toBe('beginner');
    expect(masteryBand(39)).toBe('beginner');
    expect(masteryBand(40)).toBe('intermediate');
    expect(masteryBand(59)).toBe('intermediate');
    expect(masteryBand(60)).toBe('advanced');
    expect(masteryBand(80)).toBe('expert');
  });

  it('allows ±1 band around the user band', () => {
    expect(isWithinBand('beginner', 'beginner')).toBe(true);
    expect(isWithinBand('beginner', 'intermediate')).toBe(true);
    expect(isWithinBand('beginner', 'advanced')).toBe(false);
    expect(isWithinBand('intermediate', 'expert')).toBe(false);
    expect(isWithinBand('advanced', 'expert')).toBe(true);
  });

  it('averages mastery, defaulting to 0 when empty', () => {
    expect(overallMasteryOf({})).toBe(0);
    expect(overallMasteryOf({ a: mastery('a', 40), b: mastery('b', 60) })).toBe(50);
  });
});

describe('cooldown helpers', () => {
  it('reports Infinity for never-answered exercises', () => {
    expect(daysSinceAnswered('x', {}, NOW)).toBe(Infinity);
    expect(isOnCooldown('x', {}, NOW)).toBe(false);
  });

  it('treats the window boundary strictly (< cooldownDays)', () => {
    expect(isOnCooldown('x', { x: daysAgo(20) }, NOW)).toBe(true);
    expect(isOnCooldown('x', { x: daysAgo(EXERCISE_COOLDOWN_DAYS) }, NOW)).toBe(false);
    expect(isOnCooldown('x', { x: daysAgo(30) }, NOW)).toBe(false);
  });
});

describe('selectExercises', () => {
  const known = { scarcity: mastery('scarcity', 50) };

  it('returns nothing for non-positive counts or empty pools', () => {
    expect(selectExercises({ pool: [], knowledgeState: known, count: 5, now: NOW })).toEqual([]);
    expect(
      selectExercises({ pool: [ex('a', 'scarcity')], knowledgeState: known, count: 0, now: NOW })
    ).toEqual([]);
  });

  it('gates to introduced techniques, backfilling unseen ones only when short', () => {
    const pool = [ex('seen', 'scarcity'), ex('unseen', 'framing')];
    // Enough known items to fill → unseen technique excluded
    const one = selectExercises({
      pool,
      knowledgeState: known,
      count: 1,
      now: NOW,
      shuffle: identity,
    });
    expect(one.map((e) => e.id)).toEqual(['seen']);

    // Not enough known → unseen backfills so the session still fills
    const two = selectExercises({
      pool,
      knowledgeState: known,
      count: 2,
      now: NOW,
      shuffle: identity,
    });
    expect(two.map((e) => e.id)).toEqual(['seen', 'unseen']);
  });

  it('prefers off-cooldown exercises (no-repeat)', () => {
    const pool = [ex('fresh', 'scarcity'), ex('recent', 'scarcity')];
    const result = selectExercises({
      pool,
      knowledgeState: known,
      answeredExercises: { recent: daysAgo(3) },
      count: 1,
      now: NOW,
      shuffle: identity,
    });
    expect(result.map((e) => e.id)).toEqual(['fresh']);
  });

  it('never starves: reuses cooldown items oldest-first when all are on cooldown', () => {
    const pool = [ex('newer', 'scarcity'), ex('older', 'scarcity')];
    const answered = { newer: daysAgo(2), older: daysAgo(10) };
    const both = selectExercises({
      pool,
      knowledgeState: known,
      answeredExercises: answered,
      count: 2,
      now: NOW,
      shuffle: identity,
    });
    expect(both).toHaveLength(2);
    // With a single slot, the least-recently-seen wins
    const one = selectExercises({
      pool,
      knowledgeState: known,
      answeredExercises: answered,
      count: 1,
      now: NOW,
      shuffle: identity,
    });
    expect(one.map((e) => e.id)).toEqual(['older']);
  });

  it('biases toward the ±1 mastery band', () => {
    // beginner user (overall 0) → expert item is out of band
    const pool = [ex('hard', 'scarcity', 'expert'), ex('easy', 'scarcity', 'beginner')];
    const result = selectExercises({
      pool,
      knowledgeState: { scarcity: mastery('scarcity', 0) },
      count: 1,
      now: NOW,
      shuffle: identity,
    });
    expect(result.map((e) => e.id)).toEqual(['easy']);
  });

  it('prioritises weak techniques among otherwise-equal candidates', () => {
    const pool = [ex('strongTech', 'framing', 'beginner'), ex('weakTech', 'scarcity', 'beginner')];
    const result = selectExercises({
      pool,
      knowledgeState: {
        scarcity: mastery('scarcity', 30), // weak (< 60)
        framing: mastery('framing', 80), // strong
      },
      count: 1,
      now: NOW,
      shuffle: identity,
    });
    expect(result.map((e) => e.id)).toEqual(['weakTech']);
  });

  it('returns at most count items', () => {
    const pool = [ex('a', 'scarcity'), ex('b', 'scarcity'), ex('c', 'scarcity')];
    expect(selectExercises({ pool, knowledgeState: known, count: 2, now: NOW })).toHaveLength(2);
  });
});
