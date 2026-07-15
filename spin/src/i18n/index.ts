import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import de from './locales/de.json';
import en from './locales/en.json';

/**
 * Active languages: German and English — fully translated (UI + content).
 * The other locale files in ./locales are stale copies from the old app;
 * they are deliberately NOT bundled until they are genuinely translated.
 */
export const languages = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' },
] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
    fallbackLng: 'de',
    supportedLngs: languages.map(l => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

// Keep <html lang> in sync with the active language (screen readers, hyphenation)
document.documentElement.lang = i18n.resolvedLanguage ?? 'de';
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
