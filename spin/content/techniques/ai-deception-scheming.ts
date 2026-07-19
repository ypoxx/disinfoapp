import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: ai_deception_scheming).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const aiDeceptionScheming: Technique = {
  id: 'ai_deception_scheming',
  name: {
    de: 'AI Deception / Scheming',
    en: 'AI Deception / Scheming',
  },
  description: {
    de: 'KI-Verhalten, bei dem Systeme Ziele, Fähigkeiten, Informationen oder Handlungsgründe irreführend darstellen.',
    en: 'AI behavior in which systems misrepresent goals, capabilities, information, or reasons for action.',
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
      'Park et al. (2024) - AI deception: A survey of examples, risks, and potential solutions',
      'Meinke et al. (2024) - Frontier Models are Capable of In-context Scheming',
      'Shi et al. (2026) - From Hallucination to Scheming: A Unified Taxonomy and Benchmark Analysis for LLM Deception'
    ],
    findings: 'AI-Deception-Beispiele und Risikoszenarien rechtfertigen eine eigene Risikokategorie, belegen aber nicht automatisch konkrete Persuasions-Effektstärken.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['agentic_decision_capture', 'sycophancy'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
