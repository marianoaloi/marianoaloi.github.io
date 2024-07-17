"use client"
import Image from "next/image"
import { ImageMaloi, ParaText } from './about.styled';

import '@/app/i18n'
import { selectLanguage, useSelector } from "@/lib/redux";
import { useTranslation } from "react-i18next";


const About = () => {


    const { t, i18n } = useTranslation(['home', 'main']);

    return (
        <>
            <div>
                <ImageMaloi src={"./maloi.jpg"} width={120} height={120} alt="AI Maloi representation" />




                <ParaText>{t("about.line1", { ns: ["home"] })}</ParaText>

                <ParaText dangerouslySetInnerHTML={{ __html: t("about.line2", { ns: ["home"] }) }}></ParaText>
                <ParaText dangerouslySetInnerHTML={{ __html: t("about.line3", { ns: ["home"] }) }}></ParaText>
                <ParaText dangerouslySetInnerHTML={{ __html: t("about.line4", { ns: ["home"] }) }}></ParaText>



            </div>
        </>
    )
}

export default About