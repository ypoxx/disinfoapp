import { PersuasionPhaseModel, Phase } from '@/types/persuasion';

/**
 * Six-phase model of persuasion process
 * Based on dual-process theories (ELM, Heuristic-Systematic Model)
 */
export const persuasionPhases: Phase[] = [
  {
    id: 'attention_phase',
    name: {
      de: 'Aufmerksamkeitsphase',
      en: 'Attention Phase',
    },
    description: {
      de: 'Die Botschaft muss zunächst Aufmerksamkeit erregen und aus der Informationsflut herausstechen. Emotionale Trigger, Neuheit und Relevanz sind entscheidend.',
      en: 'The message must first attract attention and stand out from the information flood. Emotional triggers, novelty, and relevance are crucial.',
    },
    order: 1,
    techniques: [
      { techniqueId: 'emotional_appeal', effectiveness: 'very_high', timing: 'early' },
      { techniqueId: 'visual_manipulation', effectiveness: 'very_high', timing: 'early' },
      { techniqueId: 'scarcity', effectiveness: 'high', timing: 'early' },
      { techniqueId: 'reactance_theory', effectiveness: 'high', timing: 'early' },
      { techniqueId: 'synthetic_media', effectiveness: 'very_high', timing: 'mid' },
      { techniqueId: 'dark_patterns', effectiveness: 'moderate', timing: 'early' },
    ],
    counterMeasures: [
      {
        counterMeasureId: 'awareness_training',
        effectiveness: 'moderate',
        timing: 'preventive',
      },
      { counterMeasureId: 'emotion_regulation', effectiveness: 'high', timing: 'reactive' },
      { counterMeasureId: 'media_literacy', effectiveness: 'moderate', timing: 'preventive' },
    ],
  },
  {
    id: 'perception_phase',
    name: {
      de: 'Wahrnehmungsphase',
      en: 'Perception Phase',
    },
    description: {
      de: 'Die Botschaft wird wahrgenommen und interpretiert. Framing und Priming beeinflussen, wie Informationen verstanden werden.',
      en: 'The message is perceived and interpreted. Framing and priming influence how information is understood.',
    },
    order: 2,
    techniques: [
      { techniqueId: 'framing', effectiveness: 'very_high', timing: 'early' },
      { techniqueId: 'priming', effectiveness: 'high', timing: 'early' },
      { techniqueId: 'anchoring', effectiveness: 'very_high', timing: 'mid' },
      { techniqueId: 'visual_manipulation', effectiveness: 'high', timing: 'mid' },
      { techniqueId: 'narrative_persuasion', effectiveness: 'high', timing: 'mid' },
      { techniqueId: 'equivocation', effectiveness: 'moderate', timing: 'late' },
    ],
    counterMeasures: [
      { counterMeasureId: 'critical_thinking', effectiveness: 'high', timing: 'reactive' },
      { counterMeasureId: 'media_literacy', effectiveness: 'high', timing: 'preventive' },
      { counterMeasureId: 'diverse_sources', effectiveness: 'moderate', timing: 'reactive' },
    ],
  },
  {
    id: 'processing_phase',
    name: {
      de: 'Verarbeitungsphase',
      en: 'Processing Phase',
    },
    description: {
      de: 'Informationen werden kognitiv verarbeitet. Die Tiefe der Verarbeitung hängt von Motivation und Fähigkeit ab (ELM).',
      en: 'Information is cognitively processed. The depth of processing depends on motivation and ability (ELM).',
    },
    order: 3,
    techniques: [
      { techniqueId: 'social_proof', effectiveness: 'very_high', timing: 'early' },
      { techniqueId: 'authority', effectiveness: 'very_high', timing: 'early' },
      { techniqueId: 'repetition', effectiveness: 'high', timing: 'mid' },
      { techniqueId: 'illusory_truth_effect', effectiveness: 'high', timing: 'mid' },
      { techniqueId: 'ad_hominem', effectiveness: 'moderate', timing: 'mid' },
      { techniqueId: 'straw_man', effectiveness: 'moderate', timing: 'mid' },
      { techniqueId: 'false_dichotomy', effectiveness: 'moderate', timing: 'late' },
      { techniqueId: 'microtargeting', effectiveness: 'very_high', timing: 'early' },
      { techniqueId: 'ai_persuasion', effectiveness: 'very_high', timing: 'mid' },
    ],
    counterMeasures: [
      { counterMeasureId: 'critical_thinking', effectiveness: 'very_high', timing: 'reactive' },
      { counterMeasureId: 'fact_checking', effectiveness: 'very_high', timing: 'reactive' },
      { counterMeasureId: 'prebunking', effectiveness: 'high', timing: 'preventive' },
      {
        counterMeasureId: 'transparency_requirements',
        effectiveness: 'moderate',
        timing: 'preventive',
      },
    ],
  },
  {
    id: 'decision_phase',
    name: {
      de: 'Entscheidungsphase',
      en: 'Decision Phase',
    },
    description: {
      de: 'Eine Entscheidung für oder gegen die Botschaft wird getroffen. Soziale Faktoren und Konsistenz spielen große Rolle.',
      en: 'A decision for or against the message is made. Social factors and consistency play a major role.',
    },
    order: 4,
    techniques: [
      { techniqueId: 'liking', effectiveness: 'very_high', timing: 'early' },
      { techniqueId: 'reciprocity', effectiveness: 'high', timing: 'early' },
      { techniqueId: 'consistency', effectiveness: 'very_high', timing: 'mid' },
      { techniqueId: 'scarcity', effectiveness: 'very_high', timing: 'late' },
      { techniqueId: 'nudging', effectiveness: 'high', timing: 'mid' },
      { techniqueId: 'dark_patterns', effectiveness: 'very_high', timing: 'late' },
      { techniqueId: 'pacing_and_leading', effectiveness: 'moderate', timing: 'mid' },
      { techniqueId: 'embedded_commands', effectiveness: 'low', timing: 'late' },
    ],
    counterMeasures: [
      { counterMeasureId: 'delay_response', effectiveness: 'very_high', timing: 'reactive' },
      { counterMeasureId: 'ethical_framework', effectiveness: 'moderate', timing: 'preventive' },
      { counterMeasureId: 'emotion_regulation', effectiveness: 'high', timing: 'reactive' },
      { counterMeasureId: 'critical_thinking', effectiveness: 'high', timing: 'reactive' },
    ],
  },
  {
    id: 'action_phase',
    name: {
      de: 'Handlungsphase',
      en: 'Action Phase',
    },
    description: {
      de: 'Die Entscheidung wird in Handlung umgesetzt. Commitment und Verhaltensanker werden aktiviert.',
      en: 'The decision is implemented into action. Commitment and behavioral anchors are activated.',
    },
    order: 5,
    techniques: [
      { techniqueId: 'consistency', effectiveness: 'very_high', timing: 'early' },
      { techniqueId: 'dark_patterns', effectiveness: 'very_high', timing: 'early' },
      { techniqueId: 'scarcity', effectiveness: 'high', timing: 'early' },
      { techniqueId: 'reciprocity', effectiveness: 'moderate', timing: 'mid' },
      { techniqueId: 'digital_influence', effectiveness: 'high', timing: 'mid' },
      { techniqueId: 'nudging', effectiveness: 'high', timing: 'mid' },
    ],
    counterMeasures: [
      { counterMeasureId: 'delay_response', effectiveness: 'very_high', timing: 'reactive' },
      { counterMeasureId: 'digital_hygiene', effectiveness: 'moderate', timing: 'preventive' },
      {
        counterMeasureId: 'transparency_requirements',
        effectiveness: 'moderate',
        timing: 'preventive',
      },
    ],
  },
  {
    id: 'justification_phase',
    name: {
      de: 'Rechtfertigungsphase',
      en: 'Justification Phase',
    },
    description: {
      de: 'Nach der Handlung wird diese rationalisiert und gerechtfertigt. Kognitive Dissonanz wird reduziert.',
      en: 'After the action, it is rationalized and justified. Cognitive dissonance is reduced.',
    },
    order: 6,
    techniques: [
      { techniqueId: 'consistency', effectiveness: 'very_high', timing: 'early' },
      { techniqueId: 'social_proof', effectiveness: 'high', timing: 'early' },
      { techniqueId: 'narrative_persuasion', effectiveness: 'very_high', timing: 'mid' },
      { techniqueId: 'authority', effectiveness: 'high', timing: 'mid' },
      { techniqueId: 'illusory_truth_effect', effectiveness: 'moderate', timing: 'late' },
      { techniqueId: 'framing', effectiveness: 'high', timing: 'mid' },
    ],
    counterMeasures: [
      { counterMeasureId: 'critical_thinking', effectiveness: 'moderate', timing: 'corrective' },
      { counterMeasureId: 'diverse_sources', effectiveness: 'high', timing: 'corrective' },
      { counterMeasureId: 'fact_checking', effectiveness: 'moderate', timing: 'corrective' },
    ],
  },
];

/**
 * Complete persuasion phase model with transitions
 */
export const persuasionPhaseModel: PersuasionPhaseModel = {
  phases: persuasionPhases,
  transitions: [
    {
      from: 'attention_phase',
      to: 'perception_phase',
      conditions: ['Aufmerksamkeit wurde erregt', 'Botschaft wird wahrgenommen'],
    },
    {
      from: 'perception_phase',
      to: 'processing_phase',
      conditions: ['Botschaft wurde interpretiert', 'Erste Eindrücke gebildet'],
    },
    {
      from: 'processing_phase',
      to: 'decision_phase',
      conditions: [
        'Information wurde verarbeitet',
        'Meinung begonnen zu formen',
        'Motivation vorhanden',
      ],
    },
    {
      from: 'decision_phase',
      to: 'action_phase',
      conditions: [
        'Entscheidung wurde getroffen',
        'Handlungsbereitschaft vorhanden',
        'Barrieren überwunden',
      ],
    },
    {
      from: 'action_phase',
      to: 'justification_phase',
      conditions: [
        'Handlung wurde durchgeführt',
        'Kognitive Dissonanz möglich',
        'Rationalisierung nötig',
      ],
    },
    {
      from: 'justification_phase',
      to: 'attention_phase',
      conditions: [
        'Neue verwandte Botschaften',
        'Konsistenz-Suche',
        'Bestätigung des Verhaltens',
      ],
    },
    // Non-linear transitions
    {
      from: 'attention_phase',
      to: 'action_phase',
      conditions: [
        'Impulsive Reaktion',
        'Starke emotionale Aktivierung',
        'Geringe kognitive Verarbeitung',
      ],
    },
    {
      from: 'processing_phase',
      to: 'justification_phase',
      conditions: ['Frühere ähnliche Entscheidung', 'Konsistenz-Druck', 'Automatische Reaktion'],
    },
  ],
};

/**
 * Get phase by ID
 */
export function getPhaseById(id: string): Phase | undefined {
  return persuasionPhases.find((p) => p.id === id);
}

/**
 * Get phases in order
 */
export function getPhasesInOrder(): Phase[] {
  return [...persuasionPhases].sort((a, b) => a.order - b.order);
}

/**
 * Get techniques for a specific phase
 */
export function getTechniquesForPhase(phaseId: string): Phase['techniques'] {
  const phase = getPhaseById(phaseId);
  return phase?.techniques || [];
}

/**
 * Get counter-measures for a specific phase
 */
export function getCounterMeasuresForPhase(phaseId: string): Phase['counterMeasures'] {
  const phase = getPhaseById(phaseId);
  return phase?.counterMeasures || [];
}

/**
 * Get phases where a technique is effective
 */
export function getPhasesForTechnique(techniqueId: string): {
  phase: Phase;
  effectiveness: string;
  timing: string;
}[] {
  const result: { phase: Phase; effectiveness: string; timing: string }[] = [];

  persuasionPhases.forEach((phase) => {
    const technique = phase.techniques.find((t) => t.techniqueId === techniqueId);
    if (technique) {
      result.push({
        phase,
        effectiveness: technique.effectiveness,
        timing: technique.timing,
      });
    }
  });

  return result;
}

/**
 * Get next possible phases from current phase
 */
export function getNextPhases(currentPhaseId: string): string[] {
  return persuasionPhaseModel.transitions
    .filter((t) => t.from === currentPhaseId)
    .map((t) => t.to);
}

/**
 * Check if transition is possible
 */
export function canTransition(from: string, to: string): boolean {
  return persuasionPhaseModel.transitions.some((t) => t.from === from && t.to === to);
}
