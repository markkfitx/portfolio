import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "../app/css/layout.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { rootMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = rootMetadata;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Full Stack Developer",
  url: siteConfig.url,
  email: siteConfig.email,
  sameAs: [siteConfig.linkedin, siteConfig.github],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased bg-mist-950 w-full`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <TooltipProvider delayDuration={100}>
            <Header id="social-media-n-mobile-header" className="z-10" />
            <div className="font-sans flex flex-col justify-start items-center min-h-screen w-full">
              {children}
            </div>
            <Footer />
            <Analytics />
          </TooltipProvider>
      </body>
    </html>
  );
}
