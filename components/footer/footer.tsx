import type { ReactNode } from "react"
import Link from "next/link"
import { mainNavLinks } from "@/lib/navigation"
import { siteConfig, mailtoHref } from "@/lib/site"

const connectLinks = [
  { label: "Resume", href: siteConfig.resumePath },
  { label: "GitHub", href: siteConfig.github, external: true },
  { label: "LinkedIn", href: siteConfig.linkedin, external: true },
] as const

function FooterLink({
  href,
  children,
  external,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  return (
    <Link
      href={href}
      className="text-sm text-white/55 transition-colors hover:text-white"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 w-full border-t border-white/8">
      <div className="mx-auto max-w-[1440px] px-4 py-10 md:px-6 md:py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-lg font-semibold tracking-tight text-white transition-colors hover:text-emerald-400"
            >
              {siteConfig.name}
            </Link>
            <a
              href={mailtoHref}
              className="w-fit text-sm text-emerald-400/90 transition-colors hover:text-emerald-300"
            >
              {siteConfig.email}
            </a>
          </div>

          <nav aria-label="Site sections" className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
              Explore
            </p>
            <ul className="flex flex-col gap-2">
              {mainNavLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.url}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Connect" className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
              Connect
            </p>
            <ul className="flex flex-col gap-2">
              {connectLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href} external={"external" in item}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href="#hero-section"
              className="transition-colors hover:text-emerald-400/90"
            >
              Back to top
            </a>
            <span className="hidden text-white/20 sm:inline" aria-hidden>
              ·
            </span>
            <Link
              href="/sitemap.xml"
              className="transition-colors hover:text-emerald-400/90"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
