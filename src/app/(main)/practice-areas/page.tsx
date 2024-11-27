import type { Metadata } from 'next'
import { Car, HardHat, Stethoscope, PersonStanding } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI-Powered Practice Areas - BGLaw',
  description: 'Leveraging artificial intelligence for superior legal analysis in personal injury, workplace accidents, medical malpractice, and more.',
}

const practiceAreas = [
  {
    title: 'AI-Enhanced Auto Accident Analysis',
    description: 'Using advanced AI algorithms to analyze accident data, reconstruct scenarios, and build stronger cases.',
    Icon: Car
  },
  {
    title: 'Smart Workplace Safety',
    description: "AI-powered risk assessment and pattern recognition for workplace injury cases.",
    Icon: HardHat
  },
  {
    title: 'AI Medical Analysis',
    description: "Utilizing machine learning to analyze medical records and identify malpractice patterns.",
    Icon: Stethoscope
  },
  {
    title: 'Predictive Liability Assessment',
    description: 'AI-driven analysis of premises liability cases using advanced data modeling.',
    Icon: PersonStanding
  },
]

export default function PracticeArea() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">AI-Powered Practice Areas</h1>
        <p className="text-lg text-center text-light">
          Revolutionizing legal services with artificial intelligence and machine learning technology.
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
