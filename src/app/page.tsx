"use client"
import { CardExperience, CardsExperience, GradientBoard, MainMessage, MaloiImg } from "./home.styled";

import '@/app/i18n'
import { selectLanguage, useSelector } from "@/lib/redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {

  const lang = useSelector(selectLanguage)


  const { t, i18n } = useTranslation(['home', 'main']);

  useEffect(() => {
    i18n.changeLanguage(lang); //change the language
  }, [i18n, lang])
  return (
    <main >
      <GradientBoard>
        <MaloiImg src={"./vigilantesorridente.png"} width={3000} height={3000} alt="Solution Architect smilly" />
      </GradientBoard>
      {/* <TimeLine events={events}></TimeLine> */}
      <MainMessage >
        {t("mainMessage", { ns: ["home"] })}
      </MainMessage>
      <CardsExperience>
        <CardExperience>+ 20 anos de experiencia</CardExperience>
        <CardExperience>+ 73 squads lideradas treinadas</CardExperience>
        <CardExperience>+ 103 projetos entregues e lições aprendidas</CardExperience>
      </CardsExperience>
    </main>
  );
}