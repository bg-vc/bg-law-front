import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Scale, Heart, Users, Building2 } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "About Us - LawCrest Legal",
  description: "Learn about our dedicated team of personal injury attorneys and our commitment to fighting for justice."
}

const values = [
  {
    icon: Scale,
    title: 'Justice & Integrity',
    description: "We uphold the highest ethical standards and fight tirelessly for justice."
  },
  {
    icon: Heart,
    title: 'Client-Centered',
    description: "Our clients' well-being is our top priority. We provide personalized attention and support throughout your case."
  },
  {
    icon: Award,
    title: 'Excellence',
    description: "We strive for excellence in everything we do, from case preparation to courtroom advocacy."
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: "We are deeply committed to serving and improving our local community."
  }
]

const stats = [
  { number: '25+', label: 'Years of Experience' },
  { number: '10,000+', label: 'Cases Won' },
  { number: '$500M+', label: 'Recovered for Clients' },
  { number: '98%', label: 'Success Rate' },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <PageHeader
        title="Fighting for Justice Since 1998"
        description="For over two decades, LawCrest Legal has been a beacon of hope for injury victims,
          providing exceptional legal representation and unwavering support to our clients
          during their most challenging times."
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
            At LawCrest Legal, our mission is to provide exceptional legal representation
            while maintaining the highest standards of integrity and professionalism. We
            are committed to fighting for the rights of injury victims and ensuring they
            receive the compensation they deserve.
          </p>
          <p className="text-light">
            We understand that each case is unique, and we approach every client's
            situation with the dedication, attention to detail, and personalized service
            it deserves. Our team of experienced attorneys works tirelessly to achieve
            the best possible outcomes for our clients.
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
          personal injury law. We work collaboratively to ensure the best possible
          outcomes for our clients.
        </p>
        <Link href="/attorneys">
          <Button size="lg">View Our Attorneys</Button>
        </Link>
      </div>
    </div>
  )
}
