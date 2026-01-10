import type { ReactNode } from 'react'

import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

import { cn } from '@/lib/utils'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: 'Demo: %s - Track | Shadcn Studio',
    default: 'Demo: Track - Changelog Landing Page | Shadcn Studio'
  },
  description:
    'A clean, centralized page that highlights product updates, improvements, and fixes so users can quickly see what’s new.',
  robots: 'index,follow',
  keywords: ['Changelog', 'Product updates', 'Release notes'],
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`),
  openGraph: {
    title: {
      template: 'Demo: %s - Track | Shadcn Studio',
      default: 'Demo: Track - Changelog Landing Page | Shadcn Studio'
    },
    description:
      'A clean, centralized page that highlights product updates, improvements, and fixes so users can quickly see what’s new.',
    type: 'website',
    siteName: 'Track',
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Track - Changelog Landing Page'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: 'Demo: %s - Track | Shadcn Studio',
      default: 'Demo: Track - Changelog Landing Page | Shadcn Studio'
    },
    description:
      'A clean, centralized page that highlights product updates, improvements, and fixes so users can quickly see what’s new.'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(geistSans.variable, geistMono.variable, 'flex min-h-full w-full scroll-smooth antialiased')}
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
