import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const neueHaas = localFont({
  variable: "--font-neue-haas",
  src: [
    { path: "../fonts/NeueHaasDisplayLight.ttf", weight: "300", style: "normal" },
    { path: "../fonts/NeueHaasDisplayRoman.ttf", weight: "400", style: "normal" },
    { path: "../fonts/NeueHaasDisplayMediu.ttf", weight: "500", style: "normal" },
    { path: "../fonts/NeueHaasDisplayMediu.ttf", weight: "600", style: "normal" },
    { path: "../fonts/NeueHaasDisplayMediu.ttf", weight: "700", style: "normal" },
  ],
});

const shibui = localFont({
  variable: "--font-shibui",
  src: [{ path: "../fonts/ShibuiBold.ttf", weight: "700", style: "normal" }],
});

const soehneBreit = localFont({
  variable: "--font-soehne-breit",
  src: [
    { path: "../fonts/SoehneBreitHalbfett.ttf", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Clara Chemin | Portfolio",
  description:
    "Industrial design portfolio of Clara Chemin — objects and systems inspired by nature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${neueHaas.variable} ${shibui.variable} ${soehneBreit.variable} antialiased`}
    >
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
