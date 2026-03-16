import data from "@/app/data/works.json"
import WorkBox from "@/components/main/works/work-box"
import FilterForm from "@/components/main/works/filter-form"
import Section from "../../section-wrapper"
import SectionHero from "../../section-hero"
import clsx from "clsx"
interface contentProps{
    id: string,
    className?: string
}
const badgeColorMap: Record<string, string> = {
  blue: "bg-blue-800/60 text-blue-100 border-blue-500/20",
  cyan: "bg-cyan-800/60 text-cyan-100 border-cyan-500/20",
  red: "bg-red-800/60 text-red-100 border-red-500/20",
  yellow: "bg-yellow-800/60 text-yellow-100 border-yellow-500/20"
}

export default function Work({id, className}: contentProps){
    return (
        <Section id={id}>
            
            <SectionHero 
                id={`${id}-section-hero`} 
                title="Recent Works"
                description="I've worked on a variety of projects, from small personal websites to large scale enterprise applications. I've worked with a variety of technologies, from traditional web development to modern web development."
                alignment="start"
                badgeDesc="Lorem Ipsem"
            />
            {/**<FilterForm className="mb-10 w-fit" title="Filter By"/>**/}
            <div className="flex flex-row items-center justify-start w-full z-10">
                <label className="text-white font-medium underline underline-offset-4 w-1/4">Filter</label>
                <FilterForm id={`${id}-filter-form`} title="Filter By" />
            </div>  
            <div className="w-full lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 grid z-10">
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