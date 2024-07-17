import { FC, ReactElement } from "react";
import { CardExperienceContainer, IconCard, TextCard } from "./cardExperience.style";
interface ExperienceData {
    text: string
    icon: ReactElement | undefined
}

export const CardExperience: FC<ExperienceData> = ({ text, icon }) => {

    return (


        <CardExperienceContainer>
            <IconCard>{icon}</IconCard>
            <TextCard>{text}</TextCard>

        </CardExperienceContainer>
    )
}