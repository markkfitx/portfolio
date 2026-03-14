import clsx from "clsx"
interface componentProps {
    id: string,
    children: React.ReactNode,
    className?:string
}

function Section({id,children, className} : componentProps){
    return (
        <section id={id} className={clsx("w-full flex flex-col justify-center items-start xl:max-w-[1240px] py-16 md:py-24 px-[50px]",className)}>
            {children}
        </section>
    )
}

export default Section