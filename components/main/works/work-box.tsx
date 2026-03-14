"use client"

import Link from "next/link"
import Image from "next/image"
import { Plus } from "lucide-react"
import { Card, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import clsx from "clsx"

interface ContentProps {
  id: string
  link?: string
  img: string
  title: string
  subTitle?: string
  relevantSkills: string[]
  className?: string
}

export default function WorkBox({
  id,
  link,
  img,
  title,
  subTitle,
  relevantSkills,
  className
}: ContentProps) {
  const cardInner = (
    <Card
      className={clsx(
        "group relative h-[420px] w-full overflow-hidden rounded-sm border border-white/10 bg-[#111216] p-0",
        className
      )}
    >
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 u-bg-blur transition-colors duration-500" />

      <CardContent className="absolute inset-x-0 bottom-0 p-0">
        <div className="relative overflow-hidden px-6 pt-16 pb-6 transition-all duration-500 group-hover:pt-24">
          <div className="relative z-10 flex items-end justify-between gap-4">
            <div className="max-w-[80%]">
              <CardTitle className="font-semibold leading-tight text-white text-2xl">
                {title}
              </CardTitle>

              <CardDescription
                className="
                  mt-2 overflow-hidden
                  max-h-0 opacity-0 translate-y-3
                  transition-all duration-500
                  group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                {subTitle && (
                  <p className="italic max-w-md text-base leading-relaxed text-white/85">
                    {subTitle}
                  </p>
                )}

                {relevantSkills.length > 0 && (
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
                flex h-6 w-6 shrink-0 items-center justify-center rounded-full
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

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardInner}
      </Link>
    )
  }

  return cardInner
}