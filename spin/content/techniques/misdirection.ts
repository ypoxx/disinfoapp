import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: misdirection).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const misdirection: Technique = {
  id: 'misdirection',
  name: {
    de: 'Misdirection (Fehlleitung)',
    en: 'Misdirection (Fehlleitung)',
  },
  description: {
    de: 'Visuelle/sprachliche Lenkung weg von der eigentlich vorteilhaften Option.',
    en: 'Visual/verbal steering away from the option in the user\'s interest.',
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
    findings: 'Misdirection (Fehlleitung) ist ein in Dark-Pattern-Taxonomien etabliertes Muster (Gray et al. 2018; Mathur et al. 2019).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['confirmshaming'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
