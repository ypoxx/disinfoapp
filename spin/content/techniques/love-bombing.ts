import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: love_bombing).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const loveBombing: Technique = {
  id: 'love_bombing',
  name: {
    de: 'Love Bombing',
    en: 'Love Bombing',
  },
  description: {
    de: 'Übermäßige Zuwendung, Idealisierung oder Näheaufbau zur schnellen Bindung und späteren Kontrolle.',
    en: 'Excessive affection, idealization, or closeness to bond quickly and later control.',
  },
  category: 'coercive_control',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [],
    findings: 'Übermäßige Zuwendung, Idealisierung oder Näheaufbau zur schnellen Bindung und späteren Kontrolle.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['synthetic_intimacy_retention', 'gaslighting'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
  seriousMode: true,
};
