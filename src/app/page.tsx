"use client"
import { CardsExperience, CardsExperienceContainer, GradientBoard, MainComponent, MainMessage, MaloiImg } from "./home.styled";

import '@/app/i18n'
import { selectLanguage, useSelector } from "@/lib/redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  function jumpTo(destine: string) {
    throw new Error("Function not implemented.");
  }

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
          <a href="#experience"><CardExperience text={t("main.button1", { ns: ["home"] })} icon={<CastleIcon />} /></a>
          <a href="#experience"><CardExperience text={t("main.button2", { ns: ["home"] })} icon={<CallMergeIcon />} /></a>
          <a href="#experience"><CardExperience text={t("main.button3", { ns: ["home"] })} icon={<AlarmOnIcon />} /></a>
        </CardsExperience>
      </CardsExperienceContainer>


    </MainComponent>
  );
}