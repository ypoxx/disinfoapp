import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Challenge } from '@/types';

interface ChallengeState {
  challenges: Challenge[];
  completedChallenges: string[];
  dailyChallenge: Challenge | null;
  generateDailyChallenge: () => void;
  completeChallenge: (challengeId: string) => void;
  isChallengeCompleted: (challengeId: string) => boolean;
}

const challengeTemplates: Omit<Challenge, 'id' | 'expiresAt'>[] = [
  {
    title: { de: 'Perfektionist', en: 'Perfectionist' },
    description: { de: 'Erreiche 100% in einem Quiz', en: 'Score 100% in a quiz' },
    type: 'daily',
    difficulty: 'intermediate',
    points: 50,
    requirements: {
      minScore: 100,
    },
  },
  {
    title: { de: 'Schnelllerner', en: 'Speed Learner' },
    description: { de: 'Schließe ein Modul in unter 15 Minuten ab', en: 'Complete a module in under 15 minutes' },
    type: 'daily',
    difficulty: 'intermediate',
    points: 40,
    requirements: {
      timeLimit: 900, // 15 minutes
    },
  },
  {
    title: { de: 'Wissensdurst', en: 'Knowledge Thirst' },
    description: { de: 'Schließe 2 Module heute ab', en: 'Complete 2 modules today' },
    type: 'daily',
    difficulty: 'advanced',
    points: 60,
    requirements: {
      modulesComplete: [],
    },
  },
  {
    title: { de: 'Fehlerlos', en: 'Flawless' },
    description: { de: 'Bestehe ein Quiz ohne einen einzigen Fehler', en: 'Pass a quiz without a single mistake' },
    type: 'daily',
    difficulty: 'advanced',
    points: 75,
    requirements: {
      minScore: 100,
    },
  },
  {
    title: { de: 'Grundlagen-Meister', en: 'Basics Master' },
    description: { de: 'Wiederhole das Grundlagen-Modul mit 90%+', en: 'Retry the basics module with 90%+' },
    type: 'daily',
    difficulty: 'beginner',
    points: 30,
    requirements: {
      modulesComplete: ['basics'],
      minScore: 90,
    },
  },
  {
    title: { de: 'Taktik-Experte', en: 'Tactics Expert' },
    description: { de: 'Schließe das Taktiken-Modul mit 95%+ ab', en: 'Complete the tactics module with 95%+' },
    type: 'daily',
    difficulty: 'intermediate',
    points: 50,
    requirements: {
      modulesComplete: ['tactics'],
      minScore: 95,
    },
  },
  {
    title: { de: 'Psychologie-Profi', en: 'Psychology Pro' },
    description: { de: 'Meistere das Psychologie-Modul', en: 'Master the psychology module' },
    type: 'daily',
    difficulty: 'advanced',
    points: 60,
    requirements: {
      modulesComplete: ['psychology'],
      minScore: 90,
    },
  },
  {
    title: { de: 'Faktencheck-Champion', en: 'Fact-Check Champion' },
    description: { de: 'Perfektioniere das Faktencheck-Modul', en: 'Perfect the fact-checking module' },
    type: 'daily',
    difficulty: 'expert',
    points: 80,
    requirements: {
      modulesComplete: ['verification'],
      minScore: 100,
    },
  },
  {
    title: { de: 'Praktiker', en: 'Practitioner' },
    description: { de: 'Bestehe die Praxisanwendung', en: 'Pass the practical application' },
    type: 'daily',
    difficulty: 'expert',
    points: 100,
    requirements: {
      modulesComplete: ['practice'],
      minScore: 80,
    },
  },
  {
    title: { de: 'Streak-Enthusiast', en: 'Streak Enthusiast' },
    description: { de: 'Lerne heute und halte deine Streak aufrecht', en: 'Study today and maintain your streak' },
    type: 'daily',
    difficulty: 'beginner',
    points: 20,
    requirements: {},
  },
];

function getStartOfDay(): Date {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
}

function getEndOfDay(): Date {
  const now = new Date();
  now.setHours(23, 59, 59, 999);
  return now;
}

export const useChallengeStore = create<ChallengeState>()(
  persist(
    (set, get) => ({
      challenges: [],
      completedChallenges: [],
      dailyChallenge: null,

      generateDailyChallenge: () => {
        const { dailyChallenge } = get();

        // Check if we already have a valid daily challenge
        if (dailyChallenge && dailyChallenge.expiresAt > new Date()) {
          return;
        }

        // Generate a new random daily challenge
        const template = challengeTemplates[Math.floor(Math.random() * challengeTemplates.length)];
        const newChallenge: Challenge = {
          ...template,
          id: `daily-${getStartOfDay().getTime()}`,
          expiresAt: getEndOfDay(),
        };

        set({ dailyChallenge: newChallenge });
      },

      completeChallenge: (challengeId: string) => {
        set((state) => ({
          completedChallenges: [...state.completedChallenges, challengeId],
        }));
      },

      isChallengeCompleted: (challengeId: string) => {
        return get().completedChallenges.includes(challengeId);
      },
    }),
    {
      name: 'challenges',
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Check if daily challenge has expired
          if (state.dailyChallenge && state.dailyChallenge.expiresAt <= new Date()) {
            state.generateDailyChallenge();
          }
        }
      },
    }
  )
);
