'use client'

import * as React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'

type ShopModalContextValue = {
  open: (productId?: string) => void
  close: () => void
}

const ShopModalContext = React.createContext<ShopModalContextValue | null>(null)

/**
 * Provides a single shop/product modal shared by every "Shop Now" button on the
 * site. This is a prototype: adding to cart is a no-op placeholder.
 */
export function ShopModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  const value = React.useMemo<ShopModalContextValue>(
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [],
  )

  return (
    <ShopModalContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg tracking-tight">
              Your routine, simplified.
            </DialogTitle>
            <DialogDescription>
              Three essentials. One complete daily routine.
            </DialogDescription>
          </DialogHeader>

          <ul className="flex flex-col gap-3">
            {products.map((product) => (
              <li
                key={product.id}
                className="glass flex items-center gap-4 rounded-lg p-3"
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-secondary">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.alt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {product.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {product.benefit}
                  </p>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {product.price}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <Check className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
            <span>
              Dermatologist tested · Cruelty-free · Free shipping over $50
            </span>
          </div>

          <Button
            size="lg"
            className="h-11 w-full text-sm"
            onClick={() => setIsOpen(false)}
          >
            Add routine · $108
          </Button>
        </DialogContent>
      </Dialog>
    </ShopModalContext.Provider>
  )
}

export function useShopModal() {
  const ctx = React.useContext(ShopModalContext)
  if (!ctx) {
    throw new Error('useShopModal must be used within a ShopModalProvider')
  }
  return ctx
}
