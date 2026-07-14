/**
 * Streak & weekly-progress logic as pure functions (testable, no store access).
 * All day math uses LOCAL dates — the audience is European, UTC boundaries
 * would flip days at 1-2 AM local time.
 */

export interface StreakState {
  current: number;
  longest: number;
  lastActiveDate: string | null; // local date, YYYY-MM-DD
  weeklyProgress: boolean[]; // Mon-Sun
  /** Local date (YYYY-MM-DD) of the Monday of the week weeklyProgress refers to */
  weekStart?: string;
}

/** Local calendar date as YYYY-MM-DD */
export function localDateString(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Monday (local) of the week containing `date`, as YYYY-MM-DD */
export function weekStartOf(date: Date = new Date()): string {
  const d = new Date(date);
  const day = d.getDay(); // 0=Sun
  const diff = day === 0 ? 6 : day - 1;
  d.setDate(d.getDate() - diff);
  return localDateString(d);
}

/** Mon=0 … Sun=6 for a local date */
export function dayOfWeekIndex(date: Date = new Date()): number {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

/** Whole local days between two YYYY-MM-DD dates (b - a) */
export function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split('-').map(Number);
  const [by, bm, bd] = b.split('-').map(Number);
  const da = new Date(ay, am - 1, ad);
  const db = new Date(by, bm - 1, bd);
  return Math.round((db.getTime() - da.getTime()) / 86_400_000);
}

/**
 * Advance the streak state for activity happening `now`.
 * Idempotent within a day. Resets weeklyProgress when the week changed —
 * regardless of which weekday the user returns on.
 */
export function advanceStreak(state: StreakState, now: Date = new Date()): StreakState {
  const today = localDateString(now);
  const thisWeek = weekStartOf(now);

  // Week rollover first, so even a same-day no-op keeps the array fresh
  const weeklyProgress =
    state.weekStart === thisWeek ? [...state.weeklyProgress] : [false, false, false, false, false, false, false];

  if (state.lastActiveDate === today && state.weekStart === thisWeek) {
    return state; // already counted today
  }

  let current: number;
  if (state.lastActiveDate === today) {
    current = state.current; // same day, only week rolled (edge: never happens in practice)
  } else if (state.lastActiveDate && daysBetween(state.lastActiveDate, today) === 1) {
    current = state.current + 1;
  } else {
    current = 1;
  }

  weeklyProgress[dayOfWeekIndex(now)] = true;

  return {
    current,
    longest: Math.max(state.longest, current),
    lastActiveDate: today,
    weeklyProgress,
    weekStart: thisWeek,
  };
}

/**
 * The streak to DISPLAY right now: yesterday's stored value is still valid
 * today (the user can keep it alive), but older values have lapsed to 0.
 */
export function displayStreak(state: StreakState, now: Date = new Date()): number {
  if (!state.lastActiveDate) return 0;
  const gap = daysBetween(state.lastActiveDate, localDateString(now));
  return gap <= 1 ? state.current : 0;
}

/** Weekly progress valid for the current week (stale weeks render empty) */
export function displayWeeklyProgress(state: StreakState, now: Date = new Date()): boolean[] {
  if (state.weekStart === weekStartOf(now)) return state.weeklyProgress;
  return [false, false, false, false, false, false, false];
}

/** Days since last activity (null if never active) — read BEFORE advancing */
export function daysSinceLastActive(state: StreakState, now: Date = new Date()): number | null {
  if (!state.lastActiveDate) return null;
  return daysBetween(state.lastActiveDate, localDateString(now));
}
