import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Image from "next/image";

export const themeColor = "#601165"

export const NavBar = styled.nav`
background-color: ${themeColor};
padding: 10px 2px;
`

export const ToolbarSpacer = styled.div`
    flex: 1 1 auto;
`

export const Logo = styled(Image)`

`
export const HeaderPage = styled.header`

display: inline-flex;
background-color: ${themeColor};
align-items: center;
width: 100%;
height: 70px;

background-image: url(/proto.svg);
    background-repeat: no-repeat;
    background-position: left;
`

export const NavBarLink = styled(Button)<{ selectedlink?: string }>((props: any) => ({
    color: 'white',
    height: '1.5em',
    // border: '3px ridge darkred',
    padding: '3px 5px',
    transition: '1s',
    borderRadius: '0.3em',
    background: props.selectedlink === 'true' ? 'darkred' : undefined,
}), {
    '&:hover': {
        boxShadow: 'inset 0px 0px 25px #e56bc2'
    },
})