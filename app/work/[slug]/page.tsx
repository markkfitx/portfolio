import { notFound } from "next/navigation"
import Section from "@/components/section-wrapper"
import CaseStudy from "@/components/main/works/case-study"
import { createPageMetadata } from "@/lib/metadata"
import { getWorkBySlug, getWorkSlugs } from "@/lib/works"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const work = getWorkBySlug(slug)
  if (!work) return {}

  return createPageMetadata({
    title: `${work.title} | Mark Kirby`,
    description: work.caseStudy.overview,
    path: `/work/${slug}`,
  })
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const work = getWorkBySlug(slug)

  if (!work) notFound()

  return (
    <Section
      id="case-study"
      className="min-h-[70vh] items-center bg-linear-to-t from-black to-neutral-900 py-28 md:py-36"
    >
      <CaseStudy work={work} />
    </Section>
  )
}
