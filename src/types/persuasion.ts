// ==================================================================
// PERSUASION TECHNIQUES - TYPE DEFINITIONS
// ==================================================================
// Comprehensive type system for persuasion techniques, relationships,
// counter-measures, and related models

// ------------------------------------------------------------------
// Core Technique Types
// ------------------------------------------------------------------

export type TechniqueCategory =
  | 'cognitive_bias'
  | 'social_dynamics'
  | 'emotional_manipulation'
  | 'logical_fallacy'
  | 'nlp_technique'
  | 'digital_technique';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type EffectivenessLevel = 'low' | 'moderate' | 'high' | 'very_high';

/**
 * Represents uncertainty in scientific evidence
 */
export interface UncertaintyMeasure {
  /** Level of confidence in the evidence (0-1) */
  confidence: number;
  /** Sample size of studies */
  sampleSize: string;
  /** Quality of evidence (low, moderate, high) */
  evidenceQuality: 'low' | 'moderate' | 'high';
}

/**
 * Scientific evidence supporting a technique
 */
export interface Evidence {
  /** Primary research studies */
  studies: string[];
  /** Research findings */
  findings: string;
  /** Uncertainty measure */
  uncertainty?: UncertaintyMeasure;
}

/**
 * Multilingual content support
 */
export interface MultilingualContent {
  de: string;
  en: string;
}

/**
 * Core persuasion technique definition
 */
export interface PersuasionTechnique {
  /** Unique identifier */
  id: string;
  /** Technique name in multiple languages */
  name: MultilingualContent;
  /** Detailed description */
  description: MultilingualContent;
  /** Category classification */
  category: TechniqueCategory;
  /** Learning difficulty level */
  difficulty: DifficultyLevel;
  /** Overall effectiveness rating */
  effectiveness: EffectivenessLevel;
  /** Real-world examples */
  examples: string[];
  /** Scientific evidence */
  evidence: Evidence;
  /** Related techniques (IDs) */
  relatedTechniques: string[];
  /** Warning signs to identify this technique */
  warningNeurons: string[];
  /** Taxonomy group membership */
  taxonomyGroups: string[];
}

// ------------------------------------------------------------------
// Relationship Types
// ------------------------------------------------------------------

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
  | 'precision'
  | 'trigger';

/**
 * Relationship between two techniques
 */
export interface TechniqueRelationship {
  /** Source technique ID */
  source: string;
  /** Target technique ID */
  target: string;
  /** Type of relationship */
  type: RelationshipType;
  /** Strength of relationship (0-1) */
  strength: number;
  /** Description of the relationship */
  description: MultilingualContent;
}

// ------------------------------------------------------------------
// Taxonomy Types
// ------------------------------------------------------------------

/**
 * Taxonomy group for categorizing techniques
 */
export interface TaxonomyGroup {
  /** Unique identifier */
  id: string;
  /** Group name */
  name: MultilingualContent;
  /** Group description */
  description: MultilingualContent;
  /** Techniques in this group */
  techniques: string[];
  /** Parent group (if hierarchical) */
  parent?: string;
}

// ------------------------------------------------------------------
// Counter-Measure Types
// ------------------------------------------------------------------

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

/**
 * Effectiveness of a counter-measure against a specific technique
 */
export interface CounterMeasureEffectiveness {
  /** Technique ID */
  techniqueId: string;
  /** Effectiveness level */
  effectiveness: EffectivenessLevel;
  /** Evidence supporting this effectiveness */
  evidence?: string[];
}

/**
 * Counter-measure against persuasion techniques
 */
export interface CounterMeasure {
  /** Unique identifier */
  id: string;
  /** Counter-measure name */
  name: MultilingualContent;
  /** Detailed description */
  description: MultilingualContent;
  /** Type of counter-measure */
  type: CounterMeasureType;
  /** Implementation steps */
  implementation: string[];
  /** Techniques this counters */
  counters: string[];
  /** Effectiveness by technique */
  effectiveness: CounterMeasureEffectiveness[];
  /** Scientific evidence */
  evidence: Evidence;
  /** Difficulty to implement */
  difficulty: DifficultyLevel;
}

// ------------------------------------------------------------------
// Cultural Factors
// ------------------------------------------------------------------

/**
 * Cultural dimension based on Hofstede's model
 */
export interface CulturalDimension {
  /** Dimension name */
  dimension: string;
  /** Score (0-100) */
  score: number;
  /** Description */
  description: string;
}

/**
 * Cultural variation in technique effectiveness
 */
export interface CulturalVariation {
  /** Culture/region identifier */
  culture: string;
  /** Cultural dimensions */
  dimensions: CulturalDimension[];
  /** Technique effectiveness variations */
  techniqueModifiers: {
    techniqueId: string;
    effectivenessModifier: number; // -1 to +1
    notes: string;
  }[];
}

/**
 * Cultural factor model
 */
export interface CulturalFactorModel {
  /** Dimension clusters */
  clusters: {
    id: string;
    name: MultilingualContent;
    dimensions: string[];
    description: MultilingualContent;
  }[];
  /** Cultural variations */
  variations: CulturalVariation[];
}

// ------------------------------------------------------------------
// Ethical Framework
// ------------------------------------------------------------------

export type EthicalPrinciple =
  | 'autonomy'
  | 'transparency'
  | 'fairness'
  | 'harm_prevention'
  | 'accountability';

/**
 * Ethical assessment of a technique
 */
export interface EthicalAssessment {
  /** Technique ID */
  techniqueId: string;
  /** Principles violated */
  principlesViolated: EthicalPrinciple[];
  /** Harm potential (0-10) */
  harmPotential: number;
  /** Acceptable contexts */
  acceptableContexts: string[];
  /** Unacceptable contexts */
  unacceptableContexts: string[];
  /** Ethical guidelines */
  guidelines: string[];
}

/**
 * Ethical framework model
 */
export interface EthicalFramework {
  /** Core principles */
  principles: {
    id: EthicalPrinciple;
    name: MultilingualContent;
    description: MultilingualContent;
  }[];
  /** Assessments by technique */
  assessments: EthicalAssessment[];
}

// ------------------------------------------------------------------
// Neuro-Persuasion Model
// ------------------------------------------------------------------

/**
 * Neural foundation of persuasion
 */
export interface NeuralFoundation {
  /** Brain region */
  region: string;
  /** Function */
  function: string;
  /** Related techniques */
  relatedTechniques: string[];
  /** Evidence */
  evidence: string[];
}

/**
 * Developmental factor affecting persuasion
 */
export interface DevelopmentalFactor {
  /** Age group */
  ageGroup: string;
  /** Susceptibility level */
  susceptibility: 'low' | 'moderate' | 'high';
  /** Key vulnerabilities */
  vulnerabilities: string[];
  /** Protective factors */
  protectiveFactors: string[];
}

/**
 * Modulator affecting persuasion effectiveness
 */
export interface PersuasionModulator {
  /** Modulator name */
  name: string;
  /** Effect on persuasion */
  effect: string;
  /** Techniques affected */
  affectedTechniques: string[];
  /** Magnitude of effect (-1 to +1) */
  magnitude: number;
}

/**
 * Neuro-persuasion model
 */
export interface NeuroPersuasionModel {
  /** Neural foundations */
  neuralFoundations: NeuralFoundation[];
  /** Developmental factors */
  developmentalFactors: DevelopmentalFactor[];
  /** Modulators */
  modulators: PersuasionModulator[];
}

// ------------------------------------------------------------------
// Persuasion Phase Model
// ------------------------------------------------------------------

export type PersuasionPhase =
  | 'attention_phase'
  | 'perception_phase'
  | 'processing_phase'
  | 'decision_phase'
  | 'action_phase'
  | 'justification_phase';

/**
 * Phase in persuasion process
 */
export interface Phase {
  /** Phase ID */
  id: PersuasionPhase;
  /** Phase name */
  name: MultilingualContent;
  /** Phase description */
  description: MultilingualContent;
  /** Order in sequence */
  order: number;
  /** Techniques effective in this phase */
  techniques: {
    techniqueId: string;
    effectiveness: EffectivenessLevel;
    timing: 'early' | 'mid' | 'late';
  }[];
  /** Counter-measures effective in this phase */
  counterMeasures: {
    counterMeasureId: string;
    effectiveness: EffectivenessLevel;
    timing: 'preventive' | 'reactive' | 'corrective';
  }[];
}

/**
 * Complete persuasion phase model
 */
export interface PersuasionPhaseModel {
  /** All phases */
  phases: Phase[];
  /** Transition rules */
  transitions: {
    from: PersuasionPhase;
    to: PersuasionPhase;
    conditions: string[];
  }[];
}

// ------------------------------------------------------------------
// Knowledge Tracking Types
// ------------------------------------------------------------------

/**
 * User's mastery level of a technique
 */
export interface TechniqueMastery {
  /** Technique ID */
  techniqueId: string;
  /** Mastery level (0-100) */
  masteryLevel: number;
  /** Times encountered */
  encounterCount: number;
  /** Times correctly identified */
  correctIdentifications: number;
  /** Last practiced */
  lastPracticed: Date;
  /** Weaknesses */
  weaknesses: string[];
}

/**
 * User's knowledge state
 */
export interface KnowledgeState {
  /** Technique masteries */
  techniques: Record<string, TechniqueMastery>;
  /** Counter-measure familiarity */
  counterMeasures: Record<string, number>; // 0-100
  /** Total study time (seconds) */
  totalStudyTime: number;
  /** Strengths (technique IDs) */
  strengths: string[];
  /** Weaknesses (technique IDs) */
  weaknesses: string[];
  /** Last updated */
  lastUpdated: Date;
}

// ------------------------------------------------------------------
// Interactive Exercise Types
// ------------------------------------------------------------------

/**
 * Quiz question about techniques
 */
export interface TechniqueQuestion {
  /** Question ID */
  id: string;
  /** Question type */
  type: 'identification' | 'counter_measure' | 'ethical' | 'phase' | 'matching';
  /** Question text */
  question: MultilingualContent;
  /** Scenario/example */
  scenario?: MultilingualContent;
  /** Correct answer(s) */
  correctAnswers: string[];
  /** All options */
  options: {
    id: string;
    text: MultilingualContent;
    isCorrect: boolean;
  }[];
  /** Explanation */
  explanation: MultilingualContent;
  /** Difficulty */
  difficulty: DifficultyLevel;
  /** Related techniques */
  relatedTechniques: string[];
}

// ------------------------------------------------------------------
// Graph/Visualization Types
// ------------------------------------------------------------------

/**
 * Node for graph visualization
 */
export interface GraphNode {
  /** Node ID (technique ID) */
  id: string;
  /** Display label */
  label: string;
  /** Category for coloring */
  category: TechniqueCategory;
  /** Size based on importance */
  size: number;
  /** Additional metadata */
  metadata: PersuasionTechnique;
}

/**
 * Edge for graph visualization
 */
export interface GraphEdge {
  /** Source node ID */
  source: string;
  /** Target node ID */
  target: string;
  /** Relationship type */
  type: RelationshipType;
  /** Edge strength/weight */
  weight: number;
  /** Label */
  label?: string;
}

/**
 * Complete graph data
 */
export interface TechniqueGraph {
  /** All nodes */
  nodes: GraphNode[];
  /** All edges */
  edges: GraphEdge[];
}

// ------------------------------------------------------------------
// Filter and Search Types
// ------------------------------------------------------------------

/**
 * Filters for technique search
 */
export interface TechniqueFilters {
  /** Search query */
  query?: string;
  /** Categories */
  categories?: TechniqueCategory[];
  /** Difficulty levels */
  difficulties?: DifficultyLevel[];
  /** Effectiveness levels */
  effectiveness?: EffectivenessLevel[];
  /** Taxonomy groups */
  taxonomyGroups?: string[];
  /** Minimum evidence quality */
  minEvidenceQuality?: 'low' | 'moderate' | 'high';
}

/**
 * Sort options for techniques
 */
export type TechniqueSortBy =
  | 'name'
  | 'difficulty'
  | 'effectiveness'
  | 'category'
  | 'evidence_quality';

/**
 * Sort order
 */
export type SortOrder = 'asc' | 'desc';
