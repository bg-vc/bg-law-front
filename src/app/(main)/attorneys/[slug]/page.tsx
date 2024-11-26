import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, Linkedin, Award, BookOpen, Scale, User2 } from 'lucide-react'
import { Button } from '@/components/Button'

// 在实际应用中，这些数据应该从数据库或CMS获取
const attorneys = {
  'john-smith': {
    name: 'John Smith',
    role: 'Senior Partner',
    email: 'john.smith@lawcrest.com',
    phone: '(555) 123-4567',
    linkedin: 'https://linkedin.com/in/john-smith',
    bio: "John Smith brings over 25 years of experience in personal injury law, specializing in complex litigation and catastrophic injury cases. As a founding partner of LawCrest Legal, he has successfully recovered hundreds of millions of dollars for his clients.",
    education: [
      "J.D., Stanford Law School",
      "B.A., Political Science, UC Berkeley",
    ],
    barAdmissions: [
      "California State Bar",
      "U.S. District Court, Northern District of California",
      "U.S. Court of Appeals, Ninth Circuit"
    ],
    awards: [
      "Best Lawyers in America, Personal Injury Litigation (2015-2023)",
      "Super Lawyers, Northern California (2010-2023)",
      "Top 100 Trial Lawyers, National Trial Lawyers Association"
    ],
    publications: [
      "Modern Approaches to Personal Injury Litigation, California Law Review",
      "Understanding Catastrophic Injury Claims, Legal Times Magazine",
      "The Future of Personal Injury Law, American Bar Journal"
    ],
    practiceAreas: [
      "Catastrophic Injuries",
      "Motor Vehicle Accidents",
      "Medical Malpractice",
      "Product Liability",
      "Wrongful Death"
    ],
    languages: ["English", "Spanish"]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const attorney = attorneys[params.slug as keyof typeof attorneys]
  
  return {
    title: `${attorney.name} - Personal Injury Attorney | LawCrest Legal`,
    description: attorney.bio,
  }
}

export default function AttorneyProfile({ params }: { params: { slug: string } }) {
  const attorney = attorneys[params.slug as keyof typeof attorneys]

  if (!attorney) {
    return null // In production, this should redirect to 404 page
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Profile Header */}
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="relative h-[400px] md:h-full rounded-lg overflow-hidden bg-dark/50 flex items-center justify-center">
          <User2 className="w-48 h-48 text-primary" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl mb-2">{attorney.name}</h1>
          <p className="text-primary text-xl mb-6">{attorney.role}</p>
          <p className="text-light mb-8">{attorney.bio}</p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <Button className="flex items-center justify-center">
              <Mail className="w-4 h-4 mr-2" />
              Email Attorney
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={attorney.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl mb-4 flex items-center">
              <BookOpen className="w-6 h-6 text-primary mr-2" />
              Education
            </h2>
            <ul className="space-y-2 text-light">
              {attorney.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 flex items-center">
              <Scale className="w-6 h-6 text-primary mr-2" />
              Bar Admissions
            </h2>
            <ul className="space-y-2 text-light">
              {attorney.barAdmissions.map((admission, index) => (
                <li key={index}>{admission}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Languages</h2>
            <ul className="space-y-2 text-light">
              {attorney.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Middle Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl mb-4 flex items-center">
              <Award className="w-6 h-6 text-primary mr-2" />
              Awards & Recognition
            </h2>
            <ul className="space-y-2 text-light">
              {attorney.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Publications</h2>
            <ul className="space-y-2 text-light">
              {attorney.publications.map((publication, index) => (
                <li key={index}>{publication}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl mb-4">Practice Areas</h2>
            <div className="flex flex-wrap gap-2">
              {attorney.practiceAreas.map((area, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>

          <div className="bg-dark/50 rounded-lg p-6">
            <h2 className="text-2xl mb-4">Schedule a Consultation</h2>
            <p className="text-light mb-6">
              Discuss your case with {attorney.name} and learn how we can help you
              get the compensation you deserve.
            </p>
            <Link href="/contact">
              <Button className="w-full">Request Consultation</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
