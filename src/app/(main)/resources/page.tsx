import { Metadata } from 'next'
import Link from 'next/link'
import { RESOURCES_TEXT } from '@/constants/text/pages/resources'
import { Icons } from '@/components/Icons'

export const metadata: Metadata = {
  title: RESOURCES_TEXT.META.TITLE,
  description: RESOURCES_TEXT.META.DESCRIPTION,
}

export default function ResourcesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          {RESOURCES_TEXT.HERO.TITLE}
        </h1>
        <p className="text-xl text-light max-w-3xl mx-auto">
          {RESOURCES_TEXT.HERO.DESCRIPTION}
        </p>
      </div>

      {/* Featured Resources */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center">
          {RESOURCES_TEXT.SECTIONS.FEATURED.TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESOURCES_TEXT.SECTIONS.FEATURED.LIST.map((resource, index) => {
            const Icon = Icons[resource.icon as keyof typeof Icons]
            return (
              <div
                key={index}
                className="bg-dark/50 rounded-lg p-8 hover:bg-dark/70 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm text-light/80 mb-4">
                  <span>{resource.category}</span>
                  <span>•</span>
                  <span>{resource.readTime}</span>
                </div>
                {Icon && <Icon className="w-12 h-12 text-primary mb-4" />}
                <h3 className="text-2xl font-bold mb-4">{resource.title}</h3>
                <p className="text-light">{resource.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tools */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {RESOURCES_TEXT.SECTIONS.TOOLS.TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESOURCES_TEXT.SECTIONS.TOOLS.LIST.map((tool, index) => {
            const Icon = Icons[tool.icon as keyof typeof Icons]
            return (
              <div
                key={index}
                className="bg-dark/50 rounded-lg p-8 hover:bg-dark/70 transition-colors"
              >
                {Icon && <Icon className="w-12 h-12 text-primary mb-4" />}
                <h3 className="text-2xl font-bold mb-4">{tool.title}</h3>
                <p className="text-light">{tool.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {RESOURCES_TEXT.SECTIONS.CATEGORIES.TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESOURCES_TEXT.SECTIONS.CATEGORIES.LIST.map((category, index) => {
            const Icon = Icons[category.icon as keyof typeof Icons]
            return (
              <div
                key={index}
                className="bg-dark/50 rounded-lg p-8 text-center"
              >
                {Icon && <Icon className="w-12 h-12 text-primary mb-4 mx-auto" />}
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-light">{category.count} resources</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {RESOURCES_TEXT.SECTIONS.STATS.TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESOURCES_TEXT.SECTIONS.STATS.LIST.map((stat, index) => (
            <div
              key={index}
              className="bg-dark/50 rounded-lg p-8 text-center"
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <p className="text-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
