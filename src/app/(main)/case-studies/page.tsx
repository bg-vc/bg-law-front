import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Car, HardHat, Stethoscope, PersonStanding, type LucideIcon } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/Button'
import { CASE_STUDIES_TEXT } from '@/constants/text/pages'

export const metadata: Metadata = {
  title: CASE_STUDIES_TEXT.META.TITLE,
  description: CASE_STUDIES_TEXT.META.DESCRIPTION
}

const caseIcons: Record<string, LucideIcon> = {
  'car': Car,
  'hardhat': HardHat,
  'medical': Stethoscope,
  'personal': PersonStanding,
}

export default function CaseStudies() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title={CASE_STUDIES_TEXT.HERO.TITLE}
        description={CASE_STUDIES_TEXT.HERO.DESCRIPTION}
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES_TEXT.CASES.map((study) => {
          const Icon = caseIcons[study.icon] || PersonStanding
          return (
            <div
              key={study.title}
              className="bg-dark/50 rounded-lg overflow-hidden hover:bg-dark/70 transition-colors"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary text-sm">{study.category}</span>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-light mb-4">{study.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{study.outcome}</span>
                </div>
                <div className="mb-6">
                  <ul className="space-y-2">
                    {study.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm text-light">
                        <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  {CASE_STUDIES_TEXT.LABELS.READ_MORE}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
