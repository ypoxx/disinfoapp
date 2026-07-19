import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: hyperbolic_discounting).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const hyperbolicDiscounting: Technique = {
  id: 'hyperbolic_discounting',
  name: {
    de: 'Hyperbolische Diskontierung',
    en: 'Hyperbolische Diskontierung',
  },
  description: {
    de: 'Sofortige Belohnungen werden gegenueber spaeteren stark uebergewichtet.',
    en: 'Immediate rewards strongly overweighted vs. later ones.',
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
      'Laibson (1997) - Golden Eggs and Hyperbolic Discounting'
    ],
    findings: 'Sofortige Belohnungen werden gegenueber spaeteren stark uebergewichtet. (belegt durch die zitierte Quelle).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['fake_urgency_countdown'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
