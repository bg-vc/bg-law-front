import { Metadata } from "next"
import { User2 } from "lucide-react"
import { ATTORNEYS_TEXT } from "@/constants/text/pages/attorneys"

export const metadata: Metadata = {
  title: ATTORNEYS_TEXT.META.TITLE,
  description: ATTORNEYS_TEXT.META.DESCRIPTION,
}

const attorneyIcons: Record<string, any> = {
  // Add attorney-specific icons here if needed
}

export default function AttorneysPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{ATTORNEYS_TEXT.HERO.TITLE}</h1>
        <p className="text-xl text-light">{ATTORNEYS_TEXT.HERO.DESCRIPTION}</p>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{ATTORNEYS_TEXT.SECTIONS.TEAM.TITLE}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ATTORNEYS_TEXT.SECTIONS.TEAM.LIST.map((attorney, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mr-4">
                  <User2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{attorney.name}</h3>
                  <p className="text-primary">{attorney.title}</p>
                </div>
              </div>
              <p className="text-light mb-4">{attorney.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {attorney.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-muted px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{ATTORNEYS_TEXT.SECTIONS.EXPERTISE.TITLE}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ATTORNEYS_TEXT.SECTIONS.EXPERTISE.LIST.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <User2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">{ATTORNEYS_TEXT.SECTIONS.STATS.TITLE}</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {ATTORNEYS_TEXT.SECTIONS.STATS.LIST.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
