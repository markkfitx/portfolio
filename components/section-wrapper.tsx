import clsx from "clsx"
interface componentProps {
    id: string,
    children: React.ReactNode,
    className?: string
}

function Section({id,children, className} : componentProps){
    return (
        <section id={id} className={clsx("w-full", className)}>
            <div className="mx-auto max-w-[1240px] flex flex-col content-center justify-start items-start xl:px-24 lg:px-8 md:px-6 px-4">
                {children}
            </div>
        </section>
    )
}

export default Section