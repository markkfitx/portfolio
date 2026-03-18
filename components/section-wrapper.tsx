import clsx from "clsx"
interface componentProps {
    id: string,
    children: React.ReactNode,
    className?:string
}

function Section({id,children, className} : componentProps){
    return (
        <section id={id} className={clsx("w-full flex flex-col justify-center items-center py-24 md:py-36 xl:px-24 lg:px-8 md:px-6 px-4",className)}>
            {children}
        </section>
    )
}

export default Section