"use client"

import Link from "next/link"
import Image from "next/image"
import { Plus } from "lucide-react"
import { Card, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import clsx from "clsx"

interface ContentProps {
  id: string
  link: string
  img: string
  title: string
  color: string
  relevantSkills?: string[]
  subTitle?: string
  className?: string
}

export default function WorkBox({
  id,
  link,
  img,
  title,
  subTitle,
  color,
  relevantSkills,
  className
}: ContentProps) {
  return (
    <Card
      className={clsx(
        "group relative h-[420px] w-full overflow-hidden rounded-sm border border-white/10 bg-[#111216] p-0",
        className
      )}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="absolute inset-0 u-bg-blur transition-colors duration-500" />

      <CardContent className="absolute inset-x-0 bottom-0 p-0">
        <div className="relative overflow-hidden px-6 pt-16 pb-6 transition-all duration-500 group-hover:pt-24">
          <div className="relative z-10 flex items-end justify-between gap-4">
            <div className="sm:max-w-[80%]">

              <CardTitle className="relative">
                <h5 className="text-balance text-white font-bold relative tracking-[1px] leading-tight z-10">{title}</h5>
                <div className={`absolute top-3/5 z-[0] w-1/2 h-1/2 hover:w-1/4 transition-w duration-500 ${color}`}></div>
              </CardTitle>

              <CardDescription
                className="
                  mt-2 overflow-hidden
                  max-h-40 opacity-100 translate-y-0
                  transition-all duration-500
                  md:max-h-0 md:opacity-0 md:translate-y-3
                  md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-hover:translate-y-0
                "
              >
                {subTitle && (
                  <p className="italic max-w-md text-base leading-relaxed text-white/85">
                    {subTitle}
                  </p>
                )}

                {(relevantSkills && relevantSkills.length > 0) && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {relevantSkills.map((skill) => (
                      <Badge
                        key={`${id}-${skill}`}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/15"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardDescription>
            </div>

            <div
              className="
                sm:flex hidden h-6 w-6 shrink-0 items-center justify-center rounded-full
                bg-white/20 text-white backdrop-blur-md
                transition-all duration-500
                group-hover:bg-rose-900
                group-hover:rotate-90
              "
            >
              <Plus size={16} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}