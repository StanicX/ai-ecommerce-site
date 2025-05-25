import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PromoTopBanner from './components/PromoTopBanner'
import ChatWidget from './components/ChatWidget'
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StyleHub - Your Fashion Destination',
  description: 'Shop the latest trends in fashion for men, women, and kids at StyleHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col transition-colors duration-200`}>
        <ThemeProvider>
          <header>
            <PromoTopBanner />
            <Navbar />
          </header>
          <main className="flex-grow">{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
} 