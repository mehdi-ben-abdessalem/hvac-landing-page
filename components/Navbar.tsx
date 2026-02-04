'use client'

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          Company Logo
        </div>
        
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Check My Company's Eligibility
          </button>
        </div>
      </div>
    </nav>
  )
}
