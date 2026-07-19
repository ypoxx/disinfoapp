import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: black_grey_white_propaganda).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const blackGreyWhitePropaganda: Technique = {
  id: 'black_grey_white_propaganda',
  name: {
    de: 'Schwarze/Graue/Weisse Propaganda',
    en: 'Schwarze/Graue/Weisse Propaganda',
  },
  description: {
    de: 'Klassifikation nach Quellentransparenz und Inhaltsakkuratheit.',
    en: 'Classification by source transparency and content accuracy.',
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
      'Jowett et al. (2018) - Propaganda and Persuasion (Standardwerk)'
    ],
    findings: 'Propaganda laesst sich nach Quellentransparenz/Inhaltsakkuratheit klassifizieren (weiss/grau/schwarz); deskriptive Taxonomie.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['identity_provenance_deception', 'kompromat_leverage'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
