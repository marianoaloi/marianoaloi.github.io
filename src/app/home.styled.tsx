import styled from "@emotion/styled";
import Image from "next/image";
import { breakpointsWidth, themeColor } from "./components/header.styled";
import { Card, Typography } from "@mui/material";


export const MainComponent = styled.div`
width: 100%;
    overflow-wrap: break-word;
    display: grid;

`

export const MaloiImg = styled(Image)`
height: auto;
/* border: double 10px black; */

    max-height: 85vw;
    width: auto;
@media (min-width: ${breakpointsWidth.desktop}) {
    
  }
`

export const GradientBoard = styled.div`
    /* background: linear-gradient(to top, red, ${themeColor}); */
    position: relative;
    padding: 3px;
    float: left;
    width: 100%;
    align-content: space-around;
    display: flex;
    justify-content: space-around;
    height: 50vh;
`
export const MainMessage = styled(Typography)(() => (`
    margin: 0px 3px 10px 3px;
    font-size: 1rem;
    font-family: "Teko", sans-serif;
    line-height: 20px;
    text-align: center;
    text-shadow: 1px 1px 2px #c7c5c5;
    top: 36vh;
    
    position: absolute;

    color: white;
    background-color: ${themeColor}
    
    ;
@media (min-width: ${breakpointsWidth.desktop}) {

    font-size: 2em;
    line-height: 42px;
  }
    `))

export const CardsExperience = styled.div`
display: grid;
    /*background-color: blue;*/
    justify-content: space-around;
    width: 100%;
        
    
@media (min-width: ${breakpointsWidth.desktop}) {
    display: inline-flex;
  }
    `

export const CardsExperienceContainer = styled.div`
height: 30vh;
`