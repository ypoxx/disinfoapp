import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: foot_in_the_door).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const footInTheDoor: Technique = {
  id: 'foot_in_the_door',
  name: {
    de: 'Foot-in-the-Door',
    en: 'Foot-in-the-Door',
  },
  description: {
    de: 'Compliance-Technik, bei der eine kleine Zustimmung spätere größere Zustimmung wahrscheinlicher machen soll.',
    en: 'Compliance technique where a small agreement is meant to make a later larger one more likely.',
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
      'Freedman et al. (1966) - Compliance without pressure: The foot-in-the-door technique',
      'Burger (1999) - The Foot-in-the-Door Compliance Procedure: A Multiple-Process Analysis and Review'
    ],
    findings: 'Kleine freiwillige Vorentscheidungen können spätere Compliance begünstigen; Moderatorbedingungen begrenzen Generalisierung.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['consistency', 'cognitive_dissonance_induction'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
