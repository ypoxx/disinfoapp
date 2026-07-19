import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: fear_uncertainty_doubt).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const fearUncertaintyDoubt: Technique = {
  id: 'fear_uncertainty_doubt',
  name: {
    de: 'Fear, Uncertainty and Doubt (FUD)',
    en: 'Fear, Uncertainty and Doubt (FUD)',
  },
  description: {
    de: 'Kommunikation, die Angst, Unsicherheit und Zweifel strategisch verstärkt, um Akzeptanz oder Ablehnung zu beeinflussen.',
    en: 'Communication that strategically amplifies fear, uncertainty, and doubt to influence acceptance or rejection.',
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
      'Tannenbaum et al. (2015) - Appealing to fear: A meta-analysis of fear appeal effectiveness and theories'
    ],
    findings: 'Angstappelle können unter Bedingungen wirken, aber FUD-Claims müssen zwischen begründeter Risikokommunikation und manipulativer Unsicherheitsverstärkung unterscheiden.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['emotional_appeal', 'scarcity', 'scapegoating_othering', 'manufactured_crisis_exploitation', 'availability_heuristic'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
