import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { themeColor } from "./header.styled";

export const FooterPage = styled(Typography)`
    background-color: ${themeColor};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    height: 25px;
`


export const LanguageChoice = styled.select`
    /* width: 100%; */
    float: right;
    bottom: 2px;
    right: 2px;
    position: fixed;
`