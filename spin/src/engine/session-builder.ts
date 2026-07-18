import type { Difficulty, Exercise, TechniqueMastery } from '@content/types';
import { techniques } from '@content/techniques';
import { exercises } from '@content/exercises';
import { isDueForReview, sortByUrgency } from './spaced-repetition';
import { interleaveExercises } from './interleaving';
import type { Session, SessionItem } from './types';

export type SessionType = 'daily' | 'quick' | 'refresh';

export interface SessionConfig {
  /** Max number of items in session (default: 7) */
  maxItems?: number;
  /** Focus on specific technique category */
  category?: string;
  /** User's current knowledge state */
  knowledgeState: Record<string, TechniqueMastery>;
  /** exerciseId → ISO date of last answer (no-repeat memory) */
  answeredExercises?: Record<string, string>;
  /** Rolling item scores (0..1), most recent last — steers the flow corridor */
  recentScores?: number[];
  /** Session flavour: daily (default), quick (exercises only), refresh (due reviews) */
  sessionType?: SessionType;
  /** Injectable clock for tests */
  now?: Date;
}

/** No exercise repeats within this window (Ausbau-Plan R2 / Content-Offensive §7) */
export const COOLDOWN_DAYS = 21;
/** Target success corridor: shift difficulty to keep session accuracy in this band */
export const CORRIDOR_LOW = 0.75;
export const CORRIDOR_HIGH = 0.85;
/** Below this many known techniques the builder bootstraps aggressively */
const CALIBRATION_THRESHOLD = 6;

const DIFF_ORDER: Difficulty[] = ['beginner', 'intermediate', 'advanced', 'expert'];

/** The one technique an exercise primarily trains (legacy fallback: first related) */
export function primaryTechniqueOf(ex: Exercise): string | undefined {
  return ex.primaryTechniqueId ?? ex.relatedTechniques[0];
}

/**
 * Difficulty band target for a technique's mastery, shifted by the flow
 * corridor: running hot → harder items, struggling → easier ones.
 */
export function targetBandIndex(masteryLevel: number, shift: number): number {
  const base = masteryLevel < 30 ? 0 : masteryLevel < 55 ? 1 : masteryLevel < 75 ? 2 : 3;
  return Math.max(0, Math.min(DIFF_ORDER.length - 1, base + shift));
}

/** −1 | 0 | +1 from the rolling score window */
export function corridorShift(recentScores: number[]): number {
  const window = recentScores.slice(-10);
  if (window.length < 5) return 0; // not enough signal yet — calibration phase
  const avg = window.reduce((s, v) => s + v, 0) / window.length;
  if (avg > CORRIDOR_HIGH) return 1;
  if (avg < CORRIDOR_LOW) return -1;
  return 0;
}

/**
 * Erkenntnistreppe: which exercise formats fit a technique's mastery stage.
 * Recognition first, application next, ethics/transfer last.
 */
function stageBonus(ex: Exercise, masteryLevel: number): number {
  const recognition = ex.type === 'quick-check' || ex.type === 'technique-match';
  const application = ex.type === 'response-choice' || ex.type === 'fill-blank';
  const transfer = ex.type === 'spot-the-flag' || ex.type === 'scenario-quiz';
  if (masteryLevel < 40) return recognition ? 2 : application ? 0 : -2;
  if (masteryLevel < 70) return application ? 2 : transfer ? 1 : 0;
  return transfer ? 2 : application ? 1 : -1;
}

interface EligibilityContext {
  knowledgeState: Record<string, TechniqueMastery>;
  answeredExercises: Record<string, string>;
  now: Date;
  shift: number;
  category?: string;
}

function isOffCooldown(ex: Exercise, ctx: EligibilityContext): boolean {
  const last = ctx.answeredExercises[ex.id];
  if (!last) return true;
  const ageDays = (ctx.now.getTime() - new Date(last).getTime()) / 86_400_000;
  return ageDays >= COOLDOWN_DAYS;
}

function isIntroduced(ex: Exercise, ctx: EligibilityContext): boolean {
  const primary = primaryTechniqueOf(ex);
  return !!primary && primary in ctx.knowledgeState;
}

function inBand(ex: Exercise, ctx: EligibilityContext): boolean {
  const primary = primaryTechniqueOf(ex);
  const mastery = primary ? ctx.knowledgeState[primary]?.masteryLevel ?? 0 : 0;
  const target = targetBandIndex(mastery, ctx.shift);
  return Math.abs(DIFF_ORDER.indexOf(ex.difficulty) - target) <= 1;
}

function matchesCategory(ex: Exercise, ctx: EligibilityContext): boolean {
  if (!ctx.category) return true;
  const primary = primaryTechniqueOf(ex);
  return techniques.find((t) => t.id === primary)?.category === ctx.category;
}

/**
 * Pick exercises for a session. Gating (only introduced techniques) is a hard
 * rule. Cooldown and difficulty band relax in that order when the eligible
 * pool runs dry — a small pool must never produce an empty session.
 */
export function selectExercises(
  count: number,
  ctx: EligibilityContext,
  prioritizeTechniques: Set<string>
): Exercise[] {
  if (count <= 0) return [];

  const gated = exercises.filter((ex) => isIntroduced(ex, ctx) && matchesCategory(ex, ctx));

  const strict = gated.filter((ex) => isOffCooldown(ex, ctx) && inBand(ex, ctx));
  const noBand = gated.filter((ex) => isOffCooldown(ex, ctx));
  // Last resort: repeat the least-recently answered ones
  const anyGated = [...gated].sort((a, b) =>
    (ctx.answeredExercises[a.id] ?? '').localeCompare(ctx.answeredExercises[b.id] ?? '')
  );

  const pool: Exercise[] = [];
  const seen = new Set<string>();
  for (const source of [strict, noBand, anyGated]) {
    for (const ex of source) {
      if (!seen.has(ex.id)) {
        seen.add(ex.id);
        pool.push(ex);
      }
    }
    if (pool.length >= count * 3) break; // enough headroom for scoring/interleave
  }

  const scored = pool
    .map((ex) => {
      const primary = primaryTechniqueOf(ex);
      const mastery = primary ? ctx.knowledgeState[primary]?.masteryLevel ?? 0 : 0;
      let score = 0;
      if (primary && prioritizeTechniques.has(primary)) score += 3;
      if (mastery < 60) score += 2; // weak techniques first
      score += stageBonus(ex, mastery);
      if (inBand(ex, ctx)) score += 2;
      // deterministic day-stable jitter inside equal scores (testable, varies daily)
      const jitter = (hashCode(ex.id + ctx.now.toISOString().slice(0, 10)) % 100) / 100;

      // Off-cooldown items always rank above on-cooldown ones. WITHIN the
      // on-cooldown remainder, age dominates (strict LRU): pedagogical
      // priorities must never recycle a freshly answered item early.
      const last = ctx.answeredExercises[ex.id];
      const ageDays = last
        ? (ctx.now.getTime() - new Date(last).getTime()) / 86_400_000
        : Infinity;
      const sortKey = ageDays >= COOLDOWN_DAYS ? 1000 + score + jitter : ageDays;
      return { ex, sortKey };
    })
    .sort((a, b) => b.sortKey - a.sortKey);

  return interleaveExercises(scored.slice(0, count * 2).map((s) => s.ex)).slice(0, count);
}

function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/**
 * Build a learning session based on the user's knowledge state.
 *
 * daily   — due reviews (dynamic quota) + 1–2 new techniques + gated exercises
 * quick   — exercises only, no introductions, no review cards
 * refresh — clears the due-review backlog: review cards + their exercises
 */
export function buildSession(config: SessionConfig): Session {
  const {
    maxItems = 7,
    category,
    knowledgeState,
    answeredExercises = {},
    recentScores = [],
    sessionType = 'daily',
    now = new Date(),
  } = config;

  const shift = corridorShift(recentScores);
  const ctx: EligibilityContext = { knowledgeState, answeredExercises, now, shift, category };
  const items: SessionItem[] = [];

  const allMasteries = Object.values(knowledgeState);
  const dueReviews = sortByUrgency(allMasteries.filter((m) => isDueForReview(m, now)));
  const knownCount = allMasteries.length;

  // 1. Review cards. Quota scales with the backlog so reviews can never
  //    starve behind a growing catalogue (Ausbau-Plan R2).
  if (sessionType !== 'quick') {
    const quota =
      sessionType === 'refresh'
        ? Math.min(3, dueReviews.length)
        : Math.min(4, Math.ceil(dueReviews.length / 3));
    for (const mastery of dueReviews.slice(0, quota)) {
      const technique = techniques.find((t) => t.id === mastery.techniqueId);
      if (technique) items.push({ type: 'review', technique, mastery });
    }
  }

  // 2. New technique introduction (daily only). During calibration
  //    (few known techniques) introduce two per session so the exercise
  //    gate opens quickly.
  if (sessionType === 'daily') {
    const unseen = techniques
      .filter((t) => !(t.id in knowledgeState) && (!category || t.category === category))
      .sort(
        (a, b) => DIFF_ORDER.indexOf(a.difficulty) - DIFF_ORDER.indexOf(b.difficulty)
      );
    const introCount = knownCount < CALIBRATION_THRESHOLD ? 2 : 1;
    for (const t of unseen.slice(0, introCount)) {
      if (items.length >= maxItems - 1) break;
      items.push({ type: 'learn', technique: t });
    }
  }

  // 3. Exercises fill the rest. Techniques due for review get priority so a
  //    review card is followed by actual recall practice.
  const prioritize = new Set<string>(
    (sessionType === 'refresh' ? dueReviews : dueReviews.slice(0, 4)).map((m) => m.techniqueId)
  );
  const exerciseCount = Math.max(0, maxItems - items.length);
  const picked = selectExercises(exerciseCount, ctx, prioritize);
  for (const ex of picked) items.push({ type: 'exercise', exercise: ex });

  // 4. If the pool could not fill the session (cold start), add more learn items
  if (items.length < maxItems && sessionType === 'daily') {
    const alreadyIntroduced = new Set(
      items.filter((i) => i.type === 'learn').map((i) => i.technique.id)
    );
    const moreUnseen = techniques.filter(
      (t) => !(t.id in knowledgeState) && !alreadyIntroduced.has(t.id)
    );
    for (const t of moreUnseen) {
      if (items.length >= maxItems) break;
      items.push({ type: 'learn', technique: t });
    }
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
    id: `session-${now.getTime()}`,
    items,
    createdAt: now.toISOString(),
    estimatedDuration,
  };
}
