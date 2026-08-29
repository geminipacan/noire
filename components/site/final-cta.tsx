import { ShopNowButton } from '@/components/shop/shop-now-button'
import { Reveal } from '@/components/site/reveal'

export function FinalCta() {
  return (
    <section className="w-full py-28 sm:py-36 lg:py-44">
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h2 className="text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Better skin starts with
            <br />a simpler routine.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Three focused formulas designed to make everyday skincare easier.
          </p>
          <ShopNowButton size="lg" className="h-12 px-8 text-base" />
        </Reveal>
      </div>
    </section>
  )
}
