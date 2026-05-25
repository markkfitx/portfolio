import Section from "@/components/section-wrapper"
import SectionSubHeading from "@/components/section-sub-heading"
import { getTestimonials, type Testimonial } from "@/lib/testimonials"
import clsx from "clsx"

interface TestimonialsProps {
  id: string
  className?: string
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <blockquote className="flex-1 text-sm leading-relaxed text-white/75">
        &ldquo;{item.description}&rdquo;
      </blockquote>
      <footer className="border-t border-white/10 pt-4">
        <p className="text-sm font-medium text-white">{item.full_name}</p>
        <p className="text-xs text-white/50">
          {item.role}
          {item.company ? ` · ${item.company}` : ""}
        </p>
      </footer>
    </div>
  )
}

export default async function Testimonials({ id, className }: TestimonialsProps) {
  const testimonials = await getTestimonials()

  return (
    <Section
      id={id}
      className={clsx(
        "z-10 bg-linear-to-t from-neutral-900 to-black py-24 md:py-36",
        className
      )}
    >
      <SectionSubHeading
        id={`${id}-subheading`}
        alignment="center"
        className="mb-12 md:max-w-[600px] text-white"
      >
        What collaborators <span className="text-emerald-400">say</span>
      </SectionSubHeading>

      {testimonials.length === 0 ? (
        <p className="w-full text-center text-sm text-white/50">
          Testimonials will appear here once added in Supabase.
        </p>
      ) : (
        <ul className="grid w-full gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.id}>
              <TestimonialCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
