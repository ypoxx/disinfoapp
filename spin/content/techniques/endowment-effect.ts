import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: endowment_effect).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const endowmentEffect: Technique = {
  id: 'endowment_effect',
  name: {
    de: 'Endowment-Effekt',
    en: 'Endowment-Effekt',
  },
  description: {
    de: 'Bereits Besessenes wird hoeher bewertet als Nicht-Besessenes.',
    en: 'Owned things are valued more than unowned.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'high',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Kahneman et al. (1990) - Experimental Tests of the Endowment Effect and the Coase Theorem'
    ],
    findings: 'Bereits Besessenes wird hoeher bewertet als Nicht-Besessenes. (belegt durch die zitierte Quelle).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['loss_aversion'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
