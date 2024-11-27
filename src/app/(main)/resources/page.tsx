import type { Metadata } from 'next'
import { RESOURCES_TEXT } from '@/constants/text/pages'

export const metadata: Metadata = {
  title: RESOURCES_TEXT.META.TITLE,
  description: RESOURCES_TEXT.META.DESCRIPTION,
}

export default function ResourcePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {RESOURCES_TEXT.HERO.TITLE}
        </h1>
        <p className="text-lg text-center text-light">
          {RESOURCES_TEXT.HERO.DESCRIPTION}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESOURCES_TEXT.RESOURCES.map((resource) => (
          <div
            key={resource.title}
            className="bg-dark/50 rounded-lg p-6 hover:bg-dark/70 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-primary text-sm">{resource.category}</span>
              <span className="text-light text-sm">{resource.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
            <p className="text-light mb-4">{resource.description}</p>
            <button className="text-primary hover:text-primary/80 transition-colors">
              {RESOURCES_TEXT.LABELS.READ_MORE}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
