import { describe, it, expect } from 'vitest';
import { mergeKnowledge, mergeProgress, mergeEnvelope } from '../merge';
import { createDefaultMastery } from '@/engine/spaced-repetition';

const OLD = new Date('2026-07-01T10:00:00Z');
const NEW = new Date('2026-07-14T10:00:00Z');

describe('mergeKnowledge', () => {
  it('keeps the more recently practiced entry per technique', () => {
    const local = {
      techniques: {
        framing: { ...createDefaultMastery('framing', NEW), masteryLevel: 70 },
      },
    };
    const cloud = {
      techniques: {
        framing: { ...createDefaultMastery('framing', OLD), masteryLevel: 30 },
        anchoring: { ...createDefaultMastery('anchoring', OLD), masteryLevel: 55 },
      },
    };
    const merged = mergeKnowledge(local, cloud);
    expect(merged.techniques!.framing.masteryLevel).toBe(70);
    // Cloud-only techniques survive — this was the data-loss bug
    expect(merged.techniques!.anchoring.masteryLevel).toBe(55);
  });

  it('cloud wins for techniques it practiced more recently', () => {
    const local = {
      techniques: { framing: { ...createDefaultMastery('framing', OLD), masteryLevel: 20 } },
    };
    const cloud = {
      techniques: { framing: { ...createDefaultMastery('framing', NEW), masteryLevel: 90 } },
    };
    expect(mergeKnowledge(local, cloud).techniques!.framing.masteryLevel).toBe(90);
  });
});

describe('mergeProgress', () => {
  it('takes max of counters, union of badges, most recent streak', () => {
    const local = {
      xp: 100,
      earnedBadges: ['streak_3'],
      totalPracticeTime: 600,
      sessionsCompleted: 4,
      totalQuestionsAnswered: 30,
      streak: { current: 1, longest: 3, lastActiveDate: '2026-07-14', weeklyProgress: [true, true, false, false, false, false, false] },
    };
    const cloud = {
      xp: 250,
      earnedBadges: ['early_bird'],
      totalPracticeTime: 300,
      sessionsCompleted: 6,
      totalQuestionsAnswered: 50,
      streak: { current: 5, longest: 5, lastActiveDate: '2026-07-10', weeklyProgress: [true, false, false, false, false, false, false] },
    };
    const merged = mergeProgress(local, cloud);
    expect(merged.xp).toBe(250);
    expect(merged.earnedBadges).toEqual(expect.arrayContaining(['streak_3', 'early_bird']));
    expect(merged.sessionsCompleted).toBe(6);
    expect(merged.streak!.lastActiveDate).toBe('2026-07-14'); // newer device wins
    expect(merged.streak!.longest).toBe(5); // but longest is global max
  });
});

describe('mergeEnvelope', () => {
  it('identical key counts no longer block the merge (old bug)', () => {
    // Old code compared Object.keys().length — always equal for progress.
    const local = { state: { xp: 10, sessionsCompleted: 1 }, version: 1 };
    const cloud = { state: { xp: 999, sessionsCompleted: 9 }, version: 1 };
    const merged = mergeEnvelope('spin-progress', local, cloud);
    expect((merged.state as { xp: number }).xp).toBe(999);
  });

  it('settings: local wins, cloud fills gaps', () => {
    const local = { state: { theme: 'dark' }, version: 1 };
    const cloud = { state: { theme: 'light', weeklyGoal: 6 }, version: 1 };
    const merged = mergeEnvelope('spin-settings', local, cloud);
    expect(merged.state).toEqual({ theme: 'dark', weeklyGoal: 6 });
  });
});
