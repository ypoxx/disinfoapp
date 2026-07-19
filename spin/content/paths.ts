import type { LearningPath } from './types';
import { techniques } from './techniques';

/**
 * Learning paths — curated shelves through the catalogue.
 * Wave releases (R4–R6) extend these lists; the Radar path fills itself
 * from the evidenceTier field so frontier terms never need manual listing.
 */
export const learningPaths: LearningPath[] = [
  {
    id: 'grundlagen',
    name: { de: 'Grundlagen', en: 'Foundations' },
    description: {
      de: 'Die klassischen Überzeugungstechniken — das Fundament für alles Weitere.',
      en: 'The classic persuasion techniques — the foundation for everything else.',
    },
    techniqueIds: [
      'framing', 'anchoring', 'social_proof', 'scarcity', 'authority',
      'reciprocity', 'liking', 'consistency', 'emotional_appeal', 'repetition',
      'illusory_truth_effect', 'priming', 'reactance_theory', 'narrative_persuasion',
      'nudging',
    ],
  },
  {
    id: 'rhetorik',
    name: { de: 'Rhetorik & Fehlschlüsse', en: 'Rhetoric & Fallacies' },
    description: {
      de: 'Argumentationsmuster erkennen und entschärfen — vom Strohmann bis zum Paltering.',
      en: 'Recognise and defuse argumentation patterns — from straw man to paltering.',
    },
    techniqueIds: [
      'ad_hominem', 'straw_man', 'false_dichotomy', 'equivocation',
      'paltering_half_truth', 'cherry_picking', 'false_balance', 'agenda_setting',
      'guilt_by_association',
    ],
  },
  {
    id: 'verhaltensoekonomie',
    name: { de: 'Verhaltensökonomie', en: 'Behavioural Economics' },
    description: {
      de: 'Die Entscheidungs-Verzerrungen hinter Preistabellen, Kampagnen-Copy und Risikokommunikation.',
      en: 'The decision biases behind pricing tables, campaign copy and risk communication.',
    },
    techniqueIds: [
      'loss_aversion', 'decoy_effect', 'availability_heuristic', 'confirmation_bias',
      'representativeness_heuristic', 'endowment_effect', 'default_status_quo',
      'cognitive_dissonance_induction', 'door_in_the_face',
    ],
  },
  {
    id: 'digitale_arena',
    name: { de: 'Digitale Arena', en: 'Digital Arena' },
    description: {
      de: 'Plattformmechanik, Dark Patterns und KI-gestützte Beeinflussung.',
      en: 'Platform mechanics, dark patterns and AI-driven influence.',
    },
    techniqueIds: [
      'digital_influence', 'microtargeting', 'dark_patterns', 'synthetic_media',
      'visual_manipulation', 'ai_persuasion', 'voice_cloning_vishing', 'sycophancy',
      'pacing_and_leading', 'embedded_commands',
      'drip_pricing', 'sneaking', 'bait_and_switch', 'price_comparison_prevention',
      'consent_and_privacy_dark_patterns', 'sludge', 'subscription_trap_obstruction',
      'gamification_variable_reward', 'doomscrolling_fomo_engineering', 'attention_engagement_loops',
      'identity_provenance_deception', 'integrity_clash_laundering',
      'automation_bias_overreliance', 'anthropomorphic_trust_cues',
    ],
  },
  {
    id: 'radar',
    name: { de: 'Radar', en: 'Radar' },
    description: {
      de: 'Neue und noch schwach belegte Begriffe. Hier lernst du, wie die Muster heißen und worüber die Forschung noch streitet — ohne Wirkversprechen.',
      en: 'New and weakly evidenced terms. Learn what the patterns are called and what research still debates — no effect claims.',
    },
    techniqueIds: [], // filled dynamically from evidenceTier
    isRadar: true,
  },
];

/** Radar membership is derived, never hand-maintained */
export function radarTechniqueIds(): string[] {
  return techniques.filter((t) => t.evidenceTier === 'frontier').map((t) => t.id);
}

export function getPathById(id: string): LearningPath | undefined {
  return learningPaths.find((p) => p.id === id);
}

/** Resolved technique list for a path (Radar resolves dynamically) */
export function techniquesInPath(path: LearningPath): string[] {
  if (path.isRadar) return radarTechniqueIds();
  // Only list techniques that actually exist in the catalogue (waves land incrementally)
  const known = new Set(techniques.map((t) => t.id));
  return path.techniqueIds.filter((id) => known.has(id));
}
