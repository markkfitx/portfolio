import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

const ogImagePath = "/img/avatar-2.jpg"

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const canonical = `${siteConfig.url}${path}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: ogImagePath, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImagePath],
    },
  }
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createPageMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "",
  }),
}
