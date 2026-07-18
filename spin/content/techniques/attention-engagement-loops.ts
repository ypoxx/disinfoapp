import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: attention_engagement_loops).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const attentionEngagementLoops: Technique = {
  id: 'attention_engagement_loops',
  name: {
    de: 'Attention and Engagement Loops',
    en: 'Attention and Engagement Loops',
  },
  description: {
    de: 'Digitale Muster zur Steigerung von Nutzungsdauer, Rückkehrverhalten oder Gewohnheitsbildung.',
    en: 'Digital patterns that increase time-on-app, return behavior, or habit formation.',
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
      'Policy (2022) - Dark Commercial Patterns'
    ],
    findings: 'Engagement-orientierte Interface-Muster können Aufmerksamkeit und Rückkehrverhalten beeinflussen; konkrete Effektstärken unterscheiden sich stark nach Design, Nutzergruppe und Kontext.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['dark_patterns', 'gamification_variable_reward', 'doomscrolling_fomo_engineering'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
