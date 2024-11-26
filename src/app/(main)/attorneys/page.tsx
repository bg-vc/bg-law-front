import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { User2, UserCircle2, UserCog2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Attorneys',
  description: 'Meet our experienced team of personal injury attorneys dedicated to fighting for your rights.',
}

const attorneys = [
  {
    name: 'John Smith',
    role: 'Senior Partner',
    icon: User2,
    specialties: ['Catastrophic Injuries', 'Motor Vehicle Accidents', 'Medical Malpractice'],
    bio: 'With over 25 years of experience in personal injury law, John has successfully recovered hundreds of millions in compensation for his clients.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Partner',
    icon: UserCircle2,
    specialties: ['Workplace Injuries', 'Product Liability', 'Personal Injury'],
    bio: 'Sarah specializes in workplace injury cases and has a proven track record of securing favorable settlements for her clients.',
  },
  {
    name: 'Michael Chen',
    role: 'Associate Attorney',
    icon: UserCog2,
    specialties: ['Personal Injury', 'Insurance Claims', 'Wrongful Death'],
    bio: 'Michael brings a detail-oriented approach to personal injury cases, ensuring no aspect of your claim is overlooked.',
  },
]

export default function Attorneys() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl mb-6 text-center">
          Our Legal Team
        </h1>
        <p className="text-light text-lg text-center">
          Our experienced attorneys are dedicated to providing exceptional legal
          representation. With decades of combined experience, we fight tirelessly
          for our clients' rights.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attorneys.map((attorney) => (
          <div
            key={attorney.name}
            className="bg-dark/50 rounded-lg overflow-hidden"
          >
            <div className="relative h-[300px] overflow-hidden bg-dark/50 flex items-center justify-center">
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
