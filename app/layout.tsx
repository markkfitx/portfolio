import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../app/globals.css";
import "../app/css/layout.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

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
          <Header id="social-media-n-mobile-header" className="z-10" />
          <div className="font-sans flex flex-col justify-start items-center min-h-screen w-full">
            {children}
          </div>
          <Footer />
      </body>
    </html>
  );
}
