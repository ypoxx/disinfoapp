import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: identity_provenance_deception).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const identityProvenanceDeception: Technique = {
  id: 'identity_provenance_deception',
  name: {
    de: 'Identity and Provenance Deception',
    en: 'Identity and Provenance Deception',
  },
  description: {
    de: 'Täuschung über Identität, Herkunft, Echtheit oder Verantwortlichkeit von Inhalten.',
    en: 'Deception about the identity, origin, authenticity, or accountability of content.',
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
      'Union (2024) - Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence',
      'Authenticity (2026) - C2PA Technical Specification v2.4',
      'Nemecek et al. (2026) - Authenticated Contradictions from Desynchronized Provenance and Watermarking'
    ],
    findings: 'Täuschung über Identität oder Provenienz kann Vertrauen und Zuschreibung manipulieren; aktuelle regulatorische Quellen adressieren solche Risiken, belegen aber keine Effektstärken.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['synthetic_media', 'integrity_clash_laundering', 'voice_cloning_vishing'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
