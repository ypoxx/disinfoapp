import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: ikea_effect).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const ikeaEffect: Technique = {
  id: 'ikea_effect',
  name: {
    de: 'IKEA-Effekt',
    en: 'IKEA-Effekt',
  },
  description: {
    de: 'Selbst (mit-)erschaffene Dinge werden hoeher bewertet.',
    en: 'Self-made things are valued more highly.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Norton et al. (2012) - The IKEA Effect: When Labor Leads to Love'
    ],
    findings: 'Selbst (mit-)erschaffene Dinge werden hoeher bewertet. (belegt durch die zitierte Quelle).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['endowment_effect'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
