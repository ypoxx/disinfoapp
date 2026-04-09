import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StreakState {
  current: number;
  longest: number;
  lastActiveDate: string | null; // ISO date string
  weeklyProgress: boolean[]; // Mon-Sun
}

interface ProgressState {
  xp: number;
  streak: StreakState;
  earnedBadges: string[];
  totalPracticeTime: number; // seconds
  sessionsCompleted: number;

  addXP: (amount: number) => void;
  checkStreak: () => void;
  earnBadge: (badgeId: string) => void;
  addPracticeTime: (seconds: number) => void;
  completeSession: () => void;
}

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

function getDayOfWeek(): number {
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1; // Mon=0, Sun=6
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
      },
      earnedBadges: [],
      totalPracticeTime: 0,
      sessionsCompleted: 0,

      addXP: (amount) => set((s) => ({ xp: s.xp + amount })),

      checkStreak: () => {
        const today = getToday();
        const { streak } = get();

        if (streak.lastActiveDate === today) return; // Already checked today

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        let newCurrent = streak.current;
        if (streak.lastActiveDate === yesterdayStr) {
          newCurrent = streak.current + 1;
        } else if (streak.lastActiveDate !== today) {
          newCurrent = 1; // Reset streak
        }

        const weeklyProgress = [...streak.weeklyProgress];
        weeklyProgress[getDayOfWeek()] = true;

        // Reset weekly progress on Monday
        if (getDayOfWeek() === 0 && streak.lastActiveDate !== today) {
          weeklyProgress.fill(false);
          weeklyProgress[0] = true;
        }

        set({
          streak: {
            current: newCurrent,
            longest: Math.max(streak.longest, newCurrent),
            lastActiveDate: today,
            weeklyProgress,
          },
        });
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
    }),
    { name: 'spin-progress' }
  )
);
