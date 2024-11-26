import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, DollarSign, Calendar, Award, Car, HardHat, Stethoscope, PersonStanding, User2 } from 'lucide-react'
import { Button } from '@/components/Button'

// 在实际应用中，这些数据应该从数据库或CMS获取
const caseStudies = {
  'multi-million-settlement-car-accident': {
    title: 'Multi-Million Dollar Settlement in Complex Car Accident Case',
    outcome: '$2.5 Million Settlement',
    date: '2023',
    icon: Car,
    practiceArea: 'Auto Accidents',
    attorney: {
      name: 'John Smith',
      role: 'Senior Partner',
    },
    summary: 'Secured a $2.5 million settlement for a client severely injured in a multi-vehicle accident caused by a commercial truck driver.',
    challenge: `
      Our client suffered life-altering injuries in a devastating multi-vehicle collision involving a commercial truck. The case presented several challenges:
      
      - Multiple parties involved, including the truck driver, trucking company, and other vehicles
      - Complex liability issues due to the nature of the accident
      - Significant injuries requiring extensive medical treatment and future care
      - Insurance companies initially offering inadequate compensation
    `,
    approach: `
      Our legal team took a comprehensive approach to build a strong case:

      1. **Thorough Investigation**
         - Gathered and analyzed police reports, witness statements, and surveillance footage
         - Worked with accident reconstruction experts to establish liability
         - Obtained black box data from the commercial truck
      
      2. **Medical Documentation**
         - Collaborated with medical experts to document injuries and future care needs
         - Calculated lifetime medical expenses and lost earnings
         - Documented impact on quality of life
      
      3. **Strategic Negotiation**
         - Built a compelling case demonstrating clear liability
         - Presented detailed documentation of damages
         - Prepared for trial while pursuing settlement negotiations
    `,
    outcome: `
      Through persistent negotiation and a strong case presentation, we achieved:

      - $2.5 million settlement for our client
      - Coverage of all past and future medical expenses
      - Compensation for lost wages and earning capacity
      - Additional damages for pain and suffering
    `,
    testimonial: {
      quote: "LawCrest Legal fought tirelessly for my rights and secured a settlement that ensures my future medical care. I couldn't have asked for better representation.",
      author: "Client Name Protected for Privacy"
    },
    relatedCases: [
      {
        slug: 'workplace-injury-settlement',
        title: 'Major Settlement in Workplace Injury Case',
        icon: HardHat,
        outcome: '$1.8 Million Settlement'
      },
      {
        slug: 'medical-malpractice-verdict',
        title: 'Successful Medical Malpractice Verdict',
        icon: Stethoscope,
        outcome: '$3.2 Million Verdict'
      },
      {
        slug: 'premises-liability-settlement',
        title: 'Premises Liability Case Victory',
        icon: PersonStanding,
        outcome: '$950,000 Settlement'
      }
    ]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]
  
  return {
    title: `${caseStudy.title} | LawCrest Legal Case Studies`,
    description: caseStudy.summary,
  }
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return null // In production, this should redirect to 404 page
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Back Button */}
      <Link href="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Case Studies
      </Link>

      {/* Header */}
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl mb-6">{caseStudy.title}</h1>
        
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-dark/50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <DollarSign className="w-5 h-5 text-primary mr-2" />
              <h3 className="text-lg">Settlement</h3>
            </div>
            <p className="text-2xl text-primary font-semibold">{caseStudy.outcome}</p>
          </div>
          
          <div className="bg-dark/50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 text-primary mr-2" />
              <h3 className="text-lg">Year</h3>
            </div>
            <p className="text-2xl text-primary font-semibold">{caseStudy.date}</p>
          </div>
          
          <div className="bg-dark/50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Award className="w-5 h-5 text-primary mr-2" />
              <h3 className="text-lg">Practice Area</h3>
            </div>
            <p className="text-2xl text-primary font-semibold">{caseStudy.practiceArea}</p>
          </div>
        </div>

        {/* Case Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-dark/50 flex items-center justify-center mb-12">
          <caseStudy.icon className="w-32 h-32 text-primary" />
        </div>

        {/* Attorney Info */}
        <div className="flex items-center gap-4 mb-12 p-6 bg-dark/50 rounded-lg">
          <div className="w-16 h-16 rounded-full bg-dark/50 flex items-center justify-center">
            <User2 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <div className="font-semibold">{caseStudy.attorney.name}</div>
            <div className="text-light/60">{caseStudy.attorney.role}</div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-invert prose-primary max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Case Summary</h2>
            <p>{caseStudy.summary}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl mb-4">The Challenge</h2>
            <div className="whitespace-pre-line">{caseStudy.challenge}</div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl mb-4">Our Approach</h2>
            <div className="whitespace-pre-line">{caseStudy.approach}</div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl mb-4">The Outcome</h2>
            <div className="whitespace-pre-line">{caseStudy.outcome}</div>
          </section>

          {/* Testimonial */}
          <blockquote className="bg-dark/50 p-8 rounded-lg my-12">
            <p className="text-xl italic mb-4">{caseStudy.testimonial.quote}</p>
            <footer className="text-primary">— {caseStudy.testimonial.author}</footer>
          </blockquote>
        </div>

        {/* Related Cases */}
        <div className="mt-16">
          <h2 className="text-2xl mb-8">Related Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudy.relatedCases.map((relatedCase) => (
              <Link
                key={relatedCase.slug}
                href={`/case-studies/${relatedCase.slug}`}
                className="group"
              >
                <div className="relative h-48 rounded-lg overflow-hidden bg-dark/50 flex items-center justify-center mb-4">
                  <relatedCase.icon className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-lg group-hover:text-primary transition-colors mb-2">
                  {relatedCase.title}
                </h3>
                <p className="text-primary">{relatedCase.outcome}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark/50 rounded-lg p-8 mt-16 text-center">
          <h2 className="text-2xl mb-4">Have a Similar Case?</h2>
          <p className="text-light mb-6">
            Our experienced team has a proven track record of success in cases like yours.
            Contact us for a free consultation.
          </p>
          <Link href="/contact">
            <Button size="lg">Schedule a Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
