import { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import NavbarWrapper from '@/components/NavbarWrapper'

// Load local Fustat font
const fustat = localFont({
  src: './fonts/fustat/Fustat-VariableFont_wght.ttf',
  display: 'swap',
  preload: true,
  variable: '--font-fustat'
})

// Load local Sk-Modernist-Regular font for headings/titles
const skModernist = localFont({
  src: [
    {
      path: './fonts/sk/sk-modernist-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/sk/sk-modernist-regular-webfont.woff',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  preload: true,
  variable: '--font-sk-modernist'
})

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export const metadata = {
  title: 'Mutai Enterprises | Moving Cargo. Building Trust.',
  description: 'Modern Freight solutions powered by cutting-edge technology for Kenya and Uganda logistics operations.',
  icons: {
    icon: '/me.ico',
    shortcut: '/me.ico',
    apple: '/me.ico',
  },
  keywords: ['logistics', 'freight forwarding', 'bulk transport', 'Kenya', 'Uganda', 'Nairobi', 'Mombasa', 'Kampala', 'transport', 'cargo'],
  robots: 'index, follow',
  openGraph: {
    title: 'Mutai Enterprises | Moving Cargo. Building Trust.',
    description: 'Modern Freight solutions powered by cutting-edge technology',
    url: 'https://mutai.co.ke',
    siteName: 'Mutai Enterprises Ltd',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mutai Enterprises Ltd Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutai Enterprises | Moving Cargo. Building Trust.',
    description: 'Modern Freight solutions powered by cutting-edge technology',
    images: ['/twitter-image.jpg'],
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fustat.variable} ${skModernist.variable}`} suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen">
        <CTABanner />
        <NavbarWrapper />
        <main className="flex-grow pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


