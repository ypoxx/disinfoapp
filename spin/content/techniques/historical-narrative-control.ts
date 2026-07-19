import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: historical_narrative_control).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const historicalNarrativeControl: Technique = {
  id: 'historical_narrative_control',
  name: {
    de: 'Kontrolle des Geschichtsbildes',
    en: 'Kontrolle des Geschichtsbildes',
  },
  description: {
    de: 'Steuerung der Deutung von Geschichte zur Legitimation der Gegenwart.',
    en: 'Steering the interpretation of history to legitimize the present.',
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
    findings: 'Steuerung der Deutung von Geschichte zur Legitimation der Gegenwart.',
    uncertainty: {
      confidence: 0.2,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['agenda_setting'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
