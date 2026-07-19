import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: interactive_ai_persuasion).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const interactiveAiPersuasion: Technique = {
  id: 'interactive_ai_persuasion',
  name: {
    de: 'Interactive AI Persuasion',
    en: 'Interactive AI Persuasion',
  },
  description: {
    de: 'Dialogische KI-Systeme, die persuasive Botschaften im Verlauf einer Interaktion adaptiv anpassen.',
    en: 'Dialogic AI systems that adaptively tailor persuasive messages over an interaction.',
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
      'Matz et al. (2024) - The potential of generative AI for personalized persuasion at scale',
      'Salvi et al. (2025) - On the conversational persuasiveness of GPT-4',
      'Costello et al. (2024) - Durably reducing conspiracy beliefs through dialogues with AI'
    ],
    findings: 'LLM-Systeme können persuasive Inhalte erzeugen und in bestimmten Settings durch Personalisierung oder dialogische Anpassung persuasive Wirkung erhöhen.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['ai_persuasion', 'microtargeting', 'conversational_persuasion_bombing'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
