import { describe, expect, it } from 'vitest';
import { techniques } from '../techniques';
import { exercises } from '../exercises';
import { taxonomyGroups } from '../taxonomy';
import { techniqueRelationships } from '../relationships';

/**
 * Content lint v1 (Ausbau-Plan R1). Mechanically enforceable invariants for
 * the exercise/technique pool. Rules that require the R4 reframe (forbidden
 * detection-style option strings) are added there, once the remaining
 * quick-checks are rewritten.
 */

const techniqueIds = new Set(techniques.map((t) => t.id));

/** Multi-answer is a deliberate format, restricted to these types (PO decision, Ausbau-Plan §Entscheidungen #5) */
const MULTI_ANSWER_TYPES = new Set(['spot-the-flag', 'scenario-quiz']);

describe('techniques', () => {
  it('have unique ids', () => {
    expect(techniques.length).toBe(techniqueIds.size);
  });

  it('have non-empty German and English name and description', () => {
    for (const t of techniques) {
      expect(t.name.de, `${t.id} name.de`).toBeTruthy();
      expect(t.name.en, `${t.id} name.en`).toBeTruthy();
      expect(t.description.de, `${t.id} description.de`).toBeTruthy();
      expect(t.description.en, `${t.id} description.en`).toBeTruthy();
    }
  });

  it('reference existing techniques in relatedTechniques', () => {
    for (const t of techniques) {
      for (const rel of t.relatedTechniques) {
        expect(techniqueIds.has(rel), `${t.id} → ${rel}`).toBe(true);
      }
    }
  });
});

describe('exercises', () => {
  it('have unique ids', () => {
    const ids = exercises.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('have valid correctAnswers indices', () => {
    for (const ex of exercises) {
      expect(ex.correctAnswers.length, `${ex.id} correctAnswers empty`).toBeGreaterThan(0);
      for (const idx of ex.correctAnswers) {
        expect(idx, `${ex.id} index ${idx}`).toBeGreaterThanOrEqual(0);
        expect(idx, `${ex.id} index ${idx}`).toBeLessThan(ex.options.length);
      }
      expect(new Set(ex.correctAnswers).size, `${ex.id} duplicate answer indices`).toBe(
        ex.correctAnswers.length
      );
    }
  });

  it('use multi-answer only in designated formats', () => {
    for (const ex of exercises) {
      if (ex.correctAnswers.length > 1) {
        expect(MULTI_ANSWER_TYPES.has(ex.type), `${ex.id} (${ex.type}) is multi-answer`).toBe(true);
      }
    }
  });

  it('have 2–6 options', () => {
    for (const ex of exercises) {
      expect(ex.options.length, ex.id).toBeGreaterThanOrEqual(2);
      expect(ex.options.length, ex.id).toBeLessThanOrEqual(6);
    }
  });

  it('respect the difficulty hard gate: 2-option items are beginner-only', () => {
    for (const ex of exercises) {
      if (ex.options.length < 3) {
        expect(ex.difficulty, `${ex.id} is a ${ex.options.length}-option ${ex.difficulty}`).toBe(
          'beginner'
        );
      }
    }
  });

  it('reference existing techniques', () => {
    for (const ex of exercises) {
      for (const rel of ex.relatedTechniques) {
        expect(techniqueIds.has(rel), `${ex.id} → ${rel}`).toBe(true);
      }
    }
  });

  it('have non-empty German question, options and explanation', () => {
    for (const ex of exercises) {
      expect(ex.question.de, `${ex.id} question.de`).toBeTruthy();
      expect(ex.explanation.de, `${ex.id} explanation.de`).toBeTruthy();
      for (const [i, opt] of ex.options.entries()) {
        expect(opt.de, `${ex.id} option ${i}`).toBeTruthy();
      }
    }
  });
});

describe('taxonomy & relationships', () => {
  it('taxonomy groups reference existing techniques', () => {
    for (const g of taxonomyGroups) {
      for (const id of g.techniques) {
        expect(techniqueIds.has(id), `${g.id} → ${id}`).toBe(true);
      }
    }
  });

  it('relationships reference existing techniques', () => {
    for (const r of techniqueRelationships) {
      expect(techniqueIds.has(r.source), `relationship source ${r.source}`).toBe(true);
      expect(techniqueIds.has(r.target), `relationship target ${r.target}`).toBe(true);
    }
  });
});
