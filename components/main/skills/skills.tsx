import Section from "../../section-wrapper"
import SectionHeader from "@/components/section-header"
import SkillGroup from "./skill-group"
import SuperPowersGroup from "./superpowers-group"
import clsx from "clsx"

interface contentProps {
  id: string
  className?: string
}

export default function Skills({ id, className }: contentProps) {
  return (
    <Section
      id={id}
      className={clsx(
        "section-shell items-start bg-linear-to-t to-black from-neutral-900 py-24 md:py-32 lg:py-36",
        className
      )}
    >
      <SectionHeader
        kicker="Skillsets"
        title="My expertise"
        lead={
          <>
            <span className="text-emerald-400">I&apos;ll help you to </span>
            design better products{" "}
            <span className="text-emerald-400">and</span> achieve results{" "}
            <span className="text-emerald-400">that matter.</span>
          </>
        }
      />
      <SuperPowersGroup id={`${id}-super-powers`} className="z-10 mb-10 md:mb-12" />
      <SkillGroup id={`${id}-skill-group`} className="" />
    </Section>
  )
}
