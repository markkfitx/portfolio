import data from "@/app/data/works.json"
import WorkBox from "@/components/main/works/work-box"
import FilterForm from "@/components/main/works/filter-form"
import Section from "../../section-wrapper"
import SectionHero from "../../section-hero"
import SectionSubHeading from "../../section-sub-heading"
import clsx from "clsx"
interface contentProps{
    id: string,
    className?: string
}
const badgeColorMap: Record<string, string> = {
  blue: "bg-blue-800/60 text-blue-100 border-blue-500/20",
  cyan: "bg-cyan-800/60 text-cyan-100 border-cyan-500/20",
  red: "bg-red-800/60 text-red-100 border-red-500/20",
  green: "bg-green-800/60 text-green-100 border-green-500/20"
}

export default function Work({id, className}: contentProps){
    return (
        <Section id={id} className={clsx(`items-start bg-linear-to-t from-black to-neutral-900 z-10`,className)}>
            <SectionHero 
                id={`${id}-section-hero`} 
                title="My Work"
                description="I've worked on a variety of projects, from small personal websites to large scale enterprise applications. I've worked with a variety of technologies, from traditional web development to modern web development."
                alignment="start"
                badgeDesc="Recent Projects"
                className="hidden"
            />
            <SectionSubHeading id={`${id}-subheading`} alignment="start" className="md:max-w-[500px] text-white"> 
                <span className="text-emerald-400">UX/UI across platforms</span> — Recent projects I'm proud of.
            </SectionSubHeading>
            {/**<FilterForm className="mb-10 w-fit" title="Filter By"/>**/}
            <FilterForm id={`${id}-filter-form`} title="Filter By" /> 
            <div className="w-full works-grid gap-x-5 gap-y-8 grid z-10">
                {data.works.map((item, idx) => (
                    <WorkBox
                        key={`${id}-box-${idx}`}
                        id={`${id}-box-${idx}`}
                        link={item.link}
                        img={item.img}
                        title={item.title}
                        subTitle={item.subTitle}
                        color={badgeColorMap[item.color]}
                        relevantSkills={item.relevantSkills}
                    />
                ))}
            </div>
        </Section>
    )
}