/**
 * Persuasion Techniques Data - Main Export
 *
 * This module provides access to comprehensive persuasion techniques data including:
 * - 28 persuasion techniques with detailed metadata
 * - 27 relationships between techniques
 * - 12 counter-measures with effectiveness data
 * - 6-phase persuasion model
 * - 13 taxonomy groups for categorization
 */

// Techniques
export {
  persuasionTechniques,
  getTechniqueById,
  getTechniquesByCategory,
  getTechniquesByDifficulty,
  searchTechniques,
} from './techniques';

// Relationships
export {
  techniqueRelationships,
  getRelationshipsForTechnique,
  getRelationshipsByType,
  getOutgoingRelationships,
  getIncomingRelationships,
  areTechniquesRelated,
  getRelationshipBetween,
} from './relationships';

// Counter-measures
export {
  counterMeasures,
  getCounterMeasureById,
  getCounterMeasuresByType,
  getCounterMeasuresForTechnique,
  getEffectivenessAgainst,
} from './counterMeasures';

// Phases
export {
  persuasionPhases,
  persuasionPhaseModel,
  getPhaseById,
  getPhasesInOrder,
  getTechniquesForPhase,
  getCounterMeasuresForPhase,
  getPhasesForTechnique,
  getNextPhases,
  canTransition,
} from './phases';

// Taxonomy
export {
  taxonomyGroups,
  getTaxonomyGroupById,
  getTechniquesInGroup,
  getGroupsForTechnique,
} from './taxonomy';

// Utilities
export {
  filterTechniques,
  sortTechniques,
  buildTechniqueGraph,
  getRecommendedTechniques,
  findPathBetweenTechniques,
  calculateTechniqueImportance,
  getTechniquesByImportance,
} from './utils';

// Re-export types for convenience
export type {
  PersuasionTechnique,
  TechniqueRelationship,
  CounterMeasure,
  Phase,
  PersuasionPhaseModel,
  TaxonomyGroup,
  TechniqueCategory,
  DifficultyLevel,
  EffectivenessLevel,
  RelationshipType,
  CounterMeasureType,
  PersuasionPhase,
} from '@/types/persuasion';
