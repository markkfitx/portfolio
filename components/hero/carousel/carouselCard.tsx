import Image from "next/image"

interface contentProps {
    id: string,
    children?: React.ReactNode,
}

export default function CarouselCard({id, children}: contentProps){
    return (
        <Image src={children as string} id={id} className="embla__slide max-h-[50px] max-w-[150px] grayscale invert" alt={children as string} width={100} height={50} />
    )
}