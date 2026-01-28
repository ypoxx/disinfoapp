import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import de from './locales/de.json';
import deAT from './locales/de-AT.json';
import en from './locales/en.json';
import hu from './locales/hu.json';
import pl from './locales/pl.json';
import sk from './locales/sk.json';
import hr from './locales/hr.json';
import el from './locales/el.json';
import mk from './locales/mk.json';
import cnr from './locales/cnr.json';

export const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'de-AT', name: 'Österreichisch', flag: '🇦🇹', dir: 'ltr' },
  { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺', dir: 'ltr' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱', dir: 'ltr' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰', dir: 'ltr' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷', dir: 'ltr' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷', dir: 'ltr' },
  { code: 'mk', name: 'Македонски', flag: '🇲🇰', dir: 'ltr' },
  { code: 'cnr', name: 'Crnogorski', flag: '🇲🇪', dir: 'ltr' },
] as const;

export type LanguageCode = (typeof languages)[number]['code'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      'de-AT': { translation: deAT },
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
    supportedLngs: languages.map((l) => l.code),
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: true,
    },
    initImmediate: true,
  });

export default i18n;
