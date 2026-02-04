export default function AddOns() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-sm sm:text-base text-gray-500 font-medium mb-2">
            Optional Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Available Add-Ons
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            These services are entirely optional and separate from the core performance guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Google Ads Management */}
          <div className="bg-gray-50 rounded-lg p-6 sm:p-7 md:p-8 border border-gray-200">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Google Ads Management
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 italic">
                Not required for the core guarantee
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed">
              Optional support for increasing lead volume through paid advertising.
            </p>

            <ul className="space-y-2.5 sm:space-y-3 mb-5">
              <li className="flex items-start text-sm sm:text-base text-gray-700">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Campaign setup and ongoing management</span>
              </li>
              <li className="flex items-start text-sm sm:text-base text-gray-700">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Lead quality tracking and optimization</span>
              </li>
              <li className="flex items-start text-sm sm:text-base text-gray-700">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Support higher call volume as you grow</span>
              </li>
              <li className="flex items-start text-sm sm:text-base text-gray-700">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Integration with existing booking system</span>
              </li>
              <li className="flex items-start text-sm sm:text-base text-gray-700">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Dedicated landing page for paid traffic</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                Discussed after reviewing your current lead volume
              </p>
            </div>
          </div>

          {/* Reviews & Reputation Automation */}
          <div className="bg-gray-50 rounded-lg p-6 sm:p-7 md:p-8 border border-gray-200">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Reviews & Reputation Automation
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 italic">
                Optional service
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed">
              Automate review collection to build trust and improve local visibility.
            </p>

            <ul className="space-y-2.5 sm:space-y-3 mb-5">
              <li className="flex items-start text-sm sm:text-base text-gray-700">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Automated review requests after completed jobs</span>
              </li>
              <li className="flex items-start text-sm sm:text-base text-gray-700">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Optional campaigns for past customer outreach</span>
              </li>
              <li className="flex items-start text-sm sm:text-base text-gray-700">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Reviews managed across Google and major platforms</span>
              </li>
              <li className="flex items-start text-sm sm:text-base text-gray-700">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Build trust with local customers before they call</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                Available after eligibility approval
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
            These add-ons are independent services and can be added at any time. They are not required to participate in the core performance-based inspection booking guarantee.
          </p>
        </div>
      </div>
    </section>
  )
}