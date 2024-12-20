'use client'

import { Scale } from 'lucide-react'
import { HOME_TEXT } from '@/constants/text/pages'

export default function Hero() {
  return (
    <section className="relative w-full bg-dark pt-8">
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-[500px] text-center md:text-left mb-12 md:mb-0">
          <p className="text-primary text-sm md:text-base uppercase tracking-wider mb-4">
            {HOME_TEXT.HERO.SUBTITLE}
          </p>
          <h1 className="text-gold text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {HOME_TEXT.HERO.TITLE}
          </h1>
          <p className="text-light text-base md:text-lg mb-8">
            {HOME_TEXT.HERO.DESCRIPTION}
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded text-lg font-semibold hover:bg-opacity-90 transition-opacity">
            {HOME_TEXT.HERO.CTA}
          </button>
        </div>

        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="p-12 bg-primary/10 rounded-full">
            <Scale className="w-48 h-48 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
