import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ShopModalProvider } from '@/components/shop/shop-modal-provider'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const siteUrl = 'https://noire-skin.example.com'
const siteDescription =
  'NOIRÉ Skin — modern premium skincare built on simple routines, proven active ingredients and clean formulas. Less noise. Better skin.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NOIRÉ Skin — Less noise. Better skin.',
    template: '%s · NOIRÉ Skin',
  },
  description: siteDescription,
  applicationName: 'NOIRÉ Skin',
  keywords: [
    'NOIRÉ Skin',
    'premium skincare',
    'minimal skincare routine',
    'niacinamide serum',
    'hyaluronic acid serum',
    'barrier cream',
    'clean skincare',
    'cruelty-free skincare',
  ],
  authors: [{ name: 'NOIRÉ Skin' }],
  creator: 'NOIRÉ Skin',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'NOIRÉ Skin',
    title: 'NOIRÉ Skin — Less noise. Better skin.',
    description: siteDescription,
    images: [
      {
        url: '/images/hero-product.png',
        width: 1200,
        height: 1200,
        alt: 'NOIRÉ Skin premium skincare packaging on a dark studio background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOIRÉ Skin — Less noise. Better skin.',
    description: siteDescription,
    images: ['/images/hero-product.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ShopModalProvider>{children}</ShopModalProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
