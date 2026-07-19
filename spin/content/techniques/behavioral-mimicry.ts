import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: behavioral_mimicry).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const behavioralMimicry: Technique = {
  id: 'behavioral_mimicry',
  name: {
    de: 'Behaviorale Mimikry (Chamäleon-Effekt)',
    en: 'Behaviorale Mimikry (Chamäleon-Effekt)',
  },
  description: {
    de: 'Nichtbewusstes Spiegeln von Verhalten zur Steigerung von Rapport/Compliance.',
    en: 'Nonconscious mirroring of behavior to increase rapport/compliance.',
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
    studies: [],
    findings: 'Nichtbewusstes Spiegeln von Verhalten zur Steigerung von Rapport/Compliance.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['liking'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
