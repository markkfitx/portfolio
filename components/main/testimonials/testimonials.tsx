import Section from "@/components/section-wrapper"
import SectionHeader from "@/components/section-header"
import { getTestimonials, type Testimonial } from "@/lib/testimonials"
import clsx from "clsx"
import SectionSubHeading from "@/components/section-sub-heading"

interface TestimonialsProps {
  id: string
  className?: string
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
      <blockquote className="flex-1 text-sm leading-relaxed text-neutral-600">
        &ldquo;{item.description}&rdquo;
      </blockquote>
      <footer className="border-t border-neutral-200 pt-4">
        <p className="text-sm font-medium text-neutral-900">{item.full_name}</p>
        <p className="text-xs text-neutral-500">
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
      align="center"
      className={clsx(
        "z-10 py-24 md:py-36",
        className
      )}
    >
      <SectionHeader
        kicker="Testimonials"
        title="What collaborators say"
        align="start"
        className="hidden"
      />
      <SectionSubHeading
        id={`${id}-subheading`}
        alignment="start"
        className="max-w-[500px] text-neutral-900"
      >
        <span className="text-blue-600">What collaborators say</span> — Featured
        testimonials from my collaborators.
      </SectionSubHeading>

      {testimonials.length === 0 ? (
        <p className="w-full max-w-xl text-center text-sm text-neutral-500">
          Testimonials will appear here once added in Supabase.
        </p>
      ) : (
        <ul className="grid w-full max-w-6xl gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.id} className="w-full">
              <TestimonialCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
