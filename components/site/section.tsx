import * as React from 'react'
import { cn } from '@/lib/utils'

type SectionProps = React.ComponentProps<'section'>

/** Full-width section with consistent generous vertical rhythm. */
export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn('w-full py-20 sm:py-28 lg:py-36', className)}
      {...props}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

/** Reusable editorial heading block used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl leading-[1.1] font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
