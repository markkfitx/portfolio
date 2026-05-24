export const siteConfig = {
  name: "Mark Kirby",
  title: "Mark Kirby | Portfolio",
  description:
    "Full stack developer and marketing technologist building scalable web apps and polished digital experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://markkirby.dev",
  email: "markkirby1997@gmail.com",
  linkedin: "https://www.linkedin.com/in/markkirby1997/",
  github: "https://github.com/markkfitx",
  resumePath: "/resume.pdf",
} as const

export const mailtoHref = `mailto:${siteConfig.email}`
