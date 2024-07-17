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

  &:hover{
    animation: tilt-n-move-shaking 0.25s infinite;
  }

  @keyframes tilt-n-move-shaking {
    0% { transform: translateX(0) }
    25% { transform: translateX(3px) }
    50% { transform: translateX(-3px) }
    75% { transform: translateX(3px) }
    100% { transform: translateX(0) }
    }

`

export const IconCard = styled.div`
width: 6vw;
    height: 100%;
`

export const TextCard = styled(Typography)`

`