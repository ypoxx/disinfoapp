import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: scapegoating_othering).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const scapegoatingOthering: Technique = {
  id: 'scapegoating_othering',
  name: {
    de: 'Scapegoating / Othering',
    en: 'Scapegoating / Othering',
  },
  description: {
    de: 'Zuschreibung von Schuld an eine Gruppe und deren Konstruktion als bedrohliche \'Andere\'.',
    en: 'Assigning blame to a group and constructing it as a threatening \'other\'.',
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
    studies: [
      'Hansen (2015) - Fallacies'
    ],
    findings: 'Scapegoating / Othering ist als Argumentations-/Propagandamuster taxonomisch belegt (SEP/Fallacies); eine quantifizierte Persuasions-/Verhaltenswirkung ist NICHT generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['fear_uncertainty_doubt', 'stereotyping', 'networked_harassment', 'divide_and_rule'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
