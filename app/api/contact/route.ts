import { NextResponse } from "next/server"
import { z } from "zod"
import { siteConfig } from "@/lib/site"

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(254),
  message: z.string().min(10).max(5000),
})

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { error: "Email service is not configured.", code: "NOT_CONFIGURED" },
      { status: 503 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { name, email, message } = parsed.data

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  })

  if (!response.ok) {
    const detail = await response.text()
    console.error("Resend error:", detail)
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
