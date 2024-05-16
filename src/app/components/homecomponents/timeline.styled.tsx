import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Image from "next/image";

export const BigComponent = styled.div`
height:90px;
width:90%;
display: flex;
overflow-x: auto;
padding: 20px;
white-space: nowrap;
`

export const TimelineItem = styled.div`
display: inline-block;
position: relative;
margin: 0 20px;
padding: 10px 20px;
background: #f5f5f5;
border-radius: 8px;
::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -20px;
    width: 16px;
    height: 16px;
    background: #0070f3;
    border-radius: 50%;
    transform: translateY(-50%);
  }
`

export const DateCompany = styled.h3`
margin: 0 0 10px;
font-size: 1.2em;
`

export const Company = styled(Typography)`
margin: 0;
font-size: 1em;
`