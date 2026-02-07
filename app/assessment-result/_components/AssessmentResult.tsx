'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import type { LeadQuality } from '../../lib/assessment/types';

function AssessmentResultContent() {
  const searchParams = useSearchParams();
  const scoreParam = searchParams.get('score');
  const adsParam = searchParams.get('ads');

  const score = scoreParam ? parseInt(scoreParam, 10) : 0;
  const adsInterest = adsParam ? parseInt(adsParam, 10) : 0;

  // Determine lead quality based on scoring thresholds
  const getLeadQuality = (score: number): LeadQuality => {
    if (score >= 14) return 'hot';
    if (score >= 9) return 'warm';
    return 'not-fit';
  };

  const leadQuality = getLeadQuality(score);

  // Content configuration for each outcome
  const outcomeConfig = {
    hot: {
      title: "You're a Perfect Fit! 🔥",
      subtitle: 'Your business has strong potential for growth',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      badgeColor: 'bg-green-100 text-green-800',
      badgeText: 'HOT LEAD',
      message:
        "Based on your answers, your HVAC business is primed for our services. You have the capacity, the right type of work, and clear opportunities to capture more leads.",
      nextSteps: [
        'Book a strategy call to discuss your specific growth goals',
        'Get a custom lead generation plan tailored to your business',
        'Start seeing qualified leads within 2-4 weeks',
      ],
      ctaText: 'Book Your Strategy Call',
      ctaHref: '/book-call?tier=hot',
    },
    warm: {
      title: "You Could Be a Good Fit 💡",
      subtitle: 'There are opportunities to explore',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-amber-50',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      badgeText: 'WARM LEAD',
      message:
        "Your business shows promise, but there may be a few areas to address before maximizing results. We can help you identify what's holding you back from scaling.",
      nextSteps: [
        'Review your current lead capture and booking processes',
        'Consider adjusting capacity or service focus',
        'Schedule a consultation to explore next steps',
      ],
      ctaText: 'Schedule a Consultation',
      ctaHref: '/book-call?tier=warm',
    },
    'not-fit': {
      title: "We May Not Be the Right Fit",
      subtitle: 'But we want to help you succeed',
      bgColor: 'bg-gradient-to-br from-gray-50 to-slate-50',
      badgeColor: 'bg-gray-100 text-gray-800',
      badgeText: 'NOT A FIT',
      message:
        "Based on your current situation, our services might not be the best match right now. That doesn't mean you can't succeed—it just means you may need to focus on other areas first.",
      nextSteps: [
        'Focus on building operational capacity',
        'Consider improving your booking and response systems',
        'Check back with us when your business has scaled',
      ],
      ctaText: 'Get Free Resources',
      ctaHref: '/resources',
    },
  };

  const config = outcomeConfig[leadQuality];

  return (
    <div className={`min-h-screen ${config.bgColor} py-12 px-4`}>
      <div className="max-w-3xl mx-auto">
        {/* Score Display */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${config.badgeColor}`}>
              {config.badgeText}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{config.title}</h1>
          <p className="text-xl text-gray-600">{config.subtitle}</p>
          <div className="mt-4 text-5xl font-bold text-gray-900">
            {score}
            <span className="text-2xl text-gray-500"> / 27</span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{config.message}</p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps:</h2>
          <ul className="space-y-3 mb-8">
            {config.nextSteps.map((step, idx) => (
              <li key={idx} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={config.ctaHref}
            className="block w-full text-center px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all"
          >
            {config.ctaText}
          </a>
        </div>

        {/* Ads Interest Indicator (Internal use - could be hidden from UI) */}
        {adsInterest > 0 && (
          <div className="bg-white rounded-lg shadow p-4 text-center text-sm text-gray-600">
            <p>
              Ads Interest Level:{' '}
              <span className="font-semibold">
                {adsInterest === 2 ? 'High' : adsInterest === 1 ? 'Medium' : 'Low'}
              </span>
            </p>
          </div>
        )}

        {/* Debug Info (Remove in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-6 p-4 bg-gray-800 text-gray-100 rounded-lg text-xs font-mono">
            <p>Debug Info:</p>
            <p>Score: {score}</p>
            <p>Ads Interest: {adsInterest}</p>
            <p>Lead Quality: {leadQuality}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AssessmentResult() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your results...</p>
          </div>
        </div>
      }
    >
      <AssessmentResultContent />
    </Suspense>
  );
}