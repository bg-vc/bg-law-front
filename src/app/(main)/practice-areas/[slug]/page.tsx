import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Scale, Phone } from 'lucide-react'
import { Button } from '@/components/Button'
import { PRACTICE_AREAS_TEXT } from '@/constants/text/pages'

// 在实际应用中，这些数据应该从数据库或CMS获取
const practiceAreas = {
  'personal-injury': {
    title: "Personal Injury Law",
    image: '/images/practice-areas/personal-injury.jpg',
    summary: 'We help injury victims get the compensation they deserve. Our experienced team has recovered millions for our clients.',
    description: `
      Personal injury law covers a wide range of cases where someone has been injured due to another's negligence. Our experienced attorneys have a proven track record of success in handling complex personal injury cases and securing maximum compensation for our clients.

      We understand the physical, emotional, and financial toll that injuries can take on victims and their families. Our team is dedicated to providing compassionate legal representation while aggressively pursuing your rights.
    `,
    expertise: [
      'Thorough investigation of accident circumstances',
      'Expert witness consultation and testimony',
      'Comprehensive damage assessment',
      'Aggressive negotiation with insurance companies',
      'Strategic litigation when necessary',
      'Regular client communication and updates'
    ],
    commonCases: [
      {
        title: "Car Accidents",
        description: 'Representing victims of automobile accidents, including cars, trucks, and motorcycles.'
      },
      {
        title: "Slip and Fall",
        description: 'Helping victims injured on dangerous property due to negligent maintenance.'
      },
      {
        title: "Medical Malpractice",
        description: 'Fighting for patients harmed by healthcare provider negligence.'
      },
      {
        title: "Workplace Injuries",
        description: "Assisting workers injured on the job and navigating workers' compensation."
      },
      {
        title: "Product Liability",
        description: 'Pursuing claims against manufacturers of defective products.'
      },
      {
        title: "Wrongful Death",
        description: 'Supporting families who have lost loved ones due to negligence.'
      }
    ],
    attorneys: [
      {
        slug: 'john-smith',
        name: 'John Smith',
        role: 'Senior Partner',
        image: '/images/attorneys/john-smith.jpg'
      },
      {
        slug: 'sarah-johnson',
        name: 'Sarah Johnson',
        role: 'Partner',
        image: '/images/attorneys/sarah-johnson.jpg'
      }
    ]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const area = practiceAreas[params.slug as keyof typeof practiceAreas]
  
  if (!area) {
    return {
      title: 'Practice Area Not Found',
      description: 'The requested practice area could not be found.'
    }
  }

  return {
    title: `${area.title} - BGLaw`,
    description: area.summary
  }
}

export default function PracticeArea({ params }: { params: { slug: string } }) {
  const area = practiceAreas[params.slug as keyof typeof practiceAreas]

  if (!area) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Practice Area Not Found</h1>
          <p className="text-light mb-8">The requested practice area could not be found.</p>
          <Link href="/practice-areas">
            <Button>View All Practice Areas</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/practice-areas"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Practice Areas
        </Link>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{area.title}</h1>
          <p className="text-xl text-light mb-8">{area.summary}</p>
          <div className="space-y-4">
            {area.expertise.map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={area.image}
            alt={area.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert">
            {area.description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Common Cases */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Common Cases We Handle</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {area.commonCases.map((caseType, index) => (
            <div
              key={index}
              className="bg-dark/50 rounded-lg p-6 hover:bg-dark/70 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{caseType.title}</h3>
              <p className="text-light">{caseType.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Expert Legal Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {area.attorneys.map((attorney) => (
            <Link
              key={attorney.slug}
              href={`/attorneys/${attorney.slug}`}
              className="group"
            >
              <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold">{attorney.name}</h3>
              <p className="text-primary">{attorney.role}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark/50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Case?</h2>
        <p className="text-light mb-8 max-w-2xl mx-auto">
          Our experienced team is here to help you understand your legal options.
          Contact us today for a free consultation.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link href="/contact">
            <Button size="lg">
              Contact Us
            </Button>
          </Link>
          <Link href="tel:+1234567890">
            <Button variant="outline" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
