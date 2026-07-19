import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: groupthink).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const groupthink: Technique = {
  id: 'groupthink',
  name: {
    de: 'Groupthink-Steuerung',
    en: 'Groupthink-Steuerung',
  },
  description: {
    de: 'Konformitaetsdruck in Gruppen unterdrueckt abweichende Sicht und kritische Pruefung.',
    en: 'Conformity pressure in groups suppresses dissent and critical scrutiny.',
  },
  category: 'social_dynamics',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Janis (1972) - Victims of Groupthink: A Psychological Study of Foreign-Policy Decisions and Fiascoes',
      'Baron (2005) - So Right It\'s Wrong: Groupthink and the Ubiquitous Nature of Polarized Group Decision Making'
    ],
    findings: 'Konsens-/Konformitaetsdruck kann kritische Pruefung in Gruppen unterdruecken (Janis); die spezifischen Antezedenzien sind jedoch empirisch nicht belegt (Baron 2005).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['social_proof', 'unity_identity', 'nemawashi'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
