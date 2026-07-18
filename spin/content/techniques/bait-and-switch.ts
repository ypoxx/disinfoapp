import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: bait_and_switch).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const baitAndSwitch: Technique = {
  id: 'bait_and_switch',
  name: {
    de: 'Bait-and-Switch',
    en: 'Bait-and-Switch',
  },
  description: {
    de: 'Locken mit einem Angebot, das dann durch ein schlechteres ersetzt wird.',
    en: 'Luring with one offer, then substituting a worse one.',
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
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale'
    ],
    findings: 'Bait-and-Switch ist ein taxonomisch etabliertes Täuschungsmuster (sneaking); direkte Effektgrößen variieren nach Kontext.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['drip_pricing'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
