import type { Exercise } from '@content/types';
import { primaryTechniqueOf } from '@content/types';

/**
 * Interleaving: Ensure no two consecutive items share their primary technique.
 *
 * Research shows that interleaving different topics improves long-term
 * retention compared to blocked practice (Rohrer & Taylor, 2007). Keying on
 * the primary technique (not the full relatedTechniques set) matches how
 * mastery is credited, so the mix stays deterministic in a multi-technique
 * pool.
 */

/** Reorder exercises so no two consecutive ones share their primary technique */
export function interleaveExercises(exercises: Exercise[]): Exercise[] {
  if (exercises.length <= 2) return exercises;

  const result: Exercise[] = [];
  const remaining = [...exercises];

  // Greedy interleaving: pick the next exercise whose primary technique differs
  // from the previous item's; fall back to the first remaining when every
  // candidate shares it.
  while (remaining.length > 0) {
    const lastPrimary =
      result.length > 0 ? primaryTechniqueOf(result[result.length - 1]) : undefined;

    let idx = remaining.findIndex((ex) => primaryTechniqueOf(ex) !== lastPrimary);
    if (idx === -1) idx = 0;

    result.push(remaining.splice(idx, 1)[0]);
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
