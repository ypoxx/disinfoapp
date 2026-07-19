import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: loaded_question).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const loadedQuestion: Technique = {
  id: 'loaded_question',
  name: {
    de: 'Suggestiv-/Fangfrage (Complex Question)',
    en: 'Suggestiv-/Fangfrage (Complex Question)',
  },
  description: {
    de: 'Eine Frage setzt eine unbewiesene Annahme voraus.',
    en: 'A question that presupposes an unproven assumption.',
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
    findings: 'Suggestiv-/Fangfrage (Complex Question) ist als informeller Fehlschluss taxonomisch belegt (SEP/Walton); quantifizierte Wirkung nicht generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['loaded_language'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
