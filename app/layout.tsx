import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `Paul Racisz • Portfolio`,
    template: 'Paul Racisz | %s',
  },
  description: 'Portfolio for Paul Racisz.',
  openGraph: {
    title: 'Paul Racisz Portfolio',
    description: 'Portfolio for Paul Racisz.',
    url: baseUrl,
    siteName: 'Paul Racisz Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-[#2C3E50] bg-[#F9F7F7]'
      )}
    >
      <body className="antialiased lg:mx-auto max-w-4xl mx-4 mt-8"> 
      <link rel="icon" href="/favicon.png" />
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
