import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderPages } from "./components/header";
import { FooterPages } from './components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maloi´s Portfolio",
  description: "Present the Maloi Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      
      <body className={inter.className}>
        <HeaderPages />
        <main>
        {children}
        </main>
        <FooterPages />
        </body>
    </html>
  );
}
