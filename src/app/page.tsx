import { Car, HardHat, Stethoscope, PersonStanding } from 'lucide-react'
import Link from 'next/link'
import Hero from '@/components/layout/Hero'
import ServiceGrid from '@/components/layout/ServiceGrid'

const practiceAreas = [
  {
    title: 'AI-Powered Auto Analysis',
    description: 'Advanced AI algorithms analyze accident data for stronger car accident cases',
    icon: Car,
    href: '/practice-areas/car-accidents'
  },
  {
    title: 'Smart Site Safety',
    description: 'AI-driven risk assessment and legal support for construction accidents',
    icon: HardHat,
    href: '/practice-areas/construction-accident'
  },
  {
    title: 'Medical AI Analysis',
    description: 'AI-enhanced medical record analysis for malpractice cases',
    icon: Stethoscope,
    href: '/practice-areas/medical-malpractices'
  },
  {
    title: 'AI Case Assessment',
    description: 'Data-driven personal injury case evaluation and strategy',
    icon: PersonStanding,
    href: '/practice-areas/personal-injuries'
  }
]

export default function Home() {
  return (
    <>
      <div className="-mb-16">
        <Hero />
      </div>
      <ServiceGrid>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <Link
              key={index}
              href={area.href}
              className="group bg-dark/50 rounded-lg p-6 hover:bg-dark/70 transition-colors"
            >
              <area.icon className="w-32 h-32 text-primary mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-light text-sm">{area.description}</p>
            </Link>
          ))}
        </div>
      </ServiceGrid>
    </>
  )
}
