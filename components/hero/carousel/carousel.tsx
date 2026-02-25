"use client"
import clsx from "clsx"
import useEmblaCarousel from 'embla-carousel-react'
import CarouselButton from "@/components/hero/carousel/carouselButton"
import CarouselCard from "@/components/hero/carousel/carouselCard"
import data from "@/app/data/languages.json"
import {ArrowLeft, ArrowRight} from "lucide-react"

interface contentProps {
  id: string,
  className?: string
}

export default function EmblaCarousel({id, className}: contentProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

  const goToPrev = () => emblaApi?.goToPrev()
  const goToNext = () => emblaApi?.goToNext()

  return (
    <div id={id} className={clsx(`embla flex flex-row w-full justify-center xl:px-80 lg:px-40 md:px-20 px-10`,className)}>
      <CarouselButton id="embla__prev" onClick={goToPrev}><ArrowLeft /></CarouselButton>
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container">
          {data.languages.map((item,idx) =>{ 
            return <CarouselCard key={`${item.name}-${idx}`} id="embla__slide-1">{item.src}</CarouselCard> 
          })}
        </div>
      </div>
      <CarouselButton id="embla__next" onClick={goToNext}><ArrowRight /></CarouselButton>
    </div>
  )
}