import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import type { WorkItem } from "@/lib/works"
import { Button } from "@/components/ui/button"

export default function CaseStudy({ work }: { work: WorkItem }) {
  const { caseStudy } = work

  return (
    <article className="w-full max-w-3xl">
      <Link
        href="/#works-section"
        className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-emerald-400"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to work
      </Link>

      <header className="flex flex-col gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-emerald-500">
          Case study · {work.year}
        </p>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
          {work.title}
        </h1>
        {work.subTitle ? (
          <p className="text-lg text-white/70">{work.subTitle}</p>
        ) : null}
        <div className="flex flex-wrap gap-2">
          {work.relevantSkills?.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </header>

      <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#E2E8F0] ring-1 ring-white/10">
        <Image
          src={work.img}
          alt={work.title}
          fill
          className="object-contain object-center p-6"
          sizes="(min-width: 768px) 768px, 100vw"
          priority
        />
      </div>

      <div className="mt-12 flex flex-col gap-10 text-white/80">
        <section>
          <h2 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/45">
            Overview
          </h2>
          <p className="text-lg leading-relaxed">{caseStudy.overview}</p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/45">
            Role
          </h2>
          <p className="text-lg text-emerald-400/90">{caseStudy.role}</p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/45">
            Highlights
          </h2>
          <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-emerald-500">
            {caseStudy.highlights.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/45">
            Deliverables
          </h2>
          <ul className="flex flex-col gap-2">
            {caseStudy.deliverables.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button
          asChild
          className="rounded-full border border-emerald-400/70 bg-emerald-400 text-neutral-950 hover:bg-emerald-300"
        >
          <a href={work.link} target="_blank" rel="noopener noreferrer">
            Visit live project
            <ExternalLink className="ml-2 size-4" aria-hidden />
          </a>
        </Button>
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
