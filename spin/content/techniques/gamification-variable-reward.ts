import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: gamification_variable_reward).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const gamificationVariableReward: Technique = {
  id: 'gamification_variable_reward',
  name: {
    de: 'Gamification / Variable Reward Schedules',
    en: 'Gamification / Variable Reward Schedules',
  },
  description: {
    de: 'Engagement-Design durch variable Belohnungen, Streaks, Badges oder zufallsnahe Rückmeldungen.',
    en: 'Engagement design via variable rewards, streaks, badges, or near-random feedback.',
  },
  category: 'digital_influence',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Sailer et al. (2020) - The Gamification of Learning: A Meta-analysis'
    ],
    findings: 'Gamification kann Engagement/Lernen beeinflussen (g≈0.4-0.5; Sailer & Homner 2020) - jedoch im BILDUNGSkontext; die Übertragung auf manipulative Consumer-/Habit-Loops und eine Schadenswirkung ist NICHT belegt.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['attention_engagement_loops'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
