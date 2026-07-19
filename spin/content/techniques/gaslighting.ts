import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: gaslighting).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const gaslighting: Technique = {
  id: 'gaslighting',
  name: {
    de: 'Gaslighting',
    en: 'Gaslighting',
  },
  description: {
    de: 'Relationale Manipulation, die Wahrnehmung, Erinnerung oder Urteilsfähigkeit einer Person systematisch in Zweifel zieht.',
    en: 'Relational manipulation that systematically casts doubt on a person\'s perception, memory, or judgment.',
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
    findings: 'Relationale Manipulation, die Wahrnehmung, Erinnerung oder Urteilsfähigkeit einer Person systematisch in Zweifel zieht.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['ai_companion_emotional_retention', 'love_bombing', 'darvo', 'zersetzung_decomposition'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
