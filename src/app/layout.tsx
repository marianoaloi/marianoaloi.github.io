import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderPages } from "./components/header";
import { FooterPages } from './components/footer';
import { Providers } from "@/lib/providers";
import Home from "./page";
import About from "./about/page";
import { ConstactContentt } from "./contact/contactCenter";
import { Contact } from "./contact/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maloi´s Portfolio",
  description: "Present the Maloi Projects",
};


//Import i18n.ts
// import "./i18n";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Providers>
      <html >

        <body className={inter.className}>
          <HeaderPages />
          <section id="home">

            <Home />
          </section>
          <section id="about">

            <About />
          </section>
          <section id="experience">
            I have experience
          </section>
          <section id="contact">
            <ConstactContentt />
          </section>

          <Contact />
          <FooterPages />
        </body>
      </html>
    </Providers>
  );
}
