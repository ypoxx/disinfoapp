import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: astroturfing_sockpuppets).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const astroturfingSockpuppets: Technique = {
  id: 'astroturfing_sockpuppets',
  name: {
    de: 'Astroturfing / Sockpuppets',
    en: 'Astroturfing / Sockpuppets',
  },
  description: {
    de: 'Verdeckte Pseudo-Graswurzel- oder Mehrfachidentitätskommunikation zur Vortäuschung unabhängiger Unterstützung.',
    en: 'Covert pseudo-grassroots or multi-identity communication faking independent support.',
  },
  category: 'influence_ops',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Rogers et al. (2025) - Coordinated inauthentic behaviour on Facebook? A typology of manufactured attention',
      'Zerback et al. (2021) - The disconcerting potential of online disinformation: Persuasive effects of astroturfing comments and three strategies for inoculation against them'
    ],
    findings: 'Astroturfing ist als koordinierte Infrastruktur zu modellieren, die Social Proof und algorithmische Sichtbarkeit ermöglicht.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['coordinated_inauthentic_amplification', 'social_proof', 'fake_social_proof', 'proxy_attack'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
