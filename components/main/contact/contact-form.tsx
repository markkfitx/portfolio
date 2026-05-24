"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/site"

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Please include a bit more detail."),
})

type ContactFormValues = z.infer<typeof contactSchema>

function openMailto(values: ContactFormValues) {
  const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`)
  const body = encodeURIComponent(
    `From: ${values.name} <${values.email}>\n\n${values.message}`
  )
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [usedFallback, setUsedFallback] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  })

  const isSubmitting = form.formState.isSubmitting

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle")
    setUsedFallback(false)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (res.ok) {
        form.reset()
        setStatus("success")
        return
      }

      if (res.status === 503) {
        setUsedFallback(true)
        openMailto(values)
        return
      }

      setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-lg flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="border-white/15 bg-white/5 text-white placeholder:text-white/40"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="border-white/15 bg-white/5 text-white placeholder:text-white/40"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What would you like to work on?"
                  rows={5}
                  className="border-white/15 bg-white/5 text-white placeholder:text-white/40"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="self-start rounded-full border border-emerald-400/70 bg-emerald-400 px-6 py-2.5 text-sm font-medium text-neutral-950 hover:bg-emerald-300 disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>

        {status === "success" && (
          <p className="text-sm text-emerald-400" role="status">
            Message sent — thanks for reaching out. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400" role="alert">
            Something went wrong. Email me directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
            .
          </p>
        )}
        {usedFallback && (
          <p className="text-xs text-white/50" role="status">
            Email delivery isn&apos;t configured yet — your mail app should open
            with your message draft.
          </p>
        )}
        {status === "idle" && !usedFallback && (
          <p className="text-xs text-white/50">
            Sends securely when configured; otherwise opens your email client.
          </p>
        )}
      </form>
    </Form>
  )
}
