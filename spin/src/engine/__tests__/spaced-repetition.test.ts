import { describe, it, expect } from 'vitest';
import {
  calculateNextReview,
  createDefaultMastery,
  qualityFromOutcome,
  isDueForReview,
} from '../spaced-repetition';

const NOW = new Date('2026-07-14T10:00:00');

function daysUntilReview(iso: string, from: Date): number {
  return Math.round((new Date(iso).getTime() - from.getTime()) / 86_400_000);
}

describe('calculateNextReview (SM-2)', () => {
  it('progresses intervals 1 → 6 → round(6 * EF) on successful recalls', () => {
    let m = createDefaultMastery('framing', NOW);
    m = calculateNextReview(m, 4, NOW);
    expect(m.interval).toBe(1);
    m = calculateNextReview(m, 4, NOW);
    expect(m.interval).toBe(6);
    m = calculateNextReview(m, 4, NOW);
    expect(m.interval).toBe(Math.round(6 * m.easeFactor));
    expect(m.repetitions).toBe(3);
  });

  it('increases ease factor at quality 5 and keeps it stable at 4', () => {
    const base = createDefaultMastery('framing', NOW);
    expect(calculateNextReview(base, 5, NOW).easeFactor).toBeCloseTo(2.6);
    expect(calculateNextReview(base, 4, NOW).easeFactor).toBeCloseTo(2.5);
    expect(calculateNextReview(base, 3, NOW).easeFactor).toBeCloseTo(2.36);
  });

  it('never lets ease factor fall below 1.3', () => {
    let m = createDefaultMastery('framing', NOW);
    for (let i = 0; i < 20; i++) m = calculateNextReview(m, 0, NOW);
    expect(m.easeFactor).toBeCloseTo(1.3);
  });

  it('resets repetitions and interval on lapse', () => {
    let m = createDefaultMastery('framing', NOW);
    for (let i = 0; i < 4; i++) m = calculateNextReview(m, 4, NOW);
    m = calculateNextReview(m, 1, NOW);
    expect(m.repetitions).toBe(0);
    expect(m.interval).toBe(1);
    expect(daysUntilReview(m.nextReview, NOW)).toBe(1);
  });

  it('does not crater mastery by 40 points on a single lapse (peak smoothing)', () => {
    let m = createDefaultMastery('framing', NOW);
    for (let i = 0; i < 6; i++) m = calculateNextReview(m, 4, NOW);
    const before = m.masteryLevel;
    m = calculateNextReview(m, 1, NOW);
    expect(before - m.masteryLevel).toBeLessThan(25);
    expect(m.peakRepetitions).toBe(6);
  });

  it('clamps quality into 0..5', () => {
    const m = createDefaultMastery('framing', NOW);
    expect(calculateNextReview(m, 99, NOW).repetitions).toBe(1);
    expect(calculateNextReview(m, -3, NOW).repetitions).toBe(0);
  });

  it('schedules nextReview relative to the passed now', () => {
    let m = createDefaultMastery('framing', NOW);
    m = calculateNextReview(m, 4, NOW);
    expect(daysUntilReview(m.nextReview, NOW)).toBe(1);
    expect(isDueForReview(m, NOW)).toBe(false);
    expect(isDueForReview(m, new Date('2026-07-16T10:00:00'))).toBe(true);
  });
});

describe('qualityFromOutcome', () => {
  it('maps passive reviews to 3', () => {
    expect(qualityFromOutcome({ correct: 0, total: 0, passive: true })).toBe(3);
  });

  it('maps perfect multi-answer sessions to 5, single-answer to 4', () => {
    expect(qualityFromOutcome({ correct: 3, total: 3 })).toBe(5);
    expect(qualityFromOutcome({ correct: 1, total: 1 })).toBe(4);
  });

  it('maps partial success to 3, weak to 2, total failure to 1', () => {
    expect(qualityFromOutcome({ correct: 1, total: 2 })).toBe(3);
    expect(qualityFromOutcome({ correct: 1, total: 3 })).toBe(2);
    expect(qualityFromOutcome({ correct: 0, total: 2 })).toBe(1);
  });

  it('ease factor can rise over time with perfect sessions (loop closes upward)', () => {
    let m = createDefaultMastery('framing', NOW);
    const q = qualityFromOutcome({ correct: 2, total: 2 });
    m = calculateNextReview(m, q, NOW);
    m = calculateNextReview(m, q, NOW);
    expect(m.easeFactor).toBeGreaterThan(2.5);
  });
});
