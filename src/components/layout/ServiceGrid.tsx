'use client'

import { Icons } from '../shared/Icons'
import ServiceCard from '../features/ServiceCard'

const services = [
  {
    title: 'Auto Accidents',
    Icon: Icons.Car,
  },
  {
    title: 'Workplace Injuries',
    Icon: Icons.HardHat,
  },
  {
    title: 'Medical Malpractice',
    Icon: Icons.Stethoscope,
  },
  {
    title: 'Slip and Fall Accidents',
    Icon: Icons.PersonStanding,
  },
]

export default function ServiceGrid() {
  return (
    <section className="w-full bg-dark/50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-gold text-3xl md:text-4xl font-bold text-center mb-16">
          Our Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
