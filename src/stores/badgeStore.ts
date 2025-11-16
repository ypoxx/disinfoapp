import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { badges, calculateBadgePoints } from '@/data/badges';

export interface BadgeState {
  earnedBadges: Set<string>; // Badge IDs
  newBadges: string[]; // Recently earned badges to show
  totalPoints: number;
  checkAndAwardBadges: (stats: BadgeCheckStats) => string[]; // Returns newly earned badges
  markBadgeAsSeen: (badgeId: string) => void;
  clearNewBadges: () => void;
}

export interface BadgeCheckStats {
  currentStreak?: number;
  masteredTechniques?: number;
  quizQuestions?: number;
  simulatorPosts?: number;
  isEarlyActivity?: boolean;
  isLateActivity?: boolean;
  isPerfectQuiz?: boolean;
  isFastQuiz?: boolean;
  isComeback?: boolean;
}

export const useBadgeStore = create<BadgeState>()(
  persist(
    (set, get) => ({
      earnedBadges: new Set<string>(),
      newBadges: [],
      totalPoints: 0,

      checkAndAwardBadges: (stats: BadgeCheckStats) => {
        const { earnedBadges } = get();
        const newlyEarned: string[] = [];

        badges.forEach((badge) => {
          // Skip if already earned
          if (earnedBadges.has(badge.id)) return;

          let shouldEarn = false;

          switch (badge.requirement.type) {
            case 'streak':
              if (stats.currentStreak && stats.currentStreak >= badge.requirement.value) {
                shouldEarn = true;
              }
              break;

            case 'mastered_techniques':
              if (
                stats.masteredTechniques &&
                stats.masteredTechniques >= badge.requirement.value
              ) {
                shouldEarn = true;
              }
              break;

            case 'quiz_questions':
              if (stats.quizQuestions && stats.quizQuestions >= badge.requirement.value) {
                shouldEarn = true;
              }
              break;

            case 'simulator_posts':
              if (stats.simulatorPosts && stats.simulatorPosts >= badge.requirement.value) {
                shouldEarn = true;
              }
              break;

            case 'early_activity':
              if (stats.isEarlyActivity) {
                shouldEarn = true;
              }
              break;

            case 'late_activity':
              if (stats.isLateActivity) {
                shouldEarn = true;
              }
              break;

            case 'perfect_quiz':
              if (stats.isPerfectQuiz) {
                shouldEarn = true;
              }
              break;

            case 'fast_quiz':
              if (stats.isFastQuiz) {
                shouldEarn = true;
              }
              break;

            case 'comeback':
              if (stats.isComeback) {
                shouldEarn = true;
              }
              break;
          }

          if (shouldEarn) {
            newlyEarned.push(badge.id);
          }
        });

        if (newlyEarned.length > 0) {
          const updatedEarnedBadges = new Set(earnedBadges);
          newlyEarned.forEach((id) => updatedEarnedBadges.add(id));

          set({
            earnedBadges: updatedEarnedBadges,
            newBadges: [...get().newBadges, ...newlyEarned],
            totalPoints: calculateBadgePoints(Array.from(updatedEarnedBadges)),
          });
        }

        return newlyEarned;
      },

      markBadgeAsSeen: (badgeId: string) => {
        set({
          newBadges: get().newBadges.filter((id) => id !== badgeId),
        });
      },

      clearNewBadges: () => {
        set({ newBadges: [] });
      },
    }),
    {
      name: 'badge-storage',
      partialize: (state) => ({
        earnedBadges: Array.from(state.earnedBadges), // Convert Set to Array for persistence
        newBadges: state.newBadges,
        totalPoints: state.totalPoints,
      }),
      onRehydrateStorage: () => (state) => {
        // Convert Array back to Set after rehydration
        if (state && Array.isArray(state.earnedBadges)) {
          state.earnedBadges = new Set(state.earnedBadges);
        }
      },
    },
  ),
);
