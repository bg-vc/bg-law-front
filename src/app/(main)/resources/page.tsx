import type { Metadata } from 'next'
import Link from 'next/link'
import { Car, Scale, Stethoscope, FileText, ClipboardCheck, FileSignature, Globe, BookOpen, GraduationCap, Download, ExternalLink } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Legal Resources & Guides | LawCrest Legal',
  description: 'Access free legal resources, guides, and documents to help you understand your rights and the legal process.',
}

const resources = {
  guides: [
    {
      title: "Car Accident Claims Guide",
      description: "Everything you need to know about handling car accident claims, from initial steps to settlement.",
      icon: Car,
      downloadLink: "/downloads/car-accident-guide.pdf",
      pages: 12
    },
    {
      title: "Personal Injury Guide",
      description: "A comprehensive overview of personal injury law and how to protect your rights.",
      icon: Scale,
      downloadLink: "/downloads/personal-injury-guide.pdf",
      pages: 18
    },
    {
      title: "Medical Malpractice Guide",
      description: "Learn about medical malpractice claims, evidence requirements, and legal procedures.",
      icon: Stethoscope,
      downloadLink: "/downloads/medical-malpractice-guide.pdf",
      pages: 15
    }
  ],
  forms: [
    {
      title: "Case Evaluation Form",
      description: "Initial case evaluation form to help us understand your situation.",
      icon: FileText,
      downloadLink: "/forms/case-evaluation.pdf"
    },
    {
      title: "Client Intake Form",
      description: "Comprehensive intake form for new clients.",
      icon: ClipboardCheck,
      downloadLink: "/forms/client-intake.pdf"
    },
    {
      title: "Medical Release Form",
      description: "Authorization for release of medical records.",
      icon: FileSignature,
      downloadLink: "/forms/medical-release.pdf"
    }
  ],
  links: [
    {
      title: "California Courts",
      description: "Official California Courts website for legal resources.",
      icon: Globe,
      href: "https://www.courts.ca.gov"
    },
    {
      title: "Legal Dictionary",
      description: "Free legal dictionary and law terminology guide.",
      icon: BookOpen,
      href: "https://dictionary.law.com"
    },
    {
      title: "Legal Education Center",
      description: "Free educational resources about personal injury law.",
      icon: GraduationCap,
      href: "/education-center"
    }
  ]
}

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Legal Resources"
        description="Access our collection of free legal resources to help you better understand your rights and the legal process."
      />

      {/* Legal Guides Section */}
      <div className="mb-16">
        <h2 className="text-2xl mb-6">Free Legal Guides</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.guides.map((guide, index) => (
            <div
              key={index}
              className="bg-dark/50 rounded-lg p-6 hover:bg-dark/70 transition-colors"
            >
              <guide.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl mb-2">{guide.title}</h3>
              <p className="text-light text-sm mb-4">{guide.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary text-sm">{guide.pages} pages</span>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Forms Section */}
      <div className="mb-16">
        <h2 className="text-2xl mb-6">Legal Forms</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.forms.map((form, index) => (
            <div
              key={index}
              className="bg-dark/50 rounded-lg p-6 hover:bg-dark/70 transition-colors"
            >
              <form.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl mb-2">{form.title}</h3>
              <p className="text-light text-sm mb-4">{form.description}</p>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Form
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Useful Links Section */}
      <div className="mb-16">
        <h2 className="text-2xl mb-6">Useful Links</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.links.map((link, index) => (
            <div
              key={index}
              className="bg-dark/50 rounded-lg p-6 hover:bg-dark/70 transition-colors"
            >
              <link.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl mb-2">{link.title}</h3>
              <p className="text-light text-sm mb-4">{link.description}</p>
              <Button variant="ghost" size="sm" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Site
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
