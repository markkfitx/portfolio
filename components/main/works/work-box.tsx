"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardCaption,
  CardMedia,
} from "@/components/ui/card"
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
  className,
}: ContentProps) {
  return (
    <div className={clsx("flex w-full flex-col items-stretch", className)}>
      <Card
        className={clsx(
          "group border-0 bg-neutral-900 p-0 shadow-none ring-1 ring-white/6",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:ring-white/12"
        )}
      >
        <CardMedia className="aspect-5/4 min-h-[300px] w-full bg-transparent p-0">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 block"
            aria-label={`Open project: ${title}`}
          >
            <Image
              src={img}
              alt={title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-contain object-center p-8 transition-transform duration-700 ease-out group-hover:scale-[1.02] md:p-12 lg:p-14"
            />
          </Link>
        </CardMedia>
      </Card>

      <CardCaption className="items-start text-left">
        <div className="relative">
          <h5 className="font-heading font-semibold tracking-tight text-balance text-white">
            {title}
          </h5>
          <div
            className={`pointer-events-none absolute top-3/5 z-0 hidden h-1/2 w-1/2 transition-all duration-500 hover:w-1/4 ${color}`}
            aria-hidden
          />
        </div>
        {subTitle ? (
          <p className="font-sans max-w-prose text-pretty text-sm leading-relaxed text-zinc-400">
            {subTitle}
          </p>
        ) : null}
        {relevantSkills && relevantSkills.length > 0 ? (
          <div className="hidden flex-wrap gap-2 pt-1">
            {relevantSkills.map((skill) => (
              <Badge
                key={`${id}-${skill}`}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/15"
              >
                {skill}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardCaption>
    </div>
  )
}
