import { Car, HardHat, Stethoscope, PersonStanding, type LucideIcon } from 'lucide-react'
import Hero from '@/components/layout/Hero'
import { HOME_TEXT } from '@/constants/text/pages'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: HOME_TEXT.META.TITLE,
  description: HOME_TEXT.META.DESCRIPTION,
}

const areaIcons: Record<string, LucideIcon> = {
  'AI-Powered Auto Analysis': Car,
  'Smart Site Safety': HardHat,
  'Medical AI Analysis': Stethoscope,
  'AI Case Assessment': PersonStanding,
}

export default function Home() {
  return (
    <>
      <div className="-mb-16">
        <Hero />
      </div>
      <section className="w-full bg-dark/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOME_TEXT.FEATURES.LIST.map((feature, index) => {
              const Icon = areaIcons[feature.title] || PersonStanding
              return (
                <div
                  key={feature.title}
                  className="bg-dark/50 rounded-lg p-6 hover:bg-dark/70 transition-colors"
                >
                  <Icon className="w-16 h-16 text-primary mb-8" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-light text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
