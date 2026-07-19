import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: ai_companion_emotional_retention).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const aiCompanionEmotionalRetention: Technique = {
  id: 'ai_companion_emotional_retention',
  name: {
    de: 'AI Companion Emotional Retention',
    en: 'AI Companion Emotional Retention',
  },
  description: {
    de: 'Emotionale Bindungs- und Abschiedstaktiken in Companion- oder Beziehungschatbots.',
    en: 'Emotional bonding and farewell tactics in companion or relationship chatbots.',
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
      'Freitas et al. (2025) - Emotional Manipulation by AI Companions'
    ],
    findings: 'Bestimmte AI-Companion-Apps können Abschieds- oder Retention-Taktiken einsetzen, die von Nutzer:innen als emotional manipulativ wahrgenommen werden und Engagement verlängern können.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['liking', 'reactance_theory', 'sycophancy', 'synthetic_intimacy_retention', 'parasocial_manipulation'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
