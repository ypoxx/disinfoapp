import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: overton_window_shifting).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const overtonWindowShifting: Technique = {
  id: 'overton_window_shifting',
  name: {
    de: 'Verschieben des Overton-Fensters',
    en: 'Verschieben des Overton-Fensters',
  },
  description: {
    de: 'Den Bereich politisch sagbarer Positionen schrittweise verschieben.',
    en: 'Gradually shifting the range of politically sayable positions.',
  },
  category: 'influence_ops',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [],
    findings: 'Den Bereich politisch sagbarer Positionen schrittweise verschieben.',
    uncertainty: {
      confidence: 0.2,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['repetition'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
