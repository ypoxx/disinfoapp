import type { Exercise } from '@content/types';

/**
 * Interleaving: Ensure no two consecutive items share a technique.
 *
 * Research shows that interleaving different topics improves long-term
 * retention compared to blocked practice (Rohrer & Taylor, 2007).
 */

/** Reorder exercises so no two consecutive ones share a relatedTechnique */
export function interleaveExercises(exercises: Exercise[]): Exercise[] {
  if (exercises.length <= 2) return exercises;

  const result: Exercise[] = [];
  const remaining = [...exercises];

  // Greedy interleaving: pick the next exercise that doesn't share techniques with the last one
  while (remaining.length > 0) {
    const last = result[result.length - 1];
    const lastTechniques = new Set(last?.relatedTechniques ?? []);

    // Find best candidate (no shared techniques with last item)
    let bestIdx = 0;
    let bestScore = -1;

    for (let i = 0; i < remaining.length; i++) {
      const candidate = remaining[i];
      const overlap = candidate.relatedTechniques.filter(t => lastTechniques.has(t)).length;
      const score = overlap === 0 ? 2 : (overlap < lastTechniques.size ? 1 : 0);

      if (score > bestScore) {
        bestScore = score;
        bestIdx = i;
      }
    }

    result.push(remaining.splice(bestIdx, 1)[0]);
  }

  return result;
}

/** Mix different exercise types for variety */
export function mixExerciseTypes(exercises: Exercise[]): Exercise[] {
  // Group by type
  const groups = new Map<string, Exercise[]>();
  for (const ex of exercises) {
    const group = groups.get(ex.type) || [];
    group.push(ex);
    groups.set(ex.type, group);
  }

  // Round-robin pick from each group
  const result: Exercise[] = [];
  const iterators = [...groups.values()].map(g => ({ items: g, idx: 0 }));

  while (result.length < exercises.length) {
    for (const iter of iterators) {
      if (iter.idx < iter.items.length) {
        result.push(iter.items[iter.idx]);
        iter.idx++;
      }
    }
  }

  return interleaveExercises(result);
}
