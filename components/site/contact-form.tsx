'use client'

import * as React from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30'

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false)

  // Prototype only: no email integration. Show a confirmation state locally.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="glass flex flex-col items-start gap-4 rounded-xl p-8">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <h2 className="text-xl font-medium tracking-tight text-foreground">
          Message sent.
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within two
          business days.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="h-10 px-5"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm text-foreground">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="How can we help?"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us a little about your skin or your question…"
          className={cn(fieldClass, 'resize-none')}
        />
      </div>

      <Button type="submit" size="lg" className="h-12 w-full text-sm sm:w-auto sm:px-8">
        Send message
      </Button>
    </form>
  )
}
