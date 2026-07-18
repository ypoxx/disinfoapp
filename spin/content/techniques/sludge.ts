import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: sludge).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const sludge: Technique = {
  id: 'sludge',
  name: {
    de: 'Sludge / Bad Friction',
    en: 'Sludge / Bad Friction',
  },
  description: {
    de: 'Reibung, die Nutzer:innen von in ihrem Interesse liegenden Handlungen abhält.',
    en: 'Friction that deters users from actions in their own interest.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Authority et al. (2023) - Harmful online choice architecture',
      'Commission (2022) - Bringing Dark Patterns to Light'
    ],
    findings: 'Asymmetrische Friktion kann Autonomie und Wahlfreiheit untergraben; regulatorische Quellen stützen Kontext und Definition, nicht Effektgröße.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['dark_patterns', 'subscription_trap_obstruction'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
