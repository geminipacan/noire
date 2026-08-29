import { Section, SectionHeading } from '@/components/site/section'
import { Reveal } from '@/components/site/reveal'

const testimonials = [
  {
    name: 'Emma R.',
    review:
      'My routine finally feels simple, and my skin has never felt this balanced.',
    result: 'Smoother-looking skin in 3 weeks',
  },
  {
    name: 'Sofia M.',
    review:
      'The serum gives me the hydration I want without ever feeling heavy or sticky.',
    result: 'Visible improvement in skin texture',
  },
  {
    name: 'Maya K.',
    review:
      'I stopped switching between ten different products. These three are all I need.',
    result: 'Stronger, calmer-looking skin barrier',
  },
]

export function Testimonials() {
  return (
    <Section>
      <SectionHeading title="Loved by real routines." />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal
            key={testimonial.name}
            delay={index * 90}
            as="figure"
            className="glass glass-hover flex flex-col justify-between gap-8 rounded-xl p-7"
          >
            <blockquote className="text-lg leading-relaxed text-pretty text-foreground">
              &ldquo;{testimonial.review}&rdquo;
            </blockquote>
            <figcaption className="flex flex-col gap-1 border-t border-border pt-5">
              <span className="text-sm font-medium text-foreground">
                {testimonial.name}
              </span>
              <span className="font-mono text-xs tracking-wide text-muted-foreground">
                {testimonial.result}
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
