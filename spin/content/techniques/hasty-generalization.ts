import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: hasty_generalization).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const hastyGeneralization: Technique = {
  id: 'hasty_generalization',
  name: {
    de: 'Voreilige Verallgemeinerung',
    en: 'Voreilige Verallgemeinerung',
  },
  description: {
    de: 'Verallgemeinerung aus zu wenigen/unrepraesentativen Faellen.',
    en: 'Generalizing from too few or unrepresentative cases.',
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
    findings: 'Voreilige Verallgemeinerung ist als informeller Fehlschluss taxonomisch belegt (SEP/Walton); quantifizierte Wirkung nicht generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['cherry_picking', 'composition_division', 'begging_the_question'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
