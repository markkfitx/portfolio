import type { Metadata } from "next"
import Section from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Contact | Mark Kirby",
  description: "Get in touch about collaborations and opportunities.",
}

export default function ContactPage() {
  return (
    <Section
      id="contact-section"
      className="min-h-[60vh] py-24 md:py-36 items-center"
    >
      <h2 className="text-white mb-4 text-center">Let&apos;s talk</h2>
      <p className="text-white/70 text-center max-w-xl text-balance">
        A contact form and direct details can live here. For now, use the social links in the
        header.
      </p>
    </Section>
  )
}
