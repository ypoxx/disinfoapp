import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: door_in_the_face).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const doorInTheFace: Technique = {
  id: 'door_in_the_face',
  name: {
    de: 'Door-in-the-Face',
    en: 'Door-in-the-Face',
  },
  description: {
    de: 'Compliance-Technik, bei der eine große abgelehnte Bitte eine kleinere Bitte akzeptabler erscheinen lässt.',
    en: 'Compliance technique where a large rejected request makes a smaller request seem more acceptable.',
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
      'Cialdini (1984) - Influence: The Psychology of Persuasion',
      'Feeley et al. (2012) - The Door-in-the-Face Persuasive Message Strategy: A Meta-Analysis of the First 35 Years'
    ],
    findings: 'Die Technik ist theoretisch und praktisch bekannt; robuste kontextspezifische Effektbelege sollten ergänzt werden.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['reciprocity'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
