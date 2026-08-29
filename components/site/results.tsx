import { Section, SectionHeading } from '@/components/site/section'
import { Reveal } from '@/components/site/reveal'

const stats = [
  { value: '10,000+', label: 'Happy customers' },
  { value: '92%', label: 'Noticed smoother-looking skin' },
  { value: '4.8 / 5', label: 'Average customer rating' },
]

export function Results() {
  return (
    <Section id="results" className="scroll-mt-20 bg-card">
      <SectionHeading
        title="Results you can see."
        subtitle="Simple formulas. Consistent routines. Real confidence."
      />

      <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 100}
            className="flex flex-col gap-3 border-t border-border pt-6"
          >
            <span className="text-5xl font-medium tracking-tight text-foreground tabular-nums sm:text-6xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
