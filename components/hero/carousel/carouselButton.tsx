
interface contentProps {
    id: string,
    onClick: () => void,
    children?: React.ReactNode,
}

export default function CarouselButton({id, onClick, children}: contentProps){
    return (
        <button id={id} className="embla__prev text-white align-middle" onClick={onClick}>{children}</button>
    )
}