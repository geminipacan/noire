export type Product = {
  id: string
  name: string
  description: string
  benefit: string
  price: string
  image: string
  alt: string
}

/**
 * Product catalogue for the NOIRÉ Skin prototype.
 * Placeholder copy/prices — safe to edit later without touching UI components.
 */
export const products: Product[] = [
  {
    id: 'daily-cleanser',
    name: 'NOIRÉ Daily Cleanser',
    description:
      'A gentle daily cleanser that removes impurities without stripping the skin.',
    benefit: 'Cleanse · Balance · Refresh',
    price: '$28',
    image: '/images/product-cleanser.png',
    alt: 'NOIRÉ Daily Cleanser matte black bottle on a dark background',
  },
  {
    id: 'renewal-serum',
    name: 'NOIRÉ Renewal Serum',
    description:
      'A lightweight Niacinamide + Hyaluronic Acid serum designed to hydrate and improve skin texture.',
    benefit: 'Hydrate · Smooth · Balance',
    price: '$42',
    image: '/images/product-serum.png',
    alt: 'NOIRÉ Renewal Serum frosted glass dropper bottle on a dark background',
  },
  {
    id: 'barrier-cream',
    name: 'NOIRÉ Barrier Cream',
    description:
      'A ceramide-rich moisturizer designed to support and restore the skin barrier.',
    benefit: 'Repair · Protect · Hydrate',
    price: '$38',
    image: '/images/product-cream.png',
    alt: 'NOIRÉ Barrier Cream frosted glass jar with a matte black lid on a dark background',
  },
]
