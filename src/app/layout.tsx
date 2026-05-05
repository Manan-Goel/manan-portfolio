import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#030a14',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://manan.ai'), // Replace with your actual domain later
  title: 'Manan — AI/ML Systems Builder',
  description: 'I build intelligent systems that think, adapt, and scale. LLMs, multimodal AI, and production-grade ML engineering.',
  keywords: ['AI', 'ML', 'LLM', 'Machine Learning', 'Systems Builder', 'Manan', 'Engineering'],
  authors: [{ name: 'Manan' }],
  creator: 'Manan',
  publisher: 'Manan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Manan — AI/ML Systems Builder',
    description: 'Building intelligent systems that think, adapt, and scale. Explore my work in LLMs, Computer Vision, and RAG.',
    url: 'https://manan.ai',
    siteName: 'Manan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Manan — AI/ML Systems Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manan — AI/ML Systems Builder',
    description: 'Building intelligent systems that think, adapt, and scale.',
    creator: '@manan',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
