import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  weight: ['400', '500', '600', '700'],
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
      <body className={`${inter.variable} ${playfair.variable} font-sans text-neutral-900`}>
        <Navigation />
        <main className="min-h-screen pt-[68px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
