import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: anaphora).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const anaphora: Technique = {
  id: 'anaphora',
  name: {
    de: 'Anapher',
    en: 'Anapher',
  },
  description: {
    de: 'Wiederholung eines Wortes oder Satzanfangs in aufeinanderfolgenden Satzteilen.',
    en: 'Repetition of a word or opening phrase across successive clauses.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [],
    findings: 'Wiederholung eines Wortes oder Satzanfangs in aufeinanderfolgenden Satzteilen.',
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
