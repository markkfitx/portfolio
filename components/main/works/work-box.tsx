"use client"

import {Card, CardContent, CardFooter, CardDescription, CardTitle} from "@/components/ui/card"
import Image from "next/image"
interface contentProps{
    id: string,
    link?: string,
    img?: string,
    title?: string,
    subTitle?: string,
    children?: React.ReactNode
}

export default function WorkBox({id,link,img,title,subTitle, children}: contentProps){
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank')
        }
    }
    return (
        <Card className="group cursor-pointer overflow-hidden rounded-sm bg-[#111216] border border-white/10 shadow-lg transition-shadow hover:shadow-xl" onClick={handleClick}>
            <CardContent className="p-0 overflow-hidden">
                <Image 
                    src={img as string} 
                    alt={title as string} 
                    width={800} 
                    height={450} 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    priority={true}
                />
            </CardContent>
            <CardFooter className="flex flex-col items-start justify-start gap-1 bg-[#111216] px-6 py-6">
                <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
                <CardDescription className="text-sm text-white/60 italic">{subTitle}</CardDescription>
            </CardFooter>
        </Card>
    )
}