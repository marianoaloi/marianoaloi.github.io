import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { breakpointsWidth, themeColor } from "./header.styled";

export const FooterPage = styled(Typography)`
    background-color: ${themeColor};
    color: ${themeColor};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    height: 25px;
    @media (min-width: ${breakpointsWidth.desktop}) {
        
    color: white;
      }
`


export const LanguageChoice = styled.select`
    float: left;
    bottom: 2px;
    left: 2px;
    position: fixed;
`