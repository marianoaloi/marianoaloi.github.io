"use client"
import { GradientBoard, MaloiImg } from "./home.styled";

import '@/app/i18n'
import { selectLanguage, useSelector } from "@/lib/redux";

export default function Home() {

  const t = useSelector(selectLanguage)


  return (
    <main >
      <GradientBoard>
        <MaloiImg src={"./trabalhador_arquiteto_clean_600.png"} width={416} height={503} alt="Solution Architect smilly" />
      </GradientBoard>
      <div>
        {t ?
          t("mainMessage", { ns: ["home"] })
          : "Choice Language"}
      </div>
    </main>
  );
}