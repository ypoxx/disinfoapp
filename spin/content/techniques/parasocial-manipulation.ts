import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: parasocial_manipulation).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const parasocialManipulation: Technique = {
  id: 'parasocial_manipulation',
  name: {
    de: 'Parasocial Manipulation',
    en: 'Parasocial Manipulation',
  },
  description: {
    de: 'Ausnutzen einseitiger Bindung zu Medienpersonen, Influencer:innen oder künstlichen Agenten.',
    en: 'Exploiting one-sided attachment to media figures, influencers, or artificial agents.',
  },
  category: 'social_dynamics',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Han et al. (2024) - Meta-analysis of social media influencer impact: Key antecedents and theoretical foundations'
    ],
    findings: 'Parasoziale Bindung ist ein relevanter relationaler Mechanismus; konkrete manipulative Wirkung hängt von Disclosure, Vertrauen und Vulnerabilität ab.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['liking', 'ai_companion_emotional_retention'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
