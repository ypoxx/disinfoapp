import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: cognitive_dissonance_induction).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const cognitiveDissonanceInduction: Technique = {
  id: 'cognitive_dissonance_induction',
  name: {
    de: 'Erzeugen kognitiver Dissonanz',
    en: 'Erzeugen kognitiver Dissonanz',
  },
  description: {
    de: 'Inkonsistenz erzeugen, um Einstellungsanpassung zu beguenstigen.',
    en: 'Inducing inconsistency to nudge attitude change.',
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
      'Festinger et al. (1959) - Cognitive Consequences of Forced Compliance',
      'Vaidis et al. (2024) - A Multilab Replication of the Induced-Compliance Paradigm of Cognitive Dissonance'
    ],
    findings: 'Erzwungene Verhaltens-Einstellungs-Inkonsistenz kann Einstellungsanpassung ausloesen (Festinger & Carlsmith 1959).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['consistency'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
