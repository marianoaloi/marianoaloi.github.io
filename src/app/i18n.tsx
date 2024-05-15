import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./Translation/English/translation.json";
import translationPortuguese from "./Translation/Portuguese/translation.json";
import translationItalian from "./Translation/Italian/translation.json";

//---Using different namespaces
const resources = {
    'en': {
        'home': translationEnglish,
    },
    'pt': {
        'home': translationPortuguese,
    },
    'it': {
        'home': translationItalian,
    },
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", //default language
        interpolation: {
            escapeValue: false, // This ensures React interprets HTML entities correctly
        },
    });

export default i18next;