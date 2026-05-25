import Link from "next/link"
import Section from "@/components/section-wrapper"
import SectionHeader from "@/components/section-header"
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
      className={clsx(
        "section-shell items-center border-y border-white/8 bg-linear-to-t from-neutral-900 to-black py-20 md:py-28",
        className
      )}
    >
      <SectionHeader
        kicker="Next step"
        title="Have a project in mind?"
        lead="I'm open to frontend roles, contract work, and collaborations on product and marketing tech."
        align="center"
        className="mx-auto mb-8 max-w-xl"
      />
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
    </Section>
  )
}
