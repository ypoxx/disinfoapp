import type { Exercise } from '../../types';

// Phase 2 content pool — one file per technique (plus -extra top-ups for the
// techniques that shipped with the validated sample batch).
import { primingExercises } from './priming';
import { primingExtraExercises } from './priming-extra';
import { reciprocityExercises } from './reciprocity';
import { reciprocityExtraExercises } from './reciprocity-extra';
import { darkPatternsExercises } from './dark-patterns';
import { darkPatternsExtraExercises } from './dark-patterns-extra';
import { nudgingExercises } from './nudging';
import { nudgingExtraExercises } from './nudging-extra';
import { likingExercises } from './liking';
import { consistencyExercises } from './consistency';
import { adHominemExercises } from './ad-hominem';
import { strawManExercises } from './straw-man';
import { equivocationExercises } from './equivocation';
import { repetitionExercises } from './repetition';
import { illusoryTruthExercises } from './illusory-truth-effect';
import { pacingLeadingExercises } from './pacing-and-leading';
import { embeddedCommandsExercises } from './embedded-commands';
import { microtargetingExercises } from './microtargeting';
import { aiPersuasionExercises } from './ai-persuasion';

/** All Phase 2 exercises (the 15 previously zero-coverage techniques). */
export const poolExercises: Exercise[] = [
  ...primingExercises,
  ...primingExtraExercises,
  ...reciprocityExercises,
  ...reciprocityExtraExercises,
  ...darkPatternsExercises,
  ...darkPatternsExtraExercises,
  ...nudgingExercises,
  ...nudgingExtraExercises,
  ...likingExercises,
  ...consistencyExercises,
  ...adHominemExercises,
  ...strawManExercises,
  ...equivocationExercises,
  ...repetitionExercises,
  ...illusoryTruthExercises,
  ...pacingLeadingExercises,
  ...embeddedCommandsExercises,
  ...microtargetingExercises,
  ...aiPersuasionExercises,
];
