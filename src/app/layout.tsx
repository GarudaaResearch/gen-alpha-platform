import type { Metadata } from "next";
import { Lora, DM_Sans, Nunito, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({ 
  subsets: ["latin"], 
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans",
  display: "swap",
});

const nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Generation Alpha Awareness & Intervention Platform",
  description: "Educating and supporting children with learning disabilities in the digital age.",
};

import CrisisWidget from "@/components/layout/CrisisWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable} ${nunito.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-text-primary">
        {children}
        <CrisisWidget />
      </body>
    </html>
  );
}
