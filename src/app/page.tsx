"use client"
import { CardsExperience, CardsExperienceContainer, GradientBoard, MainComponent, MainMessage, MaloiImg } from "./home.styled";

import '@/app/i18n'
import { selectLanguage, useSelector } from "@/lib/redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import About from "./about/page";
import { CardExperience } from "./components/cardExperiene/cardExperience";
import CallMergeIcon from '@mui/icons-material/CallMerge';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CastleIcon from '@mui/icons-material/Castle';

export default function Home() {

  const lang = useSelector(selectLanguage)


  const { t, i18n } = useTranslation(['home', 'main']);

  useEffect(() => {
    i18n.changeLanguage(lang); //change the language
  }, [i18n, lang])
  return (
    <MainComponent >
      <GradientBoard>
        <MaloiImg priority={true} sizes="(max-height:85vh) " width={3000} height={3000} src={"./vigilantesorridente2.png"} alt="Solution Architect smilly" />

        <MainMessage >
          {t("mainMessage", { ns: ["home"] })}
        </MainMessage>
      </GradientBoard>
      {/* <TimeLine events={events}></TimeLine> */}
      <CardsExperienceContainer>
        <CardsExperience>
          <CardExperience text={t("main.button1", { ns: ["home"] })} icon={<CastleIcon />} />
          <CardExperience text={t("main.button2", { ns: ["home"] })} icon={<CallMergeIcon />} />
          <CardExperience text={t("main.button3", { ns: ["home"] })} icon={<AlarmOnIcon />} />
        </CardsExperience>
      </CardsExperienceContainer>


    </MainComponent>
  );
}