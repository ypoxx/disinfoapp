import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: nemawashi).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const nemawashi: Technique = {
  id: 'nemawashi',
  name: {
    de: 'Nemawashi (vorbereitende Konsensbildung)',
    en: 'Nemawashi (vorbereitende Konsensbildung)',
  },
  description: {
    de: 'Informelle, vorgelagerte Abstimmung im kleinen Kreis, um vor der formellen Entscheidung Zustimmung zu sichern; dual-use.',
    en: 'Informal pre-meeting consensus-building to secure agreement before the formal decision; dual-use.',
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
      'Machizawa (2013) - Nemawashi. In: The Encyclopedia of Cross-Cultural Psychology'
    ],
    findings: 'Informelle, vorgelagerte Konsensbildung im kleinen Kreis vor der formellen Entscheidung (Nemawashi) kann Zustimmung sichern; sie ist dual-use, da sie echte Beteiligung herstellen oder Widerspruch im Plenum vorab neutralisieren kann.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['groupthink', 'social_proof'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
