import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: slippery_slope).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const slipperySlope: Technique = {
  id: 'slippery_slope',
  name: {
    de: 'Slippery Slope',
    en: 'Slippery Slope',
  },
  description: {
    de: 'Behauptung, ein kleiner Schritt führe zwangsläufig zu einer extremen Folge.',
    en: 'Claiming a small step will inevitably lead to an extreme outcome.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies'
    ],
    findings: 'Slippery Slope ist als Argumentations-/Propagandamuster taxonomisch belegt (SEP/Fallacies); eine quantifizierte Persuasions-/Verhaltenswirkung ist NICHT generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['salami_tactics_gradualism'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
