import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Scale, Heart, Users, Building2 } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "About BGLaw - Pioneering AI Legal Innovation",
  description: "Discover how we're revolutionizing legal services by combining artificial intelligence with expert legal counsel."
}

const values = [
  {
    icon: Scale,
    title: 'AI-Powered Justice',
    description: "We leverage cutting-edge AI technology to ensure fair and accurate legal outcomes."
  },
  {
    icon: Heart,
    title: 'Smart Client Care',
    description: "Our AI-enhanced systems provide personalized attention and real-time case updates through intelligent automation."
  },
  {
    icon: Award,
    title: 'Technical Excellence',
    description: "We combine legal expertise with advanced AI capabilities to deliver superior results."
  },
  {
    icon: Users,
    title: 'Digital Innovation',
    description: "We're leading the legal industry's digital transformation through AI integration."
  }
]

const stats = [
  { number: '99.9%', label: 'AI Analysis Accuracy' },
  { number: '10,000+', label: 'AI-Analyzed Cases' },
  { number: '$500M+', label: 'AI-Optimized Settlements' },
  { number: '75%', label: 'Faster Case Resolution' },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <PageHeader
        title="Revolutionizing Legal Services with AI"
        description="BGLaw combines artificial intelligence with expert legal counsel to provide
          unprecedented accuracy and efficiency in legal services. Our AI-powered
          approach has transformed traditional legal practice, offering faster,
          more precise, and data-driven solutions for our clients."
      />

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 bg-dark/50 rounded-lg"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.number}
            </div>
            <div className="text-light text-sm md:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-dark/50 flex items-center justify-center">
          <Building2 className="w-32 h-32 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl mb-6">Our Mission</h2>
          <p className="text-light mb-6">
            At BGLaw, our mission is to harness the power of artificial intelligence to
            revolutionize the legal industry. We're committed to delivering innovative,
            data-driven solutions that transform the way our clients experience legal
            services.
          </p>
          <p className="text-light">
            We understand that each case is unique, and we approach every client's
            situation with the dedication, attention to detail, and personalized service
            it deserves. Our team of experienced attorneys works tirelessly to achieve
            the best possible outcomes for our clients, leveraging the latest AI
            technologies to drive success.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 bg-dark/50 rounded-lg text-center hover:bg-dark/70 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl text-gold mb-3">{value.title}</h3>
              <p className="text-light text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Preview Section */}
      <div className="text-center">
        <h2 className="text-3xl mb-6">Meet Our Team</h2>
        <p className="text-light mb-8 max-w-2xl mx-auto">
          Our team of dedicated attorneys brings together decades of experience in
          personal injury law, combined with expertise in AI and technological
          innovation. We work collaboratively to ensure the best possible outcomes for
          our clients.
        </p>
        <Link href="/attorneys">
          <Button size="lg">View Our Attorneys</Button>
        </Link>
      </div>
    </div>
  )
}
