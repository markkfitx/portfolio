import Link from "next/link"
import Image from "next/image"
import GitHub from "@/public/img/github.svg"
import LinkedIn from "@/public/img/linkedin.svg"
import Email from "@/public/img/email.svg"
import clsx from "clsx"
import { mailtoHref, siteConfig } from "@/lib/site"

interface SocialLinksProps {
  className?: string
}

const links = [
  { href: mailtoHref, label: "Email Mark Kirby", icon: Email, alt: "" },
  {
    href: siteConfig.linkedin,
    label: "LinkedIn profile",
    icon: LinkedIn,
    alt: "",
    external: true,
  },
  {
    href: siteConfig.github,
    label: "GitHub profile",
    icon: GitHub,
    alt: "GitHub",
    external: true,
  },
] as const

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={clsx("flex shrink-0 items-center gap-3 sm:gap-4", className)}
      aria-label="Social links"
    >
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="group opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:rounded-sm"
          {...("external" in item && item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Image
            width={20}
            height={20}
            className="size-5 opacity-75 transition-opacity group-hover:opacity-100"
            alt={item.alt}
            src={item.icon}
          />
        </Link>
      ))}
    </div>
  )
}
