import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { ContactForm } from '@/components/site/contact-form'
import { Reveal } from '@/components/site/reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the NOIRÉ Skin team. Questions about your routine, orders or ingredients — we are here to help.',
  alternates: { canonical: '/contact' },
}

const details = [
  { icon: Mail, label: 'Email', value: 'hello@noireskin.com' },
  { icon: MapPin, label: 'Studio', value: 'New York · London' },
  { icon: Clock, label: 'Support hours', value: 'Mon–Fri · 9am–6pm' },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full pt-36 pb-16 sm:pt-44 lg:pb-24">
          <div className="container-page">
            <Reveal className="flex max-w-2xl flex-col gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Contact
              </span>
              <h1 className="text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Let&apos;s talk skin.
              </h1>
              <p className="text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                Questions about your routine, an order or our ingredients? Send
                us a note and our team will get back to you.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
              <Reveal delay={80}>
                <ContactForm />
              </Reveal>

              <Reveal delay={160} as="aside" className="flex flex-col gap-8">
                {details.map((item) => (
                  <div key={item.label} className="flex flex-col gap-2">
                    <span className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
                      <item.icon className="size-4" aria-hidden="true" />
                      {item.label}
                    </span>
                    <span className="text-base text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
