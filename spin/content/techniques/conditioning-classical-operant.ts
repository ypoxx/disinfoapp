import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: conditioning_classical_operant).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const conditioningClassicalOperant: Technique = {
  id: 'conditioning_classical_operant',
  name: {
    de: 'Konditionierung (klassisch/operant)',
    en: 'Konditionierung (klassisch/operant)',
  },
  description: {
    de: 'Verknuepfung von Reizen/Belohnungen zur Formung von Reaktionen und Gewohnheiten.',
    en: 'Pairing stimuli/rewards to shape responses and habits.',
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
      'Pavlov (1927) - Conditioned Reflexes',
      'Skinner (1953) - Science and Human Behavior'
    ],
    findings: 'Assoziations- und Verstaerkungslernen formen Reaktionen/Gewohnheiten (Grundlagenforschung).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['gamification_variable_reward'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
