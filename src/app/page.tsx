import { Car, HardHat, Stethoscope, PersonStanding } from 'lucide-react'
import Link from 'next/link'
import Hero from '@/components/layout/Hero'
import ServiceGrid from '@/components/layout/ServiceGrid'

const practiceAreas = [
  {
    title: 'Car Accidents',
    description: 'Expert legal representation for victims of auto accidents',
    icon: Car,
    href: '/practice-areas/car-accidents'
  },
  {
    title: 'Construction Accidents',
    description: 'Protecting workers injured in construction site accidents',
    icon: HardHat,
    href: '/practice-areas/construction-accidents'
  },
  {
    title: 'Medical Malpractice',
    description: 'Justice for victims of medical negligence',
    icon: Stethoscope,
    href: '/practice-areas/medical-malpractice'
  },
  {
    title: 'Personal Injury',
    description: 'Comprehensive personal injury representation',
    icon: PersonStanding,
    href: '/practice-areas/personal-injury'
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
