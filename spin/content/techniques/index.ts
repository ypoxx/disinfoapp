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
];

export const techniqueMap = new Map<string, Technique>(
  techniques.map(t => [t.id, t])
);

export function getTechnique(id: string): Technique | undefined {
  return techniqueMap.get(id);
}
