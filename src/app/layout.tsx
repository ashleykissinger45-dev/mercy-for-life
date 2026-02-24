import type { Metadata } from "next";
import { Libre_Baskerville, Outfit } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-serif',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Mercy for Life - St. Thomas the Apostle Church",
  description: "A pro-life ministry dedicated to prayer, advocacy, and supporting life at all stages. Join us for weekly rosary prayers in Phoenix, Arizona.",
  keywords: "pro-life, rosary, prayer, St. Thomas the Apostle, Phoenix, Mercy for Life, Catholic, pro-life ministry",
  metadataBase: new URL('https://mercyforlife.org'),
  openGraph: {
    title: "Mercy for Life - St. Thomas the Apostle Church",
    description: "A pro-life ministry dedicated to prayer, advocacy, and supporting life at all stages.",
    url: 'https://mercyforlife.org',
    siteName: 'Mercy for Life',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${libreBaskerville.variable} font-sans`}>{children}</body>
    </html>
  );
}
