'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type {
  AssessmentAnswers,
  TruckCount,
  ServiceType,
  LeadSource,
  MissedCalls,
  BookingProcess,
  Capacity,
  Timeline,
  AdsInterest,
} from '../../lib/assessment/types';
import { calculateScore, validateAnswers } from '../../lib/assessment/scoring';

export default function AssessmentForm() {
  const router = useRouter();

  const totalSteps = 8;

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [answers, setAnswers] = useState<AssessmentAnswers>({
    trucks: null,
    serviceType: null,
    leadSources: [],
    missedCalls: null,
    bookingProcess: null,
    capacity: null,
    timeline: null,
    adsInterest: null,
  });

  /* -----------------------------
     STEP VALIDATION ONLY
  ----------------------------- */
  const validateCurrentStep = (): boolean => {
    let error: string | null = null;

    switch (currentStep) {
      case 0:
        if (!answers.trucks) error = 'Please select how many trucks you operate';
        break;
      case 1:
        if (!answers.serviceType) error = 'Please select your primary work type';
        break;
      case 2:
        if (answers.leadSources.length === 0)
          error = 'Please select at least one lead source';
        break;
      case 3:
        if (!answers.missedCalls)
          error = 'Please indicate when you miss calls';
        break;
      case 4:
        if (!answers.bookingProcess)
          error = 'Please select what happens when customers call';
        break;
      case 5:
        if (!answers.capacity)
          error = 'Please indicate if you can handle more jobs';
        break;
      case 6:
        if (!answers.timeline)
          error = "Please select when you're looking to start";
        break;
      case 7:
        if (!answers.adsInterest)
          error = 'Please indicate your ads interest';
        break;
    }

    if (error) {
      setErrors([error]);
      return false;
    }

    setErrors([]);
    return true;
  };

  /* -----------------------------
     ANSWER HANDLERS
  ----------------------------- */
  const handleSingleSelect = <K extends keyof AssessmentAnswers>(
    field: K,
    value: AssessmentAnswers[K]
  ) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setErrors([]);
  };

  const toggleLeadSource = (source: LeadSource) => {
    setAnswers((prev) => {
      const exists = prev.leadSources.includes(source);
      return {
        ...prev,
        leadSources: exists
          ? prev.leadSources.filter((s) => s !== source)
          : [...prev.leadSources, source],
      };
    });
    setErrors([]);
  };

  /* -----------------------------
     NAVIGATION
  ----------------------------- */
  const handleNext = () => {
    if (!validateCurrentStep()) return;
    setCurrentStep((s) => Math.min(s + 1, totalSteps - 1));
  };

  const handleBack = () => {
    setErrors([]);
    setCurrentStep((s) => Math.max(s - 1, 0));
  };

  /* -----------------------------
     FINAL SUBMIT (EXPLICIT)
  ----------------------------- */
  const handleFinalSubmit = async () => {
    if (!validateCurrentStep()) return;

    const validationErrors = validateAnswers(answers);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const result = calculateScore(answers);
    router.push(
      `/assessment-result?score=${result.score_total}&ads=${result.ads_interest}`
    );
  };

  /* -----------------------------
     PROGRESS
  ----------------------------- */
  const progressPercentage = (currentStep / totalSteps) * 100;

  /* -----------------------------
     RENDER
  ----------------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-6 px-3">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900">
            HVAC Business Assessment
          </h1>
          <p className="text-sm text-gray-600">
            Take 2 minutes to see if we’re a good fit
          </p>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>
              Question {currentStep + 1} of {totalSteps}
            </span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            {errors.map((e, i) => (
              <p key={i} className="text-red-700 text-sm">
                {e}
              </p>
            ))}
          </div>
        )}

        {/* FORM */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          {/* ---------- QUESTIONS ---------- */}

          {/* Q0 */}
          {currentStep === 0 && (
            <Question
              title="How many trucks do you operate?"
              options={[
                ['1-2', '1–2 trucks'],
                ['3-5', '3–5 trucks'],
                ['6-10', '6–10 trucks'],
                ['10+', '10+ trucks'],
              ]}
              value={answers.trucks}
              onChange={(v) => handleSingleSelect('trucks', v as TruckCount)}
            />
          )}

          {/* Q1 */}
          {currentStep === 1 && (
            <Question
              title="What type of work do you primarily do?"
              options={[
                ['residential-service', 'Residential service & repair'],
                ['residential-installs', 'Residential installs'],
                ['mix', 'Mix of both'],
                ['commercial', 'Mostly commercial'],
              ]}
              value={answers.serviceType}
              onChange={(v) =>
                handleSingleSelect('serviceType', v as ServiceType)
              }
            />
          )}

          {/* Q2 */}
          {currentStep === 2 && (
            <MultiQuestion
              title="Where do your leads come from?"
              options={[
                ['referrals', 'Referrals'],
                ['google-ads', 'Google Ads / LSAs'],
                ['facebook-ads', 'Facebook Ads'],
                ['website-forms', 'Website forms'],
                ['angi-thumbtack', 'Angi / Thumbtack'],
                ['no-leads', 'No consistent inbound leads'],
              ]}
              values={answers.leadSources}
              toggle={(v) => toggleLeadSource(v as LeadSource)}
            />
          )}

          {/* Q3 */}
          {currentStep === 3 && (
            <Question
              title="When do you miss calls most often?"
              options={[
                ['after-hours', 'After hours / weekends'],
                ['busy-on-jobs', 'Busy on jobs'],
                ['occasionally', 'Occasionally'],
                ['rarely', 'Rarely / never'],
              ]}
              value={answers.missedCalls}
              onChange={(v) =>
                handleSingleSelect('missedCalls', v as MissedCalls)
              }
            />
          )}

          {/* Q4 */}
          {currentStep === 4 && (
            <Question
              title="What happens when a customer calls?"
              options={[
                ['answer-book', 'We answer & book immediately'],
                ['call-back', 'We call back later'],
                ['text-back', 'We text back'],
                ['voicemail', 'Goes to voicemail sometimes'],
                ['depends', "Depends who's available"],
              ]}
              value={answers.bookingProcess}
              onChange={(v) =>
                handleSingleSelect('bookingProcess', v as BookingProcess)
              }
            />
          )}

          {/* Q5 */}
          {currentStep === 5 && (
            <Question
              title="Can you handle 10–15 more jobs per week?"
              options={[
                ['yes-no-problem', 'Yes, no problem'],
                ['yes-adjust', 'Yes, but we’d need to adjust'],
                ['maybe', 'Maybe'],
                ['no-capacity', 'No capacity right now'],
              ]}
              value={answers.capacity}
              onChange={(v) => handleSingleSelect('capacity', v as Capacity)}
            />
          )}

          {/* Q6 */}
          {currentStep === 6 && (
            <Question
              title="When are you looking to start?"
              options={[
                ['asap', 'ASAP'],
                ['2-4-weeks', '2–4 weeks'],
                ['1-2-months', '1–2 months'],
                ['researching', 'Just researching'],
              ]}
              value={answers.timeline}
              onChange={(v) => handleSingleSelect('timeline', v as Timeline)}
            />
          )}

          {/* Q7 */}
          {currentStep === 7 && (
            <Question
              title="Are you interested in running paid ads?"
              options={[
                ['yes', 'Yes'],
                ['maybe', 'Maybe'],
                ['no', 'No'],
              ]}
              value={answers.adsInterest}
              onChange={(v) =>
                handleSingleSelect('adsInterest', v as AdsInterest)
              }
            />
          )}

          {/* Navigation */}
          <div className="mt-6 flex justify-between gap-3">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Back
            </button>

            {currentStep < totalSteps - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium text-white ${
                  isSubmitting
                    ? 'bg-blue-400'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Submitting…' : 'See My Results'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------
   REUSABLE QUESTION COMPONENTS
----------------------------- */
function Question({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: [string, string][];
  value: string | null;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {options.map(([val, label]) => (
        <label
          key={val}
          className={`block p-3 border-2 rounded-lg cursor-pointer ${
            value === val
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <input
            type="radio"
            checked={value === val}
            onChange={() => onChange(val)}
            className="sr-only"
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}

function MultiQuestion({
  title,
  options,
  values,
  toggle,
}: {
  title: string;
  options: [string, string][];
  values: string[];
  toggle: (v: string) => void;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {options.map(([val, label]) => (
        <label
          key={val}
          className={`flex items-center p-3 border-2 rounded-lg cursor-pointer ${
            values.includes(val)
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <input
            type="checkbox"
            checked={values.includes(val)}
            onChange={() => toggle(val)}
            className="mr-3"
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}
