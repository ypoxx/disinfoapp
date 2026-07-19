import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: coordinated_inauthentic_amplification).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const coordinatedInauthenticAmplification: Technique = {
  id: 'coordinated_inauthentic_amplification',
  name: {
    de: 'Coordinated Inauthentic Amplification',
    en: 'Coordinated Inauthentic Amplification',
  },
  description: {
    de: 'Verdeckte oder irreführende koordinierte Verstärkung von Botschaften, Akteuren oder Narrativen.',
    en: 'Covert or deceptive coordinated amplification of messages, actors, or narratives.',
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
      'Eady et al. (2023) - Exposure to the Russian Internet Research Agency foreign influence campaign on Twitter in the 2016 US election and its relationship to attitudes and voting behavior',
      'Zerback et al. (2021) - The disconcerting potential of online disinformation: Persuasive effects of astroturfing comments and three strategies for inoculation against them'
    ],
    findings: 'Koordinierte, verdeckte Verstärkung kann soziale Wahrnehmung und Plattform-Sichtbarkeit verzerren; der aktuelle Quellensatz enthält dafür noch keine ausreichend kuratierte Primärquelle.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['social_proof', 'repetition', 'astroturfing_sockpuppets', 'firehose_of_falsehood', 'agenda_setting'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
