import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress, ModuleProgress, Achievement } from '@/types';
import { useBadgeStore } from './badgeStore';
import { useKnowledgeStore } from './knowledgeStore';

interface ProgressState extends UserProgress {
  // Actions
  updateModuleProgress: (moduleId: string, progress: Partial<ModuleProgress>) => void;
  completeModule: (moduleId: string, score: number, timeSpent: number) => void;
  addXP: (amount: number) => void;
  updateStreak: () => void;
  unlockAchievement: (achievementId: string) => void;
  resetProgress: () => void;
}

const initialState: UserProgress = {
  userId: 'guest',
  modules: {},
  achievements: [],
  level: 1,
  xp: 0,
  streak: {
    current: 0,
    longest: 0,
    lastActivity: new Date(),
  },
  totalTimeSpent: 0,
  modulesCompleted: 0,
};

const calculateLevel = (xp: number): number => {
  // Simple level calculation: Level = sqrt(XP / 100)
  return Math.floor(Math.sqrt(xp / 100)) + 1;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      ...initialState,

      updateModuleProgress: (moduleId: string, progress: Partial<ModuleProgress>) => {
        set((state) => ({
          modules: {
            ...state.modules,
            [moduleId]: {
              ...state.modules[moduleId],
              ...progress,
              lastAccessed: new Date(),
            },
          },
        }));
      },

      completeModule: (moduleId: string, score: number, timeSpent: number) => {
        set((state) => {
          const wasCompleted = state.modules[moduleId]?.completed || false;
          const newModulesCompleted = wasCompleted
            ? state.modulesCompleted
            : state.modulesCompleted + 1;

          return {
            modules: {
              ...state.modules,
              [moduleId]: {
                completed: true,
                score,
                attempts: (state.modules[moduleId]?.attempts || 0) + 1,
                timeSpent: (state.modules[moduleId]?.timeSpent || 0) + timeSpent,
                lastAccessed: new Date(),
              },
            },
            totalTimeSpent: state.totalTimeSpent + timeSpent,
            modulesCompleted: newModulesCompleted,
          };
        });
      },

      addXP: (amount: number) => {
        set((state) => {
          const newXP = state.xp + amount;
          const newLevel = calculateLevel(newXP);

          // Check for badges after state update (non-blocking)
          setTimeout(() => {
            const knowledgeState = useKnowledgeStore.getState();
            const masteredCount = Object.values(knowledgeState.techniques).filter(
              (m) => m.masteryLevel >= 70
            ).length;

            useBadgeStore.getState().checkAndAwardBadges({
              masteredTechniques: masteredCount,
            });
          }, 0);

          return {
            xp: newXP,
            level: newLevel,
          };
        });
      },

      updateStreak: () => {
        set((state) => {
          const now = new Date();
          const lastActivity = new Date(state.streak.lastActivity);
          const daysDiff = Math.floor(
            (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24)
          );

          let newCurrent = state.streak.current;
          if (daysDiff === 1) {
            // Continue streak
            newCurrent = state.streak.current + 1;
          } else if (daysDiff > 1) {
            // Reset streak
            newCurrent = 1;
          }
          // If daysDiff === 0, it's the same day, don't change streak

          return {
            streak: {
              current: newCurrent,
              longest: Math.max(newCurrent, state.streak.longest),
              lastActivity: now,
            },
          };
        });
      },

      unlockAchievement: (achievementId: string) => {
        set((state) => {
          const existingAchievement = state.achievements.find((a) => a.id === achievementId);
          if (existingAchievement) {
            return state;
          }

          // This would normally fetch achievement details from a database
          const newAchievement: Achievement = {
            id: achievementId,
            name: { de: 'Achievement' },
            description: { de: 'Description' },
            icon: '🏆',
            unlockedAt: new Date(),
            progress: 100,
            requiredProgress: 100,
          };

          return {
            achievements: [...state.achievements, newAchievement],
          };
        });
      },

      resetProgress: () => {
        set(initialState);
      },
    }),
    {
      name: 'user-progress',
    }
  )
);
