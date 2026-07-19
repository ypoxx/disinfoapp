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
// Welle R5a
import { wave5aAnaphora } from './wave5a-anaphora';
import { wave5aFearUncertaintyDoubt } from './wave5a-fear-uncertainty-doubt';
import { wave5aWhataboutism } from './wave5a-whataboutism';
import { wave5aSlipperySlope } from './wave5a-slippery-slope';
import { wave5aRedHerring } from './wave5a-red-herring';
import { wave5aGishGallop } from './wave5a-gish-gallop';
import { wave5aMotteAndBailey } from './wave5a-motte-and-bailey';
import { wave5aLoadedLanguage } from './wave5a-loaded-language';
import { wave5aScapegoatingOthering } from './wave5a-scapegoating-othering';
import { wave5aDoubleStandards } from './wave5a-double-standards';
import { wave5aBeggingTheQuestion } from './wave5a-begging-the-question';
import { wave5aHastyGeneralization } from './wave5a-hasty-generalization';
import { wave5aFalseCausePostHoc } from './wave5a-false-cause-post-hoc';
import { wave5aAppealToIgnorance } from './wave5a-appeal-to-ignorance';
import { wave5aAppealToNature } from './wave5a-appeal-to-nature';
import { wave5aAppealToTradition } from './wave5a-appeal-to-tradition';
import { wave5aCompositionDivision } from './wave5a-composition-division';
import { wave5aMiddleGroundFallacy } from './wave5a-middle-ground-fallacy';
import { wave5aLoadedQuestion } from './wave5a-loaded-question';
import { wave5aConspiracyTheoryNarratives } from './wave5a-conspiracy-theory-narratives';

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
  // Welle R5a
  ...wave5aAnaphora,
  ...wave5aFearUncertaintyDoubt,
  ...wave5aWhataboutism,
  ...wave5aSlipperySlope,
  ...wave5aRedHerring,
  ...wave5aGishGallop,
  ...wave5aMotteAndBailey,
  ...wave5aLoadedLanguage,
  ...wave5aScapegoatingOthering,
  ...wave5aDoubleStandards,
  ...wave5aBeggingTheQuestion,
  ...wave5aHastyGeneralization,
  ...wave5aFalseCausePostHoc,
  ...wave5aAppealToIgnorance,
  ...wave5aAppealToNature,
  ...wave5aAppealToTradition,
  ...wave5aCompositionDivision,
  ...wave5aMiddleGroundFallacy,
  ...wave5aLoadedQuestion,
  ...wave5aConspiracyTheoryNarratives,
];
