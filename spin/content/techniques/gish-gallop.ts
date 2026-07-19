import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: gish_gallop).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const gishGallop: Technique = {
  id: 'gish_gallop',
  name: {
    de: 'Gish Gallop',
    en: 'Gish Gallop',
  },
  description: {
    de: 'Überflutung mit vielen schwachen Argumenten, die nicht alle widerlegt werden können.',
    en: 'Overwhelming with many weak arguments that cannot all be rebutted.',
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
    findings: 'Gish Gallop ist als Argumentations-/Propagandamuster taxonomisch belegt (SEP/Fallacies); eine quantifizierte Persuasions-/Verhaltenswirkung ist NICHT generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['conversational_persuasion_bombing', 'firehose_of_falsehood'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
