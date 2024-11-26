import Header from '@/components/layout/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | LawCrest',
    default: 'LawCrest - Personal Injury Attorneys',
  },
  description: 'Professional legal representation for personal injury cases. We fight for your rights with expertise and compassion.',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark pt-24">
        {children}
      </main>
    </>
  )
}
