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

// Phase 3 densification — one -p3 file per technique. Adds the expert
// `scenario-quiz` type (one per technique) plus ethics-reframed `spot-the-flag`
// items and lower-band top-ups, bringing the pool toward the §6 target of 210.
import { framingP3Exercises } from './framing-p3';
import { authorityP3Exercises } from './authority-p3';
import { socialProofP3Exercises } from './social-proof-p3';
import { scarcityP3Exercises } from './scarcity-p3';
import { emotionalAppealP3Exercises } from './emotional-appeal-p3';
import { anchoringP3Exercises } from './anchoring-p3';
import { reciprocityP3Exercises } from './reciprocity-p3';
import { nudgingP3Exercises } from './nudging-p3';
import { narrativePersuasionP3Exercises } from './narrative-persuasion-p3';
import { reactanceP3Exercises } from './reactance-theory-p3';
import { consistencyP3Exercises } from './consistency-p3';
import { likingP3Exercises } from './liking-p3';
import { primingP3Exercises } from './priming-p3';
import { falseDichotomyP3Exercises } from './false-dichotomy-p3';
import { microtargetingP3Exercises } from './microtargeting-p3';
import { darkPatternsP3Exercises } from './dark-patterns-p3';
import { digitalInfluenceP3Exercises } from './digital-influence-p3';
import { visualManipulationP3Exercises } from './visual-manipulation-p3';
import { repetitionP3Exercises } from './repetition-p3';
import { syntheticMediaP3Exercises } from './synthetic-media-p3';

/** All Phase 2 + Phase 3 pool exercises (aggregated into the exercise index). */
export const poolExercises: Exercise[] = [
  // Phase 2
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
  // Phase 3
  ...framingP3Exercises,
  ...authorityP3Exercises,
  ...socialProofP3Exercises,
  ...scarcityP3Exercises,
  ...emotionalAppealP3Exercises,
  ...anchoringP3Exercises,
  ...reciprocityP3Exercises,
  ...nudgingP3Exercises,
  ...narrativePersuasionP3Exercises,
  ...reactanceP3Exercises,
  ...consistencyP3Exercises,
  ...likingP3Exercises,
  ...primingP3Exercises,
  ...falseDichotomyP3Exercises,
  ...microtargetingP3Exercises,
  ...darkPatternsP3Exercises,
  ...digitalInfluenceP3Exercises,
  ...visualManipulationP3Exercises,
  ...repetitionP3Exercises,
  ...syntheticMediaP3Exercises,
];
