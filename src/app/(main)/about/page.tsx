import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Scale, Heart, Users } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/Button'
import { ABOUT_TEXT } from '@/constants/text/pages'

export const metadata: Metadata = {
  title: ABOUT_TEXT.META.TITLE,
  description: ABOUT_TEXT.META.DESCRIPTION
}

const valueIcons = {
  'scale': Scale,
  'heart': Heart,
  'award': Award,
  'users': Users,
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title={ABOUT_TEXT.HERO.TITLE}
        description={ABOUT_TEXT.HERO.DESCRIPTION}
      />

      {/* Mission & Vision */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">{ABOUT_TEXT.SECTIONS.MISSION.TITLE}</h2>
          <p className="text-light">{ABOUT_TEXT.SECTIONS.MISSION.DESCRIPTION}</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">{ABOUT_TEXT.SECTIONS.VISION.TITLE}</h2>
          <p className="text-light">{ABOUT_TEXT.SECTIONS.VISION.DESCRIPTION}</p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          {ABOUT_TEXT.SECTIONS.VALUES.TITLE}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ABOUT_TEXT.SECTIONS.VALUES.LIST.map((value) => {
            const Icon = valueIcons[value.icon as keyof typeof valueIcons] || Scale
            return (
              <div
                key={value.title}
                className="bg-dark/50 rounded-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-light">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16">
        <div className="grid md:grid-cols-3 gap-8">
          {ABOUT_TEXT.STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-dark/50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Legal Services?</h2>
        <p className="text-light mb-8 max-w-2xl mx-auto">
          Contact us today to learn how our AI-powered legal solutions can help you achieve better outcomes.
        </p>
        <Link href="/contact">
          <Button size="lg">Contact Us</Button>
        </Link>
      </div>
    </div>
  )
}
