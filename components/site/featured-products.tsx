import Image from 'next/image'
import { Section, SectionHeading } from '@/components/site/section'
import { Reveal } from '@/components/site/reveal'
import { ShopNowButton } from '@/components/shop/shop-now-button'
import { products } from '@/lib/products'

export function FeaturedProducts() {
  return (
    <Section id="products" className="scroll-mt-20">
      <SectionHeading
        eyebrow="Featured"
        title="Your routine, simplified."
        subtitle="Three essentials. One complete daily routine."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal
            key={product.id}
            delay={index * 90}
            as="article"
            className="glass glass-hover group flex flex-col overflow-hidden rounded-xl"
          >
            <div className="relative aspect-4/5 w-full overflow-hidden bg-secondary">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {product.name}
                </h3>
                <span className="shrink-0 text-base text-muted-foreground">
                  {product.price}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <p className="font-mono text-xs tracking-wide text-muted-foreground/80 uppercase">
                {product.benefit}
              </p>

              <ShopNowButton
                size="lg"
                className="mt-4 h-11 w-full text-sm"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
