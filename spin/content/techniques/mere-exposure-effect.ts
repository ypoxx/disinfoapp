import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: mere_exposure_effect).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const mereExposureEffect: Technique = {
  id: 'mere_exposure_effect',
  name: {
    de: 'Mere-Exposure-Effekt',
    en: 'Mere-Exposure-Effekt',
  },
  description: {
    de: 'Wiederholte Exposition erhöht Vertrautheit und Sympathie.',
    en: 'Repeated exposure increases familiarity and liking.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Zajonc (1968) - Attitudinal effects of mere exposure',
      'Montoya et al. (2017) - A re-examination of the mere exposure effect: The influence of repeated exposure on recognition, familiarity, and liking'
    ],
    findings: 'Wiederholte Exposition kann Vertrautheit und Sympathie erhöhen (Mere-Exposure).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['repetition', 'liking'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
