import styled from "@emotion/styled";
import Image from "next/image";
import { themeColor } from "./components/header.styled";



export const MaloiImg = styled(Image)`
max-width: 200px;
height: auto;
margin: 10px;
/* border: double 10px black; */
background: white;
margin-top: -2px;

`

export const GradientBoard = styled.div`
    position: relative;
    background: linear-gradient(to top, red, ${themeColor});
    padding: 3px;
    float: left;
`
