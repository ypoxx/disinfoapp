import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: confirmshaming).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const confirmshaming: Technique = {
  id: 'confirmshaming',
  name: {
    de: 'Confirmshaming',
    en: 'Confirmshaming',
  },
  description: {
    de: 'Interface-Text, der Ablehnung moralisch, sozial oder emotional beschämt.',
    en: 'Interface text that morally, socially, or emotionally shames declining.',
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
      'Commission (2022) - Bringing Dark Patterns to Light',
      'India (2023) - Guidelines for Prevention and Regulation of Dark Patterns'
    ],
    findings: 'Confirmshaming ist als Muster definitorisch/regulatorisch relevant; konkrete Wirkung muss kontextuell geprüft werden.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['dark_patterns', 'guilt_appeals', 'misdirection'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
