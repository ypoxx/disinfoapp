// ============================================================
// SPIN Content Type System
// Unified type definitions for all learning content
// ============================================================

// ----------------------------------------------------------
// Localization
// ----------------------------------------------------------

/** Supported language codes */
export type LanguageCode = 'de' | 'en' | 'hu' | 'pl' | 'sk' | 'hr' | 'el' | 'mk' | 'cnr';

/**
 * Multilingual text content.
 * German and English are required, all others optional.
 */
/**
 * Multilingual text content.
 * German is required. English and all others are optional.
 * Use the t() function for fallback resolution: lang → en → de
 */
export type LocalizedText = {
  de: string;
} & Partial<Record<Exclude<LanguageCode, 'de'>, string>>;

/**
 * Resolve localized text with fallback chain: exact → en → de
 */
export function t(content: LocalizedText | undefined, lang: string, fallback = ''): string {
  if (!content) return fallback;
  const normalized = lang.toLowerCase() as LanguageCode;
  if (content[normalized]) return content[normalized]!;
  const base = normalized.split('-')[0] as LanguageCode;
  if (content[base]) return content[base]!;
  return content.en ?? content.de ?? fallback;
}

// ----------------------------------------------------------
// Core Enums
// ----------------------------------------------------------

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type Effectiveness = 'low' | 'moderate' | 'high' | 'very_high';
export type EvidenceQuality = 'low' | 'moderate' | 'high';

export type TechniqueCategory =
  | 'cognitive_bias'
  | 'social_dynamics'
  | 'emotional_manipulation'
  | 'logical_fallacy'
  | 'nlp'
  | 'digital_influence';

// ----------------------------------------------------------
// Evidence
// ----------------------------------------------------------

export interface Evidence {
  /** Primary research studies (e.g. "Tversky & Kahneman (1981)") */
  studies: string[];
  /** Summary of research findings */
  findings: string;
  /** Confidence and quality metrics */
  uncertainty?: {
    confidence: number; // 0-1
    sampleSize: string;
    evidenceQuality: EvidenceQuality;
  };
}

// ----------------------------------------------------------
// Technique
// ----------------------------------------------------------

export interface Technique {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  category: TechniqueCategory;
  difficulty: Difficulty;
  effectiveness: Effectiveness;
  /** Real-world examples (German text, to be localized over time) */
  examples: string[];
  /** Scientific evidence */
  evidence: Evidence;
  /** IDs of related techniques */
  relatedTechniques: string[];
  /** Warning signs to recognize this technique */
  warningNeurons: string[];
  /** Taxonomy group memberships */
  taxonomyGroups: string[];
  /** Optional image */
  image?: {
    src: string;
    alt: string;
    credit: string;
    sourceUrl?: string;
    context?: string;
  };
}

// ----------------------------------------------------------
// Technique Relationships
// ----------------------------------------------------------

export type RelationshipType =
  | 'complementary'
  | 'enhancement'
  | 'sequential'
  | 'reinforcement'
  | 'causal'
  | 'similar'
  | 'amplification'
  | 'subtype'
  | 'subset'
  | 'contrast'
  | 'trigger'
  | 'precision';

export interface TechniqueRelationship {
  source: string;
  target: string;
  type: RelationshipType;
  strength: number; // 0-1
  description: LocalizedText;
}

// ----------------------------------------------------------
// Taxonomy
// ----------------------------------------------------------

export interface TaxonomyGroup {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  techniques: string[];
}

// ----------------------------------------------------------
// Counter-Measures
// ----------------------------------------------------------

export type CounterMeasureType =
  | 'awareness'
  | 'cognitive'
  | 'emotional'
  | 'verification'
  | 'behavioral'
  | 'preventive'
  | 'structural'
  | 'educational'
  | 'technological';

export interface CounterMeasure {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  type: CounterMeasureType;
  implementation: LocalizedText[];
  counters: string[]; // technique IDs
  effectiveness: Array<{
    techniqueId: string;
    effectiveness: Effectiveness;
  }>;
  evidence: Evidence;
  difficulty: Difficulty;
}

// ----------------------------------------------------------
// Helpers for content queries
// ----------------------------------------------------------

export const ALL_LANGUAGES: LanguageCode[] = ['de', 'en', 'hu', 'pl', 'sk', 'hr', 'el', 'mk', 'cnr'];

// ----------------------------------------------------------
// Persuasion Phases
// ----------------------------------------------------------

export type PhaseId =
  | 'attention'
  | 'perception'
  | 'processing'
  | 'decision'
  | 'action'
  | 'justification';

export interface Phase {
  id: PhaseId;
  name: LocalizedText;
  description: LocalizedText;
  order: number;
  techniques: Array<{
    techniqueId: string;
    effectiveness: Effectiveness;
    timing: 'early' | 'mid' | 'late';
  }>;
  counterMeasures: Array<{
    counterMeasureId: string;
    effectiveness: Effectiveness;
    timing: 'preventive' | 'reactive' | 'corrective';
  }>;
}

export interface PhaseModel {
  phases: Phase[];
  transitions: Array<{
    from: PhaseId;
    to: PhaseId;
    conditions: string[];
  }>;
}

// ----------------------------------------------------------
// Exercises (unified format)
// ----------------------------------------------------------

export type ExerciseType =
  | 'quick-check'
  | 'technique-match'
  | 'response-choice'
  | 'fill-blank'
  | 'spot-the-flag'
  | 'scenario-quiz';

export interface Exercise {
  id: string;
  type: ExerciseType;
  difficulty: Difficulty;
  question: LocalizedText;
  /** Optional scenario context */
  scenario?: LocalizedText;
  /** Answer options */
  options: LocalizedText[];
  /** Indices of correct answers (supports single and multiple correct) */
  correctAnswers: number[];
  /** Explanation shown after answering */
  explanation: LocalizedText;
  /** Points awarded for correct answer */
  points: number;
  /** Optional time limit in seconds */
  timeLimit?: number;
  /**
   * The single technique this exercise primarily teaches. Drives gating,
   * interleaving, mastery credit and category colour deterministically.
   * Must be one of `relatedTechniques`. Optional at the type level so
   * technique-less legacy items type-check; the content validator requires
   * it wherever `relatedTechniques` is non-empty.
   */
  primaryTechniqueId?: string;
  /** Related technique IDs (for adaptive learning) */
  relatedTechniques: string[];
}

/**
 * The technique an exercise counts toward. Prefers the explicit
 * `primaryTechniqueId`; falls back to the first related technique so callers
 * stay deterministic even for content that predates the explicit tag.
 * Returns `undefined` for technique-less items (which are dormant under
 * technique gating).
 */
export function primaryTechniqueOf(exercise: Exercise): string | undefined {
  return exercise.primaryTechniqueId ?? exercise.relatedTechniques[0];
}

// ----------------------------------------------------------
// Simulator Posts
// ----------------------------------------------------------

export interface SimulatorPost {
  id: string;
  author: LocalizedText;
  content: LocalizedText;
  engagement: {
    likes: number;
    shares: number;
    comments: number;
  };
  isAuthentic: boolean;
  redFlags: LocalizedText[];
  techniquesUsed: string[];
  explanation: LocalizedText;
}

// ----------------------------------------------------------
// Badges
// ----------------------------------------------------------

export type BadgeRarity = 'common' | 'rare' | 'epic' | 'legendary';
export type BadgeCategory = 'streak' | 'mastery' | 'explorer' | 'special';

export interface Badge {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: string; // Lucide icon name
  rarity: BadgeRarity;
  category: BadgeCategory;
  requirement: {
    type: string;
    value: number;
  };
  points: number;
}

// ----------------------------------------------------------
// Knowledge State (per-user, per-technique)
// ----------------------------------------------------------

export interface TechniqueMastery {
  techniqueId: string;
  masteryLevel: number; // 0-100
  encounterCount: number;
  correctCount: number;
  lastPracticed: string; // ISO date
  /** SM-2 spaced repetition fields */
  easeFactor: number; // starts at 2.5
  interval: number; // days
  repetitions: number;
  /** High-water mark of repetitions — smooths mastery after a lapse */
  peakRepetitions?: number;
  nextReview: string; // ISO date
}
