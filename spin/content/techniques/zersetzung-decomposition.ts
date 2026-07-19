import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: zersetzung_decomposition).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const zersetzungDecomposition: Technique = {
  id: 'zersetzung_decomposition',
  name: {
    de: 'Zersetzung',
    en: 'Zersetzung',
  },
  description: {
    de: 'Verdeckte psychologische Zermuerbung zur Lahmlegung von Personen/Gruppen.',
    en: 'Covert psychological wearing-down to paralyze persons/groups.',
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
      'Pingel-Schliemann (2002) - Zersetzen. Strategie einer Diktatur'
    ],
    findings: 'Verdeckte, koordinierte Zermuerbung (Geruechte, Isolation, Gaslighting) wurde als staatliche Repressionsstrategie dokumentiert (Stasi-Zersetzung).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['gaslighting', 'kompromat_leverage'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
