'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '1',
    title: 'Lead Comes In',
    description: 'From your ads, website, or referrals — we capture it instantly.',
  },
  {
    number: '2',
    title: 'We Respond, Qualify & Follow Up',
    description: 'In under 60 seconds, we reach out, qualify the prospect, and schedule the inspection.',
  },
  {
    number: '3',
    title: 'Inspection Booked, You Close',
    description: 'Show up to a qualified appointment ready to close. No chasing, no missed opportunities.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-3 sm:mb-4"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-10 sm:mb-12 md:mb-16 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          Simple, fast, and proven. We handle the lead response so you can focus on what you do best.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center"
            >
              <div className="bg-blue-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 flex-shrink-0">
                {step.number}
              </div>
              
              {/* Desktop connector line - only visible between steps on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 sm:top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-300" />
              )}

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center leading-snug">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed max-w-xs sm:max-w-sm md:max-w-none">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}