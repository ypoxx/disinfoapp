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
// Welle R5b
import { wave5bParasocialManipulation } from './wave5b-parasocial-manipulation';
import { wave5bFootInTheDoor } from './wave5b-foot-in-the-door';
import { wave5bMereExposureEffect } from './wave5b-mere-exposure-effect';
import { wave5bBehavioralMimicry } from './wave5b-behavioral-mimicry';
import { wave5bButYouAreFree } from './wave5b-but-you-are-free';
import { wave5bSunkCostEscalation } from './wave5b-sunk-cost-escalation';
import { wave5bStereotyping } from './wave5b-stereotyping';
import { wave5bPrimacyOrderEffects } from './wave5b-primacy-order-effects';
import { wave5bGroupthink } from './wave5b-groupthink';
import { wave5bConditioningClassicalOperant } from './wave5b-conditioning-classical-operant';
import { wave5bSalamiTacticsGradualism } from './wave5b-salami-tactics-gradualism';
import { wave5bHyperbolicDiscounting } from './wave5b-hyperbolic-discounting';
import { wave5bHaloEffect } from './wave5b-halo-effect';
import { wave5bNegativityBias } from './wave5b-negativity-bias';
import { wave5bOptimismBias } from './wave5b-optimism-bias';
import { wave5bPeakEndRule } from './wave5b-peak-end-rule';
import { wave5bIkeaEffect } from './wave5b-ikea-effect';
import { wave5bMentalAccounting } from './wave5b-mental-accounting';
import { wave5bNemawashi } from './wave5b-nemawashi';
// Welle R5c
import { wave5cInteractiveAiPersuasion } from './wave5c-interactive-ai-persuasion';
import { wave5cAiCompanionEmotionalRetention } from './wave5c-ai-companion-emotional-retention';
import { wave5cCoordinatedInauthenticAmplification } from './wave5c-coordinated-inauthentic-amplification';
import { wave5cAgenticDecisionCapture } from './wave5c-agentic-decision-capture';
import { wave5cAiDeceptionScheming } from './wave5c-ai-deception-scheming';
import { wave5cConversationalPersuasionBombing } from './wave5c-conversational-persuasion-bombing';
import { wave5cSyntheticIntimacyRetention } from './wave5c-synthetic-intimacy-retention';
import { wave5cConfirmshaming } from './wave5c-confirmshaming';
import { wave5cFakeUrgencyCountdown } from './wave5c-fake-urgency-countdown';
import { wave5cAstroturfingSockpuppets } from './wave5c-astroturfing-sockpuppets';
import { wave5cDataVoidsSeoManipulation } from './wave5c-data-voids-seo-manipulation';
import { wave5cSearchEngineManipulationEffect } from './wave5c-search-engine-manipulation-effect';
import { wave5cDisguisedAds } from './wave5c-disguised-ads';
import { wave5cDecontextualizationCheapfakes } from './wave5c-decontextualization-cheapfakes';
import { wave5cFirehoseOfFalsehood } from './wave5c-firehose-of-falsehood';
import { wave5cBlackGreyWhitePropaganda } from './wave5c-black-grey-white-propaganda';
import { wave5cManufacturedCrisisExploitation } from './wave5c-manufactured-crisis-exploitation';
import { wave5cOvertonWindowShifting } from './wave5c-overton-window-shifting';
import { wave5cHistoricalNarrativeControl } from './wave5c-historical-narrative-control';
import { wave5cMisdirection } from './wave5c-misdirection';
import { wave5cFakeSocialProof } from './wave5c-fake-social-proof';
import { wave5cForcedAction } from './wave5c-forced-action';
import { wave5cNagging } from './wave5c-nagging';
import { wave5cTrickWording } from './wave5c-trick-wording';
import { wave5cIntermediateCurrency } from './wave5c-intermediate-currency';
import { wave5cFriendSpam } from './wave5c-friend-spam';
import { wave5cDivideAndRule } from './wave5c-divide-and-rule';
// Welle R6 (Zwang & Kontrolle)
import { wave6Gaslighting } from './wave6-gaslighting';
import { wave6LoveBombing } from './wave6-love-bombing';
import { wave6Darvo } from './wave6-darvo';
import { wave6CoerciveControl } from './wave6-coercive-control';
import { wave6CensorshipChillingEffects } from './wave6-censorship-chilling-effects';
import { wave6SocietalAtomization } from './wave6-societal-atomization';
import { wave6ZersetzungDecomposition } from './wave6-zersetzung-decomposition';
import { wave6NetworkedHarassment } from './wave6-networked-harassment';
import { wave6ProxyAttack } from './wave6-proxy-attack';
import { wave6KompromatLeverage } from './wave6-kompromat-leverage';

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
  // Welle R5b
  ...wave5bParasocialManipulation,
  ...wave5bFootInTheDoor,
  ...wave5bMereExposureEffect,
  ...wave5bBehavioralMimicry,
  ...wave5bButYouAreFree,
  ...wave5bSunkCostEscalation,
  ...wave5bStereotyping,
  ...wave5bPrimacyOrderEffects,
  ...wave5bGroupthink,
  ...wave5bConditioningClassicalOperant,
  ...wave5bSalamiTacticsGradualism,
  ...wave5bHyperbolicDiscounting,
  ...wave5bHaloEffect,
  ...wave5bNegativityBias,
  ...wave5bOptimismBias,
  ...wave5bPeakEndRule,
  ...wave5bIkeaEffect,
  ...wave5bMentalAccounting,
  ...wave5bNemawashi,
  // Welle R5c
  ...wave5cInteractiveAiPersuasion,
  ...wave5cAiCompanionEmotionalRetention,
  ...wave5cCoordinatedInauthenticAmplification,
  ...wave5cAgenticDecisionCapture,
  ...wave5cAiDeceptionScheming,
  ...wave5cConversationalPersuasionBombing,
  ...wave5cSyntheticIntimacyRetention,
  ...wave5cConfirmshaming,
  ...wave5cFakeUrgencyCountdown,
  ...wave5cAstroturfingSockpuppets,
  ...wave5cDataVoidsSeoManipulation,
  ...wave5cSearchEngineManipulationEffect,
  ...wave5cDisguisedAds,
  ...wave5cDecontextualizationCheapfakes,
  ...wave5cFirehoseOfFalsehood,
  ...wave5cBlackGreyWhitePropaganda,
  ...wave5cManufacturedCrisisExploitation,
  ...wave5cOvertonWindowShifting,
  ...wave5cHistoricalNarrativeControl,
  ...wave5cMisdirection,
  ...wave5cFakeSocialProof,
  ...wave5cForcedAction,
  ...wave5cNagging,
  ...wave5cTrickWording,
  ...wave5cIntermediateCurrency,
  ...wave5cFriendSpam,
  ...wave5cDivideAndRule,
  // Welle R6
  ...wave6Gaslighting,
  ...wave6LoveBombing,
  ...wave6Darvo,
  ...wave6CoerciveControl,
  ...wave6CensorshipChillingEffects,
  ...wave6SocietalAtomization,
  ...wave6ZersetzungDecomposition,
  ...wave6NetworkedHarassment,
  ...wave6ProxyAttack,
  ...wave6KompromatLeverage,
];
