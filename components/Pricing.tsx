'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12 md:mb-16"
        >
          Simple, Performance-Based Pricing
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-xl border-2 border-blue-600 p-6 sm:p-8 md:p-10"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
              Performance-Based Inspection Booking
            </h3>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Results Guaranteed
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-blue-200">
            <p className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-1.5 sm:mb-2 leading-snug">
              10 inspections in 30 days
            </p>
            <p className="text-base sm:text-lg text-gray-700 text-center">
              or you don't pay
            </p>
          </div>

          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <li className="flex items-start">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2.5 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Lead response in under 60 seconds</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2.5 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Full qualification and follow-up handled</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2.5 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Works with your existing ads and CRM</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2.5 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Only pay when we deliver results</span>
            </li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3.5 sm:p-4 mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
              <span className="font-semibold">Note:</span> Eligibility required. Not all companies qualify for our performance guarantee.
            </p>
          </div>

          <button className="w-full bg-blue-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-lg text-base sm:text-lg md:text-xl font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-lg">
            Check My Company's Eligibility
          </button>
        </motion.div>
      </div>
    </section>
  )
}