import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: begging_the_question).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const beggingTheQuestion: Technique = {
  id: 'begging_the_question',
  name: {
    de: 'Zirkelschluss (Begging the Question)',
    en: 'Zirkelschluss (Begging the Question)',
  },
  description: {
    de: 'Die zu beweisende Behauptung wird bereits vorausgesetzt (petitio principii).',
    en: 'Assuming the conclusion within the premises (petitio principii).',
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
    findings: 'Zirkelschluss (Begging the Question) ist als informeller Fehlschluss taxonomisch belegt (SEP/Walton); quantifizierte Wirkung nicht generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['hasty_generalization'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
