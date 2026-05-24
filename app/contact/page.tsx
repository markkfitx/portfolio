import ContactMe from "@/components/main/contact/contact-me"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Contact | Mark Kirby",
  description: "Get in touch about collaborations, roles, and project opportunities.",
  path: "/contact",
})

export default function ContactPage() {
  return <ContactMe />
}
