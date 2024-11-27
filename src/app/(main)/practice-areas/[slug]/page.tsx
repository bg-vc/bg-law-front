import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/Button'
import { PRACTICE_AREAS_TEXT } from '@/constants/text/pages'

// 在实际应用中，这些数据应该从数据库或CMS获取
const practiceAreas = {
  'corporate': {
    title: "AI-Driven Corporate Law",
    summary: 'Leveraging machine learning for precise contract analysis, risk assessment, and regulatory compliance, ensuring your business stays ahead in the digital age.',
    description: `
      Our AI-Driven Corporate Law practice combines cutting-edge artificial intelligence with expert legal counsel to provide comprehensive solutions for modern businesses. We leverage advanced machine learning algorithms to streamline contract analysis, enhance risk assessment, and ensure regulatory compliance.

      Our team of experienced corporate lawyers works alongside AI technology to deliver faster, more accurate, and data-driven legal solutions for your business needs.
    `,
    expertise: [
      'AI-powered contract analysis and management',
      'Automated regulatory compliance monitoring',
      'Machine learning-based risk assessment',
      'Smart due diligence processes',
      'Predictive legal analytics',
      'Digital transformation consulting'
    ]
  },
  'intellectual-property': {
    title: "Smart Intellectual Property",
    summary: 'Using AI-powered patent analysis, trademark monitoring, and IP strategy optimization to protect and maximize your intellectual assets.',
    description: `
      Our Smart Intellectual Property practice utilizes advanced AI technologies to revolutionize how we protect and manage intellectual property. We combine traditional IP expertise with cutting-edge AI tools to provide comprehensive protection for your intellectual assets.

      Our innovative approach enables faster patent searches, more accurate trademark monitoring, and data-driven IP strategy optimization.
    `,
    expertise: [
      'AI-powered patent analysis and search',
      'Automated trademark monitoring',
      'Machine learning-based IP portfolio management',
      'Smart IP strategy optimization',
      'Digital rights management',
      'AI-assisted IP valuation'
    ]
  },
  'litigation': {
    title: "Predictive Litigation",
    summary: 'Advanced AI analytics for case outcome prediction, evidence analysis, and litigation strategy optimization, maximizing your chances of success.',
    description: `
      Our Predictive Litigation practice harnesses the power of AI analytics to transform traditional litigation approaches. We use advanced algorithms to predict case outcomes, analyze evidence, and optimize litigation strategies.

      By combining experienced litigators with cutting-edge AI technology, we provide data-driven insights that maximize your chances of success in court.
    `,
    expertise: [
      'AI-powered case outcome prediction',
      'Advanced evidence analysis',
      'Automated legal research',
      'Strategic litigation planning',
      'Machine learning-based document review',
      'Predictive cost analysis'
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
    <main className="container mx-auto px-4 py-16">
      {/* Back Button */}
      <Link href="/practice-areas" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Practice Areas
      </Link>

      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">{area.title}</h1>
        <p className="text-xl text-light">{area.summary}</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Description */}
          <div className="prose prose-invert max-w-none mb-12">
            {area.description}
          </div>
        </div>

        {/* Expertise Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-dark/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Our Expertise</h2>
            <ul className="space-y-3">
              {area.expertise.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
