import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: salami_tactics_gradualism).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const salamiTacticsGradualism: Technique = {
  id: 'salami_tactics_gradualism',
  name: {
    de: 'Salamitaktik / Gradualismus',
    en: 'Salamitaktik / Gradualismus',
  },
  description: {
    de: 'Schrittweise Normalisierung, sodass jede Einzelstufe akzeptabel erscheint.',
    en: 'Step-by-step normalization so each increment seems acceptable.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Freedman et al. (1966) - Compliance without pressure: The foot-in-the-door technique'
    ],
    findings: 'Schrittweise Eskalation kann spaetere groessere Zustimmung beguenstigen (Mechanismus-Analogie zu Foot-in-the-Door); als \'Salamitaktik\' nicht eigenstaendig gross quantifiziert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['slippery_slope'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
