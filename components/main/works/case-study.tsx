import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import type { WorkWithDisplay } from "@/lib/works"
import { workImageUrl, workPrimaryLink, workYear } from "@/lib/works"
import { Button } from "@/components/ui/button"

export default function CaseStudy({ work }: { work: WorkWithDisplay }) {
  const year = workYear(work)
  const skills = work.relevant_skills ?? []
  const externalLink = workPrimaryLink(work) !== "#"

  return (
    <article className="w-full max-w-3xl">
      <Link
        href="/#works-section"
        className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-blue-600"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to work
      </Link>

      <header className="flex flex-col gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-500">
          Case study{year ? ` · ${year}` : ""}
        </p>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          {work.title}
        </h1>
        {work.subtitle ? (
          <p className="text-lg text-neutral-600">{work.subtitle}</p>
        ) : null}
        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#E2E8F0] ring-1 ring-neutral-200">
        <Image
          src={workImageUrl(work)}
          alt={work.title}
          fill
          className="object-contain object-center p-6"
          sizes="(min-width: 768px) 768px, 100vw"
          priority
        />
      </div>

      <div className="mt-12 flex flex-col gap-10 text-neutral-700">
        {work.description ? (
          <section>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Overview
            </h2>
            <p className="text-lg leading-relaxed">{work.description}</p>
          </section>
        ) : null}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        {externalLink ? (
          <Button
            asChild
            className="rounded-full border border-blue-600/80 bg-blue-600 text-white hover:bg-blue-500"
          >
            <a
              href={workPrimaryLink(work)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live project
              <ExternalLink className="ml-2 size-4" aria-hidden />
            </a>
          </Button>
        ) : null}
        <Button
          asChild
          variant="outline"
          className="rounded-full border-neutral-300 bg-transparent text-neutral-900 hover:bg-neutral-100"
        >
          <Link href="/contact">Discuss a similar project</Link>
        </Button>
      </div>
    </article>
  )
}
