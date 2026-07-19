import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: censorship_chilling_effects).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const censorshipChillingEffects: Technique = {
  id: 'censorship_chilling_effects',
  name: {
    de: 'Zensur & Chilling Effects',
    en: 'Zensur & Chilling Effects',
  },
  description: {
    de: 'Unterdrueckung von Information und Abschreckung von Aeusserung/Suche.',
    en: 'Suppression of information and deterrence of expression/search.',
  },
  category: 'coercive_control',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'high',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Penney (2016) - Chilling Effects: Online Surveillance and Wikipedia Use'
    ],
    findings: 'Wahrgenommene Ueberwachung kann legitime Informationssuche/Aeusserung messbar daempfen (Chilling Effect; Penney 2016).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['data_voids_seo_manipulation'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
  seriousMode: true,
};
