"use client"
import { imageLogoWithg, LineContatct, Logo, MainComponent } from "./contatct.styled"

export const ConstactContentt = () => {
    return (
        <MainComponent>
            <LineContatct><a href="tel:+5521979942935">📱️ +55 (21) 97997-2935</a></LineContatct>
            <LineContatct><a href="mailto:mariano@aloi.com.br">📨️MARIANO@ALOI.COM.BR</a></LineContatct>

            <LineContatct><Logo width={imageLogoWithg} height={imageLogoWithg} alt='GitHub' src={"./github-icon.svg"} /><a href='https://github.com/marianoaloi'>Github</a></LineContatct>
            <LineContatct><Logo width={imageLogoWithg} height={imageLogoWithg} alt='Linkedin' src={"./LinkedIn_icon.svg"} /><a href='https://www.linkedin.com/in/maloi/'>LinkedIn</a></LineContatct>
        </MainComponent>
    )
}