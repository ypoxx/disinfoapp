import { describe, expect, it } from 'vitest';
import type { Difficulty, TechniqueMastery } from '@content/types';
import { exercises } from '@content/exercises';
import {
  buildSession,
  corridorShift,
  primaryTechniqueOf,
  COOLDOWN_DAYS,
} from '../session-builder';
import {
  calculateNextReview,
  createDefaultMastery,
  qualityFromOutcome,
  isDueForReview,
  type SessionOutcome,
} from '../spaced-repetition';

/**
 * Simulation harness (Ausbau-Plan R2 DoD): artificial profiles play daily
 * sessions for several weeks. Asserts the engine's contract:
 *  - gating: never quiz a technique that was not introduced
 *  - no-repeat: answered exercises stay off the table while the pool allows
 *  - corridor: steady-state score signal stays in a sane band
 *  - reviews: the due backlog stays bounded (no starvation)
 */

// Deterministic LCG so the test never flakes
function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}

const DIFF_P: Record<string, Record<Difficulty, number>> = {
  // P(correct | difficulty) per profile skill
  weak: { beginner: 0.7, intermediate: 0.45, advanced: 0.25, expert: 0.1 },
  average: { beginner: 0.9, intermediate: 0.75, advanced: 0.55, expert: 0.35 },
  strong: { beginner: 0.98, intermediate: 0.95, advanced: 0.85, expert: 0.7 },
};

interface SimState {
  knowledgeState: Record<string, TechniqueMastery>;
  answeredExercises: Record<string, string>;
  recentScores: number[];
  answerLog: Array<{ id: string; day: number }>;
  maxDueBacklog: number;
}

function simulate(profile: keyof typeof DIFF_P, days: number, seed = 42): SimState {
  const rng = makeRng(seed);
  const state: SimState = {
    knowledgeState: {},
    answeredExercises: {},
    recentScores: [],
    answerLog: [],
    maxDueBacklog: 0,
  };
  const start = new Date('2026-01-05T08:00:00Z');

  for (let day = 0; day < days; day++) {
    const now = new Date(start.getTime() + day * 86_400_000);
    const session = buildSession({
      knowledgeState: state.knowledgeState,
      answeredExercises: state.answeredExercises,
      recentScores: state.recentScores,
      sessionType: 'daily',
      now,
    });

    expect(session.items.length).toBeGreaterThan(0);
    expect(session.items.length).toBeLessThanOrEqual(7);

    const outcomes: Record<string, SessionOutcome> = {};
    const scores: number[] = [];

    for (const item of session.items) {
      if (item.type === 'learn') {
        const entry = createDefaultMastery(item.technique.id, now);
        const tomorrow = new Date(now.getTime() + 86_400_000);
        entry.nextReview = tomorrow.toISOString();
        state.knowledgeState[item.technique.id] = entry;
      } else if (item.type === 'review') {
        if (!outcomes[item.technique.id]) {
          outcomes[item.technique.id] = { correct: 0, total: 0, passive: true };
        }
      } else {
        const ex = item.exercise;
        const primary = primaryTechniqueOf(ex);
        // HARD RULE: gating — the builder must never quiz an unintroduced technique
        expect(primary && primary in state.knowledgeState, `gating violated: ${ex.id}`).toBe(true);

        const p = DIFF_P[profile][ex.difficulty];
        const score = rng() < p ? 1 : 0;
        scores.push(score);
        state.answerLog.push({ id: ex.id, day });
        state.answeredExercises[ex.id] = now.toISOString();
        if (primary) {
          const o = outcomes[primary] ?? { correct: 0, total: 0 };
          outcomes[primary] = { correct: o.correct + score, total: o.total + 1 };
        }
      }
    }

    for (const [techniqueId, outcome] of Object.entries(outcomes)) {
      const current = state.knowledgeState[techniqueId] ?? createDefaultMastery(techniqueId, now);
      state.knowledgeState[techniqueId] = calculateNextReview(
        current,
        qualityFromOutcome(outcome),
        now
      );
    }
    state.recentScores = [...state.recentScores, ...scores].slice(-20);

    const due = Object.values(state.knowledgeState).filter((m) => isDueForReview(m, now)).length;
    state.maxDueBacklog = Math.max(state.maxDueBacklog, due);
  }

  return state;
}

describe('session simulation over 40 days', () => {
  const profiles = ['weak', 'average', 'strong'] as const;

  for (const profile of profiles) {
    it(`${profile} profile: engine contract holds`, () => {
      const state = simulate(profile, 40);

      // All techniques get introduced over time (catalogue fully reachable)
      expect(Object.keys(state.knowledgeState).length).toBeGreaterThanOrEqual(20);

      // Review backlog stays bounded — quota scales with due count
      expect(state.maxDueBacklog).toBeLessThan(20);

      // Steady-state score signal lands in a sane band (not 0, not saturated 1.0
      // for weak/average — the corridor pulls towards mid difficulty)
      const late = state.recentScores;
      const avg = late.reduce((s, v) => s + v, 0) / late.length;
      expect(avg).toBeGreaterThan(0.3);
      if (profile !== 'strong') expect(avg).toBeLessThan(0.98);

      // No-repeat: while the pool allows, an exercise is not re-asked.
      // With a small pool the LRU fallback recycles — but never faster than
      // pool coverage allows. Check in steady state (day ≥ 25).
      const lastSeen = new Map<string, number>();
      const poolFloorDays = Math.max(
        1,
        Math.min(COOLDOWN_DAYS, Math.floor(exercises.length / 7)) - 1
      );
      for (const { id, day } of state.answerLog) {
        const prev = lastSeen.get(id);
        if (prev !== undefined && day >= 25) {
          expect(day - prev, `${id} re-asked after ${day - prev}d`).toBeGreaterThanOrEqual(
            poolFloorDays
          );
        }
        lastSeen.set(id, day);
      }
    });
  }

  it('corridor shift reacts to sustained performance', () => {
    expect(corridorShift([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(1);
    expect(corridorShift([0, 0, 0.5, 0, 0, 0.5, 0, 0, 0, 0])).toBe(-1);
    expect(corridorShift([1, 1, 0.5, 1, 0.5, 1, 1, 0.5, 1, 0.5])).toBe(0);
    // Calibration phase: too little signal → no shift
    expect(corridorShift([1, 1])).toBe(0);
  });
});
