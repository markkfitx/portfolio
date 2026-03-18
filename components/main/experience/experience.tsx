import SectionHero from "@/components/section-hero"
import Section from "@/components/section-wrapper"
import ExpAccordion from "../experience/experience-accordion"
import SectionSubHeading from "../../section-sub-heading"
interface contentProps{
    id: string,
    className?: React.ReactNode
}

export default function Experience({id, className}: contentProps){
    return (
        <Section id={id} className="bg-white z-10">
            <SectionHero
                id={`${id}-section-hero`} 
                title="Professional Experience"
                description="Lorem Ipsem - This is placeholder text for now. Lorem Ipsem - This is placeholder text for now. Lorem Ipsem - This is placeholder text for now.Lorem Ipsem - This is placeholder text for now."
                alignment="center"
                badgeDesc="My Resume"
                className="hidden lg:mx-4"
            />
            <SectionSubHeading id={`${id}-subheading`} alignment="center" className="md:max-w-[600px]"> 
                <span className="text-neutral-400">UX/UI across platforms</span> — from startups to enterprise products.
            </SectionSubHeading>
            <ExpAccordion id={`${id}-accordion`} className="w-full self-center z-10" />
        </Section>
    )
}