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
      align="center"
      className={clsx(
        "min-h-[60vh] py-24 md:py-36",
        className
      )}
    >
      <header className="mb-10 flex w-full max-w-xl flex-col items-center gap-3 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-500">
          Get in touch
        </p>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          Let&apos;s talk
        </h1>
        <p className="text-balance text-neutral-600">
          Share a bit about your project or role. I typically reply within a few
          business days.
        </p>
        <p className="text-sm text-neutral-500">
          Prefer email directly?{" "}
          <a href={mailtoHref} className="text-blue-600 hover:text-blue-700">
            {siteConfig.email}
          </a>
          {" · "}
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            LinkedIn
          </Link>
        </p>
      </header>
      <div className="w-full max-w-lg">
        <ContactForm />
      </div>
    </Section>
  )
}
