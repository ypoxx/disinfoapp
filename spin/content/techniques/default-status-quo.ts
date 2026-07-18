import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: default_status_quo).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const defaultStatusQuo: Technique = {
  id: 'default_status_quo',
  name: {
    de: 'Default-/Status-quo-Effekt',
    en: 'Default-/Status-quo-Effekt',
  },
  description: {
    de: 'Voreinstellungen werden ueberproportional beibehalten.',
    en: 'Pre-set defaults are disproportionately kept.',
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
      'Johnson et al. (2003) - Do Defaults Save Lives?'
    ],
    findings: 'Voreinstellungen werden ueberproportional beibehalten. (belegt durch die zitierte Quelle).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['nudging'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
