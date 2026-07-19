import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: search_engine_manipulation_effect).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const searchEngineManipulationEffect: Technique = {
  id: 'search_engine_manipulation_effect',
  name: {
    de: 'Search Engine Manipulation Effect (SEME)',
    en: 'Search Engine Manipulation Effect (SEME)',
  },
  description: {
    de: 'Möglicher Einfluss von Suchergebnis-Rankings auf Präferenzen oder Entscheidungen.',
    en: 'Possible influence of search-result rankings on preferences or decisions.',
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
      'Epstein et al. (2015) - The search engine manipulation effect (SEME) and its possible impact on the outcomes of elections',
      'Zweig (2017) - Watching the watchers: Epstein and Robertson\'s \'Search Engine Manipulation Effect\'',
      'Epstein et al. (2024) - Can biased search results change people\'s opinions about anything at all? A close replication of SEME'
    ],
    findings: 'Suchranking kann in Studien Präferenzen beeinflussen; reale Feldübertragbarkeit muss vorsichtig behandelt werden.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['digital_influence'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'frontier',
};
