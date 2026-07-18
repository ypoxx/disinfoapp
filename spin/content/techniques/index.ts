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
];

export const techniqueMap = new Map<string, Technique>(
  techniques.map(t => [t.id, t])
);

export function getTechnique(id: string): Technique | undefined {
  return techniqueMap.get(id);
}
