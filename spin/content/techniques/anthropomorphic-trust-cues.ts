import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: anthropomorphic_trust_cues).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const anthropomorphicTrustCues: Technique = {
  id: 'anthropomorphic_trust_cues',
  name: {
    de: 'Anthropomorphic Trust Cues',
    en: 'Anthropomorphic Trust Cues',
  },
  description: {
    de: 'Vermenschlichende Hinweise, die Kompetenz, Empathie, Bewusstsein oder Verlässlichkeit eines Systems überhöhen können.',
    en: 'Humanizing cues that can overstate a system\'s competence, empathy, consciousness, or reliability.',
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
      'Pizzi et al. (2023) - I, chatbot! The impact of anthropomorphism and gaze direction on willingness to disclose personal information and behavioral intentions'
    ],
    findings: 'Anthropomorphe Gestaltung kann Vertrauen und Beziehungserwartungen beeinflussen; manipulativer Charakter hängt von Täuschung, Kontext und Vulnerabilität ab.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['authority'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
