'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const painPoints = [
  {
    title: 'Missed Calls Go to Your Competitors',
    description: 'When a call goes unanswered, most customers don’t wait — they call the next HVAC company.',
  },
  {
    title: 'Slow Follow-Up Lets Hot Leads Go Cold',
    description: 'Even a short delay can cost the job. The first company to respond usually wins.',
  },
  {
    title: 'You Pay for Leads — But They Slip Through',
    description: 'Ads and referrals bring in calls and forms, but missed or delayed responses mean fewer booked inspections.',
  },
  {
    title: 'You’re Chasing Leads Instead of Running Jobs',
    description: 'Every callback pulls you away from jobs, installs, and growth.',
  },
]

export default function PainPoints() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12 md:mb-16"
        >
          You’re Losing Inspections — Even When Leads Are Coming In
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 sm:p-7 md:p-8 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5l3 3" /></svg>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug">
                {point.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}