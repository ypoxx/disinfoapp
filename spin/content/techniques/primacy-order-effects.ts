import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: primacy_order_effects).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const primacyOrderEffects: Technique = {
  id: 'primacy_order_effects',
  name: {
    de: 'Primacy-/Reihenfolgeeffekt',
    en: 'Primacy-/Reihenfolgeeffekt',
  },
  description: {
    de: 'Reihenfolge der Information praegt den Gesamteindruck (frueh praesentiert wirkt staerker).',
    en: 'Order of information shapes the overall impression (earlier carries more weight).',
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
      'Asch (1946) - Forming Impressions of Personality'
    ],
    findings: 'Frueher praesentierte Information kann den Gesamteindruck ueberproportional praegen (Primacy); Effekt kontextabhaengig, neuere Replikationen uneinheitlich.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['framing'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
