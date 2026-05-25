import Section from "@/components/section-wrapper"
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
        "min-h-[60vh] items-center bg-linear-to-t from-black to-neutral-900 py-24 md:py-36",
        className
      )}
    >
      <header className="mb-10 flex max-w-xl flex-col items-center gap-3 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-emerald-500">
          Get in touch
        </p>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
          Let&apos;s talk
        </h1>
        <p className="text-balance text-white/70">
          Share a bit about your project or role. I typically reply within a few
          business days.
        </p>
        <p className="text-sm text-white/50">
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
      </header>
      <ContactForm />
    </Section>
  )
}
