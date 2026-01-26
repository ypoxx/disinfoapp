import { SupportedLanguage } from '@/stores/languageStore';

/**
 * Extended multilingual content type
 * Supports all Phase 1 and Phase 2 languages
 */
export interface MultilingualString {
  de: string;
  en?: string;
  hu?: string;
  pl?: string;
  sk?: string;
  hr?: string;
  el?: string;
  mk?: string;
  'de-AT'?: string;
}

/**
 * Get a localized string from a multilingual object
 * Falls back to German if the requested language is not available
 */
export function t(content: MultilingualString | undefined, language: SupportedLanguage): string {
  if (!content) return '';

  // Try the requested language first
  const value = content[language as keyof MultilingualString];
  if (value) return value;

  // For Austrian German, fall back to German
  if (language === 'de-AT' && content.de) return content.de;

  // Fall back to English if available
  if (content.en) return content.en;

  // Final fallback to German
  return content.de || '';
}

/**
 * UI translations for the app interface
 */
export const uiStrings: Record<string, MultilingualString> = {
  // Header
  'header.title': {
    de: 'DisInfo Glossar',
    en: 'DisInfo Glossary',
  },
  'header.dashboard': {
    de: 'Dashboard',
    en: 'Dashboard',
  },

  // Progress
  'progress.seen': {
    de: 'gesehen',
    en: 'seen',
  },
  'progress.of': {
    de: 'von',
    en: 'of',
  },

  // Actions
  'action.shuffle': {
    de: 'Neu mischen',
    en: 'Shuffle',
  },
  'action.share': {
    de: 'Teilen',
    en: 'Share',
  },
  'action.learnMore': {
    de: 'Mehr erfahren',
    en: 'Learn more',
  },
  'action.showMoreExamples': {
    de: 'weitere Beispiele anzeigen',
    en: 'more examples',
  },
  'action.openInDashboard': {
    de: 'Im Dashboard öffnen',
    en: 'Open in Dashboard',
  },

  // End card
  'end.title': {
    de: 'Alle Begriffe gesehen!',
    en: 'All terms viewed!',
  },
  'end.subtitle': {
    de: 'Du hast alle Techniken entdeckt.',
    en: 'You have discovered all techniques.',
  },
  'end.restart': {
    de: 'Nochmal durchgehen',
    en: 'Start over',
  },
  'end.toDashboard': {
    de: 'Zum Dashboard',
    en: 'Go to Dashboard',
  },

  // Swipe hint
  'hint.swipeUp': {
    de: 'Wische nach oben',
    en: 'Swipe up',
  },

  // Difficulty levels
  'difficulty.beginner': {
    de: 'Grundlagen',
    en: 'Beginner',
  },
  'difficulty.intermediate': {
    de: 'Fortgeschritten',
    en: 'Intermediate',
  },
  'difficulty.advanced': {
    de: 'Experte',
    en: 'Advanced',
  },
  'difficulty.expert': {
    de: 'Spezialist',
    en: 'Expert',
  },

  // Effectiveness levels
  'effectiveness.veryHigh': {
    de: 'Sehr hoch',
    en: 'Very high',
  },
  'effectiveness.high': {
    de: 'Hoch',
    en: 'High',
  },
  'effectiveness.moderate': {
    de: 'Moderat',
    en: 'Moderate',
  },
  'effectiveness.low': {
    de: 'Niedrig',
    en: 'Low',
  },

  // Evidence
  'evidence.high': {
    de: 'Hohe Evidenz',
    en: 'High evidence',
  },
  'evidence.moderate': {
    de: 'Moderate Evidenz',
    en: 'Moderate evidence',
  },
  'evidence.low': {
    de: 'Limitierte Evidenz',
    en: 'Limited evidence',
  },
  'evidence.study': {
    de: 'Studie',
    en: 'Study',
  },
  'evidence.studies': {
    de: 'Studien',
    en: 'Studies',
  },

  // Categories
  'category.cognitive_bias': {
    de: 'Kognitive Verzerrung',
    en: 'Cognitive Bias',
  },
  'category.social_dynamics': {
    de: 'Soziale Dynamiken',
    en: 'Social Dynamics',
  },
  'category.emotional_manipulation': {
    de: 'Emotionale Manipulation',
    en: 'Emotional Manipulation',
  },
  'category.logical_fallacy': {
    de: 'Logischer Fehlschluss',
    en: 'Logical Fallacy',
  },
  'category.nlp': {
    de: 'NLP-Techniken',
    en: 'NLP Techniques',
  },
  'category.digital_influence': {
    de: 'Digitaler Einfluss',
    en: 'Digital Influence',
  },

  // Labels
  'label.example': {
    de: 'Beispiel',
    en: 'Example',
  },
  'label.effectiveness': {
    de: 'Effektivität',
    en: 'Effectiveness',
  },

  // Language switcher
  'language.select': {
    de: 'Sprache wählen',
    en: 'Select language',
  },
};

/**
 * Get a UI string
 */
export function ui(key: string, language: SupportedLanguage): string {
  const content = uiStrings[key];
  if (!content) {
    console.warn(`Missing UI string: ${key}`);
    return key;
  }
  return t(content, language);
}

/**
 * Get difficulty label
 */
export function getDifficultyLabel(difficulty: string, language: SupportedLanguage): string {
  const key = `difficulty.${difficulty}`;
  return ui(key, language);
}

/**
 * Get effectiveness label
 */
export function getEffectivenessLabel(effectiveness: string, language: SupportedLanguage): string {
  const key = effectiveness === 'very_high' ? 'effectiveness.veryHigh' : `effectiveness.${effectiveness}`;
  return ui(key, language);
}

/**
 * Get category label
 */
export function getCategoryLabel(category: string, language: SupportedLanguage): string {
  const key = `category.${category}`;
  return ui(key, language);
}

/**
 * Get evidence label
 */
export function getEvidenceLabel(quality: string, language: SupportedLanguage): string {
  const key = `evidence.${quality}`;
  return ui(key, language);
}

/**
 * Get study count with proper pluralization
 */
export function getStudyCountLabel(count: number, language: SupportedLanguage): string {
  const studyWord = count === 1 ? ui('evidence.study', language) : ui('evidence.studies', language);
  return `${count} ${studyWord}`;
}
