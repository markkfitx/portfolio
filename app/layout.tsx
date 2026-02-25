import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer/footer"

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <div className="font-sans flex flex-col justify-start items-center min-h-screen ">
          {/** Navigation */}
          <Header />
          {/** Main withg children pages */}
          {children}
        </div>
        {/** Footer */}
        <Footer />
      </body>
    </html>
  );
}
