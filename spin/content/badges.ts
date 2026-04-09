import type { Badge, BadgeRarity, BadgeCategory } from './types';

export const badges: Badge[] = [
  // Streak Badges
  {
    id: 'streak_3',
    name: { de: '3-Tage-Serie', en: '3-Day Streak' },
    description: { de: '3 Tage in Folge aktiv', en: 'Active for 3 days in a row' },
    icon: 'flame',
    rarity: 'common',
    category: 'streak',
    requirement: { type: 'streak', value: 3 },
    points: 10,
  },
  {
    id: 'streak_7',
    name: { de: 'Wochenkrieger', en: 'Week Warrior' },
    description: { de: '7 Tage in Folge aktiv', en: 'Active for 7 days in a row' },
    icon: 'flame',
    rarity: 'rare',
    category: 'streak',
    requirement: { type: 'streak', value: 7 },
    points: 25,
  },
  {
    id: 'streak_30',
    name: { de: 'Monatsmeister', en: 'Month Master' },
    description: { de: '30 Tage in Folge aktiv', en: 'Active for 30 days in a row' },
    icon: 'flame',
    rarity: 'epic',
    category: 'streak',
    requirement: { type: 'streak', value: 30 },
    points: 100,
  },
  {
    id: 'streak_100',
    name: { de: 'Jahrhundertflamme', en: 'Century Flame' },
    description: { de: '100 Tage in Folge aktiv', en: 'Active for 100 days in a row' },
    icon: 'flame',
    rarity: 'legendary',
    category: 'streak',
    requirement: { type: 'streak', value: 100 },
    points: 500,
  },

  // Mastery Badges
  {
    id: 'master_10',
    name: { de: 'Technik-Novize', en: 'Technique Novice' },
    description: { de: '10 Techniken gemeistert', en: 'Mastered 10 techniques' },
    icon: 'graduation-cap',
    rarity: 'common',
    category: 'mastery',
    requirement: { type: 'mastered_techniques', value: 10 },
    points: 20,
  },
  {
    id: 'master_20',
    name: { de: 'Technik-Experte', en: 'Technique Expert' },
    description: { de: '20 Techniken gemeistert', en: 'Mastered 20 techniques' },
    icon: 'graduation-cap',
    rarity: 'rare',
    category: 'mastery',
    requirement: { type: 'mastered_techniques', value: 20 },
    points: 50,
  },
  {
    id: 'master_all',
    name: { de: 'Grandmaster', en: 'Grandmaster' },
    description: { de: 'Alle 27 Techniken gemeistert', en: 'Mastered all 27 techniques' },
    icon: 'crown',
    rarity: 'legendary',
    category: 'mastery',
    requirement: { type: 'mastered_techniques', value: 27 },
    points: 200,
  },

  // Explorer Badges
  {
    id: 'quiz_10',
    name: { de: 'Quiz-Anfänger', en: 'Quiz Beginner' },
    description: { de: '10 Quiz-Fragen beantwortet', en: 'Answered 10 quiz questions' },
    icon: 'help-circle',
    rarity: 'common',
    category: 'explorer',
    requirement: { type: 'quiz_questions', value: 10 },
    points: 10,
  },
  {
    id: 'quiz_50',
    name: { de: 'Quiz-Enthusiast', en: 'Quiz Enthusiast' },
    description: { de: '50 Quiz-Fragen beantwortet', en: 'Answered 50 quiz questions' },
    icon: 'help-circle',
    rarity: 'rare',
    category: 'explorer',
    requirement: { type: 'quiz_questions', value: 50 },
    points: 30,
  },
  {
    id: 'quiz_100',
    name: { de: 'Quiz-Meister', en: 'Quiz Master' },
    description: { de: '100 Quiz-Fragen beantwortet', en: 'Answered 100 quiz questions' },
    icon: 'help-circle',
    rarity: 'epic',
    category: 'explorer',
    requirement: { type: 'quiz_questions', value: 100 },
    points: 75,
  },
  {
    id: 'simulator_50',
    name: { de: 'Simulator-Profi', en: 'Simulator Pro' },
    description: { de: '50 Posts im Simulator analysiert', en: 'Analyzed 50 posts in simulator' },
    icon: 'smartphone',
    rarity: 'rare',
    category: 'explorer',
    requirement: { type: 'simulator_posts', value: 50 },
    points: 30,
  },

  // Special Badges
  {
    id: 'early_bird',
    name: { de: 'Früher Vogel', en: 'Early Bird' },
    description: { de: 'Erste Aktivität vor 8 Uhr morgens', en: 'First activity before 8 AM' },
    icon: 'sunrise',
    rarity: 'rare',
    category: 'special',
    requirement: { type: 'early_activity', value: 1 },
    points: 15,
  },
  {
    id: 'night_owl',
    name: { de: 'Nachteule', en: 'Night Owl' },
    description: { de: 'Aktivität nach 22 Uhr', en: 'Activity after 10 PM' },
    icon: 'moon',
    rarity: 'rare',
    category: 'special',
    requirement: { type: 'late_activity', value: 1 },
    points: 15,
  },
  {
    id: 'perfectionist',
    name: { de: 'Perfektionist', en: 'Perfectionist' },
    description: { de: '100% in einer Session erreicht', en: 'Achieved 100% in a session' },
    icon: 'check-circle-2',
    rarity: 'epic',
    category: 'special',
    requirement: { type: 'perfect_session', value: 1 },
    points: 50,
  },
  {
    id: 'speed_demon',
    name: { de: 'Blitzschnell', en: 'Speed Demon' },
    description: { de: 'Session in unter 2 Minuten abgeschlossen', en: 'Completed session in under 2 minutes' },
    icon: 'zap',
    rarity: 'epic',
    category: 'special',
    requirement: { type: 'fast_session', value: 1 },
    points: 40,
  },
  {
    id: 'comeback_kid',
    name: { de: 'Comeback-Kid', en: 'Comeback Kid' },
    description: { de: 'Nach 30+ Tagen Pause zurückgekehrt', en: 'Returned after 30+ days break' },
    icon: 'rotate-ccw',
    rarity: 'rare',
    category: 'special',
    requirement: { type: 'comeback', value: 1 },
    points: 25,
  },
];

export function getBadgeById(id: string): Badge | undefined {
  return badges.find(b => b.id === id);
}

export function getBadgesByCategory(category: BadgeCategory): Badge[] {
  return badges.filter(b => b.category === category);
}

export function getBadgesByRarity(rarity: BadgeRarity): Badge[] {
  return badges.filter(b => b.rarity === rarity);
}
