import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locals/en/translation.json';
import ku from './locals/ku/translation.json';

const savedLang = localStorage.getItem('lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ku: { translation: ku }
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
