'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type RevealProps = React.ComponentProps<'div'> & {
  /** Delay in ms before the reveal transition starts once in view. */
  delay?: number
  as?: React.ElementType
}

/**
 * Lightweight scroll-reveal wrapper backed by IntersectionObserver.
 * Respects prefers-reduced-motion via CSS (see globals.css).
 */
export function Reveal({
  className,
  delay = 0,
  as: Tag = 'div',
  style,
  children,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  )
}
