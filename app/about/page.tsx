import About from "@/components/main/about/about"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "About | Mark Kirby",
  description:
    "Full stack developer and marketing technologist focused on product design and development since 2018.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <About
      id="about-page-section"
      className="min-h-[70vh] pt-28 md:pt-32"
    />
  )
}
