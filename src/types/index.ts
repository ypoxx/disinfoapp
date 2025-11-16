// Core Types for the Disinformation Detection App

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type ModuleType = 'lesson' | 'quiz' | 'exercise' | 'simulation';
export type MediaType = 'text' | 'image' | 'video' | 'social';

export interface LocalizedString {
  de: string;
  en?: string;
  easy_de?: string; // Leichte Sprache
}

export interface MediaAsset {
  id: string;
  type: MediaType;
  url: string;
  alt?: LocalizedString;
  caption?: LocalizedString;
}

export interface Interaction {
  id: string;
  type: 'quiz' | 'drag-drop' | 'matching' | 'text-input' | 'multiple-choice';
  question: LocalizedString;
  options?: string[];
  correctAnswer: string | string[];
  feedback: {
    correct: LocalizedString;
    incorrect: LocalizedString;
  };
}

export interface LearningModule {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  type: ModuleType;
  difficulty: DifficultyLevel;
  duration: number; // in minutes
  points: number;
  prerequisites: string[];
  tags: string[];
  content: {
    title: LocalizedString;
    media: MediaAsset[];
    interactions: Interaction[];
  };
}

export interface Achievement {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  icon: string;
  unlockedAt?: Date;
  progress: number; // 0-100
  requiredProgress: number;
}

export interface Streak {
  current: number;
  longest: number;
  lastActivity: Date;
}

export interface ModuleProgress {
  completed: boolean;
  score: number;
  attempts: number;
  timeSpent: number; // in seconds
  lastAccessed: Date;
}

export interface UserProgress {
  userId: string;
  modules: Record<string, ModuleProgress>;
  achievements: Achievement[];
  level: number;
  xp: number;
  streak: Streak;
  totalTimeSpent: number;
  modulesCompleted: number;
}

export interface QuizQuestion {
  id: string;
  question: LocalizedString;
  type: 'multiple-choice' | 'true-false' | 'text-input';
  options?: LocalizedString[];
  correctAnswer: string | number;
  explanation: LocalizedString;
  points: number;
}

export interface Quiz {
  id: string;
  moduleId: string;
  questions: QuizQuestion[];
  timeLimit?: number; // in seconds
  passingScore: number; // percentage
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  level: number;
  xp: number;
  rank: number;
  avatar?: string;
}

export interface Challenge {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  type: 'daily' | 'weekly' | 'special';
  difficulty: DifficultyLevel;
  points: number;
  expiresAt: Date;
  requirements: {
    modulesComplete?: string[];
    minScore?: number;
    timeLimit?: number;
  };
}
