import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: unity_identity).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const unityIdentity: Technique = {
  id: 'unity_identity',
  name: {
    de: 'Unity / Identitäts-Appell',
    en: 'Unity / Identitäts-Appell',
  },
  description: {
    de: 'Einfluss über geteilte Identität und Zugehörigkeit (\'wir\').',
    en: 'Influence through shared identity and belonging (\'we\').',
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
      'Cialdini (1984) - Influence: The Psychology of Persuasion'
    ],
    findings: 'Geteilte Identität/Zugehörigkeit kann Überzeugung und Compliance erhöhen (Cialdinis 7. Prinzip \'Unity\'; In-Group-Dynamik).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['social_proof'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
