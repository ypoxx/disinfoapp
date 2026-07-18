import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: integrity_clash_laundering).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const integrityClashLaundering: Technique = {
  id: 'integrity_clash_laundering',
  name: {
    de: 'Integrity Clash / Provenance Laundering',
    en: 'Integrity Clash / Provenance Laundering',
  },
  description: {
    de: 'Ausnutzen von Lücken zwischen Herkunftsmanifesten, Wasserzeichen und tatsächlichem Medieninhalt.',
    en: 'Exploiting gaps between provenance manifests, watermarks, and actual media content.',
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
      'Nemecek et al. (2026) - Authenticated Contradictions from Desynchronized Provenance and Watermarking',
      'Authenticity (2026) - C2PA Technical Specification v2.4',
      'Golaszewski et al. (2026) - Verifying Provenance of Digital Media: Why the C2PA Specifications Fall Short'
    ],
    findings: 'Provenance- oder Wasserzeichensignale können technische Integrität anzeigen, aber nicht automatisch semantische Echtheit oder Nicht-Manipulation beweisen.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['identity_provenance_deception', 'synthetic_media'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
