import { Metadata } from 'next'
import Link from 'next/link'
import { PRACTICE_AREAS_TEXT } from '@/constants/text/pages/practice-areas'
import { Icons } from '@/components/Icons'

export const metadata: Metadata = {
  title: PRACTICE_AREAS_TEXT.META.TITLE,
  description: PRACTICE_AREAS_TEXT.META.DESCRIPTION,
}

export default function PracticeAreasPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          {PRACTICE_AREAS_TEXT.HERO.TITLE}
        </h1>
        <p className="text-xl text-light max-w-3xl mx-auto">
          {PRACTICE_AREAS_TEXT.HERO.DESCRIPTION}
        </p>
      </div>

      {/* Practice Areas */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center">
          {PRACTICE_AREAS_TEXT.SECTIONS.AREAS.TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS_TEXT.SECTIONS.AREAS.LIST.map((area, index) => {
            const Icon = Icons[area.icon as keyof typeof Icons]
            return (
              <div
                key={index}
                className="bg-dark/50 rounded-lg p-8 hover:bg-dark/70 transition-colors"
              >
                <Link href={area.href} className="block h-full">
                  {Icon && <Icon className="w-12 h-12 text-primary mb-4" />}
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <p className="text-light">{area.description}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Features */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {PRACTICE_AREAS_TEXT.SECTIONS.FEATURES.TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS_TEXT.SECTIONS.FEATURES.LIST.map((feature, index) => {
            const Icon = Icons[feature.icon as keyof typeof Icons]
            return (
              <div
                key={index}
                className="bg-dark/50 rounded-lg p-8"
              >
                {Icon && <Icon className="w-12 h-12 text-primary mb-4" />}
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-light">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
