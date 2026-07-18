import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: guilt_appeals).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const guiltAppeals: Technique = {
  id: 'guilt_appeals',
  name: {
    de: 'Schuldgefuehl-Appelle',
    en: 'Schuldgefuehl-Appelle',
  },
  description: {
    de: 'Erzeugen von Schuld, um Verhaltensaenderung/Compliance zu beguenstigen.',
    en: 'Evoking guilt to encourage behavior change/compliance.',
  },
  category: 'emotional_manipulation',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'O\'Keefe (2000) - Guilt and Social Influence'
    ],
    findings: 'Schuldappelle koennen Verhalten beeinflussen, aber explizitere Appelle sind weniger persuasiv als subtile (O\'Keefe 2000).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: [],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
