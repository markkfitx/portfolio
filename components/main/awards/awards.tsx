import Section from "@/components/section-wrapper"
import SectionHeader from "@/components/section-header"
import data from "../../../app/data/awards.json"
import { Separator } from "../../ui/separator"
import clsx from "clsx"

interface contentProps {
  id: string
  className?: string
}

export default function Awards({ id, className }: contentProps) {
  return (
    <Section
      id={id}
      className={clsx(
        "section-shell bg-linear-to-t from-black to-neutral-900 py-24 md:py-32 lg:py-36",
        className
      )}
    >
      <SectionHeader
        kicker="Credentials"
        title="Awards & certifications"
        align="center"
        className="mx-auto"
      />
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] px-5 md:px-8">
        {data.certifications.map((item, idx) => (
          <div className="w-full" key={`${id}-list-item-${idx}`}>
            <div className="flex flex-row items-center justify-between gap-4 py-4 text-white">
              {"url" in item && item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-sm transition-colors hover:text-emerald-400 md:text-base"
                >
                  {item.name}
                </a>
              ) : (
                <span className="text-sm md:text-base">{item.name}</span>
              )}
              <span className="shrink-0 text-sm tabular-nums text-white/50">
                {item.year}
              </span>
            </div>
            {idx < data.certifications.length - 1 && (
              <Separator className="opacity-20" />
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
