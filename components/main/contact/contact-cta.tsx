import Link from "next/link"
import Section from "@/components/section-wrapper"
import { mailtoHref, siteConfig } from "@/lib/site"
import clsx from "clsx"

interface ContactCtaProps {
  id?: string
  className?: string
}

export default function ContactCta({
  id = "contact-cta-section",
  className,
}: ContactCtaProps) {
  return (
    <Section
      id={id}
      align="center"
      className={clsx(
        "border-y border-neutral-200 bg-neutral-50 py-20 md:py-28",
        className
      )}
    >
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-500">
          Next step
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          Have a project in mind?
        </h2>
        <p className="text-balance text-neutral-600">
          I&apos;m open to frontend roles, contract work, and collaborations on
          product and marketing tech.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-blue-600/80 bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Start a conversation
          </Link>
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-6 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </Section>
  )
}
