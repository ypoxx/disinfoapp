import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: stereotyping).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const stereotyping: Technique = {
  id: 'stereotyping',
  name: {
    de: 'Stereotypisierung',
    en: 'Stereotypisierung',
  },
  description: {
    de: 'Vereinfachende, rigide Gruppenbilder zur Steuerung von Wahrnehmung und Bewertung.',
    en: 'Simplifying, rigid group images to steer perception and evaluation.',
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
      'Lippmann (1922) - Public Opinion'
    ],
    findings: 'Stereotype strukturieren Wahrnehmung und Bewertung von Gruppen (Lippmann; breite sozialpsychologische Tradition); als gezieltes Beeinflussungsmittel kontextabhaengig.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['scapegoating_othering', 'representativeness_heuristic'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
