import type { TechniqueMastery } from '@content/types';
import { techniques } from '@content/techniques';
import { exercises } from '@content/exercises';
import { isDueForReview, sortByUrgency } from './spaced-repetition';
import { interleaveExercises } from './interleaving';
import type { Session, SessionItem } from './types';

interface SessionConfig {
  /** Max number of items in session (default: 7) */
  maxItems?: number;
  /** Focus on specific technique category */
  category?: string;
  /** User's current knowledge state */
  knowledgeState: Record<string, TechniqueMastery>;
}

/**
 * Build a learning session based on the user's knowledge state.
 *
 * Session structure (3-5 minutes):
 * 1. Due spaced-repetition reviews (highest priority)
 * 2. Exercises for weak techniques
 * 3. One new technique introduction (if available)
 * 4. Mixed practice exercises (interleaved)
 */
export function buildSession(config: SessionConfig): Session {
  const { maxItems = 7, category, knowledgeState } = config;
  const items: SessionItem[] = [];

  // 1. Get due reviews
  const allMasteries = Object.values(knowledgeState);
  const dueReviews = sortByUrgency(allMasteries.filter((m) => isDueForReview(m)));

  // Add up to 2 review items
  for (const mastery of dueReviews.slice(0, 2)) {
    const technique = techniques.find(t => t.id === mastery.techniqueId);
    if (technique) {
      items.push({ type: 'review', technique, mastery });
    }
  }

  // 2. Find exercises matching weak areas or the specified category
  const knownIds = new Set(Object.keys(knowledgeState));
  const weakTechniques = allMasteries
    .filter(m => m.masteryLevel < 60)
    .map(m => m.techniqueId);

  const availableExercises = exercises.filter(ex => {
    if (category) {
      const tech = techniques.find(t => ex.relatedTechniques.includes(t.id));
      return tech?.category === category;
    }
    return true;
  });

  // Prioritize exercises for weak techniques
  const weakExercises = availableExercises.filter(ex =>
    ex.relatedTechniques.some(id => weakTechniques.includes(id))
  );
  const otherExercises = availableExercises.filter(ex =>
    !ex.relatedTechniques.some(id => weakTechniques.includes(id))
  );

  // Shuffle
  const shuffled = [
    ...shuffle(weakExercises),
    ...shuffle(otherExercises),
  ];

  // 3. Add one new technique if there are unseen ones
  const unseenTechniques = techniques.filter(t =>
    !knownIds.has(t.id) && (!category || t.category === category)
  );
  if (unseenTechniques.length > 0 && items.length < maxItems) {
    // Pick the easiest unseen technique
    const sorted = [...unseenTechniques].sort((a, b) => {
      const diffOrder = { beginner: 0, intermediate: 1, advanced: 2, expert: 3 };
      return diffOrder[a.difficulty] - diffOrder[b.difficulty];
    });
    items.push({ type: 'learn', technique: sorted[0] });
  }

  // 4. Fill remaining slots with exercises (interleaved)
  const exerciseSlots = maxItems - items.length;
  const selectedExercises = interleaveExercises(shuffled.slice(0, exerciseSlots));
  for (const exercise of selectedExercises) {
    items.push({ type: 'exercise', exercise });
  }

  // Estimate duration: ~30s per exercise, ~60s per learn, ~20s per review
  const estimatedDuration = items.reduce((sum, item) => {
    switch (item.type) {
      case 'learn': return sum + 60;
      case 'review': return sum + 20;
      case 'exercise': return sum + 30;
    }
  }, 0);

  return {
    id: `session-${Date.now()}`,
    items,
    createdAt: new Date().toISOString(),
    estimatedDuration,
  };
}

/** Fisher-Yates shuffle */
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
