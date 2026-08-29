'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { useShopModal } from '@/components/shop/shop-modal-provider'

type ShopNowButtonProps = React.ComponentProps<typeof Button> & {
  label?: string
}

/**
 * The single conversion button used across the whole site. Clicking it opens the
 * shared shop modal. Wording is fixed to "Shop Now" per brand guidelines.
 */
export function ShopNowButton({
  label = 'Shop Now',
  onClick,
  ...props
}: ShopNowButtonProps) {
  const { open } = useShopModal()

  return (
    <Button
      onClick={(event) => {
        open()
        onClick?.(event)
      }}
      {...props}
    >
      {label}
    </Button>
  )
}
