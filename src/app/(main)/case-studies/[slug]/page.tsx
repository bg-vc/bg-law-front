import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, Car, HardHat, Stethoscope, PersonStanding, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { CASE_STUDIES_TEXT } from '@/constants/text/pages'

const caseIcons: Record<string, LucideIcon> = {
  'car': Car,
  'hardhat': HardHat,
  'medical': Stethoscope,
  'personal': PersonStanding,
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = CASE_STUDIES_TEXT.CASES.find(
    study => study.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  )

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found - BGLaw',
      description: 'The requested case study could not be found.',
    }
  }

  return {
    title: `${caseStudy.title} - BGLaw Case Study`,
    description: caseStudy.description,
  }
}

export default function CaseStudy({ params }: Props) {
  const caseStudy = CASE_STUDIES_TEXT.CASES.find(
    study => study.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  )

  if (!caseStudy) {
    notFound()
  }

  const Icon = caseIcons[caseStudy.icon] || PersonStanding

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Back Button */}
      <Link href="/case-studies">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Button>
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="w-8 h-8 text-primary" />
          <span className="text-primary">{caseStudy.category}</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{caseStudy.title}</h1>
        <p className="text-xl text-light">{caseStudy.description}</p>
      </div>

      {/* Outcome */}
      <div className="bg-dark/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Case Outcome</h2>
        <div className="flex items-baseline gap-4">
          <span className="text-4xl font-bold text-primary">{caseStudy.outcome}</span>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-dark/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Key Highlights</h2>
        <ul className="space-y-4">
          {caseStudy.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-semibold">{index + 1}</span>
              </div>
              <p className="text-light">{highlight}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-primary/20 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Have a Similar Case?</h2>
        <p className="text-light mb-6">Let our AI-powered legal team help you achieve the best possible outcome.</p>
        <Link href="/contact">
          <Button size="lg">
            Contact Us Today
          </Button>
        </Link>
      </div>
    </div>
  )
}
