import type { Metadata } from 'next'
import { Car, HardHat, Stethoscope, PersonStanding } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Practice Areas - BGLaw',
  description: 'Expert legal services in personal injury, workplace accidents, medical malpractice, and more.',
}

const practiceAreas = [
  {
    title: 'Auto Accidents',
    description: 'Skilled representation for car, truck, and motorcycle accident victims.',
    Icon: Car
  },
  {
    title: 'Workplace Injuries',
    description: "Protecting workers' rights and ensuring fair compensation.",
    Icon: HardHat
  },
  {
    title: 'Medical Malpractice',
    description: "Holding healthcare providers accountable for negligence.",
    Icon: Stethoscope
  },
  {
    title: 'Slip and Fall',
    description: 'Expert guidance in premises liability cases.',
    Icon: PersonStanding
  },
]

export default function PracticeArea() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Practice Areas</h1>
        <p className="text-lg text-center text-light">
          Dedicated legal expertise across key areas of personal injury law.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {practiceAreas.map((area) => (
          <div
            key={area.title}
            className="bg-dark/50 rounded-lg overflow-hidden hover:bg-dark/70 transition-colors p-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-6 bg-primary/10 rounded-full">
                <area.Icon className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-light">{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
