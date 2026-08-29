import { ShieldCheck, Leaf, Rabbit, Sparkles } from 'lucide-react'
import { Section, SectionHeading } from '@/components/site/section'
import { Reveal } from '@/components/site/reveal'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Dermatologist Tested',
    copy: 'Formulas designed with skin health and daily use in mind.',
  },
  {
    icon: Leaf,
    title: 'Clean Ingredients',
    copy: 'Focused formulas without unnecessary complexity.',
  },
  {
    icon: Rabbit,
    title: 'Cruelty-Free',
    copy: 'Beauty without compromise.',
  },
  {
    icon: Sparkles,
    title: 'Visible Results',
    copy: 'Consistent skincare designed for noticeable improvement.',
  },
]

export function Benefits() {
  return (
    <Section>
      <SectionHeading
        title={
          <>
            Everything your skin needs.
            <br className="hidden sm:block" /> Nothing it doesn&apos;t.
          </>
        }
      />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Reveal
            key={benefit.title}
            delay={index * 80}
            className="glass-hover flex flex-col gap-4 bg-card p-7"
          >
            <benefit.icon
              className="size-5 text-foreground"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="text-base font-medium text-foreground">
              {benefit.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {benefit.copy}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
