import { describe, it, expect } from 'vitest';
import type { Exercise } from '@content/types';
import {
  validateExercises,
  LEGACY_FORBIDDEN_STRING_EXEMPT_IDS,
} from '@content/validate';
import { exercises } from '@content/exercises';
import { techniques } from '@content/techniques';

const TECH_IDS = techniques.map((t) => t.id);

function valid(overrides: Partial<Exercise> = {}): Exercise {
  return {
    id: 'test-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: { de: 'Frage', en: 'Question' },
    scenario: { de: 'Szenario', en: 'Scenario' },
    options: [
      { de: 'a', en: 'a' },
      { de: 'b', en: 'b' },
      { de: 'c', en: 'c' },
      { de: 'd', en: 'd' },
    ],
    correctAnswers: [0],
    explanation: { de: 'Erklärung', en: 'Explanation' },
    points: 10,
    primaryTechniqueId: 'framing',
    relatedTechniques: ['framing'],
    ...overrides,
  };
}

function rules(exs: Exercise[]): string[] {
  return validateExercises(exs, TECH_IDS).map((i) => i.rule);
}

describe('validateExercises — real content pool', () => {
  it('passes with zero issues', () => {
    expect(validateExercises(exercises, TECH_IDS)).toEqual([]);
  });

  it('a hand-built valid exercise passes', () => {
    expect(validateExercises([valid()], TECH_IDS)).toEqual([]);
  });
});

describe('validateExercises — rule coverage', () => {
  it('flags multi-answer items', () => {
    expect(rules([valid({ correctAnswers: [0, 1] })])).toContain('single-answer');
  });

  it('flags out-of-range correctAnswers indices', () => {
    expect(rules([valid({ correctAnswers: [9] })])).toContain('answer-index');
  });

  it('flags option counts outside the per-type range', () => {
    const threeOpts = valid({
      type: 'technique-match',
      options: [
        { de: 'a', en: 'a' },
        { de: 'b', en: 'b' },
        { de: 'c', en: 'c' },
      ],
    });
    expect(rules([threeOpts])).toContain('option-range');
  });

  it('allows quick-checks to have 2 options', () => {
    const qc = valid({
      type: 'quick-check',
      difficulty: 'beginner',
      options: [
        { de: 'Priming', en: 'Priming' },
        { de: 'Framing', en: 'Framing' },
      ],
    });
    expect(validateExercises([qc], TECH_IDS)).toEqual([]);
  });

  it('flags forbidden detection-era option strings', () => {
    const detect = valid({
      id: 'new-detect',
      options: [
        { de: 'Sachliche Kommunikation', en: 'Factual communication' },
        { de: 'b', en: 'b' },
        { de: 'c', en: 'c' },
        { de: 'd', en: 'd' },
      ],
    });
    expect(rules([detect])).toContain('forbidden-string');
  });

  it('exempts legacy quick-checks from the forbidden-string rule only', () => {
    const legacyId = [...LEGACY_FORBIDDEN_STRING_EXEMPT_IDS][0];
    const legacy = valid({
      id: legacyId,
      type: 'quick-check',
      difficulty: 'beginner',
      options: [
        { de: 'Manipulationstechniken erkennbar', en: 'Manipulation techniques detected' },
        { de: 'Sachliche Kommunikation', en: 'Factual communication' },
      ],
    });
    expect(rules([legacy])).not.toContain('forbidden-string');
  });

  it('requires primaryTechniqueId when relatedTechniques is non-empty', () => {
    expect(rules([valid({ primaryTechniqueId: undefined })])).toContain('primary-technique');
  });

  it('requires primaryTechniqueId to be one of relatedTechniques', () => {
    expect(
      rules([valid({ primaryTechniqueId: 'authority', relatedTechniques: ['framing'] })])
    ).toContain('primary-technique');
  });

  it('rejects a stray primary tag when there are no related techniques', () => {
    expect(
      rules([valid({ primaryTechniqueId: 'framing', relatedTechniques: [] })])
    ).toContain('primary-technique');
  });

  it('allows technique-less items (dormant under gating)', () => {
    expect(
      validateExercises(
        [valid({ primaryTechniqueId: undefined, relatedTechniques: [] })],
        TECH_IDS
      )
    ).toEqual([]);
  });

  it('flags references to unknown techniques', () => {
    expect(
      rules([valid({ primaryTechniqueId: 'not_real', relatedTechniques: ['not_real'] })])
    ).toContain('unknown-technique');
  });

  it('flags empty required-language text', () => {
    expect(rules([valid({ question: { de: '', en: 'Question' } })])).toContain('empty-text');
    expect(rules([valid({ explanation: { de: 'Da', en: '' } })])).toContain('empty-text');
  });

  it('flags duplicate ids', () => {
    expect(rules([valid({ id: 'dup' }), valid({ id: 'dup' })])).toContain('duplicate-id');
  });
});
