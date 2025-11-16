import { TaxonomyGroup } from '@/types/persuasion';

/**
 * Taxonomy groups for organizing techniques
 * Hierarchical categorization for better understanding and navigation
 */
export const taxonomyGroups: TaxonomyGroup[] = [
  {
    id: 'cognitive_biases',
    name: {
      de: 'Kognitive Verzerrungen',
      en: 'Cognitive Biases',
    },
    description: {
      de: 'Systematische Fehler im Denken, die von normalen rationalen Entscheidungen abweichen',
      en: 'Systematic errors in thinking that deviate from normal rational decisions',
    },
    techniques: [
      'framing',
      'priming',
      'anchoring',
      'reactance_theory',
      'repetition',
      'illusory_truth_effect',
      'nudging',
    ],
  },
  {
    id: 'social_influence',
    name: {
      de: 'Sozialer Einfluss',
      en: 'Social Influence',
    },
    description: {
      de: 'Techniken, die soziale Dynamiken und Gruppennormen nutzen',
      en: 'Techniques that use social dynamics and group norms',
    },
    techniques: ['social_proof', 'scarcity', 'reciprocity', 'authority', 'liking', 'consistency'],
  },
  {
    id: 'logical_fallacies',
    name: {
      de: 'Logische Fehlschlüsse',
      en: 'Logical Fallacies',
    },
    description: {
      de: 'Fehlerhafte Argumentationsmuster, die rational inkorrekt sind',
      en: 'Faulty argumentation patterns that are rationally incorrect',
    },
    techniques: ['ad_hominem', 'false_dichotomy', 'straw_man', 'equivocation'],
  },
  {
    id: 'emotional_manipulation',
    name: {
      de: 'Emotionale Manipulation',
      en: 'Emotional Manipulation',
    },
    description: {
      de: 'Techniken, die Emotionen statt Logik ansprechen',
      en: 'Techniques that appeal to emotions instead of logic',
    },
    techniques: ['emotional_appeal', 'narrative_persuasion'],
  },
  {
    id: 'nlp_techniques',
    name: {
      de: 'NLP-Techniken',
      en: 'NLP Techniques',
    },
    description: {
      de: 'Neuro-linguistische Programmierung und Hypnose-basierte Methoden',
      en: 'Neuro-linguistic programming and hypnosis-based methods',
    },
    techniques: ['pacing_and_leading', 'embedded_commands'],
  },
  {
    id: 'digital_techniques',
    name: {
      de: 'Digitale Techniken',
      en: 'Digital Techniques',
    },
    description: {
      de: 'Moderne technologiebasierte Manipulationsmethoden',
      en: 'Modern technology-based manipulation methods',
    },
    techniques: [
      'microtargeting',
      'digital_influence',
      'visual_manipulation',
      'synthetic_media',
      'dark_patterns',
      'ai_persuasion',
    ],
  },
  {
    id: 'information_presentation',
    name: {
      de: 'Informations-Präsentation',
      en: 'Information Presentation',
    },
    description: {
      de: 'Wie Informationen dargestellt und gerahmt werden',
      en: 'How information is presented and framed',
    },
    techniques: ['framing', 'visual_manipulation', 'narrative_persuasion'],
  },
  {
    id: 'unconscious_influence',
    name: {
      de: 'Unbewusste Beeinflussung',
      en: 'Unconscious Influence',
    },
    description: {
      de: 'Techniken, die unter der bewussten Wahrnehmung operieren',
      en: 'Techniques that operate below conscious awareness',
    },
    techniques: ['priming', 'anchoring', 'embedded_commands', 'nudging'],
  },
  {
    id: 'decision_making',
    name: {
      de: 'Entscheidungsfindung',
      en: 'Decision Making',
    },
    description: {
      de: 'Beeinflussung von Entscheidungsprozessen',
      en: 'Influencing decision-making processes',
    },
    techniques: ['anchoring', 'nudging', 'dark_patterns', 'scarcity'],
  },
  {
    id: 'conformity',
    name: {
      de: 'Konformität',
      en: 'Conformity',
    },
    description: {
      de: 'Anpassung an Gruppennormen und -verhalten',
      en: 'Adaptation to group norms and behavior',
    },
    techniques: ['social_proof', 'authority', 'liking'],
  },
  {
    id: 'urgency_creation',
    name: {
      de: 'Dringlichkeits-Erzeugung',
      en: 'Urgency Creation',
    },
    description: {
      de: 'Künstliche Zeitdruck-Erzeugung',
      en: 'Artificial time pressure creation',
    },
    techniques: ['scarcity', 'dark_patterns'],
  },
  {
    id: 'information_repetition',
    name: {
      de: 'Informations-Wiederholung',
      en: 'Information Repetition',
    },
    description: {
      de: 'Wiederholungsbasierte Beeinflussung',
      en: 'Repetition-based influence',
    },
    techniques: ['repetition', 'illusory_truth_effect', 'digital_influence'],
  },
  {
    id: 'argumentation',
    name: {
      de: 'Argumentation',
      en: 'Argumentation',
    },
    description: {
      de: 'Argumentationsstrategien und -fehler',
      en: 'Argumentation strategies and errors',
    },
    techniques: ['ad_hominem', 'straw_man', 'false_dichotomy', 'equivocation'],
  },
];

/**
 * Get taxonomy group by ID
 */
export function getTaxonomyGroupById(id: string): TaxonomyGroup | undefined {
  return taxonomyGroups.find((g) => g.id === id);
}

/**
 * Get all techniques in a taxonomy group
 */
export function getTechniquesInGroup(groupId: string): string[] {
  const group = getTaxonomyGroupById(groupId);
  return group?.techniques || [];
}

/**
 * Get all taxonomy groups for a technique
 */
export function getGroupsForTechnique(techniqueId: string): TaxonomyGroup[] {
  return taxonomyGroups.filter((g) => g.techniques.includes(techniqueId));
}
