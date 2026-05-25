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
        "border-y border-white/8 bg-linear-to-t from-neutral-900 to-black py-20 md:py-28",
        className
      )}
    >
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-emerald-500">
          Next step
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
          Have a project in mind?
        </h2>
        <p className="text-balance text-white/65">
          I&apos;m open to frontend roles, contract work, and collaborations on
          product and marketing tech.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-400 px-6 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-300"
          >
            Start a conversation
          </Link>
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:text-white"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </Section>
  )
}
