'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6"
        >
          We book 10 HVAC Inspections
          In 30 days<br />
          Or you don't pay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-3 sm:mb-4 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          We handle lead response, qualification, and follow-up in under 60 seconds to add 10 additional inspections — you just show up and close.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-9 md:mb-10"
        >
          Works with your existing ads, CRM and referrals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToPricing}
            className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            Check My Company's Eligibility
          </button>
          <button
            onClick={scrollToHowItWorks}
            className="w-full sm:w-auto text-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-50 transition-colors active:bg-blue-100"
          >
            See How We Book 10 Inspections
          </button>
        </motion.div>
      </div>
    </section>
  )
}