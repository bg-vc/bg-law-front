import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { User2, UserCircle2, UserCog2, type LucideIcon } from 'lucide-react'
import { ATTORNEYS_TEXT } from '@/constants/text/pages'

export const metadata: Metadata = {
  title: ATTORNEYS_TEXT.META.TITLE,
  description: ATTORNEYS_TEXT.META.DESCRIPTION,
}

const attorneyIcons: Record<string, LucideIcon> = {
  'John Smith': User2,
  'Sarah Johnson': UserCircle2,
  'Michael Chen': UserCog2,
}

export default function Attorneys() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl mb-6 text-center">
          {ATTORNEYS_TEXT.HERO.TITLE}
        </h1>
        <p className="text-light text-lg text-center">
          {ATTORNEYS_TEXT.HERO.DESCRIPTION}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ATTORNEYS_TEXT.ATTORNEYS.map((attorney) => {
          const Icon = attorneyIcons[attorney.name] || User2
          return (
            <div
              key={attorney.name}
              className="bg-dark/50 rounded-lg overflow-hidden hover:bg-dark/70 transition-colors p-8"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-6 bg-primary/10 rounded-full">
                  <Icon className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{attorney.name}</h3>
                <p className="text-light mb-4">{attorney.role}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">{ATTORNEYS_TEXT.LABELS.SPECIALTIES}</h4>
                  <ul className="space-y-1">
                    {attorney.specialties.map((specialty) => (
                      <li key={specialty} className="text-sm text-light">
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-light text-sm">{attorney.bio}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
