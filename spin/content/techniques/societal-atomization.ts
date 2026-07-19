import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: societal_atomization).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const societalAtomization: Technique = {
  id: 'societal_atomization',
  name: {
    de: 'Atomisierung / Vereinzelung',
    en: 'Atomisierung / Vereinzelung',
  },
  description: {
    de: 'Schwaechung sozialer Bindungen, um kollektive Gegenwehr zu erschweren.',
    en: 'Weakening social bonds to impede collective resistance.',
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
      'Arendt (1951) - The Origins of Totalitarianism'
    ],
    findings: 'Soziale Isolation/Atomisierung gilt als Vorbedingung totalitaerer Mobilisierung (Arendt 1951); theoretisch, nicht quantifiziert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['divide_and_rule'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
