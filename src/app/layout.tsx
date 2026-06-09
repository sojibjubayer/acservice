import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),

  title: {
    default: `${siteConfig.name} | AC Services in Qatar`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "AC repair Qatar",
    "AC maintenance Doha",
    "AC cleaning Qatar",
    "air conditioner repair Doha",
    "HVAC maintenance Qatar",
    "AC installation Qatar",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `${siteConfig.name} | AC Services in Qatar`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    locale: "en_QA",
    images: [
      {
        url: siteConfig.images.hero,
        width: 1200,
        height: 630,
        alt: "Professional AC maintenance service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AC Services in Qatar`,
    description: siteConfig.description,
    images: [siteConfig.images.hero],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable}`}
      >
        {children}
      </body>
    </html>
  );
}