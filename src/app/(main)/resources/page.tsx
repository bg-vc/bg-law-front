import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources - BGLaw',
  description: 'Access helpful legal resources and guides to help you understand your rights and the legal process.',
}

const resources = [
  {
    title: 'Personal Injury Guide',
    description: 'A comprehensive guide to understanding your rights and the legal process in personal injury cases.',
    category: 'Guide',
  },
  {
    title: 'Medical Records Checklist',
    description: 'Essential documents needed for medical malpractice cases.',
    category: 'Checklist',
  },
  {
    title: 'Car Accident FAQ',
    description: 'Common questions and answers about car accident claims and legal procedures.',
    category: 'FAQ',
  },
  {
    title: 'Workers Rights Overview',
    description: 'Understanding your rights and protections in workplace injury cases.',
    category: 'Guide',
  },
  {
    title: 'Legal Terms Glossary',
    description: 'Common legal terms and definitions used in personal injury cases.',
    category: 'Guide',
  },
  {
    title: 'Case Timeline',
    description: 'What to expect during your personal injury case process.',
    category: 'Guide',
  },
]

export default function ResourcePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Resources</h1>
        <p className="text-lg text-center text-light">
          Helpful guides and information to help you understand your legal rights and options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="bg-dark/50 rounded-lg overflow-hidden hover:bg-dark/70 transition-colors p-8"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 text-sm font-semibold bg-primary/10 text-primary rounded">
                  {resource.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
              <p className="text-light text-sm flex-grow mb-4">{resource.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
