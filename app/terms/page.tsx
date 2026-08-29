import type { Metadata } from 'next'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern use of NOIRÉ Skin.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full pt-36 pb-24 sm:pt-44">
          <div className="container-page max-w-2xl">
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              This is placeholder content for the NOIRÉ Skin prototype. In a
              production build, this page would set out the terms that govern
              your use of the site and any purchases, including ordering,
              shipping, returns and liability.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Questions about these terms can be sent via the{' '}
              <a href="/contact" className="text-foreground underline underline-offset-4">
                contact page
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
