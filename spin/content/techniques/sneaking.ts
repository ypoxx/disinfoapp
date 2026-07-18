import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: sneaking).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const sneaking: Technique = {
  id: 'sneaking',
  name: {
    de: 'Sneaking (Verschleiern)',
    en: 'Sneaking (Verschleiern)',
  },
  description: {
    de: 'Relevante Informationen (z.B. Kosten, Posten, Bedingungen) werden bis nach der Entscheidung verborgen.',
    en: 'Hiding relevant information (costs, items, terms) until after the decision.',
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
    findings: 'Sneaking (Verschleiern) ist ein in Dark-Pattern-Taxonomien etabliertes Muster (Gray et al. 2018; Mathur et al. 2019).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['drip_pricing', 'subscription_trap_obstruction'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
