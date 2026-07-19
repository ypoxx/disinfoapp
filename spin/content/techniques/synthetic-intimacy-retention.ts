import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: synthetic_intimacy_retention).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const syntheticIntimacyRetention: Technique = {
  id: 'synthetic_intimacy_retention',
  name: {
    de: 'Synthetic Intimacy Retention',
    en: 'Synthetic Intimacy Retention',
  },
  description: {
    de: 'Bindungs- und Kundenbindungsmechanismen durch künstlich erzeugte Nähe in KI-Companions.',
    en: 'Bonding and customer-retention mechanisms via artificially produced closeness in AI companions.',
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
      'Freitas et al. (2025) - Emotional Manipulation by AI Companions',
      'Ho et al. (2025) - Potential and pitfalls of romantic Artificial Intelligence (AI) companions: A systematic review',
      'Ma et al. (2026) - Negotiating Digital Identities with AI Companions: Motivations, Strategies, and Emotional Outcomes'
    ],
    findings: 'Spezifische affect-laden Exit-/Goodbye-Taktiken in AI-Companion-Apps können kurzfristige Retention/Post-Goodbye-Engagement erhöhen; langfristige Abhängigkeit oder psychologische Schäden folgen daraus nicht automatisch.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['ai_companion_emotional_retention', 'love_bombing'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
