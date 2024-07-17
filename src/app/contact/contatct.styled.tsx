import styled from "@emotion/styled";
import Image from "next/image";
import { themeColor } from "../components/header.styled";

export const MainComponent = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    justify-content: flex-start;

    
    
`
/*

*/
export const ContactScreen = styled.div`

position: fixed;
float: right;
right: 0px;
top: 76px;
border: double 3px ${themeColor};

z-index: 91;
`
export const BlackScreen = styled.div`

z-index: 90;
    width: 100%;
    height: 100%;
    background-color: ${themeColor};
    position: fixed;
    top: 0px;
    opacity: 90%;

`
export const CAllMe = styled.div`
    background: white;

    position: fixed;
    float: right;
    right: 0px;
    top: 76px;
    z-index: 90;

    font-size: 2rem;
`

export const LineContatct = styled.div`
padding: 15px;
display: inline-flex;
width: 100%;
align-items: center;
align-content: center;
justify-content: flex-end;
`
export const imageLogoWithg = 25
export const Logo = styled(Image)``