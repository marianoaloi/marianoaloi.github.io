import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to our website!',
      // Add other translations for English (en-US) here
    },
  },
  it: {
    translation: {
      welcome: 'Benvenuto sul nostro sito web!',
      // Add other translations for Italian (it) here
    },
  },
  'pt-BR': {
    translation: {
      welcome: 'Bem-vindo ao nosso site!',
      // Add other translations for Brazilian Portuguese (pt-BR) here
    },
  },
};

i18n
  .use(initReactI18next) // Initializes i18next with react-i18next plugin
  .init({
    resources,
    lng: 'en-US', // Default language
    interpolation: {
      escapeValue: false, // This ensures React interprets HTML entities correctly
    },
  });

export default i18n;
