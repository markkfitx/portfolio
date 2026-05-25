import Section from "@/components/section-wrapper"
import SectionHeader from "@/components/section-header"
import ContactForm from "@/components/main/contact/contact-form"
import { mailtoHref, siteConfig } from "@/lib/site"
import Link from "next/link"
import clsx from "clsx"

interface ContactMeProps {
  id?: string
  className?: string
}

export default function ContactMe({
  id = "contact-section",
  className,
}: ContactMeProps) {
  return (
    <Section
      id={id}
      className={clsx(
        "section-shell min-h-[60vh] items-center bg-linear-to-t from-black to-neutral-900 py-24 md:py-32 lg:py-36",
        className
      )}
    >
      <SectionHeader
        kicker="Get in touch"
        title="Let's talk"
        lead="Share a bit about your project or role. I typically reply within a few business days."
        align="center"
        className="mx-auto mb-6 max-w-xl"
        titleClassName="md:text-5xl"
      />
      <p className="mb-10 text-center text-sm text-white/50">
        Prefer email directly?{" "}
        <a href={mailtoHref} className="text-emerald-400 hover:text-emerald-300">
          {siteConfig.email}
        </a>
        {" · "}
        <Link
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300"
        >
          LinkedIn
        </Link>
      </p>
      <ContactForm />
    </Section>
  )
}
