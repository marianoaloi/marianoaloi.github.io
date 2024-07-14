"use client"

import { useTranslation } from 'react-i18next';
import { FooterPage, LanguageChoice } from './footer.styled'
import { useEffect } from 'react';
import { choiceLanguage, useDispatch } from '@/lib/redux';
export const FooterPages = () => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation(['home', 'main']);



  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
    dispatch(choiceLanguage(e.target.value))
  }

  return (
    <footer>
      <FooterPage>
        &copy; 2024 Mariano Aloi. All Rights Reserved.

      </FooterPage>
      <LanguageChoice onChange={onClickLanguageChange}>
        <option value='en'>🇺🇸️ English</option>
        <option value='pt'>🇧🇷️ Portuguese</option>
        <option value='it'>🇮🇹️ Italian</option>
      </LanguageChoice>

    </footer>
  )
}