import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import de from './locales/de.json';
import en from './locales/en.json';
import hu from './locales/hu.json';
import pl from './locales/pl.json';
import sk from './locales/sk.json';
import hr from './locales/hr.json';
import el from './locales/el.json';
import mk from './locales/mk.json';
import cnr from './locales/cnr.json';

export const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'mk', name: 'Македонски', flag: '🇲🇰' },
  { code: 'cnr', name: 'Crnogorski', flag: '🇲🇪' },
] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
      hu: { translation: hu },
      pl: { translation: pl },
      sk: { translation: sk },
      hr: { translation: hr },
      el: { translation: el },
      mk: { translation: mk },
      cnr: { translation: cnr },
    },
    fallbackLng: 'de',
    supportedLngs: languages.map(l => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
