// ============================================================
// SPIN Content Validation
//
// Mechanical, build-blocking checks for the exercise pool. Catches the
// classes of authoring error that silently corrupt the learning engine:
// multi-answer grading bugs, out-of-range option counts, detection-era
// framing strings, mistagged or dangling technique references, empty
// required-language text and duplicate IDs.
//
// Pure and dependency-free so it runs both from the build script
// (scripts/validate-exercises.ts) and from a Vitest regression guard.
// ============================================================

import type { Exercise, ExerciseType, LocalizedText } from './types';
import { primaryTechniqueOf } from './types';

export interface ValidationIssue {
  /** Exercise id the issue belongs to ('<pool>' for pool-level issues). */
  id: string;
  /** Short machine-readable rule key. */
  rule: string;
  /** Human-readable description. */
  message: string;
}

/**
 * Allowed `options.length` per exercise type: [min, max].
 * quick-check is a fast surface-cue call (2–4 named-technique options);
 * every other type is a fixed 4-option multiple choice.
 */
export const OPTION_RANGE: Record<ExerciseType, [number, number]> = {
  'quick-check': [2, 4],
  'technique-match': [4, 4],
  'response-choice': [4, 4],
  'fill-blank': [4, 4],
  'spot-the-flag': [4, 4],
  'scenario-quiz': [4, 4],
};

/**
 * Detection-era option strings that reframe the app as a fake-news detector.
 * A named-technique / professional-action option must never read as an
 * echt/fake verdict. Matched case-insensitively as a whole-option string.
 */
export const FORBIDDEN_OPTION_STRINGS: string[] = [
  'Manipulationstechniken erkennbar',
  'Manipulation techniques detected',
  'Sachliche Kommunikation',
  'Factual communication',
];

/**
 * Legacy quick-checks (qc-1…qc-6) still carry the forbidden echt/fake option
 * strings. They are reframed per §3 in Phase 1 ("Bestand sanieren"); until
 * then they are exempt from the forbidden-string rule ONLY. Every other rule
 * still applies to them, and every rule applies to all new content.
 *
 * TODO(phase-1): reframe qc-1…qc-6 to named-technique options and delete
 * this set so the forbidden-string rule covers the whole pool.
 */
export const LEGACY_FORBIDDEN_STRING_EXEMPT_IDS: ReadonlySet<string> = new Set([
  'qc-1',
  'qc-2',
  'qc-3',
  'qc-4',
  'qc-5',
  'qc-6',
]);

/** Required, non-empty language fields on every LocalizedText. */
const REQUIRED_LANGS = ['de', 'en'] as const;

function localizedIssues(
  id: string,
  field: string,
  text: LocalizedText | undefined,
  issues: ValidationIssue[]
): void {
  if (!text) return;
  for (const lang of REQUIRED_LANGS) {
    const value = text[lang];
    if (typeof value !== 'string' || value.trim().length === 0) {
      issues.push({
        id,
        rule: 'empty-text',
        message: `${field}: "${lang}" text is missing or empty`,
      });
    }
  }
}

/**
 * Validate an exercise pool. Returns every issue found (empty array = valid).
 * `validTechniqueIds` is the set of real technique ids the pool may reference.
 */
export function validateExercises(
  exercises: Exercise[],
  validTechniqueIds: Iterable<string>
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const techniqueIds = new Set(validTechniqueIds);
  const seenIds = new Set<string>();

  for (const ex of exercises) {
    const { id } = ex;

    // Unique id
    if (seenIds.has(id)) {
      issues.push({ id, rule: 'duplicate-id', message: `duplicate exercise id "${id}"` });
    }
    seenIds.add(id);

    // Single-answer invariant — the session UI is single-tap committed, so a
    // multi-answer item is silently gradeable by tapping one correct option.
    if (ex.correctAnswers.length !== 1) {
      issues.push({
        id,
        rule: 'single-answer',
        message: `correctAnswers must hold exactly 1 index, found ${ex.correctAnswers.length}`,
      });
    }

    // correctAnswers indices must point at real options
    for (const idx of ex.correctAnswers) {
      if (!Number.isInteger(idx) || idx < 0 || idx >= ex.options.length) {
        issues.push({
          id,
          rule: 'answer-index',
          message: `correctAnswers index ${idx} is out of range for ${ex.options.length} options`,
        });
      }
    }

    // Option count within the per-type range
    const range = OPTION_RANGE[ex.type];
    if (range) {
      const [min, max] = range;
      if (ex.options.length < min || ex.options.length > max) {
        issues.push({
          id,
          rule: 'option-range',
          message: `${ex.type} must have ${min === max ? min : `${min}–${max}`} options, found ${ex.options.length}`,
        });
      }
    } else {
      issues.push({ id, rule: 'unknown-type', message: `unknown exercise type "${ex.type}"` });
    }

    // Forbidden detection-era option strings (legacy quick-checks exempt)
    if (!LEGACY_FORBIDDEN_STRING_EXEMPT_IDS.has(id)) {
      for (const opt of ex.options) {
        for (const lang of REQUIRED_LANGS) {
          const value = opt[lang]?.trim().toLowerCase();
          if (!value) continue;
          for (const forbidden of FORBIDDEN_OPTION_STRINGS) {
            if (value === forbidden.toLowerCase()) {
              issues.push({
                id,
                rule: 'forbidden-string',
                message: `option "${opt[lang]}" is a forbidden detection-era verdict`,
              });
            }
          }
        }
      }
    }

    // Technique tagging: primaryTechniqueId set and ⊆ relatedTechniques for
    // every technique-bearing item. Technique-less items are allowed (they are
    // dormant under technique gating) but may not carry a stray primary tag.
    if (ex.relatedTechniques.length > 0) {
      if (!ex.primaryTechniqueId) {
        issues.push({
          id,
          rule: 'primary-technique',
          message: 'primaryTechniqueId is required when relatedTechniques is non-empty',
        });
      } else if (!ex.relatedTechniques.includes(ex.primaryTechniqueId)) {
        issues.push({
          id,
          rule: 'primary-technique',
          message: `primaryTechniqueId "${ex.primaryTechniqueId}" must be one of relatedTechniques`,
        });
      }
    } else if (ex.primaryTechniqueId) {
      issues.push({
        id,
        rule: 'primary-technique',
        message: `primaryTechniqueId "${ex.primaryTechniqueId}" set but relatedTechniques is empty`,
      });
    }

    // All referenced techniques must exist
    for (const techId of ex.relatedTechniques) {
      if (!techniqueIds.has(techId)) {
        issues.push({
          id,
          rule: 'unknown-technique',
          message: `relatedTechniques references unknown technique "${techId}"`,
        });
      }
    }
    const primary = primaryTechniqueOf(ex);
    if (primary && !techniqueIds.has(primary)) {
      issues.push({
        id,
        rule: 'unknown-technique',
        message: `primary technique "${primary}" is not a known technique`,
      });
    }

    // Required-language text present and non-empty
    localizedIssues(id, 'question', ex.question, issues);
    localizedIssues(id, 'scenario', ex.scenario, issues);
    localizedIssues(id, 'explanation', ex.explanation, issues);
    ex.options.forEach((opt, i) => localizedIssues(id, `option[${i}]`, opt, issues));
  }

  return issues;
}
