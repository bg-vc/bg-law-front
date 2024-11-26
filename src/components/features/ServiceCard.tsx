'use client'

import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  Icon: LucideIcon
}

export default function ServiceCard({ title, Icon }: ServiceCardProps) {
  return (
    <div className="bg-dark rounded-lg p-8 text-center hover:scale-105 transition-transform cursor-pointer">
      <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-primary/10 mb-6">
        <Icon className="w-24 h-24 text-primary" />
      </div>
      <h3 className="text-light text-xl font-semibold">{title}</h3>
    </div>
  )
}
