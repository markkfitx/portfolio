import Section from "@/components/section-wrapper"
import Image from "next/image"
import clsx from "clsx"
import { PenTool, Globe, Fingerprint, Sparkles, Star } from "lucide-react"
import data from "@/app/data/languages.json"
import {Badge} from "@/components/ui/badge"

interface ContentProps {
  id: string
  className?: string
}

const gridBgClass =
  ""

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
        "relative overflow-hidden py-24 md:py-32 lg:py-40",
        gridBgClass,
        "bg-black",
        className
      )}
    >
      <div className="relative z-10 flex w-full max-w-[1440px] flex-col items-center gap-12 md:gap-16 self-center">
        <header className="flex w-full flex-col items-center gap-2 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-emerald-500">
            Who I am
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
            About
          </h2>
        </header>

        <h3 className="text-center text-[1.05rem] font-medium leading-[1.75] text-white md:text-2xl md:leading-[1.65]">
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
          <span className="inline-block rounded-full border border-emerald-400/45 bg-emerald-500/[0.07] px-2.5 py-0.5 align-middle text-[0.92em] font-semibold text-emerald-400 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:px-3 md:py-1 md:text-[0.88em]">
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
        </h3>

        <div className="flex justify-center gap-6">
          {data.topFrameworks.map((item, idx) => (
            <Badge color="white" key={idx} className="inline-flex size-16 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-400/10">
              <Image src={item.src} alt={item.name} width={32} height={32} className="" />
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  )
}
