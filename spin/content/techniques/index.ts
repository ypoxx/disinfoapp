import type { Technique } from '../types';

import { framing } from './framing';
import { priming } from './priming';
import { anchoring } from './anchoring';
import { socialProof } from './social-proof';
import { scarcity } from './scarcity';
import { reciprocity } from './reciprocity';
import { authority } from './authority';
import { liking } from './liking';
import { consistency } from './consistency';
import { reactanceTheory } from './reactance-theory';
import { adHominem } from './ad-hominem';
import { falseDichotomy } from './false-dichotomy';
import { strawMan } from './straw-man';
import { equivocation } from './equivocation';
import { emotionalAppeal } from './emotional-appeal';
import { repetition } from './repetition';
import { illusoryTruthEffect } from './illusory-truth-effect';
import { pacingAndLeading } from './pacing-and-leading';
import { embeddedCommands } from './embedded-commands';
import { microtargeting } from './microtargeting';
import { digitalInfluence } from './digital-influence';
import { visualManipulation } from './visual-manipulation';
import { syntheticMedia } from './synthetic-media';
import { darkPatterns } from './dark-patterns';
import { nudging } from './nudging';
import { aiPersuasion } from './ai-persuasion';
import { narrativePersuasion } from './narrative-persuasion';
// Pilotwelle R3
import { palteringHalfTruth } from './paltering-half-truth';
import { agendaSetting } from './agenda-setting';
import { cherryPicking } from './cherry-picking';
import { falseBalance } from './false-balance';
import { lossAversion } from './loss-aversion';
import { decoyEffect } from './decoy-effect';
import { availabilityHeuristic } from './availability-heuristic';
import { confirmationBias } from './confirmation-bias';
import { voiceCloningVishing } from './voice-cloning-vishing';
import { sycophancy } from './sycophancy';
// Welle R4
import { representativenessHeuristic } from './representativeness-heuristic';
import { endowmentEffect } from './endowment-effect';
import { identityProvenanceDeception } from './identity-provenance-deception';
import { integrityClashLaundering } from './integrity-clash-laundering';
import { automationBiasOverreliance } from './automation-bias-overreliance';
import { anthropomorphicTrustCues } from './anthropomorphic-trust-cues';
import { dripPricing } from './drip-pricing';
import { sneaking } from './sneaking';
import { baitAndSwitch } from './bait-and-switch';
import { priceComparisonPrevention } from './price-comparison-prevention';
import { consentAndPrivacyDarkPatterns } from './consent-and-privacy-dark-patterns';
import { doorInTheFace } from './door-in-the-face';
import { defaultStatusQuo } from './default-status-quo';
import { sludge } from './sludge';
import { subscriptionTrapObstruction } from './subscription-trap-obstruction';
import { unityIdentity } from './unity-identity';
import { guiltByAssociation } from './guilt-by-association';
import { cognitiveDissonanceInduction } from './cognitive-dissonance-induction';
import { guiltAppeals } from './guilt-appeals';
import { gamificationVariableReward } from './gamification-variable-reward';
import { doomscrollingFomoEngineering } from './doomscrolling-fomo-engineering';
import { attentionEngagementLoops } from './attention-engagement-loops';
// Welle R5a
import { anaphora } from './anaphora';
import { fearUncertaintyDoubt } from './fear-uncertainty-doubt';
import { whataboutism } from './whataboutism';
import { slipperySlope } from './slippery-slope';
import { redHerring } from './red-herring';
import { gishGallop } from './gish-gallop';
import { motteAndBailey } from './motte-and-bailey';
import { loadedLanguage } from './loaded-language';
import { scapegoatingOthering } from './scapegoating-othering';
import { doubleStandards } from './double-standards';
import { beggingTheQuestion } from './begging-the-question';
import { hastyGeneralization } from './hasty-generalization';
import { falseCausePostHoc } from './false-cause-post-hoc';
import { appealToIgnorance } from './appeal-to-ignorance';
import { appealToNature } from './appeal-to-nature';
import { appealToTradition } from './appeal-to-tradition';
import { compositionDivision } from './composition-division';
import { middleGroundFallacy } from './middle-ground-fallacy';
import { loadedQuestion } from './loaded-question';
import { conspiracyTheoryNarratives } from './conspiracy-theory-narratives';
// Welle R5b
import { parasocialManipulation } from './parasocial-manipulation';
import { footInTheDoor } from './foot-in-the-door';
import { mereExposureEffect } from './mere-exposure-effect';
import { behavioralMimicry } from './behavioral-mimicry';
import { butYouAreFree } from './but-you-are-free';
import { sunkCostEscalation } from './sunk-cost-escalation';
import { stereotyping } from './stereotyping';
import { primacyOrderEffects } from './primacy-order-effects';
import { groupthink } from './groupthink';
import { conditioningClassicalOperant } from './conditioning-classical-operant';
import { salamiTacticsGradualism } from './salami-tactics-gradualism';
import { hyperbolicDiscounting } from './hyperbolic-discounting';
import { haloEffect } from './halo-effect';
import { negativityBias } from './negativity-bias';
import { optimismBias } from './optimism-bias';
import { peakEndRule } from './peak-end-rule';
import { ikeaEffect } from './ikea-effect';
import { mentalAccounting } from './mental-accounting';
import { nemawashi } from './nemawashi';
// Welle R5c
import { interactiveAiPersuasion } from './interactive-ai-persuasion';
import { aiCompanionEmotionalRetention } from './ai-companion-emotional-retention';
import { coordinatedInauthenticAmplification } from './coordinated-inauthentic-amplification';
import { agenticDecisionCapture } from './agentic-decision-capture';
import { aiDeceptionScheming } from './ai-deception-scheming';
import { conversationalPersuasionBombing } from './conversational-persuasion-bombing';
import { syntheticIntimacyRetention } from './synthetic-intimacy-retention';
import { confirmshaming } from './confirmshaming';
import { fakeUrgencyCountdown } from './fake-urgency-countdown';
import { astroturfingSockpuppets } from './astroturfing-sockpuppets';
import { dataVoidsSeoManipulation } from './data-voids-seo-manipulation';
import { searchEngineManipulationEffect } from './search-engine-manipulation-effect';
import { disguisedAds } from './disguised-ads';
import { decontextualizationCheapfakes } from './decontextualization-cheapfakes';
import { firehoseOfFalsehood } from './firehose-of-falsehood';
import { blackGreyWhitePropaganda } from './black-grey-white-propaganda';
import { manufacturedCrisisExploitation } from './manufactured-crisis-exploitation';
import { overtonWindowShifting } from './overton-window-shifting';
import { historicalNarrativeControl } from './historical-narrative-control';
import { misdirection } from './misdirection';
import { fakeSocialProof } from './fake-social-proof';
import { forcedAction } from './forced-action';
import { nagging } from './nagging';
import { trickWording } from './trick-wording';
import { intermediateCurrency } from './intermediate-currency';
import { friendSpam } from './friend-spam';
import { divideAndRule } from './divide-and-rule';

export const techniques: Technique[] = [
  framing,
  priming,
  anchoring,
  socialProof,
  scarcity,
  reciprocity,
  authority,
  liking,
  consistency,
  reactanceTheory,
  adHominem,
  falseDichotomy,
  strawMan,
  equivocation,
  emotionalAppeal,
  repetition,
  illusoryTruthEffect,
  pacingAndLeading,
  embeddedCommands,
  microtargeting,
  digitalInfluence,
  visualManipulation,
  syntheticMedia,
  darkPatterns,
  nudging,
  aiPersuasion,
  narrativePersuasion,
  // Pilotwelle R3
  palteringHalfTruth,
  agendaSetting,
  cherryPicking,
  falseBalance,
  lossAversion,
  decoyEffect,
  availabilityHeuristic,
  confirmationBias,
  voiceCloningVishing,
  sycophancy,
  // Welle R4
  representativenessHeuristic,
  endowmentEffect,
  identityProvenanceDeception,
  integrityClashLaundering,
  automationBiasOverreliance,
  anthropomorphicTrustCues,
  dripPricing,
  sneaking,
  baitAndSwitch,
  priceComparisonPrevention,
  consentAndPrivacyDarkPatterns,
  doorInTheFace,
  defaultStatusQuo,
  sludge,
  subscriptionTrapObstruction,
  unityIdentity,
  guiltByAssociation,
  cognitiveDissonanceInduction,
  guiltAppeals,
  gamificationVariableReward,
  doomscrollingFomoEngineering,
  attentionEngagementLoops,
  // Welle R5a
  anaphora,
  fearUncertaintyDoubt,
  whataboutism,
  slipperySlope,
  redHerring,
  gishGallop,
  motteAndBailey,
  loadedLanguage,
  scapegoatingOthering,
  doubleStandards,
  beggingTheQuestion,
  hastyGeneralization,
  falseCausePostHoc,
  appealToIgnorance,
  appealToNature,
  appealToTradition,
  compositionDivision,
  middleGroundFallacy,
  loadedQuestion,
  conspiracyTheoryNarratives,
  // Welle R5b
  parasocialManipulation,
  footInTheDoor,
  mereExposureEffect,
  behavioralMimicry,
  butYouAreFree,
  sunkCostEscalation,
  stereotyping,
  primacyOrderEffects,
  groupthink,
  conditioningClassicalOperant,
  salamiTacticsGradualism,
  hyperbolicDiscounting,
  haloEffect,
  negativityBias,
  optimismBias,
  peakEndRule,
  ikeaEffect,
  mentalAccounting,
  nemawashi,
  // Welle R5c
  interactiveAiPersuasion,
  aiCompanionEmotionalRetention,
  coordinatedInauthenticAmplification,
  agenticDecisionCapture,
  aiDeceptionScheming,
  conversationalPersuasionBombing,
  syntheticIntimacyRetention,
  confirmshaming,
  fakeUrgencyCountdown,
  astroturfingSockpuppets,
  dataVoidsSeoManipulation,
  searchEngineManipulationEffect,
  disguisedAds,
  decontextualizationCheapfakes,
  firehoseOfFalsehood,
  blackGreyWhitePropaganda,
  manufacturedCrisisExploitation,
  overtonWindowShifting,
  historicalNarrativeControl,
  misdirection,
  fakeSocialProof,
  forcedAction,
  nagging,
  trickWording,
  intermediateCurrency,
  friendSpam,
  divideAndRule,
];

export const techniqueMap = new Map<string, Technique>(
  techniques.map(t => [t.id, t])
);

export function getTechnique(id: string): Technique | undefined {
  return techniqueMap.get(id);
}
