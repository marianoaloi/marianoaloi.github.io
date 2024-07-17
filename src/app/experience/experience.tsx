"use client"

import { useTranslation } from "react-i18next";
import { CellExperience, ExperienceBox } from "./experience.style";


export default function Experience() {


    const { t, i18n } = useTranslation(['home', 'main']);

    return (
        <>
            <table><tbody>
                <tr>

                    <CellExperience sizework={"6"}>4Quality</CellExperience>
                    <CellExperience sizework={"4"}>Acessibilidade Brasil</CellExperience>
                    <CellExperience sizework={"3"}>Totvs </CellExperience>
                    <CellExperience sizework={"15"}>Stefanini</CellExperience>
                    <CellExperience sizework={"25"}>Siemens Energy</CellExperience>
                    <CellExperience sizework={"45"}>Vale SA</CellExperience>
                    <CellExperience sizework={"3"}>Act Digital</CellExperience>

                </tr>

                <tr>
                    <CellExperience sizework={"6"}>1  {t("period.years", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"4"}>10  {t("period.months", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"3"}>7  {t("period.months", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"15"}>3  {t("period.years", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"25"}>5  {t("period.years", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"45"}>9  {t("period.years", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"3"}>7  {t("period.months", { ns: ["home"] })}</CellExperience>

                </tr>
                <tr>
                    <CellExperience sizework={"6"}>{t("work.Intern", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"4"}>{t("work.JuniorDeveloper", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"3"}>{t("work.SeniorDeveloper", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"15"}>{t("work.SolutionArchitect", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"25"}>{t("work.SolutionArchitect/ProjectManager", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"45"}>{t("work.ProjectManager/SolutionArchitect", { ns: ["home"] })}</CellExperience>
                    <CellExperience sizework={"3"}>{t("work.TechLead", { ns: ["home"] })}</CellExperience>
                </tr>

            </tbody>
            </table>
        </>
    )

}