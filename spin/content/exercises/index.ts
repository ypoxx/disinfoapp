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
// Welle R4
import { w4RepresentativenessHeuristic } from './wave4-representativeness-heuristic';
import { w4EndowmentEffect } from './wave4-endowment-effect';
import { w4IdentityProvenanceDeception } from './wave4-identity-provenance-deception';
import { w4IntegrityClashLaundering } from './wave4-integrity-clash-laundering';
import { w4AutomationBiasOverreliance } from './wave4-automation-bias-overreliance';
import { w4AnthropomorphicTrustCues } from './wave4-anthropomorphic-trust-cues';
import { w4DripPricing } from './wave4-drip-pricing';
import { w4Sneaking } from './wave4-sneaking';
import { w4BaitAndSwitch } from './wave4-bait-and-switch';
import { w4PriceComparisonPrevention } from './wave4-price-comparison-prevention';
import { w4ConsentAndPrivacyDarkPatterns } from './wave4-consent-and-privacy-dark-patterns';
import { w4DoorInTheFace } from './wave4-door-in-the-face';
import { w4DefaultStatusQuo } from './wave4-default-status-quo';
import { w4Sludge } from './wave4-sludge';
import { w4SubscriptionTrapObstruction } from './wave4-subscription-trap-obstruction';
import { w4UnityIdentity } from './wave4-unity-identity';
import { w4GuiltByAssociation } from './wave4-guilt-by-association';
import { w4CognitiveDissonanceInduction } from './wave4-cognitive-dissonance-induction';
import { w4GuiltAppeals } from './wave4-guilt-appeals';
import { w4GamificationVariableReward } from './wave4-gamification-variable-reward';
import { w4DoomscrollingFomoEngineering } from './wave4-doomscrolling-fomo-engineering';
import { w4AttentionEngagementLoops } from './wave4-attention-engagement-loops';

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
  // Welle R4
  ...w4RepresentativenessHeuristic,
  ...w4EndowmentEffect,
  ...w4IdentityProvenanceDeception,
  ...w4IntegrityClashLaundering,
  ...w4AutomationBiasOverreliance,
  ...w4AnthropomorphicTrustCues,
  ...w4DripPricing,
  ...w4Sneaking,
  ...w4BaitAndSwitch,
  ...w4PriceComparisonPrevention,
  ...w4ConsentAndPrivacyDarkPatterns,
  ...w4DoorInTheFace,
  ...w4DefaultStatusQuo,
  ...w4Sludge,
  ...w4SubscriptionTrapObstruction,
  ...w4UnityIdentity,
  ...w4GuiltByAssociation,
  ...w4CognitiveDissonanceInduction,
  ...w4GuiltAppeals,
  ...w4GamificationVariableReward,
  ...w4DoomscrollingFomoEngineering,
  ...w4AttentionEngagementLoops,
];
