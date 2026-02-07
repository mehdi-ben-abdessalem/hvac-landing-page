// Assessment Form Types

export type TruckCount = '1-2' | '3-5' | '6-10' | '10+';
export type ServiceType = 'residential-service' | 'residential-installs' | 'mix' | 'commercial';
export type LeadSource = 'referrals' | 'google-ads' | 'facebook-ads' | 'website-forms' | 'angi-thumbtack' | 'no-leads';
export type MissedCalls = 'after-hours' | 'busy-on-jobs' | 'occasionally' | 'rarely';
export type BookingProcess = 'answer-book' | 'call-back' | 'text-back' | 'voicemail' | 'depends';
export type Capacity = 'yes-no-problem' | 'yes-adjust' | 'maybe' | 'no-capacity';
export type Timeline = 'asap' | '2-4-weeks' | '1-2-months' | 'researching';
export type AdsInterest = 'yes' | 'maybe' | 'no';

export interface AssessmentAnswers {
  trucks: TruckCount | null;
  serviceType: ServiceType | null;
  leadSources: LeadSource[];
  missedCalls: MissedCalls | null;
  bookingProcess: BookingProcess | null;
  capacity: Capacity | null;
  timeline: Timeline | null;
  adsInterest: AdsInterest | null;
}

export interface AssessmentResult {
  score_total: number;
  ads_interest: number;
}

export type LeadQuality = 'hot' | 'warm' | 'not-fit';