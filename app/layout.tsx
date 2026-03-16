import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/css/globals.css";
import "../app/css/layout.css";
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import ParticlesBackground from "@/components/particle-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-mist-950 lg:p-8 md:p-6 p-4 w-full`}>
        <Header id="social-media-n-mobile-header" />
        <div className="font-sans flex flex-col justify-start items-center min-h-screen w-full">
          {children}
        </div>
        <Footer />
        <ParticlesBackground />
      </body>
    </html>
  );
}
