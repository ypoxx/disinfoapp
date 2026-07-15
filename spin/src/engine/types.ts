import type { Exercise, Technique, TechniqueMastery } from '@content/types';

/** A single item in a learning session */
export type SessionItem =
  | { type: 'learn'; technique: Technique }
  | { type: 'review'; technique: Technique; mastery: TechniqueMastery }
  | { type: 'exercise'; exercise: Exercise };

/** A complete learning session */
export interface Session {
  id: string;
  items: SessionItem[];
  createdAt: string;
  /** Estimated duration in seconds */
  estimatedDuration: number;
}

/** Result of a single answered item */
export interface ItemResult {
  itemIndex: number;
  correct: boolean;
  timeSpent: number; // seconds
  techniqueId?: string;
  /** Exercise answered — persisted for the per-exercise no-repeat cooldown. */
  exerciseId?: string;
}

/** Summary of a completed session */
export interface SessionSummary {
  sessionId: string;
  totalItems: number;
  correctCount: number;
  accuracy: number; // 0-100
  xpEarned: number;
  timeSpent: number; // seconds
  techniquesReviewed: string[];
  newTechniquesLearned: string[];
}
