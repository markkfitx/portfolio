import clsx from "clsx"
interface propContext{
    className?: string
}

export default function LanguageCarousel({className} : propContext){
    return (
        <div className={clsx("",className)}>

        </div>
    )
}