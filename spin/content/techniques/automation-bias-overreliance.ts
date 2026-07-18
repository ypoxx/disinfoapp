import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: automation_bias_overreliance).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const automationBiasOverreliance: Technique = {
  id: 'automation_bias_overreliance',
  name: {
    de: 'Automation Bias / Over-Reliance',
    en: 'Automation Bias / Over-Reliance',
  },
  description: {
    de: 'Übermäßiges Vertrauen in (KI-)Systemausgaben trotz Fehlern.',
    en: 'Excessive trust in (AI) system outputs despite errors.',
  },
  category: 'ai_influence',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: 'high',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [
      'Parasuraman et al. (2010) - Complacency and Bias in Human Use of Automation: An Attentional Integration'
    ],
    findings: 'Menschen neigen zu übermäßigem Vertrauen in automatisierte Systeme (Complacency/Automation Bias), mit Auslassungs- und Übernahmefehlern; kaum durch einfaches Training behebbar.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['sycophancy'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
