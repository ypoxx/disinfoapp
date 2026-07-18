export { quickChecks } from './quick-checks';
export { techniqueMatches } from './technique-matches';
export { responseChoices } from './response-choices';
export { spotTheFlags } from './spot-the-flags';
export { fillBlanks } from './fill-blanks';
export { quizBank } from './quiz-bank';
export { waveR2 } from './wave-r2';

import type { Exercise } from '../types';
import { quickChecks } from './quick-checks';
import { techniqueMatches } from './technique-matches';
import { responseChoices } from './response-choices';
import { spotTheFlags } from './spot-the-flags';
import { fillBlanks } from './fill-blanks';
import { quizBank } from './quiz-bank';
import { waveR2 } from './wave-r2';
// Pilotwelle R3 — je Eintrag 3 Übungen aus der Produktionslinie
import { pilotAgendaSetting } from './pilot-agenda-setting';
import { pilotAvailabilityHeuristic } from './pilot-availability-heuristic';
import { pilotCherryPicking } from './pilot-cherry-picking';
import { pilotConfirmationBias } from './pilot-confirmation-bias';
import { pilotDecoyEffect } from './pilot-decoy-effect';
import { pilotFalseBalance } from './pilot-false-balance';
import { pilotLossAversion } from './pilot-loss-aversion';
import { pilotPalteringHalfTruth } from './pilot-paltering-half-truth';
import { pilotSycophancy } from './pilot-sycophancy';
import { pilotVoiceCloningVishing } from './pilot-voice-cloning-vishing';

/** All exercises combined into a single array */
export const exercises: Exercise[] = [
  ...quickChecks,
  ...techniqueMatches,
  ...responseChoices,
  ...spotTheFlags,
  ...fillBlanks,
  ...quizBank,
  ...waveR2,
  ...pilotAgendaSetting,
  ...pilotAvailabilityHeuristic,
  ...pilotCherryPicking,
  ...pilotConfirmationBias,
  ...pilotDecoyEffect,
  ...pilotFalseBalance,
  ...pilotLossAversion,
  ...pilotPalteringHalfTruth,
  ...pilotSycophancy,
  ...pilotVoiceCloningVishing,
];
