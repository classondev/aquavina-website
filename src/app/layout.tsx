import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SKR Reisen: kleine Gruppen - weltweit reisen! | Clone",
  description: "Kleine Gruppen - weltweit! Seit 1978 ist SKR Reisen der Spezialist für Rundreisen, Studienreisen & Urlaub mit Sinn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
