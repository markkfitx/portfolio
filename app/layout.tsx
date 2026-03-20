import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../app/globals.css";
import "../app/css/layout.css";
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import ParticlesBackground from "@/components/particle-background";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Kirby | Portfolio",
  description: "I am a frontend developer that takes code and turns it into experiences!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased bg-mist-950 w-full`}>
        <Header id="social-media-n-mobile-header" className="lg:pt-8 md:pt-6 pt-4 lg:px-8 md:px-6 px-4" />
        <div className="font-sans flex flex-col justify-start items-center min-h-screen w-full">
          {children}
        </div>
        <Footer />
        <ParticlesBackground />
      </body>
    </html>
  );
}
