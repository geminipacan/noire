import Image from 'next/image'
import { ShopNowButton } from '@/components/shop/shop-now-button'
import { Reveal } from '@/components/site/reveal'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-16 sm:pt-36 lg:pt-44 lg:pb-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="flex flex-col items-start">
            <Reveal
              as="span"
              className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase"
            >
              Modern skincare. Simplified.
            </Reveal>

            <Reveal delay={80} className="mt-6">
              <h1 className="text-5xl leading-[0.95] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Less noise.
                <br />
                Better skin.
              </h1>
            </Reveal>

            <Reveal delay={160} className="mt-6 max-w-md">
              <p className="text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                Focused skincare formulas made with proven ingredients — without
                unnecessary complexity.
              </p>
            </Reveal>

            <Reveal delay={240} className="mt-8">
              <ShopNowButton size="lg" className="h-12 px-7 text-base" />
            </Reveal>

            <Reveal
              delay={320}
              as="p"
              className="mt-5 font-mono text-xs tracking-wide text-muted-foreground"
            >
              Dermatologist tested · Cruelty-free · Clean formulas
            </Reveal>
          </div>

          {/* Product visual */}
          <Reveal delay={120} className="relative">
            <div className="glass relative aspect-4/5 w-full overflow-hidden rounded-xl sm:aspect-square lg:aspect-4/5">
              <Image
                src="/images/hero-product.png"
                alt="NOIRÉ Skin premium skincare packaging arranged on a dark studio surface"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
