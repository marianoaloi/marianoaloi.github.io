import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FootPage from "./components/foot";
import HeaderPage from "./components/head";

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
    <html lang="en">
      <body className={inter.className}>
        <HeaderPage />
        {children}
        <FootPage />
      </body>
    </html>
  );
}
