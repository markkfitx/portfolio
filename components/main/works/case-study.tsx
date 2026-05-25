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
        className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-emerald-400"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to work
      </Link>

      <header className="flex flex-col gap-4 border-b border-white/10 pb-8">
        <p className="section-kicker">
          Case study{year ? ` · ${year}` : ""}
        </p>
        <h1 className="section-title font-heading text-4xl font-bold text-white md:text-5xl">
          {work.title}
        </h1>
        {work.subtitle ? (
          <p className="text-lg text-white/70">{work.subtitle}</p>
        ) : null}
        {skills.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#E8ECF0] ring-1 ring-white/10">
        <Image
          src={workImageUrl(work)}
          alt={work.title}
          fill
          className="object-cover object-center"
          sizes="(min-width: 768px) 768px, 100vw"
          priority
        />
      </div>

      {work.description ? (
        <div className="case-study-prose mt-12 flex flex-col gap-4">
          <h2>Overview</h2>
          <p className="text-lg text-white/80">{work.description}</p>
        </div>
      ) : null}

      <div className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8">
        {externalLink ? (
          <Button
            asChild
            className="rounded-full border border-emerald-400/70 bg-emerald-400 text-neutral-950 hover:bg-emerald-300"
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
          className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
        >
          <Link href="/contact">Discuss a similar project</Link>
        </Button>
      </div>
    </article>
  )
}
