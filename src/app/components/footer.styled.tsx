import { styled, Typography } from "@mui/material";
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