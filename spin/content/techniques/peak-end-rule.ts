import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: peak_end_rule).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const peakEndRule: Technique = {
  id: 'peak_end_rule',
  name: {
    de: 'Peak-End-Regel',
    en: 'Peak-End-Regel',
  },
  description: {
    de: 'Erlebnisse werden nach Hoehepunkt und Ende bewertet, nicht nach Summe.',
    en: 'Experiences judged by peak and end, not the sum.',
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
      'Kahneman et al. (1993) - When More Pain Is Preferred to Less: Adding a Better End'
    ],
    findings: 'Erlebnisse werden nach Hoehepunkt und Ende bewertet, nicht nach Summe. (belegt durch die zitierte Quelle).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['emotional_appeal'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
