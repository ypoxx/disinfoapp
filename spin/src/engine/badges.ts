import type { Badge } from '@content/types';
import { badges } from '@content/badges';

/**
 * Badge evaluation — called once after every completed session.
 * Pure function: given the post-session context, returns badges that are
 * newly earned (not yet in `earned`).
 */

export interface BadgeContext {
  /** Streak AFTER counting today's session */
  streakCurrent: number;
  /** Techniques with masteryLevel >= 80 */
  masteredCount: number;
  /** Cumulative answered exercise questions (all time, incl. this session) */
  totalQuestionsAnswered: number;
  /** Accuracy of the just-finished session, 0-100 */
  sessionAccuracy: number;
  /** Number of answered items in the just-finished session */
  sessionItemCount: number;
  /** Duration of the just-finished session in seconds */
  sessionDurationSec: number;
  /** Local hour (0-23) at completion time */
  hour: number;
  /** Days since previous activity BEFORE this session (null = first ever) */
  daysSinceLastActive: number | null;
  /** Already earned badge ids */
  earned: string[];
}

function meetsRequirement(badge: Badge, ctx: BadgeContext): boolean {
  const { type, value } = badge.requirement;
  switch (type) {
    case 'streak':
      return ctx.streakCurrent >= value;
    case 'mastered_techniques':
      return ctx.masteredCount >= value;
    case 'quiz_questions':
      return ctx.totalQuestionsAnswered >= value;
    case 'perfect_session':
      return ctx.sessionAccuracy === 100 && ctx.sessionItemCount >= 3;
    case 'fast_session':
      return ctx.sessionDurationSec > 0 && ctx.sessionDurationSec < 120 && ctx.sessionItemCount >= 5;
    case 'early_activity':
      return ctx.hour < 8;
    case 'late_activity':
      return ctx.hour >= 22;
    case 'comeback':
      return ctx.daysSinceLastActive !== null && ctx.daysSinceLastActive >= 30;
    default:
      // e.g. simulator_posts — feature not available, never earnable
      return false;
  }
}

/** Returns all badges newly earned in this context */
export function evaluateNewBadges(ctx: BadgeContext): Badge[] {
  const earnedSet = new Set(ctx.earned);
  return badges.filter((b) => !earnedSet.has(b.id) && meetsRequirement(b, ctx));
}
