import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { Phone, Mail, MapPin, Clock, type LucideIcon } from 'lucide-react'
import { CONTACT_TEXT } from '@/constants/text/pages'

export const metadata: Metadata = {
  title: CONTACT_TEXT.META.TITLE,
  description: CONTACT_TEXT.META.DESCRIPTION
}

const contactIcons: Record<string, LucideIcon> = {
  'phone': Phone,
  'mail': Mail,
  'location': MapPin,
  'time': Clock
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <PageHeader
        title={CONTACT_TEXT.HERO.TITLE}
        description={CONTACT_TEXT.HERO.DESCRIPTION}
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACT_TEXT.INFO_SECTIONS.map((info) => {
          const Icon = contactIcons[info.icon] || Phone
          return (
            <div
              key={info.title}
              className="rounded-lg border border-light/10 bg-dark/50 p-6"
            >
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-light">
                {info.title}
              </h3>
              <dl className="mt-2 space-y-1">
                {info.details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-sm text-light/60">{detail.label}</dt>
                    <dd className="text-light">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )
        })}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary">{CONTACT_TEXT.FORM.TITLE}</h2>
        <p className="mt-2 text-light">{CONTACT_TEXT.FORM.DESCRIPTION}</p>
        <form className="mt-8 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {CONTACT_TEXT.FORM.FIELDS.slice(0, 2).map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-light mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  required
                  className="w-full bg-dark/50 rounded-lg p-4 text-light border border-light/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
              {CONTACT_TEXT.FORM.FIELDS[2].label}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-dark/50 rounded-lg p-4 text-light border border-light/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              placeholder={CONTACT_TEXT.FORM.FIELDS[2].placeholder}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-lg px-6 py-4 font-semibold hover:bg-opacity-90 transition-colors"
            >
              {CONTACT_TEXT.FORM.SUBMIT_BUTTON}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
