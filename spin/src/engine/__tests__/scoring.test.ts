import { describe, expect, it } from 'vitest';
import { calculateSessionSummary } from '../scoring';
import type { ItemResult } from '../types';

const item = (over: Partial<ItemResult>): ItemResult => ({
  itemIndex: 0,
  correct: false,
  score: 0,
  timeSpent: 5,
  techniqueId: 'framing',
  ...over,
});

describe('calculateSessionSummary', () => {
  it('counts only fully correct answers in correctCount', () => {
    const s = calculateSessionSummary('s1', [
      item({ correct: true, score: 1 }),
      item({ correct: false, score: 0.5 }),
      item({ correct: false, score: 0 }),
    ]);
    expect(s.correctCount).toBe(1);
  });

  it('honours partial credit in accuracy', () => {
    const s = calculateSessionSummary('s1', [
      item({ correct: true, score: 1 }),
      item({ correct: false, score: 0.5 }),
    ]);
    expect(s.accuracy).toBe(75);
  });

  it('scales XP with partial credit', () => {
    const full = calculateSessionSummary('s1', [item({ correct: true, score: 1 })]);
    const half = calculateSessionSummary('s1', [item({ correct: false, score: 0.5 })]);
    const none = calculateSessionSummary('s1', [item({ correct: false, score: 0 })]);
    expect(full.xpEarned).toBeGreaterThan(half.xpEarned);
    expect(half.xpEarned).toBeGreaterThan(none.xpEarned);
  });

  it('awards the perfect-session bonus only for a fully correct session of ≥3 items', () => {
    const perfect = calculateSessionSummary('s1', [
      item({ correct: true, score: 1 }),
      item({ correct: true, score: 1 }),
      item({ correct: true, score: 1 }),
    ]);
    const nearly = calculateSessionSummary('s1', [
      item({ correct: true, score: 1 }),
      item({ correct: true, score: 1 }),
      item({ correct: false, score: 0.5 }),
    ]);
    // 3×(5 base + 10 correct) + streak bonus 5 + perfect bonus 25
    expect(perfect.xpEarned).toBe(75);
    expect(nearly.xpEarned).toBeLessThan(perfect.xpEarned);
  });
});
