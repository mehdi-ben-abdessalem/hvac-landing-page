export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="text-center md:text-left">
            <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1.5 sm:mb-2">
              Company Logo
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0 leading-relaxed">
              Performance-based HVAC inspection booking that delivers results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base py-2 sm:py-0 text-center sm:text-left"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base py-2 sm:py-0 text-center sm:text-left"
            >
              Terms of Service
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Company Logo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}