import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: appeal_to_tradition).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const appealToTradition: Technique = {
  id: 'appeal_to_tradition',
  name: {
    de: 'Argument der Tradition (Ad antiquitatem)',
    en: 'Argument der Tradition (Ad antiquitatem)',
  },
  description: {
    de: '\'Schon immer so\' wird als Begruendung genutzt.',
    en: 'Using \'we have always done it\' as justification.',
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
    findings: 'Argument der Tradition (Ad antiquitatem) ist als informeller Fehlschluss taxonomisch belegt (SEP/Walton); quantifizierte Wirkung nicht generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['appeal_to_nature', 'default_status_quo'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
