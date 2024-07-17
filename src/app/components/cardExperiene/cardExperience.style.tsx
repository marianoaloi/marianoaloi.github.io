import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import { breakpointsWidth, themeColor } from "../header.styled";


export const CardExperienceContainer = styled(Card)`
        align-content: center;
    text-align: center;
    font-size: 17px;
    margin: 3px 0px;
    padding: 6px;
    
    box-shadow: -2px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 7px;

background-color: ${themeColor};
    color: #fff;
    
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
@media (min-width: ${breakpointsWidth.desktop}) {

    font-size: 2em;
    padding: 0px 12px;
    margin: 10px 10px;

  }
`

export const IconCard = styled.div`
width: 6vw;
    height: 100%;
`

export const TextCard = styled(Typography)`

`