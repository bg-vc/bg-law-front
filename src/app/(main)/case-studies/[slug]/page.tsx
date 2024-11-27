import { Metadata } from "next"
import { notFound } from "next/navigation"
import { CASE_STUDIES_TEXT } from "@/constants/text/pages/case-studies"

interface Props {
  params: {
    slug: string
  }
}

function getCase(slug: string) {
  return CASE_STUDIES_TEXT.SECTIONS.FEATURED.LIST.find(
    study => study.title.toLowerCase().replace(/\s+/g, '-') === slug
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = getCase(params.slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.title} | BGLaw Case Studies`,
    description: caseStudy.description,
  }
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = getCase(params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{caseStudy.title}</h1>
          <div className="flex items-center gap-4 text-light mb-6">
            <span className="bg-muted px-3 py-1 rounded-full">
              {caseStudy.category}
            </span>
            <span className="bg-muted px-3 py-1 rounded-full">
              {caseStudy.impact}
            </span>
          </div>
          <p className="text-xl text-light">{caseStudy.description}</p>
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">AI Technologies Used</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CASE_STUDIES_TEXT.SECTIONS.TECHNOLOGIES.LIST.map((tech, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <h3 className="font-bold mb-2">{tech.title}</h3>
                <p className="text-light">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CASE_STUDIES_TEXT.SECTIONS.METRICS.LIST.map((metric, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <h3 className="font-bold mb-2">{metric.title}</h3>
                <p className="text-light">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
