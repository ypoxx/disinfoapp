import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: kompromat_leverage).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const kompromatLeverage: Technique = {
  id: 'kompromat_leverage',
  name: {
    de: 'Kompromat (kompromittierendes Material als Druckmittel)',
    en: 'Kompromat (kompromittierendes Material als Druckmittel)',
  },
  description: {
    de: 'Sammeln, Fabrizieren oder Androhen der Veroeffentlichung kompromittierenden Materials, um eine Zielperson zu kontrollieren, zu erpressen oder zu diskreditieren.',
    en: 'Collecting, fabricating or threatening to release compromising material to control, blackmail or discredit a target.',
  },
  category: 'coercive_control',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Ledeneva (2006) - How Russia Really Works: The Informal Practices That Shaped Post-Soviet Politics and Business'
    ],
    findings: 'Das Sammeln, Fabrizieren oder Androhen der Veroeffentlichung kompromittierenden Materials ist als Mittel zu Kontrolle, Erpressung und Diskreditierung in informeller Politik und Wirtschaft dokumentiert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['zersetzung_decomposition', 'black_grey_white_propaganda'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
