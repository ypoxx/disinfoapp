import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: consent_and_privacy_dark_patterns).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const consentAndPrivacyDarkPatterns: Technique = {
  id: 'consent_and_privacy_dark_patterns',
  name: {
    de: 'Consent and Privacy Dark Patterns',
    en: 'Consent and Privacy Dark Patterns',
  },
  description: {
    de: 'Interface- und Kommunikationsmuster, die Zustimmung zu Datenverarbeitung oder Datenpreisgabe beeinflussen.',
    en: 'Interface and communication patterns that shape consent to data processing or disclosure.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Policy (2022) - Dark Commercial Patterns'
    ],
    findings: 'Dark Commercial Patterns können Nutzerentscheidungen über Käufe, Daten oder Zustimmung beeinflussen; Privacy-spezifische Unterformen benötigen zusätzliche, kontextspezifische Evidenz.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['dark_patterns'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
