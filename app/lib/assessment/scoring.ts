// Scoring Logic - Pure function with explicit scoring maps

import type {
  AssessmentAnswers,
  AssessmentResult,
  TruckCount,
  ServiceType,
  LeadSource,
  MissedCalls,
  BookingProcess,
  Capacity,
  Timeline,
  AdsInterest,
} from './types';

// Scoring Maps - Single source of truth for all point values
const SCORING_MAP = {
  trucks: {
    '1-2': 0,
    '3-5': 2,
    '6-10': 3,
    '10+': 4,
  } as Record<TruckCount, number>,

  serviceType: {
    'residential-service': 3,
    'residential-installs': 2,
    'mix': 3,
    'commercial': 0,
  } as Record<ServiceType, number>,

  leadSources: {
    'referrals': 2,
    'google-ads': 3,
    'facebook-ads': 2,
    'website-forms': 2,
    'angi-thumbtack': 1,
    'no-leads': 0,
  } as Record<LeadSource, number>,

  missedCalls: {
    'after-hours': 3,
    'busy-on-jobs': 3,
    'occasionally': 1,
    'rarely': 0,
  } as Record<MissedCalls, number>,

  bookingProcess: {
    'answer-book': 0,
    'call-back': 2,
    'text-back': 1,
    'voicemail': 3,
    'depends': 2,
  } as Record<BookingProcess, number>,

  capacity: {
    'yes-no-problem': 3,
    'yes-adjust': 2,
    'maybe': 1,
    'no-capacity': 0,
  } as Record<Capacity, number>,

  timeline: {
    'asap': 3,
    '2-4-weeks': 2,
    '1-2-months': 1,
    'researching': 0,
  } as Record<Timeline, number>,

  adsInterest: {
    'yes': 2,
    'maybe': 1,
    'no': 0,
  } as Record<AdsInterest, number>,
};

/**
 * Calculate assessment score from answers
 * Pure function - same input always produces same output
 */
export function calculateScore(answers: AssessmentAnswers): AssessmentResult {
  let score_total = 0;

  // Q1: Trucks
  if (answers.trucks) {
    score_total += SCORING_MAP.trucks[answers.trucks];
  }

  // Q2: Service Type
  if (answers.serviceType) {
    score_total += SCORING_MAP.serviceType[answers.serviceType];
  }

  // Q3: Lead Sources (multi-select - sum all selected)
  answers.leadSources.forEach((source) => {
    score_total += SCORING_MAP.leadSources[source];
  });

  // Q4: Missed Calls
  if (answers.missedCalls) {
    score_total += SCORING_MAP.missedCalls[answers.missedCalls];
  }

  // Q5: Booking Process
  if (answers.bookingProcess) {
    score_total += SCORING_MAP.bookingProcess[answers.bookingProcess];
  }

  // Q6: Capacity
  if (answers.capacity) {
    score_total += SCORING_MAP.capacity[answers.capacity];
  }

  // Q7: Timeline
  if (answers.timeline) {
    score_total += SCORING_MAP.timeline[answers.timeline];
  }

  // Q8: Ads Interest (does NOT affect score_total)
  const ads_interest = answers.adsInterest
    ? SCORING_MAP.adsInterest[answers.adsInterest]
    : 0;

  return {
    score_total,
    ads_interest,
  };
}

/**
 * Validate that all required questions are answered
 */
export function validateAnswers(answers: AssessmentAnswers): string[] {
  const errors: string[] = [];

  if (!answers.trucks) errors.push('Please select your truck count');
  if (!answers.serviceType) errors.push('Please select your service type');
  if (answers.leadSources.length === 0) errors.push('Please select at least one lead source');
  if (!answers.missedCalls) errors.push('Please answer the missed calls question');
  if (!answers.bookingProcess) errors.push('Please select your booking process');
  if (!answers.capacity) errors.push('Please answer the capacity question');
  if (!answers.timeline) errors.push('Please select your timeline');
  if (!answers.adsInterest) errors.push('Please indicate your ads interest');

  return errors;
}