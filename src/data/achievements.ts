import { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'first-steps',
    name: { de: 'Erste Schritte', en: 'First Steps' },
    description: { de: 'Absolviere dein erstes Modul', en: 'Complete your first module' },
    icon: '🎯',
    progress: 0,
    requiredProgress: 1,
  },
  {
    id: 'fact-checker',
    name: { de: 'Faktenchecker', en: 'Fact Checker' },
    description: {
      de: 'Beantworte 10 Quiz-Fragen richtig',
      en: 'Answer 10 quiz questions correctly',
    },
    icon: '🔍',
    progress: 0,
    requiredProgress: 10,
  },
  {
    id: 'misinformation-guardian',
    name: { de: 'Wächter der Wahrheit', en: 'Guardian of Truth' },
    description: {
      de: 'Absolviere alle Grundlagenmodule',
      en: 'Complete all basic modules',
    },
    icon: '🛡️',
    progress: 0,
    requiredProgress: 2,
  },
  {
    id: 'master-detective',
    name: { de: 'Meisterdetektiv', en: 'Master Detective' },
    description: {
      de: 'Schließe alle Module mit mindestens 90% ab',
      en: 'Complete all modules with at least 90%',
    },
    icon: '🕵️',
    progress: 0,
    requiredProgress: 5,
  },
  {
    id: 'seven-day-streak',
    name: { de: '7-Tage-Strähne', en: '7-Day Streak' },
    description: {
      de: 'Lerne 7 Tage hintereinander',
      en: 'Learn for 7 consecutive days',
    },
    icon: '🔥',
    progress: 0,
    requiredProgress: 7,
  },
  {
    id: 'speed-learner',
    name: { de: 'Schnelllerner', en: 'Speed Learner' },
    description: {
      de: 'Absolviere ein Quiz in unter 3 Minuten',
      en: 'Complete a quiz in under 3 minutes',
    },
    icon: '⚡',
    progress: 0,
    requiredProgress: 1,
  },
  {
    id: 'perfectionist',
    name: { de: 'Perfektionist', en: 'Perfectionist' },
    description: {
      de: 'Erreiche 100% in einem Quiz',
      en: 'Score 100% on a quiz',
    },
    icon: '💯',
    progress: 0,
    requiredProgress: 1,
  },
  {
    id: 'knowledge-seeker',
    name: { de: 'Wissensjäger', en: 'Knowledge Seeker' },
    description: {
      de: 'Sammle 1000 XP',
      en: 'Collect 1000 XP',
    },
    icon: '📚',
    progress: 0,
    requiredProgress: 1000,
  },
];
