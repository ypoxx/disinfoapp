import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: decontextualization_cheapfakes).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const decontextualizationCheapfakes: Technique = {
  id: 'decontextualization_cheapfakes',
  name: {
    de: 'Dekontextualisierung / Cheapfakes',
    en: 'Dekontextualisierung / Cheapfakes',
  },
  description: {
    de: 'Echtes Material wird durch falschen Kontext/Beschriftung irreführend.',
    en: 'Real media made misleading via false context or labeling.',
  },
  category: 'ai_influence',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Paris et al. (2019) - Deepfakes and Cheap Fakes: The Manipulation of Audio and Visual Evidence'
    ],
    findings: 'Dekontextualisierung/Cheapfakes täuschen mit echten Medien durch falschen Kontext; sie sind weit verbreitet und brauchen keine KI.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['synthetic_media', 'visual_manipulation'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
