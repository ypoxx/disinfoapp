import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: loaded_language).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const loadedLanguage: Technique = {
  id: 'loaded_language',
  name: {
    de: 'Loaded Language / Euphemismus',
    en: 'Loaded Language / Euphemismus',
  },
  description: {
    de: 'Wertungsstarke, beschönigende oder herabsetzende Wortwahl zur Bewertungssteuerung.',
    en: 'Emotionally loaded, euphemistic, or disparaging wording to steer evaluation.',
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
    findings: 'Loaded Language / Euphemismus ist als Argumentations-/Propagandamuster taxonomisch belegt (SEP/Fallacies); eine quantifizierte Persuasions-/Verhaltenswirkung ist NICHT generell etabliert.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: '',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['framing', 'loaded_question', 'trick_wording'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
