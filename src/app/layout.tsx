import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
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
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans bg-white text-neutral-900`}>
        <Navigation />
        <main className="min-h-screen pt-[68px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
