
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ShieldCheck,
  HeartPulse,
  CalendarDays,
  Pill,
  Target,
  Eye,
  EyeOff,
  LockKeyhole,
  Info
} from 'lucide-react'

function SharedHealthInfo() {
  const [sharingEnabled, setSharingEnabled] = useState(true)
  const [showDetails, setShowDetails] = useState(false)

  const sharedItems = [
    {
      id: 1,
      title: 'Health Goals',
      description: 'Daily activity and wellness goals',
      icon: Target,
      detail: 'Example goal: Walk for 30 minutes each day.'
    },
    {
      id: 2,
      title: 'Appointments',
      description: 'Upcoming healthcare appointments',
      icon: CalendarDays,
      detail: 'Example appointment: General consultation, 25 October.'
    },
    {
      id: 3,
      title: 'Medication Reminders',
      description: 'Reminder schedule entered by the user',
      icon: Pill,
      detail: 'Example reminder: Take medication at the scheduled time.'
    },
    {
      id: 4,
      title: 'Health Summary',
      description: 'A general personal wellness summary',
      icon: HeartPulse,
      detail: 'This section would display a user-approved health summary.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-8 text-[#183D32] sm:px-8">
      <div className="mx-auto max-w-5xl">

        <Link
          to="/caregiver-management"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Caregiver Management
        </Link>

        {/* Page heading */}
        <div className="mt-6">
          <p className="text-sm font-medium text-[#64816A]">
            HealthNest / Caregiver / Shared Information
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Shared Health Information
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Review the types of health information you may choose to share
            with a trusted caregiver.
          </p>
        </div>

        {/* Privacy notice */}
        <section className="mt-7 rounded-2xl border border-[#DCE5D9] bg-[#F0F5ED] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-white p-3">
              <ShieldCheck size={24} />
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-bold">Your information, your choice</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                You should control what information is shared and who can
                see it. This page demonstrates the interface only. It does
                not send information to caregivers or change real permissions.
              </p>
            </div>
          </div>
        </section>

        {/* Sharing control */}
        <section className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-[#E8EFE5] p-3">
              {sharingEnabled ? (
                <Eye size={22} />
              ) : (
                <EyeOff size={22} />
              )}
            </div>

            <div>
              <h2 className="font-bold">Sharing preview</h2>
              <p className="mt-1 text-sm text-gray-500">
                {sharingEnabled
                  ? 'Sharing preview is enabled in this demo.'
                  : 'Sharing preview is disabled in this demo.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSharingEnabled((previous) => !previous)
              setShowDetails(false)
            }}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
              sharingEnabled
                ? 'bg-[#183D32] text-white hover:bg-[#285746]'
                : 'border border-[#DCE5D9] bg-white hover:bg-[#F2F5EF]'
            }`}
          >
            {sharingEnabled ? 'Turn Preview Off' : 'Turn Preview On'}
          </button>
        </section>

        {/* Information categories */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Information categories</h2>
            <p className="mt-1 text-sm text-gray-500">
              Example categories that a user might choose to share.
            </p>
          </div>

          <button
            type="button"
            disabled={!sharingEnabled}
            onClick={() => setShowDetails((previous) => !previous)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DCE5D9] px-4 py-3 text-sm font-semibold hover:bg-[#F2F5EF] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {showDetails ? <EyeOff size={17} /> : <Eye size={17} />}
            {showDetails ? 'Hide Preview Details' : 'View Preview Details'}
          </button>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {sharedItems.map((item) => {
            const ItemIcon = item.icon

            return (
              <article
                key={item.id}
                className={`rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm transition ${
                  !sharingEnabled ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#E8EFE5] p-3">
                    <ItemIcon size={23} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>

                {showDetails && sharingEnabled && (
                  <div className="mt-5 rounded-xl bg-[#F2F5EF] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#64816A]">
                      Example preview
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.detail}
                    </p>
                  </div>
                )}

                <div className="mt-5 flex items-center gap-2 border-t border-[#EDF0E9] pt-4 text-xs text-gray-500">
                  <LockKeyhole size={15} />
                  Sample information only
                </div>
              </article>
            )
          })}
        </div>

        {/* Important information */}
        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#E3E8DF] bg-white p-5">
          <Info size={21} className="mt-0.5 shrink-0 text-[#64816A]" />
          <div>
            <h2 className="font-semibold">Important to know</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              The preview toggle only changes what is displayed on this page.
              Real health-data sharing would need a secure backend,
              authentication, caregiver permissions, and proper access checks.
              The example information is not a real medical record.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SharedHealthInfo
