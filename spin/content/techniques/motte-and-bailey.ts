import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: motte_and_bailey).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const motteAndBailey: Technique = {
  id: 'motte_and_bailey',
  name: {
    de: 'Motte-and-Bailey',
    en: 'Motte-and-Bailey',
  },
  description: {
    de: 'Wechsel zwischen einer leicht verteidigbaren und einer umstrittenen Position.',
    en: 'Switching between an easily defensible and a controversial position.',
  },
  category: 'logical_fallacy',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Hansen (2015) - Fallacies'
    ],
    findings: 'Motte-and-Bailey ist als Argumentations-/Propagandamuster taxonomisch belegt (SEP/Fallacies); eine quantifizierte Persuasions-/Verhaltenswirkung ist NICHT generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['equivocation'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
