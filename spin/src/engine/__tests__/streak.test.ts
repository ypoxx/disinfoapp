import { describe, it, expect } from 'vitest';
import {
  advanceStreak,
  displayStreak,
  displayWeeklyProgress,
  daysSinceLastActive,
  localDateString,
  weekStartOf,
  type StreakState,
} from '../streak';

const EMPTY: StreakState = {
  current: 0,
  longest: 0,
  lastActiveDate: null,
  weeklyProgress: [false, false, false, false, false, false, false],
};

// 2026-07-14 is a Tuesday
const TUE = new Date(2026, 6, 14, 9, 0, 0);
const WED = new Date(2026, 6, 15, 9, 0, 0);
const THU = new Date(2026, 6, 16, 9, 0, 0);
const NEXT_TUE = new Date(2026, 6, 21, 9, 0, 0);

describe('localDateString / weekStartOf', () => {
  it('uses LOCAL dates, not UTC', () => {
    // 00:30 local on the 15th must be the 15th even if UTC still says 14th
    const lateNight = new Date(2026, 6, 15, 0, 30, 0);
    expect(localDateString(lateNight)).toBe('2026-07-15');
  });

  it('computes Monday as week start, also on Sundays', () => {
    expect(weekStartOf(new Date(2026, 6, 14))).toBe('2026-07-13'); // Tue → Mon
    expect(weekStartOf(new Date(2026, 6, 19))).toBe('2026-07-13'); // Sun → same Mon
    expect(weekStartOf(new Date(2026, 6, 20))).toBe('2026-07-20'); // next Mon
  });
});

describe('advanceStreak', () => {
  it('starts a streak at 1', () => {
    const s = advanceStreak(EMPTY, TUE);
    expect(s.current).toBe(1);
    expect(s.longest).toBe(1);
    expect(s.weeklyProgress[1]).toBe(true); // Tuesday index 1
  });

  it('is idempotent within a day', () => {
    const s1 = advanceStreak(EMPTY, TUE);
    const s2 = advanceStreak(s1, new Date(2026, 6, 14, 22, 0, 0));
    expect(s2).toEqual(s1);
  });

  it('increments on consecutive days and resets after a gap', () => {
    let s = advanceStreak(EMPTY, TUE);
    s = advanceStreak(s, WED);
    expect(s.current).toBe(2);
    s = advanceStreak(s, NEXT_TUE); // gap
    expect(s.current).toBe(1);
    expect(s.longest).toBe(2);
  });

  it('resets weeklyProgress when the week changes — on ANY weekday', () => {
    let s = advanceStreak(EMPTY, THU); // Thu of week 1
    expect(s.weeklyProgress[3]).toBe(true);
    s = advanceStreak(s, NEXT_TUE); // Tue of week 2 — not a Monday!
    expect(s.weeklyProgress).toEqual([false, true, false, false, false, false, false]);
  });
});

describe('display helpers', () => {
  it('shows yesterday-kept streaks but zeroes lapsed ones', () => {
    const s = advanceStreak(EMPTY, TUE);
    expect(displayStreak(s, WED)).toBe(1); // still keepable
    expect(displayStreak(s, THU)).toBe(0); // lapsed
  });

  it('renders stale weekly progress as empty without mutating state', () => {
    const s = advanceStreak(EMPTY, TUE);
    expect(displayWeeklyProgress(s, NEXT_TUE)).toEqual([
      false, false, false, false, false, false, false,
    ]);
    expect(s.weeklyProgress[1]).toBe(true);
  });

  it('computes days since last activity for comeback detection', () => {
    const s = advanceStreak(EMPTY, TUE);
    expect(daysSinceLastActive(s, NEXT_TUE)).toBe(7);
    expect(daysSinceLastActive(EMPTY, TUE)).toBeNull();
  });
});
