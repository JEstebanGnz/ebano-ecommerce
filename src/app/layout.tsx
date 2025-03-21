import type { Metadata } from "next";
import {titleFont} from '@/config/fonts'
import "./globals.css";

export const metadata: Metadata = {
  title: "Ébano: Experiencia Natural",
  description: "Hecho con mucho amor por Esteban y Kathe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titleFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
