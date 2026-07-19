import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: fake_urgency_countdown).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const fakeUrgencyCountdown: Technique = {
  id: 'fake_urgency_countdown',
  name: {
    de: 'Fake Urgency / Countdown Timers',
    en: 'Fake Urgency / Countdown Timers',
  },
  description: {
    de: 'Irreführende Verknappungs- oder Zeitdrucksignale in digitalen Interfaces.',
    en: 'Misleading scarcity or time-pressure signals in digital interfaces.',
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
      'Commission (2022) - Bringing Dark Patterns to Light',
      'Authority et al. (2023) - Harmful online choice architecture'
    ],
    findings: 'Künstliche Dringlichkeit kann Verlustaversion und Zeitdruck nutzen; regulatorische Quellen stützen Risiko- und Musterdefinition.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['dark_patterns', 'scarcity', 'hyperbolic_discounting'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
