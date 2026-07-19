import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: appeal_to_nature).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const appealToNature: Technique = {
  id: 'appeal_to_nature',
  name: {
    de: 'Argument der Natuerlichkeit (Ad naturam)',
    en: 'Argument der Natuerlichkeit (Ad naturam)',
  },
  description: {
    de: '\'Natuerlich\' wird mit \'gut/richtig\' gleichgesetzt.',
    en: 'Equating \'natural\' with \'good/right\'.',
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
    findings: 'Argument der Natuerlichkeit (Ad naturam) ist als informeller Fehlschluss taxonomisch belegt (SEP/Walton); quantifizierte Wirkung nicht generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['appeal_to_tradition'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
