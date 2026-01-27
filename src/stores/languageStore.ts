import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SupportedLanguage = 'de' | 'en' | 'hu' | 'pl' | 'sk' | 'hr' | 'el' | 'mk' | 'de-AT';

interface LanguageState {
  // Current language
  language: SupportedLanguage;

  // Whether the user has manually selected a language
  isManualSelection: boolean;

  // Actions
  setLanguage: (language: SupportedLanguage) => void;
  detectLanguage: () => void;
}

/**
 * Detect the user's preferred language from browser settings
 */
function detectBrowserLanguage(): SupportedLanguage {
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'de';
  const langCode = browserLang.toLowerCase();

  // Check for exact matches first
  if (langCode === 'de-at') return 'de-AT';
  if (langCode.startsWith('de')) return 'de';
  if (langCode.startsWith('en')) return 'en';
  if (langCode.startsWith('hu')) return 'hu';
  if (langCode.startsWith('pl')) return 'pl';
  if (langCode.startsWith('sk')) return 'sk';
  if (langCode.startsWith('hr')) return 'hr';
  if (langCode.startsWith('el')) return 'el';
  if (langCode.startsWith('mk')) return 'mk';

  // Default to German
  return 'de';
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'de',
      isManualSelection: false,

      setLanguage: (language: SupportedLanguage) =>
        set({
          language,
          isManualSelection: true,
        }),

      detectLanguage: () => {
        // Only auto-detect if user hasn't manually selected
        if (!get().isManualSelection) {
          set({
            language: detectBrowserLanguage(),
          });
        }
      },
    }),
    {
      name: 'language-storage',
    }
  )
);

/**
 * Language display names in their native language
 */
export const languageNames: Record<SupportedLanguage, string> = {
  de: 'Deutsch',
  en: 'English',
  hu: 'Magyar',
  pl: 'Polski',
  sk: 'Slovenčina',
  hr: 'Hrvatski',
  el: 'Ελληνικά',
  mk: 'Македонски',
  'de-AT': 'Österreichisch',
};

/**
 * Language flags (emoji)
 */
export const languageFlags: Record<SupportedLanguage, string> = {
  de: '🇩🇪',
  en: '🇬🇧',
  hu: '🇭🇺',
  pl: '🇵🇱',
  sk: '🇸🇰',
  hr: '🇭🇷',
  el: '🇬🇷',
  mk: '🇲🇰',
  'de-AT': '🇦🇹',
};

/**
 * Currently available languages (Phase 1)
 * Phase 2 languages are listed but may have incomplete translations
 */
export const availableLanguages: SupportedLanguage[] = ['de', 'en'];

/**
 * All supported languages including Phase 2
 */
export const allLanguages: SupportedLanguage[] = ['de', 'en', 'hu', 'pl', 'sk', 'hr', 'el', 'mk', 'de-AT'];
