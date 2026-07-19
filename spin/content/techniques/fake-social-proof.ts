import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: fake_social_proof).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const fakeSocialProof: Technique = {
  id: 'fake_social_proof',
  name: {
    de: 'Fake Social Proof',
    en: 'Fake Social Proof',
  },
  description: {
    de: 'Erfundene Aktivitaets-/Kauf-/Bewertungssignale im Interface.',
    en: 'Fabricated activity/purchase/review signals in the interface.',
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
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale'
    ],
    findings: 'Fake Social Proof ist ein in Dark-Pattern-Taxonomien etabliertes Muster (Gray et al. 2018; Mathur et al. 2019).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['social_proof', 'astroturfing_sockpuppets'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
