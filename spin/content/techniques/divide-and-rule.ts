import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: divide_and_rule).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const divideAndRule: Technique = {
  id: 'divide_and_rule',
  name: {
    de: 'Divide and Rule (Teile und herrsche)',
    en: 'Divide and Rule (Teile und herrsche)',
  },
  description: {
    de: 'Gezieltes Schueren von Spaltung und Misstrauen zwischen Gruppen, um deren Koalitionsbildung gegen den Maechtigen zu verhindern.',
    en: 'Deliberately fostering division and distrust between groups to prevent them from forming a coalition against the power-holder.',
  },
  category: 'influence_ops',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Acemoglu et al. (2004) - Kleptocracy and Divide-and-Rule: A Model of Personal Rule',
      'Kant (1795) - Zum ewigen Frieden. Ein philosophischer Entwurf'
    ],
    findings: 'Machthaber koennen durch gezieltes Schueren von Misstrauen und Rivalitaet zwischen untergeordneten Gruppen deren Koalitionsbildung verhindern und so ihre eigene Position stabilisieren (divide et impera).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['societal_atomization', 'scapegoating_othering'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
