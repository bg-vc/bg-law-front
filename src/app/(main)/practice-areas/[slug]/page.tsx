import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Scale, Phone } from 'lucide-react'
import { Button } from '@/components/Button'

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
        description: 'Assisting workers injured on the job and navigating workers' compensation.'
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
    process: [
      {
        title: "Free Initial Consultation",
        description: 'We review your case and explain your legal options at no cost.'
      },
      {
        title: "Investigation",
        description: 'Our team gathers evidence, interviews witnesses, and consults experts.'
      },
      {
        title: "Case Building",
        description: 'We develop a strong legal strategy tailored to your specific situation.'
      },
      {
        title: "Negotiation",
        description: 'We negotiate with insurance companies to secure fair compensation.'
      },
      {
        title: "Litigation",
        description: 'If necessary, we take your case to court to fight for your rights.'
      }
    ],
    faq: [
      {
        question: 'How much does it cost to hire a personal injury lawyer?',
        answer: 'We work on a contingency fee basis, meaning you pay nothing unless we win your case. Our fee is a percentage of the settlement or verdict we secure for you.'
      },
      {
        question: 'How long do I have to file a personal injury claim?',
        answer: 'The statute of limitations varies by state and type of injury. Generally, you have 1-3 years from the date of injury to file a claim. We recommend contacting us as soon as possible to ensure your rights are protected.'
      },
      {
        question: 'What compensation can I receive for my injuries?',
        answer: 'You may be entitled to compensation for medical expenses, lost wages, pain and suffering, emotional distress, and other damages. The specific amount depends on the circumstances of your case.'
      },
      {
        question: 'How long will my case take?',
        answer: 'Each case is unique. Some cases settle in months, while others may take years if they go to trial. We work efficiently to resolve your case while ensuring you receive fair compensation.'
      }
    ],
    relatedCases: [
      {
        slug: 'multi-million-settlement-car-accident',
        title: 'Multi-Million Dollar Settlement in Car Accident Case',
        image: '/images/case-studies/car-accident.jpg',
        outcome: '$2.5 Million Settlement'
      },
      {
        slug: 'workplace-injury-settlement',
        title: 'Major Settlement in Workplace Injury Case',
        image: '/images/case-studies/workplace-injury.jpg',
        outcome: '$1.8 Million Settlement'
      },
      {
        slug: 'medical-malpractice-verdict',
        title: 'Successful Medical Malpractice Verdict',
        image: '/images/case-studies/medical-malpractice.jpg',
        outcome: '$3.2 Million Verdict'
      }
    ],
    attorneys: [
      {
        slug: 'john-smith',
        name: 'John Smith',
        role: 'Senior Partner',
        image: '/images/attorney-1.jpg',
        experience: '25+ years of experience'
      },
      {
        slug: 'sarah-johnson',
        name: 'Sarah Johnson',
        role: 'Partner',
        image: '/images/attorney-2.jpg',
        experience: '15+ years of experience'
      }
    ]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const practiceArea = practiceAreas[params.slug as keyof typeof practiceAreas]
  
  return {
    title: `${practiceArea.title} | LawCrest Legal`,
    description: practiceArea.summary,
  }
}

export default function PracticeArea({ params }: { params: { slug: string } }) {
  const practiceArea = practiceAreas[params.slug as keyof typeof practiceAreas]

  if (!practiceArea) {
    return null // In production, this should redirect to 404 page
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Back Button */}
      <Link href="/practice-areas" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Practice Areas
      </Link>

      {/* Header */}
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl mb-6">{practiceArea.title}</h1>
        <p className="text-xl text-light mb-8">{practiceArea.summary}</p>
        
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={practiceArea.image}
            alt={practiceArea.title}
            fill
            className="object-cover"
          />
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {/* Description */}
        <section className="mb-16">
          <div className="prose prose-invert prose-primary max-w-none">
            <div className="whitespace-pre-line">{practiceArea.description}</div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Our Expertise</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {practiceArea.expertise.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-light">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Cases */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Types of Cases We Handle</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {practiceArea.commonCases.map((item, index) => (
              <div key={index} className="bg-dark/50 p-6 rounded-lg">
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Our Process</h2>
          <div className="space-y-8">
            {practiceArea.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="text-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {practiceArea.faq.map((item, index) => (
              <div key={index} className="bg-dark/50 p-6 rounded-lg">
                <h3 className="text-xl mb-3">{item.question}</h3>
                <p className="text-light">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Recent Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {practiceArea.relatedCases.map((case_) => (
              <Link
                key={case_.slug}
                href={`/case-studies/${case_.slug}`}
                className="group"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={case_.image}
                    alt={case_.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg group-hover:text-primary transition-colors mb-2">
                  {case_.title}
                </h3>
                <p className="text-primary font-semibold">{case_.outcome}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Our Attorneys */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Our Attorneys</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {practiceArea.attorneys.map((attorney) => (
              <Link
                key={attorney.slug}
                href={`/attorneys/${attorney.slug}`}
                className="group bg-dark/50 p-6 rounded-lg flex items-center space-x-6"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl group-hover:text-primary transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-primary">{attorney.role}</p>
                  <p className="text-light text-sm">{attorney.experience}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-dark/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl mb-4">Get Professional Legal Help Today</h2>
          <p className="text-light mb-8">
            Our experienced team is ready to help you with your {practiceArea.title.toLowerCase()} case.
            Contact us for a free consultation and learn how we can help you get the compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Schedule a Consultation
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
