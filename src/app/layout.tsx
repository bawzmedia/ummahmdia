import type { Metadata } from "next";
import { Cinzel, Raleway } from "next/font/google";
import "./globals.css";
import CinematicNav from "@/components/layout/CinematicNav";
import Footer from "@/components/layout/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ummah Media — Mine Attention. Build Brands. Monetize Impact.",
  description:
    "South Edmonton's first Muslim-owned media company. AI-powered production. Cultural fluency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${raleway.variable} antialiased`}
    >
      <body>
        <CinematicNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
