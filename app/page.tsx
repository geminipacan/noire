import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Benefits } from '@/components/site/benefits'
import { FeaturedProducts } from '@/components/site/featured-products'
import { Results } from '@/components/site/results'
import { Testimonials } from '@/components/site/testimonials'
import { Faq } from '@/components/site/faq'
import { FinalCta } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Brand',
  name: 'NOIRÉ Skin',
  slogan: 'Less noise. Better skin.',
  description:
    'Modern premium skincare focused on simple routines, effective active ingredients and clean formulas.',
  makesOffer: [
    { '@type': 'Offer', name: 'NOIRÉ Daily Cleanser', price: '28', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'NOIRÉ Renewal Serum', price: '42', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'NOIRÉ Barrier Cream', price: '38', priceCurrency: 'USD' },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <FeaturedProducts />
        <Results />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
