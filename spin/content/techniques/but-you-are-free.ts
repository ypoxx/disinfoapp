import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: but_you_are_free).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const butYouAreFree: Technique = {
  id: 'but_you_are_free',
  name: {
    de: '\'But You Are Free\' (BYAF)',
    en: '\'But You Are Free\' (BYAF)',
  },
  description: {
    de: 'Compliance steigt, wenn die Entscheidungsfreiheit explizit betont wird.',
    en: 'Compliance rises when freedom to refuse is made explicit.',
  },
  category: 'social_dynamics',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'high',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Carpenter (2013) - A Meta-Analysis of the Effectiveness of the \'But You Are Free\' Compliance-Gaining Technique'
    ],
    findings: 'Das explizite Betonen der Ablehnungsfreiheit erhöht die Compliance (Meta-Analyse).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['reactance_theory'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
