import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Legal Resources - BGLaw',
  description: 'Access helpful guides and information on AI and technology in legal services to enhance your understanding of the legal process.',
}

const resources = [
  {
    title: 'AI Legal Analysis Guide',
    description: 'Understanding how artificial intelligence enhances legal analysis and case outcomes in personal injury law.',
    category: 'Tech Guide',
  },
  {
    title: 'AI Evidence Processing',
    description: 'How we use machine learning to process and analyze evidence for stronger legal cases.',
    category: 'Technology',
  },
  {
    title: 'Smart Legal FAQ',
    description: 'Common questions about our AI-powered legal services and how technology improves case outcomes.',
    category: 'FAQ',
  },
  {
    title: 'Digital Rights Overview',
    description: 'Understanding your rights in the age of AI-enhanced legal services.',
    category: 'Guide',
  },
  {
    title: 'AI Legal Terms',
    description: 'Essential terms and concepts about AI technology in modern legal practice.',
    category: 'Glossary',
  },
  {
    title: 'AI Case Timeline',
    description: 'How AI accelerates and optimizes your legal case process.',
    category: 'Process',
  },
]

export default function ResourcePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">AI Legal Resources</h1>
        <p className="text-lg text-center text-light">
          Discover how our AI-powered legal solutions are revolutionizing case analysis and outcomes.
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
