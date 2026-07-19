import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: data_voids_seo_manipulation).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const dataVoidsSeoManipulation: Technique = {
  id: 'data_voids_seo_manipulation',
  name: {
    de: 'Data Voids / AI Search & SEO Manipulation',
    en: 'Data Voids / AI Search & SEO Manipulation',
  },
  description: {
    de: 'Ausnutzen leerer oder schwach besetzter Suchräume, um bestimmte Inhalte dominant auffindbar zu machen.',
    en: 'Exploiting empty or sparsely covered search spaces to make certain content dominantly findable.',
  },
  category: 'digital_influence',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'moderate',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Golebiewski et al. (2019) - Data Voids: Where Missing Data Can Easily Be Exploited',
      'Robertson et al. (2025) - Data Voids and Warning Banners on Google Search',
      'Alyukov et al. (2025) - LLMs grooming or data voids? LLM-powered chatbot references to Kremlin disinformation reflect information gaps, not manipulation'
    ],
    findings: 'Data Voids können Sichtbarkeit und Informationszugang verzerren; Quellenbasis in dieser Version muss ergänzt werden.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['digital_influence', 'illusory_truth_effect', 'firehose_of_falsehood', 'censorship_chilling_effects', 'confirmation_bias'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
