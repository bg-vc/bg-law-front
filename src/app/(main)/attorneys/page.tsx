import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { User2, UserCircle2, UserCog2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI-Augmented Legal Team - BGLaw',
  description: 'Meet our tech-savvy attorneys who combine legal expertise with cutting-edge AI technology for superior case outcomes.',
}

const attorneys = [
  {
    name: 'John Smith',
    role: 'AI Integration Director & Senior Partner',
    icon: User2,
    specialties: ['AI-Powered Case Analysis', 'Predictive Legal Analytics', 'Digital Evidence Processing'],
    bio: 'John leads our AI integration initiatives, combining 25 years of legal expertise with cutting-edge technology to revolutionize case analysis and strategy development.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Data Analytics Partner',
    icon: UserCircle2,
    specialties: ['Machine Learning Applications', 'Automated Risk Assessment', 'Predictive Outcome Analysis'],
    bio: 'Sarah specializes in leveraging AI and machine learning to analyze complex case data and predict optimal legal strategies.',
  },
  {
    name: 'Michael Chen',
    role: 'Legal Technology Specialist',
    icon: UserCog2,
    specialties: ['AI-Driven Research', 'Digital Case Management', 'Automated Document Analysis'],
    bio: 'Michael combines legal expertise with technical knowledge to implement AI solutions that enhance case preparation and analysis.',
  },
]

export default function Attorneys() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl mb-6 text-center">
          AI-Augmented Legal Team
        </h1>
        <p className="text-light text-lg text-center">
          Our innovative legal team combines decades of experience with cutting-edge AI technology. 
          We leverage artificial intelligence and machine learning to analyze cases, predict outcomes, 
          and develop winning strategies for our clients.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attorneys.map((attorney) => (
          <div
            key={attorney.name}
            className="bg-dark/50 rounded-lg overflow-hidden"
          >
            <div className="relative h-[300px] overflow-hidden bg-dark/50 flex items-center justify-start pl-8">
              <attorney.icon className="w-32 h-32 text-primary" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl mb-2">{attorney.name}</h3>
              <p className="text-primary font-semibold mb-3">{attorney.role}</p>
              <div className="mb-4">
                <h4 className="text-gold text-sm mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {attorney.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-light mb-4">{attorney.bio}</p>
              <Button variant="outline" className="w-full">
                Contact Attorney
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
