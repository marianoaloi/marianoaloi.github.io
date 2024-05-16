"use client"
import { GradientBoard, MaloiImg } from "./home.styled";

import '@/app/i18n'
import { selectLanguage, useSelector } from "@/lib/redux";
import { useTranslation } from "react-i18next";
import { TimeLine } from "./components/homecomponents/timeline";
import { EventWork } from "@/app/entity/Event"

export default function Home() {

  const lang = useSelector(selectLanguage)


  const { t, i18n } = useTranslation(['home', 'main']);


  i18n.changeLanguage(lang); //change the language
  const events = [
    { dateEvent: new Date(2004, 2), company: 'trainer' } as EventWork,
    { dateEvent: new Date(2005, 2), company: 'Acessibilidade Brasil' } as EventWork,
    { dateEvent: new Date(2006, 2), company: 'Totvs Software' } as EventWork,
    { dateEvent: new Date(2006, 8), company: 'Steffanini' } as EventWork,
    { dateEvent: new Date(2009, 2), company: 'Chemtech' } as EventWork,
    { dateEvent: new Date(2014, 2), company: 'Vale' } as EventWork,
    { dateEvent: new Date(2023, 4), company: 'Act Digital' } as EventWork,
  ]
  return (
    <main >
      <GradientBoard>
        <MaloiImg src={"./trabalhador_arquiteto_clean_600.png"} width={416} height={503} alt="Solution Architect smilly" />
      </GradientBoard>
      <TimeLine events={events}></TimeLine>
      <div>
        {t("mainMessage", { ns: ["home"] })}
      </div>
    </main>
  );
}