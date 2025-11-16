/**
 * Utility functions for persuasion techniques data
 * Advanced filtering, searching, and analysis tools
 */

import {
  PersuasionTechnique,
  TechniqueFilters,
  TechniqueSortBy,
  SortOrder,
  GraphNode,
  GraphEdge,
  TechniqueGraph,
} from '@/types/persuasion';
import {
  persuasionTechniques,
  techniqueRelationships,
  counterMeasures,
  taxonomyGroups,
} from './index';

/**
 * Filter techniques based on multiple criteria
 */
export function filterTechniques(filters: TechniqueFilters): PersuasionTechnique[] {
  let results = [...persuasionTechniques];

  // Text search
  if (filters.query) {
    const query = filters.query.toLowerCase();
    results = results.filter(
      (t) =>
        t.name.de.toLowerCase().includes(query) ||
        t.name.en.toLowerCase().includes(query) ||
        t.description.de.toLowerCase().includes(query) ||
        t.description.en.toLowerCase().includes(query) ||
        t.examples.some((ex) => ex.toLowerCase().includes(query)) ||
        t.warningNeurons.some((wn) => wn.toLowerCase().includes(query))
    );
  }

  // Category filter
  if (filters.categories && filters.categories.length > 0) {
    results = results.filter((t) => filters.categories!.includes(t.category));
  }

  // Difficulty filter
  if (filters.difficulties && filters.difficulties.length > 0) {
    results = results.filter((t) => filters.difficulties!.includes(t.difficulty));
  }

  // Effectiveness filter
  if (filters.effectiveness && filters.effectiveness.length > 0) {
    results = results.filter((t) => filters.effectiveness!.includes(t.effectiveness));
  }

  // Taxonomy groups filter
  if (filters.taxonomyGroups && filters.taxonomyGroups.length > 0) {
    results = results.filter((t) =>
      t.taxonomyGroups.some((tg) => filters.taxonomyGroups!.includes(tg))
    );
  }

  // Evidence quality filter
  if (filters.minEvidenceQuality) {
    const qualityOrder = { low: 0, moderate: 1, high: 2 };
    const minQuality = qualityOrder[filters.minEvidenceQuality];
    results = results.filter(
      (t) =>
        t.evidence.uncertainty &&
        qualityOrder[t.evidence.uncertainty.evidenceQuality] >= minQuality
    );
  }

  return results;
}

/**
 * Sort techniques by specified criteria
 */
export function sortTechniques(
  techniques: PersuasionTechnique[],
  sortBy: TechniqueSortBy,
  order: SortOrder = 'asc'
): PersuasionTechnique[] {
  const sorted = [...techniques];
  const multiplier = order === 'asc' ? 1 : -1;

  sorted.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return multiplier * a.name.de.localeCompare(b.name.de);

      case 'difficulty': {
        const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2, expert: 3 };
        return multiplier * (difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
      }

      case 'effectiveness': {
        const effectivenessOrder = { low: 0, moderate: 1, high: 2, very_high: 3 };
        return (
          multiplier * (effectivenessOrder[a.effectiveness] - effectivenessOrder[b.effectiveness])
        );
      }

      case 'category':
        return multiplier * a.category.localeCompare(b.category);

      case 'evidence_quality': {
        const qualityOrder = { low: 0, moderate: 1, high: 2 };
        const qualityA = a.evidence.uncertainty?.evidenceQuality || 'low';
        const qualityB = b.evidence.uncertainty?.evidenceQuality || 'low';
        return multiplier * (qualityOrder[qualityA] - qualityOrder[qualityB]);
      }

      default:
        return 0;
    }
  });

  return sorted;
}

/**
 * Build graph data structure for visualization
 */
export function buildTechniqueGraph(techniqueIds?: string[]): TechniqueGraph {
  // Filter techniques if IDs provided
  const techniques = techniqueIds
    ? persuasionTechniques.filter((t) => techniqueIds.includes(t.id))
    : persuasionTechniques;

  // Build nodes
  const nodes: GraphNode[] = techniques.map((technique) => {
    // Calculate size based on number of relationships
    const relationshipCount = techniqueRelationships.filter(
      (r) => r.source === technique.id || r.target === technique.id
    ).length;

    return {
      id: technique.id,
      label: technique.name.de,
      category: technique.category,
      size: Math.max(10, relationshipCount * 2),
      metadata: technique,
    };
  });

  // Build edges (only include if both nodes exist)
  const nodeIds = new Set(nodes.map((n) => n.id));
  const edges: GraphEdge[] = techniqueRelationships
    .filter((r) => nodeIds.has(r.source) && nodeIds.has(r.target))
    .map((rel) => ({
      source: rel.source,
      target: rel.target,
      type: rel.type,
      weight: rel.strength,
      label: rel.type,
    }));

  return { nodes, edges };
}

/**
 * Get recommended techniques based on a technique
 * (Similar or complementary techniques)
 */
export function getRecommendedTechniques(techniqueId: string, limit = 5): PersuasionTechnique[] {
  const technique = persuasionTechniques.find((t) => t.id === techniqueId);
  if (!technique) return [];

  // Get related techniques from relationships
  const relatedIds = new Set<string>();
  techniqueRelationships.forEach((r) => {
    if (r.source === techniqueId) relatedIds.add(r.target);
    if (r.target === techniqueId) relatedIds.add(r.source);
  });

  // Also add techniques from same taxonomy groups
  technique.taxonomyGroups.forEach((groupId) => {
    const group = taxonomyGroups.find((g) => g.id === groupId);
    if (group) {
      group.techniques.forEach((tId) => {
        if (tId !== techniqueId) relatedIds.add(tId);
      });
    }
  });

  // Get technique objects and sort by relevance
  const related = Array.from(relatedIds)
    .map((id) => persuasionTechniques.find((t) => t.id === id))
    .filter((t): t is PersuasionTechnique => t !== undefined);

  // Sort by similarity (same category and difficulty preferred)
  related.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    if (a.category === technique.category) scoreA += 2;
    if (b.category === technique.category) scoreB += 2;

    if (a.difficulty === technique.difficulty) scoreA += 1;
    if (b.difficulty === technique.difficulty) scoreB += 1;

    return scoreB - scoreA;
  });

  return related.slice(0, limit);
}

/**
 * Get statistics about techniques
 */
export function getTechniqueStats() {
  const stats = {
    total: persuasionTechniques.length,
    byCategory: {} as Record<string, number>,
    byDifficulty: {} as Record<string, number>,
    byEffectiveness: {} as Record<string, number>,
    averageRelationships: 0,
    averageCounterMeasures: 0,
  };

  // Count by category
  persuasionTechniques.forEach((t) => {
    stats.byCategory[t.category] = (stats.byCategory[t.category] || 0) + 1;
    stats.byDifficulty[t.difficulty] = (stats.byDifficulty[t.difficulty] || 0) + 1;
    stats.byEffectiveness[t.effectiveness] = (stats.byEffectiveness[t.effectiveness] || 0) + 1;
  });

  // Average relationships
  const totalRelationships = techniqueRelationships.length * 2; // Each edge counts for 2 nodes
  stats.averageRelationships = totalRelationships / persuasionTechniques.length;

  // Average counter-measures
  let totalCounterMeasures = 0;
  persuasionTechniques.forEach((t) => {
    const cms = counterMeasures.filter((cm) => cm.counters.includes(t.id));
    totalCounterMeasures += cms.length;
  });
  stats.averageCounterMeasures = totalCounterMeasures / persuasionTechniques.length;

  return stats;
}

/**
 * Find shortest path between two techniques in the relationship graph
 * Using BFS algorithm
 */
export function findPathBetweenTechniques(
  startId: string,
  endId: string
): string[] | null {
  if (startId === endId) return [startId];

  const visited = new Set<string>();
  const queue: { id: string; path: string[] }[] = [{ id: startId, path: [startId] }];

  while (queue.length > 0) {
    const { id, path } = queue.shift()!;

    if (visited.has(id)) continue;
    visited.add(id);

    // Get all connected techniques
    const connected = techniqueRelationships
      .filter((r) => r.source === id || r.target === id)
      .map((r) => (r.source === id ? r.target : r.source));

    for (const nextId of connected) {
      if (nextId === endId) {
        return [...path, nextId];
      }

      if (!visited.has(nextId)) {
        queue.push({ id: nextId, path: [...path, nextId] });
      }
    }
  }

  return null; // No path found
}

/**
 * Get technique clusters (groups of highly connected techniques)
 */
export function getTechniqueClusters(): string[][] {
  const visited = new Set<string>();
  const clusters: string[][] = [];

  persuasionTechniques.forEach((technique) => {
    if (visited.has(technique.id)) return;

    // BFS to find all connected techniques
    const cluster: string[] = [];
    const queue = [technique.id];

    while (queue.length > 0) {
      const id = queue.shift()!;
      if (visited.has(id)) continue;

      visited.add(id);
      cluster.push(id);

      // Add connected techniques
      techniqueRelationships.forEach((r) => {
        if (r.source === id && !visited.has(r.target)) {
          queue.push(r.target);
        }
        if (r.target === id && !visited.has(r.source)) {
          queue.push(r.source);
        }
      });
    }

    if (cluster.length > 0) {
      clusters.push(cluster);
    }
  });

  // Sort clusters by size
  return clusters.sort((a, b) => b.length - a.length);
}

/**
 * Calculate technique importance score
 * Based on centrality in relationship network
 */
export function calculateTechniqueImportance(): Record<string, number> {
  const importance: Record<string, number> = {};

  persuasionTechniques.forEach((t) => {
    // Count direct relationships
    const directRelationships = techniqueRelationships.filter(
      (r) => r.source === t.id || r.target === t.id
    ).length;

    // Count counter-measures (important if many counter-measures exist)
    const cmCount = counterMeasures.filter((cm) => cm.counters.includes(t.id)).length;

    // Effectiveness multiplier
    const effectivenessMultiplier = {
      low: 0.5,
      moderate: 1,
      high: 1.5,
      very_high: 2,
    }[t.effectiveness];

    // Calculate importance score
    importance[t.id] = directRelationships * effectivenessMultiplier + cmCount * 0.5;
  });

  return importance;
}

/**
 * Get techniques sorted by importance
 */
export function getTechniquesByImportance(limit?: number): PersuasionTechnique[] {
  const importance = calculateTechniqueImportance();

  const sorted = [...persuasionTechniques].sort(
    (a, b) => importance[b.id] - importance[a.id]
  );

  return limit ? sorted.slice(0, limit) : sorted;
}

/**
 * Export all utilities
 */
export const persuasionUtils = {
  filterTechniques,
  sortTechniques,
  buildTechniqueGraph,
  getRecommendedTechniques,
  getTechniqueStats,
  findPathBetweenTechniques,
  getTechniqueClusters,
  calculateTechniqueImportance,
  getTechniquesByImportance,
};
