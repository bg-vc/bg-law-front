import { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_TEXT } from '@/constants/text/pages/contact'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/Button'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: CONTACT_TEXT.META.TITLE,
  description: CONTACT_TEXT.META.DESCRIPTION,
}

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          {CONTACT_TEXT.HERO.TITLE}
        </h1>
        <p className="text-xl text-light max-w-3xl mx-auto">
          {CONTACT_TEXT.HERO.DESCRIPTION}
        </p>
      </div>

      {/* Contact Channels */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">
          {CONTACT_TEXT.SECTIONS.CHANNELS.TITLE}
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_TEXT.SECTIONS.CHANNELS.LIST.map((channel, index) => {
            const Icon = Icons[channel.icon as keyof typeof Icons]
            return (
              <div
                key={index}
                className="bg-dark/50 rounded-lg p-8 text-center"
              >
                {Icon && <Icon className="w-12 h-12 text-primary mx-auto mb-4" />}
                <h3 className="text-xl font-bold mb-4">{channel.title}</h3>
                <p className="text-light mb-6">{channel.description}</p>
                <Link href={channel.href}>
                  <Button variant="outline" size="sm">
                    {channel.action}
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="mt-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            {CONTACT_TEXT.SECTIONS.FORM.TITLE}
          </h2>
          <p className="text-light text-center mb-12">
            {CONTACT_TEXT.SECTIONS.FORM.DESCRIPTION}
          </p>
          <ContactForm 
            fields={CONTACT_TEXT.SECTIONS.FORM.FIELDS} 
            submitText={CONTACT_TEXT.SECTIONS.FORM.SUBMIT} 
          />
        </div>
      </section>

      {/* Features */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {CONTACT_TEXT.SECTIONS.FEATURES.TITLE}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_TEXT.SECTIONS.FEATURES.LIST.map((feature, index) => {
            const Icon = Icons[feature.icon as keyof typeof Icons]
            return (
              <div
                key={index}
                className="bg-dark/50 rounded-lg p-8"
              >
                {Icon && <Icon className="w-12 h-12 text-primary mb-4" />}
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-light">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Location */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {CONTACT_TEXT.SECTIONS.LOCATION.TITLE}
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-dark/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Office Location</h3>
            <div className="space-y-2 text-light">
              <p>{CONTACT_TEXT.SECTIONS.LOCATION.ADDRESS.STREET}</p>
              <p>{CONTACT_TEXT.SECTIONS.LOCATION.ADDRESS.CITY}, {CONTACT_TEXT.SECTIONS.LOCATION.ADDRESS.STATE} {CONTACT_TEXT.SECTIONS.LOCATION.ADDRESS.ZIP}</p>
              <p>Phone: {CONTACT_TEXT.SECTIONS.LOCATION.PHONE}</p>
              <p>Email: {CONTACT_TEXT.SECTIONS.LOCATION.EMAIL}</p>
            </div>
          </div>
          <div className="bg-dark/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Hours of Operation</h3>
            <p className="text-light">{CONTACT_TEXT.SECTIONS.LOCATION.HOURS}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
