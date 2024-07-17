"use client"
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./Translation/English/translation.json";
import translationPortuguese from "./Translation/Portuguese/translation.json";
import translationItalian from "./Translation/Italian/translation.json";


import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "../../i18n.config";
import { useState } from "react";

// import { cookies, headers } from "next/headers";

//---Using different namespaces
const resources = {
    'en': {
        'home': translationEnglish,
    },
    'pt': {
        'home': translationPortuguese,
    },
    'ptBR': {
        'home': translationPortuguese,
    },
    'it': {
        'home': translationItalian,
    },
}

const lang = 'en'

// const [lang,setLanguage] = useState('en')

// let lang = navigator.language || "en"
// if (lang) {
//     lang = lang.substring(0, 2)
//     if (!['en',
//         'pt'
//         ,
//         'it'].includes(lang)) {
//         lang = navigator.languages.map(lg => lg.substring(0, 2)).find(lg => ['en',
//             'pt'
//             ,
//             'it'].includes(lg)) || "en"
//     }
// }

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: lang, //default language
        fallbackLng: lang,
        interpolation: {
            // alwaysFormat: true,
            escapeValue: false, // This ensures React interprets HTML entities correctly

        },

    });

export default i18next;