'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { ShopNowButton } from '@/components/shop/shop-now-button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container-page py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium tracking-[0.18em] text-foreground uppercase">
              NOIRÉ Skin
            </span>
            <span className="text-sm text-muted-foreground">
              Less noise. Better skin.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowUp className="size-4" aria-hidden="true" />
              Back to Top
            </button>
            <ShopNowButton size="lg" className="h-10 px-5" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 NOIRÉ Skin</span>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
