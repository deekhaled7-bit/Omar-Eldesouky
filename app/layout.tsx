import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const orbitron = localFont({
  src: '../public/fonts/orbitron/Orbitron-VariableFont_wght.ttf',
  variable: '--font-orbitron',
  weight: '400 900',
  display: 'swap',
})

const monumentUltrabold = localFont({
  src: '../public/fonts/momentum/MonumentExtended-Ultrabold.otf',
  variable: '--font-monument-ultrabold',
  weight: '800',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Omar Eldesouky | Senior Fullstack Web Developer',
  description: 'Building scalable web applications, Shopify solutions, and modern digital experiences. 6+ years of experience in fullstack development.',
  keywords: ['Fullstack Developer', 'Web Developer', 'Shopify Developer', 'React', 'Next.js', 'TypeScript', 'Node.js'],
  authors: [{ name: 'Omar Eldesouky' }],
  creator: 'Omar Eldesouky',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Omar Eldesouky | Senior Fullstack Web Developer',
    description: 'Building scalable web applications, Shopify solutions, and modern digital experiences.',
    siteName: 'Omar Eldesouky Portfolio',
  },

  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo/yellow.png',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${monumentUltrabold.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background tracking-widest">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
