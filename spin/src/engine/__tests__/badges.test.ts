import { describe, it, expect } from 'vitest';
import { techniques } from '@content/techniques';
import { evaluateNewBadges, type BadgeContext } from '../badges';

const BASE: BadgeContext = {
  streakCurrent: 0,
  masteredCount: 0,
  totalQuestionsAnswered: 0,
  sessionAccuracy: 50,
  sessionItemCount: 5,
  sessionDurationSec: 200,
  hour: 12,
  daysSinceLastActive: 1,
  earned: [],
};

describe('evaluateNewBadges', () => {
  it('awards the 3-day streak badge exactly once', () => {
    const first = evaluateNewBadges({ ...BASE, streakCurrent: 3 });
    expect(first.map((b) => b.id)).toContain('streak_3');
    const again = evaluateNewBadges({ ...BASE, streakCurrent: 4, earned: ['streak_3'] });
    expect(again.map((b) => b.id)).not.toContain('streak_3');
  });

  it('awards perfect_session only for real sessions (>= 3 items)', () => {
    expect(
      evaluateNewBadges({ ...BASE, sessionAccuracy: 100, sessionItemCount: 7 }).map((b) => b.id)
    ).toContain('perfectionist');
    expect(
      evaluateNewBadges({ ...BASE, sessionAccuracy: 100, sessionItemCount: 2 }).map((b) => b.id)
    ).not.toContain('perfectionist');
  });

  it('awards mastery badges by mastered technique count', () => {
    // master_all tracks the full (growing) catalogue
    const ids = evaluateNewBadges({ ...BASE, masteredCount: techniques.length }).map((b) => b.id);
    expect(ids).toContain('master_10');
    expect(ids).toContain('master_20');
    expect(ids).toContain('master_all');
  });

  it('awards comeback after 30+ days, never on first ever session', () => {
    expect(
      evaluateNewBadges({ ...BASE, daysSinceLastActive: 45 }).map((b) => b.id)
    ).toContain('comeback_kid');
    expect(
      evaluateNewBadges({ ...BASE, daysSinceLastActive: null }).map((b) => b.id)
    ).not.toContain('comeback_kid');
  });

  it('awards early/late activity by local hour', () => {
    expect(evaluateNewBadges({ ...BASE, hour: 7 }).map((b) => b.id)).toContain('early_bird');
    expect(evaluateNewBadges({ ...BASE, hour: 23 }).map((b) => b.id)).toContain('night_owl');
    expect(evaluateNewBadges({ ...BASE, hour: 12 }).map((b) => b.id)).not.toContain('early_bird');
  });

  it('never awards badges for unavailable features (simulator)', () => {
    const maxed: BadgeContext = {
      ...BASE,
      streakCurrent: 999,
      masteredCount: 27,
      totalQuestionsAnswered: 9999,
      sessionAccuracy: 100,
      sessionItemCount: 7,
      sessionDurationSec: 60,
      hour: 7,
      daysSinceLastActive: 60,
    };
    expect(evaluateNewBadges(maxed).map((b) => b.id)).not.toContain('simulator_50');
  });
});
