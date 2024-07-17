"use client"

import { useTranslation } from 'react-i18next';
import { FooterPage, LanguageChoice } from './footer.styled'
import { useEffect, useState } from 'react';
import { choiceLanguage, useDispatch } from '@/lib/redux';
import { changeLanguage } from 'i18next';
export const FooterPages = () => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation(['home', 'main']);

  const [language, setLanguage] = useState('en');

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
    dispatch(choiceLanguage(e.target.value))
  }

  useEffect(() => {
    // This code will only run on the client side
    if (typeof navigator !== 'undefined') {
      let lang = navigator.language || "en"
      if (lang) {
        lang = lang.substring(0, 2)
        if (!['en',
          'pt'
          ,
          'it'].includes(lang)) {
          lang = navigator.languages.map(lg => lg.substring(0, 2)).find(lg => ['en',
            'pt'
            ,
            'it'].includes(lg)) || "en"
        }
      }

      changeLanguage(lang)

    }
  }, []);

  return (
    <footer>
      <FooterPage>
        &copy; 2024 Mariano Aloi. All Rights Reserved.

      </FooterPage>
      <LanguageChoice value={i18n.language} onChange={onClickLanguageChange}>
        <option value='en'>🇺🇸️ English</option>
        <option value='pt'>🇧🇷️ Portuguese</option>
        <option value='it'>🇮🇹️ Italian</option>
      </LanguageChoice>

    </footer>
  )
}