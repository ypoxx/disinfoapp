import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: mental_accounting).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const mentalAccounting: Technique = {
  id: 'mental_accounting',
  name: {
    de: 'Mental Accounting',
    en: 'Mental Accounting',
  },
  description: {
    de: 'Geld wird je nach mentalem \'Konto\' unterschiedlich behandelt.',
    en: 'Money is treated differently by mental \'account\'.',
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
      'Thaler (1985) - Mental Accounting and Consumer Choice'
    ],
    findings: 'Geld wird je nach mentalem \'Konto\' unterschiedlich behandelt. (belegt durch die zitierte Quelle).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['drip_pricing', 'decoy_effect'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
