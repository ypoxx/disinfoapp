import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Achievement } from '@/types';

interface AchievementState {
  achievements: Achievement[];
  recentlyUnlocked: Achievement | null;
  initializeAchievements: () => void;
  unlockAchievement: (achievementId: string) => void;
  updateProgress: (achievementId: string, progress: number) => void;
  clearNotification: () => void;
  checkAchievements: (stats: {
    modulesCompleted: number;
    xp: number;
    streak: number;
    totalTimeSpent: number;
    level: number;
  }) => void;
}

const achievementDefinitions: Omit<Achievement, 'unlockedAt' | 'progress'>[] = [
  {
    id: 'first-steps',
    name: { de: 'Erste Schritte', en: 'First Steps' },
    description: { de: 'Schließe dein erstes Modul ab', en: 'Complete your first module' },
    icon: '🎯',
    requiredProgress: 1,
  },
  {
    id: 'knowledge-seeker',
    name: { de: 'Wissbegierig', en: 'Knowledge Seeker' },
    description: { de: 'Schließe 3 Module ab', en: 'Complete 3 modules' },
    icon: '📚',
    requiredProgress: 3,
  },
  {
    id: 'master-learner',
    name: { de: 'Meisterschüler', en: 'Master Learner' },
    description: { de: 'Schließe alle 5 Module ab', en: 'Complete all 5 modules' },
    icon: '🎓',
    requiredProgress: 5,
  },
  {
    id: 'perfectionist',
    name: { de: 'Perfektionist', en: 'Perfectionist' },
    description: { de: 'Erreiche 100% in einem Quiz', en: 'Score 100% in a quiz' },
    icon: '💯',
    requiredProgress: 1,
  },
  {
    id: 'dedicated',
    name: { de: 'Engagiert', en: 'Dedicated' },
    description: { de: 'Halte eine 7-Tage-Streak', en: 'Maintain a 7-day streak' },
    icon: '🔥',
    requiredProgress: 7,
  },
  {
    id: 'unstoppable',
    name: { de: 'Unaufhaltsam', en: 'Unstoppable' },
    description: { de: 'Halte eine 30-Tage-Streak', en: 'Maintain a 30-day streak' },
    icon: '⚡',
    requiredProgress: 30,
  },
  {
    id: 'rising-star',
    name: { de: 'Aufsteigender Stern', en: 'Rising Star' },
    description: { de: 'Erreiche Level 5', en: 'Reach level 5' },
    icon: '⭐',
    requiredProgress: 5,
  },
  {
    id: 'expert',
    name: { de: 'Experte', en: 'Expert' },
    description: { de: 'Erreiche Level 10', en: 'Reach level 10' },
    icon: '🌟',
    requiredProgress: 10,
  },
  {
    id: 'legend',
    name: { de: 'Legende', en: 'Legend' },
    description: { de: 'Erreiche Level 20', en: 'Reach level 20' },
    icon: '👑',
    requiredProgress: 20,
  },
  {
    id: 'xp-hunter',
    name: { de: 'XP-Jäger', en: 'XP Hunter' },
    description: { de: 'Sammle 1000 XP', en: 'Collect 1000 XP' },
    icon: '💎',
    requiredProgress: 1000,
  },
  {
    id: 'xp-master',
    name: { de: 'XP-Meister', en: 'XP Master' },
    description: { de: 'Sammle 5000 XP', en: 'Collect 5000 XP' },
    icon: '💠',
    requiredProgress: 5000,
  },
  {
    id: 'speed-learner',
    name: { de: 'Schnelllerner', en: 'Speed Learner' },
    description: { de: 'Schließe ein Modul in unter 10 Minuten ab', en: 'Complete a module in under 10 minutes' },
    icon: '⚡',
    requiredProgress: 1,
  },
  {
    id: 'dedicated-learner',
    name: { de: 'Fleißiger Lerner', en: 'Dedicated Learner' },
    description: { de: 'Verbringe insgesamt 2 Stunden mit Lernen', en: 'Spend 2 hours total learning' },
    icon: '📖',
    requiredProgress: 7200, // seconds
  },
  {
    id: 'marathon-learner',
    name: { de: 'Marathon-Lerner', en: 'Marathon Learner' },
    description: { de: 'Verbringe insgesamt 10 Stunden mit Lernen', en: 'Spend 10 hours total learning' },
    icon: '🏃',
    requiredProgress: 36000, // seconds
  },
  {
    id: 'comeback-kid',
    name: { de: 'Comeback Kid', en: 'Comeback Kid' },
    description: { de: 'Wiederhole ein Quiz nach Fehlschlag', en: 'Retry a quiz after failing' },
    icon: '💪',
    requiredProgress: 1,
  },
  {
    id: 'night-owl',
    name: { de: 'Nachteule', en: 'Night Owl' },
    description: { de: 'Lerne nach 22 Uhr', en: 'Study after 10 PM' },
    icon: '🦉',
    requiredProgress: 1,
  },
  {
    id: 'early-bird',
    name: { de: 'Frühaufsteher', en: 'Early Bird' },
    description: { de: 'Lerne vor 6 Uhr morgens', en: 'Study before 6 AM' },
    icon: '🌅',
    requiredProgress: 1,
  },
];

export const useAchievementStore = create<AchievementState>()(
  persist(
    (set, get) => ({
      achievements: [],
      recentlyUnlocked: null,

      initializeAchievements: () => {
        const existing = get().achievements;
        if (existing.length === 0) {
          set({
            achievements: achievementDefinitions.map((def) => ({
              ...def,
              progress: 0,
              unlockedAt: undefined,
            })),
          });
        }
      },

      unlockAchievement: (achievementId: string) => {
        set((state) => {
          const achievement = state.achievements.find((a) => a.id === achievementId);
          if (!achievement || achievement.unlockedAt) {
            return state;
          }

          const unlockedAchievement = {
            ...achievement,
            unlockedAt: new Date(),
            progress: achievement.requiredProgress,
          };

          return {
            achievements: state.achievements.map((a) =>
              a.id === achievementId ? unlockedAchievement : a
            ),
            recentlyUnlocked: unlockedAchievement,
          };
        });
      },

      updateProgress: (achievementId: string, progress: number) => {
        set((state) => {
          const achievement = state.achievements.find((a) => a.id === achievementId);
          if (!achievement || achievement.unlockedAt) {
            return state;
          }

          const newProgress = Math.min(progress, achievement.requiredProgress);
          const shouldUnlock = newProgress >= achievement.requiredProgress;

          if (shouldUnlock) {
            get().unlockAchievement(achievementId);
            return state;
          }

          return {
            achievements: state.achievements.map((a) =>
              a.id === achievementId ? { ...a, progress: newProgress } : a
            ),
          };
        });
      },

      clearNotification: () => {
        set({ recentlyUnlocked: null });
      },

      checkAchievements: (stats) => {
        const { updateProgress } = get();

        // Module-based achievements
        updateProgress('first-steps', stats.modulesCompleted);
        updateProgress('knowledge-seeker', stats.modulesCompleted);
        updateProgress('master-learner', stats.modulesCompleted);

        // Streak achievements
        updateProgress('dedicated', stats.streak);
        updateProgress('unstoppable', stats.streak);

        // Level achievements
        updateProgress('rising-star', stats.level);
        updateProgress('expert', stats.level);
        updateProgress('legend', stats.level);

        // XP achievements
        updateProgress('xp-hunter', stats.xp);
        updateProgress('xp-master', stats.xp);

        // Time-based achievements
        updateProgress('dedicated-learner', stats.totalTimeSpent);
        updateProgress('marathon-learner', stats.totalTimeSpent);

        // Time-of-day achievements
        const hour = new Date().getHours();
        if (hour >= 22 || hour < 6) {
          updateProgress('night-owl', 1);
        }
        if (hour < 6) {
          updateProgress('early-bird', 1);
        }
      },
    }),
    {
      name: 'achievements',
    }
  )
);
