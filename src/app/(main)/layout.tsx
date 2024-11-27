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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-8 bg-dark">
        {children}
      </main>
    </div>
  )
}
