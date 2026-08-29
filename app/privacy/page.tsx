import type { Metadata } from 'next'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How NOIRÉ Skin handles your data.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full pt-36 pb-24 sm:pt-44">
          <div className="container-page max-w-2xl">
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              This is placeholder content for the NOIRÉ Skin prototype. In a
              production build, this page would describe what personal data we
              collect, how it is used, how it is stored, and the choices
              available to you. No real data is collected in this prototype.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              For questions about privacy, reach us via the{' '}
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
