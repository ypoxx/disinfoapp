import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: halo_effect).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const haloEffect: Technique = {
  id: 'halo_effect',
  name: {
    de: 'Halo-Effekt',
    en: 'Halo-Effekt',
  },
  description: {
    de: 'Ein positiver Gesamteindruck faerbt auf Einzelurteile ab.',
    en: 'One positive overall impression colours specific judgments.',
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
      'Nisbett et al. (1977) - The Halo Effect: Evidence for Unconscious Alteration of Judgments'
    ],
    findings: 'Ein positiver Gesamteindruck faerbt auf Einzelurteile ab. (belegt durch die zitierte Quelle).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['liking', 'authority'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
