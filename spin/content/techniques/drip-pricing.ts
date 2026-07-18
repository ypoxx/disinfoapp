import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: drip_pricing).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const dripPricing: Technique = {
  id: 'drip_pricing',
  name: {
    de: 'Drip Pricing',
    en: 'Drip Pricing',
  },
  description: {
    de: 'Schrittweises Offenlegen zusätzlicher Kosten im Kaufprozess.',
    en: 'Gradually revealing additional costs during the purchase process.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Commission (2022) - Bringing Dark Patterns to Light'
    ],
    findings: 'Drip Pricing ist regulatorisch und verbraucherschutzrechtlich relevant; empirische Effektgröße variiert nach Markt und Disclosure-Design.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['dark_patterns', 'bait_and_switch', 'sneaking', 'price_comparison_prevention'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
