import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dachdeckermeister Frank Oehme GmbH | Dachdecker Groß-Gerau",
  description:
    "Ihr Dachdecker-Meisterbetrieb in Groß-Gerau seit 1994. Satteldach, Flachdach, Klempnerarbeiten und Fassadenverkleidung. 30 Jahre Vertrauen in der Region.",
  keywords: "Dachdecker, Groß-Gerau, Dachdeckermeister, Satteldach, Flachdach, Klempner, Fassade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
