import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Car, HardHat, Stethoscope, PersonStanding } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'AI-Powered Success Stories - BGLaw',
  description: "Discover how our AI-enhanced legal strategies have revolutionized case outcomes and maximized client compensation."
}

const caseStudies = [
  {
    title: "AI-Driven Accident Analysis Victory",
    category: "AI Auto Analysis",
    amount: "$2.5 Million",
    description: "Leveraged advanced AI algorithms to analyze crash data and reconstruct the accident scenario, leading to a comprehensive settlement for our client.",
    icon: Car,
    outcome: "AI-optimized settlement in 4 months",
    highlights: [
      "AI crash reconstruction analysis",
      "Machine learning pattern recognition",
      "Automated evidence processing",
      "Predictive damage assessment"
    ]
  },
  {
    title: "Smart Workplace Safety Analysis",
    category: "AI Safety Assessment",
    amount: "$1.8 Million",
    description: "Used AI-powered risk assessment tools to identify safety violations and establish liability in a complex construction site accident.",
    icon: HardHat,
    outcome: "Data-driven settlement success",
    highlights: [
      "AI safety pattern analysis",
      "Automated OSHA compliance check",
      "Machine learning risk assessment",
      "Predictive compensation modeling"
    ]
  },
  {
    title: "AI Medical Analysis Success",
    category: "AI Medical Review",
    amount: "$3.2 Million",
    description: "Applied machine learning algorithms to analyze medical records and identify critical patterns of malpractice, leading to a substantial settlement.",
    icon: Stethoscope,
    outcome: "AI-enhanced negotiation victory",
    highlights: [
      "AI medical record analysis",
      "Pattern recognition in treatment data",
      "Automated standard-of-care assessment",
      "Predictive outcome modeling"
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
