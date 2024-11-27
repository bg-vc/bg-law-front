import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Contact BGLaw - AI-Powered Legal Consultation",
  description: "Experience the future of legal consultation with our AI-enhanced intake process. Get a preliminary case analysis within minutes."
}

const contactInfo = [
  {
    icon: Phone,
    title: "24/7 AI Assistant",
    details: [
      { label: "Smart Hotline", value: "(555) 123-4567" },
      { label: "AI Chat Support", value: "Available 24/7" }
    ]
  },
  {
    icon: Mail,
    title: "Digital Contact",
    details: [
      { label: "AI Intake", value: "ai-intake@bglaw.com" },
      { label: "Case Analysis", value: "analysis@bglaw.com" }
    ]
  },
  {
    icon: MapPin,
    title: "Virtual & Physical Office",
    details: [
      { label: "Digital HQ", value: "bglaw.ai" },
      { label: "Physical Location", value: "San Francisco, CA 94105" }
    ]
  },
  {
    icon: Clock,
    title: "Availability",
    details: [
      { label: "AI Services", value: "24/7 Automated Support" },
      { label: "Human Team", value: "9:00 AM - 6:00 PM" }
    ]
  }
]

export default function ContactPage() {
  return (
    <div className="container py-12">
      <PageHeader
        title="Experience AI-Enhanced Legal Support"
        description="Get instant preliminary case analysis through our AI system, followed by personalized consultation with our expert legal team."
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
