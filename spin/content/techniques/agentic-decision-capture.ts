import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: agentic_decision_capture).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const agenticDecisionCapture: Technique = {
  id: 'agentic_decision_capture',
  name: {
    de: 'Agentic Decision Capture',
    en: 'Agentic Decision Capture',
  },
  description: {
    de: 'Einfluss auf Entscheidungen, die Nutzer:innen an digitale Assistenten oder Agenten delegieren.',
    en: 'Influence over decisions that users delegate to digital assistants or agents.',
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
      'Rogiers et al. (2024) - Persuasion with Large Language Models: a Survey',
      'Cuvin et al. (2025) - DECEPTICON: How Dark Patterns Manipulate Web Agents',
      'Brunner et al. (2026) - AI threats in the wild: The current state of prompt injections on the web'
    ],
    findings: 'Hohes plausibles Schadens- oder Skalierungspotenzial darf nicht als hoher empirischer Wirkungsnachweis gelesen werden.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['nudging', 'ai_deception_scheming', 'automation_bias_overreliance'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
