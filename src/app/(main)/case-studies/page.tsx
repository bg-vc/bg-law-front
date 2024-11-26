import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Car, HardHat, Stethoscope, PersonStanding } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Case Studies - Our Success Stories | LawCrest Legal',
  description: "Explore our successful personal injury cases and see how we've helped our clients get the compensation they deserve."
}

const caseStudies = [
  {
    title: "Major Auto Accident Settlement",
    category: "Auto Accident",
    amount: "$2.5 Million",
    description: "Successfully represented a family involved in a severe multi-vehicle collision, securing compensation for medical expenses, lost wages, and emotional trauma.",
    icon: Car,
    outcome: "Settlement reached within 8 months",
    highlights: [
      "Multiple serious injuries",
      "Complex liability issues",
      "Insurance company initially denied claim",
      "Full compensation for all medical expenses"
    ]
  },
  {
    title: "Workplace Safety Violation",
    category: "Workplace Injury",
    amount: "$1.8 Million",
    description: "Represented a construction worker who suffered severe injuries due to unsafe working conditions and negligent safety protocols.",
    icon: HardHat,
    outcome: "Verdict after successful trial",
    highlights: [
      "OSHA violations documented",
      "Permanent disability compensation",
      "Workers' compensation integration",
      "Employer policy changes implemented"
    ]
  },
  {
    title: "Medical Malpractice Victory",
    category: "Medical Malpractice",
    amount: "$3.2 Million",
    description: "Secured justice for a patient who suffered complications due to a surgical error, resulting in additional procedures and extended recovery time.",
    icon: Stethoscope,
    outcome: "Negotiated settlement",
    highlights: [
      "Expert medical testimony",
      "Multiple liable parties",
      "Future medical costs covered",
      "Hospital protocol improvements"
    ]
  },
  {
    title: "Premises Liability Success",
    category: "Slip and Fall",
    amount: "$950,000",
    description: "Helped an elderly client receive compensation after a serious fall at a retail establishment due to improper maintenance and warning signs.",
    icon: PersonStanding,
    outcome: "Pre-trial settlement",
    highlights: [
      "Security footage evidence",
      "History of similar incidents",
      "Full recovery compensation",
      "Property safety improvements"
    ]
  }
]

export default function CaseStudies() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Our Success Stories"
        description="Explore some of our most impactful cases where we've helped our clients achieve justice and fair compensation. Each case represents our commitment to fighting for our clients' rights."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className="bg-dark/50 rounded-lg overflow-hidden hover:bg-dark/70 transition-colors"
          >
            <div className="relative h-48 bg-dark/50 flex items-center justify-center">
              <caseStudy.icon className="w-24 h-24 text-primary" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                  <span className="text-primary text-sm">{caseStudy.category}</span>
                </div>
                <span className="text-gold text-xl font-bold">{caseStudy.amount}</span>
              </div>
              <p className="text-light mb-4">{caseStudy.description}</p>
              <div className="mb-4">
                <h4 className="text-gold mb-2">Case Highlights:</h4>
                <ul className="text-light text-sm space-y-1">
                  {caseStudy.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary text-sm">{caseStudy.outcome}</span>
                <Button variant="ghost" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-2xl mb-4">Ready to Discuss Your Case?</h2>
        <p className="text-light mb-8 max-w-2xl mx-auto">
          Every case is unique, and we're here to help you understand your options.
          Contact us for a free consultation to discuss your situation.
        </p>
        <Link href="/contact">
          <Button size="lg">Schedule Free Consultation</Button>
        </Link>
      </div>
    </div>
  )
}
