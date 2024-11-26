import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Contact Us - LawCrest Legal",
  description: "Get in touch with our experienced legal team for a free consultation. We're here to help you get the justice you deserve."
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      { label: "Main Office", value: "(555) 123-4567" },
      { label: "Toll Free", value: "1-800-LAW-HELP" }
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      { label: "General Inquiries", value: "info@lawcrest.com" },
      { label: "Case Consultation", value: "cases@lawcrest.com" }
    ]
  },
  {
    icon: MapPin,
    title: "Office Location",
    details: [
      { label: "Address", value: "123 Legal Street, Suite 100" },
      { label: "City", value: "San Francisco, CA 94105" }
    ]
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      { label: "Weekdays", value: "9:00 AM - 6:00 PM" },
      { label: "Weekends", value: "By Appointment" }
    ]
  }
]

export default function ContactPage() {
  return (
    <div className="container py-12">
      <PageHeader
        title="Contact Us"
        description="Have questions about your case? Contact us today for a free consultation with our experienced legal team."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map((info) => (
          <div
            key={info.title}
            className="rounded-lg border border-light/10 bg-dark/50 p-6"
          >
            <info.icon className="h-8 w-8 text-primary" />
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
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary">Send Us a Message</h2>
        <form className="mt-8 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full bg-dark/50 rounded-lg p-4 text-light border border-light/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full bg-dark/50 rounded-lg p-4 text-light border border-light/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="subject" className="block text-sm font-medium text-light mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="w-full bg-dark/50 rounded-lg p-4 text-light border border-light/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              placeholder="How can we help you?"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-dark/50 rounded-lg p-4 text-light border border-light/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              placeholder="Please describe your case..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-light shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
