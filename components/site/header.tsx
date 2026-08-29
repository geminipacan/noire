'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ShopNowButton } from '@/components/shop/shop-now-button'

const navLinks = [
  { label: 'Products', href: '/#products' },
  { label: 'Results', href: '/#results' },
  { label: 'FAQ', href: '/#faq' },
]

export function Header() {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.18em] text-foreground uppercase transition-opacity hover:opacity-70"
        >
          NOIRÉ Skin
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ShopNowButton size="lg" className="hidden h-9 px-4 sm:inline-flex" />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      <div
        className={cn(
          'fixed inset-x-0 top-16 bottom-0 z-40 origin-top md:hidden',
          'bg-background/95 backdrop-blur-xl transition-all duration-300',
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <nav
          aria-label="Mobile"
          className="container-page flex flex-col gap-1 pt-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-4 text-lg text-foreground transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
          <ShopNowButton
            size="lg"
            className="mt-6 h-12 w-full text-base"
            onClick={() => setMenuOpen(false)}
          />
        </nav>
      </div>
    </header>
  )
}
