import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: conversational_persuasion_bombing).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const conversationalPersuasionBombing: Technique = {
  id: 'conversational_persuasion_bombing',
  name: {
    de: 'Conversational Persuasion Bombing',
    en: 'Conversational Persuasion Bombing',
  },
  description: {
    de: 'Dialogische Überlastung durch dichte, adaptive und eskalierende Argumentation eines KI-Systems.',
    en: 'Dialogic overload through dense, adaptive, escalating argumentation by an AI system.',
  },
  category: 'ai_influence',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Hackenburg et al. (2025) - The Levers of Political Persuasion with Conversational AI',
      'Hackenburg et al. (2026) - Artificial intelligence can persuade people to take political action',
      'Hölbling et al. (2025) - A meta-analysis of the persuasive power of large language models'
    ],
    findings: 'Informationsdichte, Prompting/Post-Training und dialogische Anpassung können Persuasion in politischen Settings erhöhen; Overload/Bombing als spezifischer Mechanismus bleibt enger und vorsichtig zu belegen.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['interactive_ai_persuasion', 'gish_gallop'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
