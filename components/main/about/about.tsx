import Section from "@/components/section-wrapper"
import SectionHeader from "@/components/section-header"
import Image from "next/image"
import clsx from "clsx"
import { PenTool, Globe, Fingerprint, Sparkles } from "lucide-react"
import data from "@/app/data/languages.json"
import { Badge } from "@/components/ui/badge"

interface ContentProps {
  id: string
  className?: string
}

function InlineIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex size-[1.15em] shrink-0 items-center justify-center align-[-0.2em] text-emerald-600 [&_svg]:size-full [&_svg]:stroke-[1.5]">
      {children}
    </span>
  )
}

export default function About({ id, className }: ContentProps) {
  return (
    <Section
      id={id}
      className={clsx(
        "section-shell relative overflow-hidden bg-black py-24 md:py-32 lg:py-40",
        className
      )}
    >
      <div className="relative z-10 flex w-full flex-col items-center gap-10 md:gap-14">
        <SectionHeader
          kicker="Who I am"
          title="About"
          align="center"
          className="mb-0 max-w-none"
        />

        <p className="max-w-3xl text-center text-base font-medium leading-relaxed text-white md:text-xl md:leading-[1.65]">
          Hi,{" "}
          <span className="text-emerald-500">I am</span>{" "}
          <span className="relative mx-0.5 inline-block size-12 align-[-0.35em] overflow-hidden rounded-full ring-2 ring-white shadow-sm md:size-16">
            <Image
              src="/img/avatar-2.jpg"
              alt="Mark Kirby"
              fill
              className="object-cover"
              sizes="64px"
            />
          </span>{" "}
          <span className="text-emerald-500">Mark</span>{" "}
          <span
            className="inline-block align-[-0.15em] text-[1.1em] not-italic"
            aria-hidden
          >
            ✌️
          </span>
          , practicing design and development since{" "}
          <span className="inline-block rounded-full border border-emerald-400/45 bg-emerald-500/[0.07] px-2.5 py-0.5 align-middle text-[0.92em] font-semibold text-emerald-400 md:px-3 md:py-1">
            2018
          </span>{" "}
          focused on designing{" "}
          <InlineIcon>
            <PenTool aria-hidden />
          </InlineIcon>{" "}
          and developing digital products{" "}
          <InlineIcon>
            <Globe aria-hidden />
          </InlineIcon>
          , brands{" "}
          <InlineIcon>
            <Fingerprint aria-hidden />
          </InlineIcon>{" "}
          and experiences{" "}
          <InlineIcon>
            <Sparkles aria-hidden />
          </InlineIcon>
          .
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {data.topFrameworks.map((item, idx) => (
            <Badge
              color="white"
              key={idx}
              className="inline-flex size-14 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-400/10 md:size-16"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={32}
                height={32}
              />
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  )
}
