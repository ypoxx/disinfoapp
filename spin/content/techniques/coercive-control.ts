import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: coercive_control).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const coerciveControl: Technique = {
  id: 'coercive_control',
  name: {
    de: 'Coercive Control',
    en: 'Coercive Control',
  },
  description: {
    de: 'Muster aus Einschüchterung, Isolation, Überwachung und Mikroregulierung.',
    en: 'A pattern of intimidation, isolation, surveillance, and micro-regulation.',
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
      'Stark (2007) - Coercive Control: How Men Entrap Women in Personal Life'
    ],
    findings: 'Coercive Control beschreibt ein anhaltendes Kontroll-/Entrechtungsmuster (theoretisch/klinisch/rechtlich); kein quantifizierter Persuasions-Effekt.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['gaslighting', 'love_bombing', 'societal_atomization', 'zersetzung_decomposition', 'networked_harassment'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
