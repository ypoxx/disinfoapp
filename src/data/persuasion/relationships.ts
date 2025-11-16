import { TechniqueRelationship } from '@/types/persuasion';

/**
 * Relationships between persuasion techniques
 * Defines how techniques interact, complement, or reinforce each other
 */
export const techniqueRelationships: TechniqueRelationship[] = [
  {
    source: 'framing',
    target: 'priming',
    type: 'complementary',
    strength: 0.85,
    description: {
      de: 'Framing bereitet den kognitiven Kontext vor, den Priming dann aktiviert',
      en: 'Framing prepares the cognitive context that priming then activates',
    },
  },
  {
    source: 'framing',
    target: 'anchoring',
    type: 'enhancement',
    strength: 0.78,
    description: {
      de: 'Der Frame verstärkt die Wirkung des gesetzten Ankers',
      en: 'The frame reinforces the effect of the set anchor',
    },
  },
  {
    source: 'priming',
    target: 'emotional_appeal',
    type: 'sequential',
    strength: 0.82,
    description: {
      de: 'Priming bereitet die emotionale Reaktion vor, die dann angesprochen wird',
      en: 'Priming prepares the emotional reaction that is then addressed',
    },
  },
  {
    source: 'anchoring',
    target: 'scarcity',
    type: 'reinforcement',
    strength: 0.75,
    description: {
      de: 'Der hohe Anker macht das knappe Angebot noch attraktiver',
      en: 'The high anchor makes the scarce offer even more attractive',
    },
  },
  {
    source: 'social_proof',
    target: 'authority',
    type: 'complementary',
    strength: 0.88,
    description: {
      de: 'Soziale Bewährtheit und Autorität verstärken sich gegenseitig',
      en: 'Social proof and authority mutually reinforce each other',
    },
  },
  {
    source: 'social_proof',
    target: 'liking',
    type: 'enhancement',
    strength: 0.72,
    description: {
      de: 'Sympathie erhöht die Wirkung von Social Proof',
      en: 'Liking increases the effect of social proof',
    },
  },
  {
    source: 'scarcity',
    target: 'reactance_theory',
    type: 'causal',
    strength: 0.80,
    description: {
      de: 'Verknappung löst Reaktanz aus, was die Begierde steigert',
      en: 'Scarcity triggers reactance, which increases desire',
    },
  },
  {
    source: 'reciprocity',
    target: 'consistency',
    type: 'sequential',
    strength: 0.76,
    description: {
      de: 'Reziprozität führt zu kleinen Zusagen, die dann Konsistenz erzwingen',
      en: 'Reciprocity leads to small commitments that then enforce consistency',
    },
  },
  {
    source: 'liking',
    target: 'reciprocity',
    type: 'reinforcement',
    strength: 0.84,
    description: {
      de: 'Sympathie verstärkt das Gefühl der Verpflichtung',
      en: 'Liking strengthens the feeling of obligation',
    },
  },
  {
    source: 'ad_hominem',
    target: 'straw_man',
    type: 'similar',
    strength: 0.68,
    description: {
      de: 'Beide sind Fehlschlüsse, die von der Sachargumenation ablenken',
      en: 'Both are fallacies that distract from factual argumentation',
    },
  },
  {
    source: 'false_dichotomy',
    target: 'framing',
    type: 'subtype',
    strength: 0.73,
    description: {
      de: 'Falsche Dichotomie ist eine spezielle Form des Framings',
      en: 'False dichotomy is a special form of framing',
    },
  },
  {
    source: 'straw_man',
    target: 'emotional_appeal',
    type: 'complementary',
    strength: 0.70,
    description: {
      de: 'Strohmann-Argumente werden oft mit emotionalen Appellen kombiniert',
      en: 'Straw man arguments are often combined with emotional appeals',
    },
  },
  {
    source: 'emotional_appeal',
    target: 'narrative_persuasion',
    type: 'amplification',
    strength: 0.92,
    description: {
      de: 'Narrative verstärken emotionale Appelle dramatisch',
      en: 'Narratives dramatically amplify emotional appeals',
    },
  },
  {
    source: 'repetition',
    target: 'illusory_truth_effect',
    type: 'causal',
    strength: 0.95,
    description: {
      de: 'Wiederholung ist der Mechanismus, der den Wahrheitsillusions-Effekt erzeugt',
      en: 'Repetition is the mechanism that creates the illusory truth effect',
    },
  },
  {
    source: 'illusory_truth_effect',
    target: 'social_proof',
    type: 'enhancement',
    strength: 0.79,
    description: {
      de: 'Virale Verbreitung kombiniert Wiederholung mit sozialer Bewährtheit',
      en: 'Viral spread combines repetition with social proof',
    },
  },
  {
    source: 'pacing_and_leading',
    target: 'liking',
    type: 'causal',
    strength: 0.67,
    description: {
      de: 'Pacing baut Rapport und Sympathie auf',
      en: 'Pacing builds rapport and liking',
    },
  },
  {
    source: 'pacing_and_leading',
    target: 'embedded_commands',
    type: 'sequential',
    strength: 0.71,
    description: {
      de: 'Nach erfolgreichem Pacing werden oft embedded commands eingesetzt',
      en: 'After successful pacing, embedded commands are often used',
    },
  },
  {
    source: 'microtargeting',
    target: 'framing',
    type: 'precision',
    strength: 0.87,
    description: {
      de: 'Microtargeting ermöglicht präzise personalisierte Frames',
      en: 'Microtargeting enables precisely personalized frames',
    },
  },
  {
    source: 'microtargeting',
    target: 'emotional_appeal',
    type: 'precision',
    strength: 0.89,
    description: {
      de: 'Targeting identifiziert die effektivsten emotionalen Trigger',
      en: 'Targeting identifies the most effective emotional triggers',
    },
  },
  {
    source: 'digital_influence',
    target: 'social_proof',
    type: 'amplification',
    strength: 0.91,
    description: {
      de: 'Bots und koordinierte Kampagnen erzeugen künstliche soziale Bewährtheit',
      en: 'Bots and coordinated campaigns create artificial social proof',
    },
  },
  {
    source: 'digital_influence',
    target: 'repetition',
    type: 'amplification',
    strength: 0.88,
    description: {
      de: 'Digitale Werkzeuge ermöglichen massive Skalierung von Wiederholung',
      en: 'Digital tools enable massive scaling of repetition',
    },
  },
  {
    source: 'visual_manipulation',
    target: 'framing',
    type: 'complementary',
    strength: 0.83,
    description: {
      de: 'Visuelle und sprachliche Frames verstärken sich gegenseitig',
      en: 'Visual and linguistic frames mutually reinforce each other',
    },
  },
  {
    source: 'visual_manipulation',
    target: 'emotional_appeal',
    type: 'enhancement',
    strength: 0.90,
    description: {
      de: 'Bilder aktivieren Emotionen stärker als Text',
      en: 'Images activate emotions more strongly than text',
    },
  },
  {
    source: 'synthetic_media',
    target: 'visual_manipulation',
    type: 'subset',
    strength: 0.85,
    description: {
      de: 'Synthetische Medien sind eine fortgeschrittene Form visueller Manipulation',
      en: 'Synthetic media is an advanced form of visual manipulation',
    },
  },
  {
    source: 'dark_patterns',
    target: 'scarcity',
    type: 'reinforcement',
    strength: 0.77,
    description: {
      de: 'Dark Patterns nutzen oft künstliche Verknappung',
      en: 'Dark patterns often use artificial scarcity',
    },
  },
  {
    source: 'dark_patterns',
    target: 'nudging',
    type: 'contrast',
    strength: 0.65,
    description: {
      de: 'Dark Patterns sind die manipulative Version von Nudging',
      en: 'Dark patterns are the manipulative version of nudging',
    },
  },
  {
    source: 'nudging',
    target: 'anchoring',
    type: 'trigger',
    strength: 0.74,
    description: {
      de: 'Defaults in Nudging setzen oft Anker',
      en: 'Defaults in nudging often set anchors',
    },
  },
  {
    source: 'ai_persuasion',
    target: 'microtargeting',
    type: 'enhancement',
    strength: 0.93,
    description: {
      de: 'KI macht Microtargeting präziser und adaptiver',
      en: 'AI makes microtargeting more precise and adaptive',
    },
  },
  {
    source: 'ai_persuasion',
    target: 'pacing_and_leading',
    type: 'precision',
    strength: 0.81,
    description: {
      de: 'KI kann Pacing und Leading in Echtzeit optimieren',
      en: 'AI can optimize pacing and leading in real-time',
    },
  },
  {
    source: 'narrative_persuasion',
    target: 'framing',
    type: 'amplification',
    strength: 0.86,
    description: {
      de: 'Geschichten sind mächtige Frame-Träger',
      en: 'Stories are powerful frame carriers',
    },
  },
];

/**
 * Get all relationships for a specific technique
 */
export function getRelationshipsForTechnique(techniqueId: string): TechniqueRelationship[] {
  return techniqueRelationships.filter(
    (r) => r.source === techniqueId || r.target === techniqueId
  );
}

/**
 * Get relationships by type
 */
export function getRelationshipsByType(type: string): TechniqueRelationship[] {
  return techniqueRelationships.filter((r) => r.type === type);
}

/**
 * Get outgoing relationships (where technique is source)
 */
export function getOutgoingRelationships(techniqueId: string): TechniqueRelationship[] {
  return techniqueRelationships.filter((r) => r.source === techniqueId);
}

/**
 * Get incoming relationships (where technique is target)
 */
export function getIncomingRelationships(techniqueId: string): TechniqueRelationship[] {
  return techniqueRelationships.filter((r) => r.target === techniqueId);
}

/**
 * Check if two techniques are related
 */
export function areTechniquesRelated(technique1: string, technique2: string): boolean {
  return techniqueRelationships.some(
    (r) =>
      (r.source === technique1 && r.target === technique2) ||
      (r.source === technique2 && r.target === technique1)
  );
}

/**
 * Get relationship between two specific techniques
 */
export function getRelationshipBetween(
  technique1: string,
  technique2: string
): TechniqueRelationship | undefined {
  return techniqueRelationships.find(
    (r) =>
      (r.source === technique1 && r.target === technique2) ||
      (r.source === technique2 && r.target === technique1)
  );
}
