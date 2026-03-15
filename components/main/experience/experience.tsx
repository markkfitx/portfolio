import SectionHero from "@/components/section-hero"
import Section from "@/components/section-wrapper"
import ExpAccordion from "../experience/experience-accordion"
interface contentProps{
    id: string,
    className?: React.ReactNode
}

export default function Experience({id, className}: contentProps){
    return (
        <Section id={id} className="">
            <SectionHero
                id={`${id}-section-hero`} 
                title="Professional Experience"
                description="Lorem Ipsem - This is placeholder text for now. Lorem Ipsem - This is placeholder text for now. Lorem Ipsem - This is placeholder text for now.Lorem Ipsem - This is placeholder text for now."
                alignment="center"
                badgeDesc="My Resume"
                className="lg:mx-4"
            />
            <ExpAccordion id={`${id}-accordion`} className="w-3/4 self-center" />
        </Section>
    )
}