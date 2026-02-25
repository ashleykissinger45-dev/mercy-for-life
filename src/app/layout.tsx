import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-serif',
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600'],
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
      <body className={`${poppins.variable} ${cormorantGaramond.variable} font-sans`}>{children}</body>
    </html>
  );
}
