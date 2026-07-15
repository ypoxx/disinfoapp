import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  advanceStreak,
  displayStreak,
  displayWeeklyProgress,
  daysSinceLastActive,
  weekStartOf,
  type StreakState,
} from '@/engine/streak';

interface ProgressState {
  xp: number;
  streak: StreakState;
  earnedBadges: string[];
  totalPracticeTime: number; // seconds
  sessionsCompleted: number;
  totalQuestionsAnswered: number;
  /** exerciseId → ISO timestamp last answered, for the no-repeat cooldown */
  answeredExercises: Record<string, string>;

  addXP: (amount: number) => void;
  /** Count today as active (idempotent per day, handles week rollover) */
  checkStreak: () => void;
  earnBadge: (badgeId: string) => void;
  addPracticeTime: (seconds: number) => void;
  completeSession: () => void;
  addQuestionsAnswered: (count: number) => void;
  /** Stamp answered exercises so they enter their no-repeat cooldown */
  recordExercisesAnswered: (exerciseIds: string[], at?: string) => void;

  /** Streak as it should be DISPLAYED (lapsed streaks show 0) */
  getDisplayStreak: () => number;
  /** Weekly progress for the CURRENT week (stale weeks show empty) */
  getWeeklyProgress: () => boolean[];
  /** Days since last activity — read BEFORE checkStreak for comeback logic */
  getDaysSinceLastActive: () => number | null;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      xp: 0,
      streak: {
        current: 0,
        longest: 0,
        lastActiveDate: null,
        weeklyProgress: [false, false, false, false, false, false, false],
        weekStart: weekStartOf(),
      },
      earnedBadges: [],
      totalPracticeTime: 0,
      sessionsCompleted: 0,
      totalQuestionsAnswered: 0,
      answeredExercises: {},

      addXP: (amount) => set((s) => ({ xp: s.xp + amount })),

      checkStreak: () => {
        set((s) => ({ streak: advanceStreak(s.streak) }));
      },

      earnBadge: (badgeId) =>
        set((s) => ({
          earnedBadges: s.earnedBadges.includes(badgeId)
            ? s.earnedBadges
            : [...s.earnedBadges, badgeId],
        })),

      addPracticeTime: (seconds) =>
        set((s) => ({ totalPracticeTime: s.totalPracticeTime + seconds })),

      completeSession: () =>
        set((s) => ({ sessionsCompleted: s.sessionsCompleted + 1 })),

      addQuestionsAnswered: (count) =>
        set((s) => ({ totalQuestionsAnswered: s.totalQuestionsAnswered + count })),

      recordExercisesAnswered: (exerciseIds, at) => {
        if (exerciseIds.length === 0) return;
        const stamp = at ?? new Date().toISOString();
        set((s) => {
          const answeredExercises = { ...s.answeredExercises };
          for (const id of exerciseIds) {
            if (id) answeredExercises[id] = stamp;
          }
          return { answeredExercises };
        });
      },

      getDisplayStreak: () => displayStreak(get().streak),
      getWeeklyProgress: () => displayWeeklyProgress(get().streak),
      getDaysSinceLastActive: () => daysSinceLastActive(get().streak),
    }),
    {
      name: 'spin-progress',
      version: 2,
      // v0 → v1: weekStart + totalQuestionsAnswered introduced.
      // Old lastActiveDate values were UTC-based YYYY-MM-DD — close enough
      // to local to carry over (worst case: one streak day of grace).
      // v1 → v2: answeredExercises (per-exercise no-repeat cooldown) introduced.
      migrate: (persisted) => {
        const state = persisted as Partial<ProgressState>;
        if (state.streak && state.streak.weekStart === undefined) {
          state.streak.weekStart = weekStartOf();
        }
        if (state.totalQuestionsAnswered === undefined) {
          state.totalQuestionsAnswered = 0;
        }
        if (state.answeredExercises === undefined) {
          state.answeredExercises = {};
        }
        return state as ProgressState;
      },
    }
  )
);
