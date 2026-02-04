'use client'

export default function FinalCTA() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 leading-tight">
          Ready to Add 10 Inspections Without Chasing Leads?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
          We handle the lead response, qualification, and follow-up. You show up and close.
        </p>
        <button
          onClick={scrollToPricing}
          className="bg-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg md:text-xl font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          Check My Company's Eligibility
        </button>
      </div>
    </section>
  )
}