import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { AI } from './action'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { UserProvider } from '@auth0/nextjs-auth0/client';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = 'Chatbot Nexus Marketing IA'
const description =
  'Chatbot de Marketing Digital Nexus Marketing AI.'

export const metadata: Metadata = {
  metadataBase: new URL('https://morphic.sh'),
  title,
  description,
  openGraph: {
    title,
    description
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@miiura'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <UserProvider>
        <body className={cn('font-sans antialiased', fontSans.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <AI>{children}</AI>
            <Footer />
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  )
}
