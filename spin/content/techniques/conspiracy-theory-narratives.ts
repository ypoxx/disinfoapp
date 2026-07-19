import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: conspiracy_theory_narratives).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const conspiracyTheoryNarratives: Technique = {
  id: 'conspiracy_theory_narratives',
  name: {
    de: 'Verschwoerungsnarrative',
    en: 'Verschwoerungsnarrative',
  },
  description: {
    de: 'Erklaerung von Ereignissen durch geheime, boeswillige Plaene maechtiger Akteure.',
    en: 'Explaining events via secret malevolent plots of powerful actors.',
  },
  category: 'emotional_manipulation',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Douglas et al. (2017) - The Psychology of Conspiracy Theories'
    ],
    findings: 'Verschwoerungsglaube wird durch epistemische, existenzielle und soziale Motive gespeist (Review); er ist schwer zu korrigieren und immun gegen Gegenbeweise.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['false_cause_post_hoc', 'narrative_persuasion'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
