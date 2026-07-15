import type { TechniqueMastery } from '@content/types';
import { primaryTechniqueOf } from '@content/types';
import { techniques } from '@content/techniques';
import { exercises } from '@content/exercises';
import { isDueForReview, sortByUrgency } from './spaced-repetition';
import { interleaveExercises } from './interleaving';
import { selectExercises } from './exercise-selection';
import type { Session, SessionItem } from './types';

interface SessionConfig {
  /** Max number of items in session (default: 7) */
  maxItems?: number;
  /** Focus on specific technique category */
  category?: string;
  /** User's current knowledge state */
  knowledgeState: Record<string, TechniqueMastery>;
  /** exerciseId → ISO timestamp last answered, for the no-repeat cooldown */
  answeredExercises?: Record<string, string>;
  /** Injectable clock (cooldown + review-due math) */
  now?: Date;
}

/**
 * Build a learning session based on the user's knowledge state.
 *
 * Session structure (3-5 minutes):
 * 1. Due spaced-repetition reviews (highest priority)
 * 2. One new technique introduction (if available)
 * 3. Gated practice exercises — only introduced techniques, biased to the ±1
 *    mastery band, outside their no-repeat cooldown (interleaved)
 */
export function buildSession(config: SessionConfig): Session {
  const {
    maxItems = 7,
    category,
    knowledgeState,
    answeredExercises = {},
    now = new Date(),
  } = config;
  const items: SessionItem[] = [];

  // 1. Get due reviews
  const allMasteries = Object.values(knowledgeState);
  const dueReviews = sortByUrgency(allMasteries.filter((m) => isDueForReview(m, now)));

  // Add up to 2 review items
  for (const mastery of dueReviews.slice(0, 2)) {
    const technique = techniques.find((t) => t.id === mastery.techniqueId);
    if (technique) {
      items.push({ type: 'review', technique, mastery });
    }
  }

  const knownIds = new Set(Object.keys(knowledgeState));

  // Category pre-filter: keep exercises whose primary technique is in-category
  const categoryPool = category
    ? exercises.filter((ex) => {
        const primary = primaryTechniqueOf(ex);
        const tech = primary ? techniques.find((t) => t.id === primary) : undefined;
        return tech?.category === category;
      })
    : exercises;

  // 2. Add one new technique if there are unseen ones
  const unseenTechniques = techniques.filter(
    (t) => !knownIds.has(t.id) && (!category || t.category === category)
  );
  if (unseenTechniques.length > 0 && items.length < maxItems) {
    // Pick the easiest unseen technique
    const diffOrder = { beginner: 0, intermediate: 1, advanced: 2, expert: 3 };
    const sorted = [...unseenTechniques].sort(
      (a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]
    );
    items.push({ type: 'learn', technique: sorted[0] });
  }

  // 3. Fill remaining slots with gated, cooldown-aware, difficulty-banded
  //    exercises, then interleave so no two consecutive share a primary.
  const exerciseSlots = maxItems - items.length;
  const selected = selectExercises({
    pool: categoryPool,
    knowledgeState,
    answeredExercises,
    now,
    count: exerciseSlots,
  });
  for (const exercise of interleaveExercises(selected)) {
    items.push({ type: 'exercise', exercise });
  }

  // Estimate duration: ~30s per exercise, ~60s per learn, ~20s per review
  const estimatedDuration = items.reduce((sum, item) => {
    switch (item.type) {
      case 'learn':
        return sum + 60;
      case 'review':
        return sum + 20;
      case 'exercise':
        return sum + 30;
    }
  }, 0);

  return {
    id: `session-${now.getTime()}`,
    items,
    createdAt: now.toISOString(),
    estimatedDuration,
  };
}
