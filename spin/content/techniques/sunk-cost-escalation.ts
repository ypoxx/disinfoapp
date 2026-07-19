import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie 21.0.1, Knoten: sunk_cost_escalation).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const sunkCostEscalation: Technique = {
  id: 'sunk_cost_escalation',
  name: {
    de: 'Sunk-Cost / Eskalation des Commitments',
    en: 'Sunk-Cost / Eskalation des Commitments',
  },
  description: {
    de: 'Festhalten an einem Vorhaben wegen bereits investierter Ressourcen.',
    en: 'Sticking with a course of action because of resources already invested.',
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
      'Arkes et al. (1985) - The Psychology of Sunk Cost',
      'Roth et al. (2015) - On the sunk-cost effect in economic decision-making: a meta-analytic review'
    ],
    findings: 'Bereits investierte, nicht erstattbare Ressourcen erhöhen die Bereitschaft, an einem Vorhaben festzuhalten.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: '',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['consistency', 'sludge', 'loss_aversion'],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
