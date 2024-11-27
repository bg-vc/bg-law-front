import type { Metadata } from 'next'
import { Car, HardHat, Stethoscope, PersonStanding } from 'lucide-react'
import { PRACTICE_AREAS_TEXT } from '@/constants/text/pages'

export const metadata: Metadata = {
  title: PRACTICE_AREAS_TEXT.META.TITLE,
  description: PRACTICE_AREAS_TEXT.META.DESCRIPTION,
}

const areaIcons = {
  'car': Car,
  'hardhat': HardHat,
  'medical': Stethoscope,
  'personal': PersonStanding,
}

export default function PracticeArea() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {PRACTICE_AREAS_TEXT.HERO.TITLE}
        </h1>
        <p className="text-lg text-center text-light">
          {PRACTICE_AREAS_TEXT.HERO.DESCRIPTION}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRACTICE_AREAS_TEXT.AREAS.map((area) => {
          const Icon = areaIcons[area.icon]
          return (
            <div
              key={area.title}
              className="bg-dark/50 rounded-lg overflow-hidden hover:bg-dark/70 transition-colors p-8"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-6 bg-primary/10 rounded-full">
                  <Icon className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-light">{area.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
