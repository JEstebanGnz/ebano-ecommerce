import type { Metadata } from "next";
import {titleFont} from '@/config/fonts'
import "./globals.css";
import TwoYearsCelebration from "@/components/TwoYearsCelebration";

export const metadata: Metadata = {
  title: "Ébano: Experiencia Natural",
  description: "Hecho con mucho amor por Esteban y Kathe",
};

export default function RootLayout({

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titleFont.className}`}
      >
        <TwoYearsCelebration />
        {/* {children} */}
      </body>
    </html>
  );
}
