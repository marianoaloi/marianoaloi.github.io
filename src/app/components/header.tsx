"use client"

import { useTranslation } from 'react-i18next';
import { HeaderPage, NavBar, NavBarLink, ToolbarSpacer } from './header.styled';
import { usePathname } from 'next/navigation';


export const HeaderPages = () => {
  const pathname = usePathname()





  const { t, i18n } = useTranslation(['home', 'main']);

  return (
    <HeaderPage>
      <ToolbarSpacer />

      <NavBar>
        <div>
          <NavBarLink href="#about" selectedlink={"/about" == pathname ? 'true' : 'false'}>{t("head.aboutMe", { ns: ["home"] })}</NavBarLink>
          <NavBarLink href="#contact" selectedlink={"/contact" == pathname ? 'true' : 'false'}>{t("head.contact", { ns: ["home"] })}</NavBarLink>
        </div>

      </NavBar>
    </HeaderPage>
  );
};
