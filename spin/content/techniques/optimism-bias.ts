import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: optimism_bias).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const optimismBias: Technique = {
  id: 'optimism_bias',
  name: {
    de: 'Optimismus-Bias',
    en: 'Optimismus-Bias',
  },
  description: {
    de: 'Eigene Risiken werden systematisch unterschaetzt.',
    en: 'Systematic underestimation of one\'s own risks.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Weinstein (1980) - Unrealistic Optimism About Future Life Events'
    ],
    findings: 'Eigene Risiken werden systematisch unterschaetzt. (belegt durch die zitierte Quelle).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['negativity_bias'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
