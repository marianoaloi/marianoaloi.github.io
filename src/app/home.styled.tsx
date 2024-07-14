import styled from "@emotion/styled";
import Image from "next/image";
import { breakpointsWidth, themeColor } from "./components/header.styled";
import { Card, Typography } from "@mui/material";



export const MaloiImg = styled(Image)`
height: auto;
/* border: double 10px black; */
background: white;

max-width: 18vw;
margin: -2px 2px 2px 2px;
@media (min-width: ${breakpointsWidth.desktop}) {
    
margin: -2px 10px 10px 10px;
max-width: 8vw;
  }
`

export const GradientBoard = styled.div`
    position: relative;
    background: linear-gradient(to top, red, ${themeColor});
    padding: 3px;
    float: left;
`
export const MainMessage = styled(Typography)(() => (`
    margin: 0px 3px 10px 3px;
    font-size: 1rem;
    font-family: "Teko", sans-serif;
    line-height: 20px;
    text-align: center;
    text-shadow: 1px 1px 2px #c7c5c5;
@media (min-width: ${breakpointsWidth.desktop}) {

    font-size: 2em;
    line-height: 42px;
  }
    `))

export const CardsExperience = styled.div`
display: grid;
    /*background-color: blue;*/
    justify-content: space-around;
    width: 77vw;
    
@media (min-width: ${breakpointsWidth.desktop}) {
    display: inline-flex;
    width: 91vw;
  }
    `
export const CardExperience = styled(Card)`
        align-content: center;
    text-align: center;
    font-size: 17px;
    margin: 3px 0px;
    padding: 6px;
    
    box-shadow: -2px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
@media (min-width: ${breakpointsWidth.desktop}) {

    font-size: 2em;
    padding: 0px 12px;
    margin: 10px 10px;
  }
`
