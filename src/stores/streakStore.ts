import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useBadgeStore } from './badgeStore';

export interface StreakState {
  currentStreak: number;
  longestStreak: number;
  lastVisitDate: string | null; // ISO date string
  totalDaysActive: number;
  weeklyGoal: number; // Days per week goal
  weeklyProgress: number; // Days active this week
  checkIn: () => void;
  resetStreak: () => void;
  setWeeklyGoal: (days: number) => void;
}

function isToday(dateString: string | null): boolean {
  if (!dateString) return false;
  const date = new Date(dateString);
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

function isYesterday(dateString: string | null): boolean {
  if (!dateString) return false;
  const date = new Date(dateString);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    date.getFullYear() === yesterday.getFullYear() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getDate() === yesterday.getDate()
  );
}

function getWeekNumber(date: Date): number {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function isSameWeek(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    getWeekNumber(date1) === getWeekNumber(date2)
  );
}

export const useStreakStore = create<StreakState>()(
  persist(
    (set, get) => ({
      currentStreak: 0,
      longestStreak: 0,
      lastVisitDate: null,
      totalDaysActive: 0,
      weeklyGoal: 5, // Default: 5 days per week
      weeklyProgress: 0,

      checkIn: () => {
        const now = new Date();
        const todayISO = now.toISOString().split('T')[0];
        const { lastVisitDate, currentStreak, longestStreak, totalDaysActive, weeklyProgress } =
          get();

        // Already checked in today
        if (isToday(lastVisitDate)) {
          return;
        }

        let newStreak = currentStreak;
        let newWeeklyProgress = weeklyProgress;

        // Check if new week
        if (lastVisitDate) {
          const lastVisit = new Date(lastVisitDate);
          if (!isSameWeek(lastVisit, now)) {
            newWeeklyProgress = 0;
          }
        }

        // Update streak
        if (isYesterday(lastVisitDate)) {
          // Continue streak
          newStreak = currentStreak + 1;
        } else if (!lastVisitDate || !isYesterday(lastVisitDate)) {
          // Start new streak
          newStreak = 1;
        }

        // Update weekly progress
        newWeeklyProgress += 1;

        set({
          currentStreak: newStreak,
          longestStreak: Math.max(longestStreak, newStreak),
          lastVisitDate: todayISO,
          totalDaysActive: totalDaysActive + 1,
          weeklyProgress: newWeeklyProgress,
        });

        // Check for streak-based badges
        setTimeout(() => {
          const hour = now.getHours();
          useBadgeStore.getState().checkAndAwardBadges({
            currentStreak: newStreak,
            isEarlyActivity: hour < 8,
            isLateActivity: hour >= 22,
          });
        }, 0);
      },

      resetStreak: () => {
        set({
          currentStreak: 0,
        });
      },

      setWeeklyGoal: (days: number) => {
        set({
          weeklyGoal: Math.max(1, Math.min(7, days)),
        });
      },
    }),
    {
      name: 'streak-storage',
    },
  ),
);
