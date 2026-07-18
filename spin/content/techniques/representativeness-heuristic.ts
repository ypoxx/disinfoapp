import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: representativeness_heuristic).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const representativenessHeuristic: Technique = {
  id: 'representativeness_heuristic',
  name: {
    de: 'Repraesentativitaetsheuristik',
    en: 'Repraesentativitaetsheuristik',
  },
  description: {
    de: 'Urteile nach Aehnlichkeit zu Stereotypen statt nach Basisraten.',
    en: 'Judging by similarity to stereotypes, ignoring base rates.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'high',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Tversky et al. (1974) - Judgment under Uncertainty: Heuristics and Biases'
    ],
    findings: 'Urteile nach Aehnlichkeit zu Stereotypen statt nach Basisraten. (belegt durch die zitierte Quelle).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: [],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
