import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LawCrest - Personal Injury Attorneys',
  description: 'Professional legal representation for personal injury cases. We fight for your rights with expertise and compassion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-dark text-light antialiased`}>
        <Header />
        <main className="min-h-screen pt-24">
          {children}
        </main>
      </body>
    </html>
  )
}
