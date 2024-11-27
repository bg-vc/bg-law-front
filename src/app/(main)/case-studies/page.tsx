import { PersonStanding, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { CASE_STUDIES_TEXT } from '@/constants/text/pages/case-studies'
import { Icons } from '@/components/Icons'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Legal Success Stories | BGLaw',
  description: 'Explore how our AI-enhanced legal strategies have revolutionized case outcomes and delivered unprecedented success for our clients.',
}

export default function CaseStudiesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          {CASE_STUDIES_TEXT.HERO.TITLE}
        </h1>
        <p className="text-xl text-light max-w-3xl mx-auto">
          {CASE_STUDIES_TEXT.HERO.DESCRIPTION}
        </p>
      </div>

      {/* Featured Case Studies */}
      <section>
        <h2 className="text-3xl font-bold mb-8">
          {CASE_STUDIES_TEXT.SECTIONS.FEATURED.TITLE}
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES_TEXT.SECTIONS.FEATURED.LIST.map((study, index) => {
            const Icon = Icons[study.icon as keyof typeof Icons] || PersonStanding
            return (
              <div
                key={index}
                className="bg-dark/50 rounded-lg p-8 hover:bg-dark/70 transition-colors"
              >
                <Link
                  href={`/case-studies/${study.title
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                  className="block h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="text-primary">{study.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-light mb-6">{study.description}</p>
                  <div className="mt-auto">
                    <span className="text-primary font-semibold">
                      {study.impact}
                    </span>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {CASE_STUDIES_TEXT.SECTIONS.METRICS.TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CASE_STUDIES_TEXT.SECTIONS.METRICS.LIST.map((metric, index) => {
            const Icon = Icons[metric.icon as keyof typeof Icons] || PersonStanding
            return (
              <div
                key={index}
                className="bg-dark/50 rounded-lg p-8 text-center"
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <h3 className="font-bold mb-2">{metric.title}</h3>
                <p className="text-light">{metric.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {CASE_STUDIES_TEXT.SECTIONS.TECHNOLOGIES.TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES_TEXT.SECTIONS.TECHNOLOGIES.LIST.map((tech, index) => {
            const Icon = Icons[tech.icon as keyof typeof Icons] || PersonStanding
            return (
              <div
                key={index}
                className="bg-dark/50 rounded-lg p-8"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
                <p className="text-light">{tech.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
