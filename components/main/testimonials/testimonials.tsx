import Section from "@/components/section-wrapper"
import SectionSubHeading from "@/components/section-sub-heading"
import data from "@/app/data/testimonials.json"
import clsx from "clsx"

interface TestimonialsProps {
  id: string
  className?: string
}

export default function Testimonials({ id, className }: TestimonialsProps) {
  return (
    <Section
      id={id}
      className={clsx("z-10 bg-linear-to-t from-neutral-900 to-black py-24 md:py-36", className)}
    >
      <SectionSubHeading
        id={`${id}-subheading`}
        alignment="center"
        className="mb-12 md:max-w-[600px] text-white"
      >
        What collaborators <span className="text-emerald-400">say</span>
      </SectionSubHeading>
      <ul className="grid w-full gap-5 md:grid-cols-3">
        {data.testimonials.map((item, idx) => (
          <li
            key={`${id}-item-${idx}`}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <blockquote className="flex-1 text-sm leading-relaxed text-white/75">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <footer className="border-t border-white/10 pt-4">
              <p className="text-sm font-medium text-white">{item.name}</p>
              <p className="text-xs text-white/50">
                {item.role} · {item.company}
              </p>
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  )
}
