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
    <div className={clsx(`flex flex-col items-start justify-start gap-3`,className)}>
      <Card className="group-box relative overflow-hidden cursor-pointer bg-[#111216]/50 border border-white/10  shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl">
        <CardContent>
          <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-1">
        <div className="relative">
          <h5 className="text-light work-card-title text-balance text-white relative z-10">{title}</h5>
          <div className={`hidden absolute top-3/5 z-[0] w-1/2 h-1/2 hover:w-1/4 transition-w duration-500 ${color}`}></div>
        </div>
        {subTitle && (
          <span className="work-card-subtitle italic max-w-md text-white/60">
            {subTitle}
          </span>
        )}
        {(relevantSkills && relevantSkills.length > 0) && (
          <div className="hidden flex flex-wrap gap-2">
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
      </div>
    </div>
  )
}