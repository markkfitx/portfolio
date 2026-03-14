import data from "@/app/data/works.json"
import WorkBox from "@/components/main/works/work-box"
import FilterForm from "@/components/main/works/filter-form"
import clsx from "clsx"
import Section from "../../section-wrapper"
import WorkHero from "@/components/main/works/work-hero"
interface contentProps{
    id: string,
    className?: string
}

export default function Work({id, className}: contentProps){
    return (
        <Section id={id}>
            
            <WorkHero id={`${id}-section-hero`} 
                title="My Work" 
                className="mb-10"
                description="I've worked on a variety of projects, from small personal websites to large scale enterprise applications. I've worked with a variety of technologies, from traditional web development to modern web development." />
            <FilterForm className="mb-10 w-fit" title="Filter By"/>
            <div className="w-full lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 grid">
                {data.works.map((item, idx) => (
                    <WorkBox
                        key={`${id}-box-${idx}`}
                        id={`${id}-box-${idx}`}
                        link={item.link}
                        img={item.img}
                        title={item.title}
                        subTitle={item.subTitle}
                    />
                ))}
            </div>
        </Section>
    )
}