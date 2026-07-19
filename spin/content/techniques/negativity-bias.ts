import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: negativity_bias).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const negativityBias: Technique = {
  id: 'negativity_bias',
  name: {
    de: 'Negativitaets-Bias',
    en: 'Negativitaets-Bias',
  },
  description: {
    de: 'Negatives wirkt staerker als gleich starkes Positives.',
    en: 'Negative information weighs more than equivalent positive.',
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
      'Rozin et al. (2001) - Negativity Bias, Negativity Dominance, and Contagion'
    ],
    findings: 'Negatives wirkt staerker als gleich starkes Positives. (belegt durch die zitierte Quelle).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['doomscrolling_fomo_engineering', 'optimism_bias'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
