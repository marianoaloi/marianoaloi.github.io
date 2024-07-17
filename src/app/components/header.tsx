"use client"

import { HeaderPage, NavBar, NavBarLink, ToolbarSpacer } from './header.styled';
import { usePathname } from 'next/navigation';


export const HeaderPages = () => {
  const pathname = usePathname()






  return (
    <HeaderPage>
      <ToolbarSpacer />

      <NavBar>
        <div>
          <NavBarLink href="#about" selectedlink={"/about" == pathname ? 'true' : 'false'}>About Me</NavBarLink>
          <NavBarLink href="#contact" selectedlink={"/contact" == pathname ? 'true' : 'false'}>Contact</NavBarLink>
        </div>

      </NavBar>
    </HeaderPage>
  );
};
