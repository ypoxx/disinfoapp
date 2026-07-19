import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: firehose_of_falsehood).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const firehoseOfFalsehood: Technique = {
  id: 'firehose_of_falsehood',
  name: {
    de: 'Firehose of Falsehood',
    en: 'Firehose of Falsehood',
  },
  description: {
    de: 'Hochvolumige, mehrkanalige, widerspruchstolerante Desinformationsflutung.',
    en: 'High-volume, multi-channel, contradiction-tolerant disinformation flooding.',
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
      'Paul et al. (2016) - The Russian \'Firehose of Falsehood\' Propaganda Model'
    ],
    findings: 'Das Firehose-Modell beschreibt hochvolumige, mehrkanalige, inkonsistente Propaganda; es ist ein theoretisch-deskriptives Modell, KEIN gemessener Wirkungsbeleg.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['data_voids_seo_manipulation', 'coordinated_inauthentic_amplification', 'gish_gallop'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
