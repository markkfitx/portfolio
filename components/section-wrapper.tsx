import clsx from "clsx"
interface componentProps {
    id: string,
    children: React.ReactNode,
    className?:string
}

function Section({id,children, className} : componentProps){
    return (
        <section id={id} className={clsx("w-full flex flex-col justify-center items-center xl:max-w-[1240px] py-24 md:py-36",className)}>
            {children}
        </section>
    )
}

export default Section