import type { Difficulty, Exercise, TechniqueMastery } from '@content/types';
import { primaryTechniqueOf } from '@content/types';

/**
 * Exercise selection — the gates that make the growing pool worth having.
 *
 * Three gates, applied as a ranked preference rather than a hard filter so a
 * small pool never starves a session, while the gates become effectively hard
 * once the pool is large enough to satisfy them:
 *
 *   1. No-repeat cooldown  — answered exercises stay out for ~21 days.
 *   2. Technique gating    — only exercises whose primary technique has been
 *                            introduced (∈ knowledgeState) are eligible.
 *   3. Difficulty gating   — bias toward the ±1 band around user mastery.
 *
 * Ranking (not filtering) means: when enough ideal items exist they win; when
 * they don't, the next-best items backfill so the session always fills.
 */

/** No-repeat window: an answered exercise is deprioritised for this long. */
export const EXERCISE_COOLDOWN_DAYS = 21;

const DAY_MS = 86_400_000;
const DIFFICULTY_ORDER: Difficulty[] = ['beginner', 'intermediate', 'advanced', 'expert'];

/** Map an overall mastery score (0–100) to the matching difficulty band. */
export function masteryBand(overallMastery: number): Difficulty {
  if (overallMastery < 40) return 'beginner';
  if (overallMastery < 60) return 'intermediate';
  if (overallMastery < 80) return 'advanced';
  return 'expert';
}

/** Average mastery across all introduced techniques (0 when none introduced). */
export function overallMasteryOf(knowledgeState: Record<string, TechniqueMastery>): number {
  const all = Object.values(knowledgeState);
  if (all.length === 0) return 0;
  return all.reduce((sum, m) => sum + m.masteryLevel, 0) / all.length;
}

/** Is `difficulty` within ±1 band of the user's current band? */
export function isWithinBand(userBand: Difficulty, difficulty: Difficulty): boolean {
  return Math.abs(DIFFICULTY_ORDER.indexOf(userBand) - DIFFICULTY_ORDER.indexOf(difficulty)) <= 1;
}

/** Days since an exercise was last answered; `Infinity` if never answered. */
export function daysSinceAnswered(
  id: string,
  answeredExercises: Record<string, string>,
  now: Date
): number {
  const iso = answeredExercises[id];
  if (!iso) return Infinity;
  return (now.getTime() - new Date(iso).getTime()) / DAY_MS;
}

/** Is the exercise still inside its no-repeat cooldown window? */
export function isOnCooldown(
  id: string,
  answeredExercises: Record<string, string>,
  now: Date,
  cooldownDays = EXERCISE_COOLDOWN_DAYS
): boolean {
  return daysSinceAnswered(id, answeredExercises, now) < cooldownDays;
}

export interface SelectionInput {
  /** Candidate exercises (already category-filtered by the caller). */
  pool: Exercise[];
  /** Per-technique mastery — its keys are the introduced techniques. */
  knowledgeState: Record<string, TechniqueMastery>;
  /** exerciseId → ISO timestamp it was last answered. */
  answeredExercises?: Record<string, string>;
  /** Injectable clock for deterministic cooldown math. */
  now?: Date;
  /** How many exercises to return. */
  count: number;
  /** Override the cooldown window (tests). */
  cooldownDays?: number;
  /** Injectable shuffle for variety; identity keeps tests deterministic. */
  shuffle?: <T>(items: T[]) => T[];
}

/** Fisher–Yates shuffle (default source of within-tier variety). */
function fisherYates<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function compareKeys(a: number[], b: number[]): number {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return a[i] - b[i];
  }
  return 0;
}

/**
 * Select up to `count` exercises from the pool, best-first. Returns fewer only
 * when the pool itself is smaller than `count`.
 */
export function selectExercises(input: SelectionInput): Exercise[] {
  const {
    pool,
    knowledgeState,
    answeredExercises = {},
    now = new Date(),
    count,
    cooldownDays = EXERCISE_COOLDOWN_DAYS,
    shuffle = fisherYates,
  } = input;
  if (count <= 0 || pool.length === 0) return [];

  const known = new Set(Object.keys(knowledgeState));
  const weak = new Set(
    Object.values(knowledgeState)
      .filter((m) => m.masteryLevel < 60)
      .map((m) => m.techniqueId)
  );
  const userBand = masteryBand(overallMasteryOf(knowledgeState));

  // Shuffle first, then stable-sort by preference key: items with identical
  // keys keep their shuffled order, giving day-to-day variety without breaking
  // the deterministic ordering the gates impose.
  const ranked = shuffle(pool)
    .map((ex) => {
      const primary = primaryTechniqueOf(ex);
      const techniqueKnown = primary !== undefined && known.has(primary);
      const isWeak = primary !== undefined && weak.has(primary);
      const onCooldown = isOnCooldown(ex.id, answeredExercises, now, cooldownDays);
      const inBand = isWithinBand(userBand, ex.difficulty);
      return {
        ex,
        key: [
          techniqueKnown ? 0 : 1, // introduced techniques before unseen ones
          onCooldown ? 1 : 0, // off-cooldown before recently-seen (no-repeat)
          inBand ? 0 : 1, // within ±1 mastery band before out-of-band
          isWeak ? 0 : 1, // weak techniques before strong (learning priority)
          -daysSinceAnswered(ex.id, answeredExercises, now), // oldest-seen first
        ],
      };
    })
    .sort((a, b) => compareKeys(a.key, b.key));

  return ranked.slice(0, count).map((r) => r.ex);
}
