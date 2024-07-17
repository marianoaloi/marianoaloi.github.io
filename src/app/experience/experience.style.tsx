import styled from "@emotion/styled"
import { TableCell, TableCellProps } from "@mui/material"
import { breakpointsWidth, tableHeadBackground } from "../components/header.styled"



export const ExperienceBox = styled.div`

`



export const CellExperience = styled(TableCell)<{ sizework?: string }>(
    (props: any) => `
    width:${props.sizework}vw;

    background: ${tableHeadBackground};
    align-content: center;
    writing-mode: tb;
    border: 1px solid;


    @media (min-width: ${breakpointsWidth.desktop}) {
    text-align: center;
    writing-mode: lr;
  }

    `
)