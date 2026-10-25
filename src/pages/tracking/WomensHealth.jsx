
import React, { useState } from 'react'
import {
  ArrowLeft,
  CalendarDays,
  Heart,
  Plus,
  Trash2,
  Smile,
  Activity,
  Droplets,
  Moon,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function WomensHealth() {
  const [periodDate, setPeriodDate] = useState('')
  const [symptom, setSymptom] = useState('')
  const [symptomNote, setSymptomNote] = useState('')
  const [mood, setMood] = useState('Good')
  const [symptoms, setSymptoms] = useState([])
  const [wellnessTasks, setWellnessTasks] = useState([])

  const symptomOptions = [
    'Cramps',
    'Headache',
    'Bloating',
    'Fatigue',
    'Acne',
    'Tender breasts',
    'Irregular bleeding',
    'Other',
  ]

  const wellnessOptions = [
    {
      id: 1,
      title: 'Drink enough water',
      description: 'Keep water nearby during the day.',
      icon: Droplets,
    },
    {
      id: 2,
      title: 'Get enough rest',
      description: 'Make time for sleep and relaxation.',
      icon: Moon,
    },
    {
      id: 3,
      title: 'Check in with yourself',
      description: 'Notice how you feel physically and emotionally.',
      icon: Heart,
    },
  ]

  const addSymptom = (e) => {
    e.preventDefault()

    if (!symptom) {
      alert('Please select a symptom first.')
      return
    }

    const newEntry = {
      id: Date.now(),
      symptom,
      note: symptomNote.trim(),
      date: new Date().toLocaleDateString(),
    }

    setSymptoms((previous) => [newEntry, ...previous])
    setSymptom('')
    setSymptomNote('')
  }

  const deleteSymptom = (id) => {
    setSymptoms((previous) =>
      previous.filter((entry) => entry.id !== id)
    )
  }

  const toggleWellnessTask = (id) => {
    setWellnessTasks((previous) =>
      previous.includes(id)
        ? previous.filter((taskId) => taskId !== id)
        : [...previous, id]
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <Link
          to="/health-tracking"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Health Tracking
        </Link>

        {/* Heading */}
        <section className="mb-8 rounded-3xl bg-[#F0EDE4] p-6 sm:p-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-white p-4 text-[#64816A]">
              <Heart size={38} />
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#64816A]">
                <Sparkles size={16} />
                Personal wellness
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Women's Health
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Record menstrual dates, notice symptom patterns, and keep
                track of your daily wellbeing in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Notice */}
        <div className="mb-8 rounded-xl border border-[#E7DCC7] bg-white p-4 text-sm leading-6 text-gray-600">
          <strong className="text-[#183D32]">Important:</strong> This is a
          personal tracking demo, not a diagnostic tool. Menstrual cycles
          vary, and the information recorded here cannot confirm pregnancy
          or identify a medical condition.
        </div>

        {/* Menstrual date */}
        <section className="mb-8 rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <CalendarDays size={23} />
            </div>

            <div>
              <h2 className="text-xl font-bold">Menstrual cycle journal</h2>
              <p className="mt-1 text-sm text-gray-500">
                Record the start date of your period if you wish.
              </p>
            </div>
          </div>

          <label className="mb-2 block text-sm font-medium">
            First day of your most recent period
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="date"
              value={periodDate}
              onChange={(e) => setPeriodDate(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A] sm:max-w-sm"
            />

            <button
              type="button"
              onClick={() => {
                if (!periodDate) {
                  alert('Please select a date first.')
                  return
                }

                alert('Date recorded for this session.')
              }}
              className="rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
            >
              Record date
            </button>
          </div>

          {periodDate && (
            <p className="mt-3 text-sm text-[#64816A]">
              Selected date: {periodDate}
            </p>
          )}

          <p className="mt-3 text-xs leading-5 text-gray-500">
            This selection is temporary and is not saved to a database.
          </p>
        </section>

        {/* Mood tracking */}
        <section className="mb-8 rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-[#F7EFE5] p-3 text-[#9A7048]">
              <Smile size={23} />
            </div>

            <div>
              <h2 className="text-xl font-bold">How are you feeling?</h2>
              <p className="mt-1 text-sm text-gray-500">
                Choose the mood that best describes how you feel today.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Great', emoji: '😊' },
              { label: 'Good', emoji: '🙂' },
              { label: 'Low', emoji: '😔' },
              { label: 'Stressed', emoji: '😣' },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setMood(item.label)}
                className={`rounded-xl border p-4 text-center transition ${
                  mood === item.label
                    ? 'border-[#64816A] bg-[#EEF3E9]'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="block text-2xl">{item.emoji}</span>
                <span className="mt-2 block text-sm font-medium">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Selected mood: <strong className="text-[#183D32]">{mood}</strong>
          </p>
        </section>

        {/* Add symptom */}
        <section className="mb-8 rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <Activity size={23} />
            </div>

            <div>
              <h2 className="text-xl font-bold">Symptom journal</h2>
              <p className="mt-1 text-sm text-gray-500">
                Record symptoms you notice to discuss with a healthcare
                professional if needed.
              </p>
            </div>
          </div>

          <form onSubmit={addSymptom} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Select a symptom
              </label>

              <select
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
              >
                <option value="">Choose a symptom</option>
                {symptomOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Additional notes (optional)
              </label>

              <textarea
                value={symptomNote}
                onChange={(e) => setSymptomNote(e.target.value)}
                rows={3}
                placeholder="Add details you want to remember..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
            >
              <Plus size={18} />
              Add symptom
            </button>
          </form>
        </section>

        {/* Symptom history */}
        <section className="mb-8 rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold">Recorded symptoms</h2>

          <p className="mt-2 text-sm text-gray-500">
            Your entries from the current session will appear here.
          </p>

          {symptoms.length === 0 ? (
            <div className="mt-5 rounded-xl bg-[#FAFAF5] p-8 text-center">
              <Activity
                size={30}
                className="mx-auto mb-3 text-[#64816A]"
              />
              <p className="font-medium">No symptoms recorded yet</p>
              <p className="mt-2 text-sm text-gray-500">
                Add an entry above to begin your journal.
              </p>
            </div>
          ) : (
            <div className="mt-5 space-y-3">
              {symptoms.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-start justify-between gap-4 rounded-xl border border-gray-100 p-4"
                >
                  <div>
                    <h3 className="font-semibold">{entry.symptom}</h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Recorded on {entry.date}
                    </p>

                    {entry.note && (
                      <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                        {entry.note}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteSymptom(entry.id)}
                    title="Delete symptom"
                    aria-label={`Delete ${entry.symptom}`}
                    className="shrink-0 rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Wellness checklist */}
        <section className="rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold">Daily wellness</h2>
          <p className="mt-2 text-sm text-gray-500">
            Small reminders to help you check in with yourself.
          </p>

          <div className="mt-5 space-y-3">
            {wellnessOptions.map((item) => {
              const Icon = item.icon
              const checked = wellnessTasks.includes(item.id)

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleWellnessTask(item.id)}
                  className="flex w-full items-center gap-4 rounded-xl border border-gray-100 p-4 text-left hover:bg-[#FAFAF5]"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    readOnly
                    tabIndex={-1}
                    className="h-4 w-4 accent-[#183D32]"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <Icon
                    size={21}
                    className="hidden text-[#64816A] sm:block"
                  />
                </button>
              )
            })}
          </div>
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          Your journal entries and selections are temporary demo data. They
          will reset when you refresh this page.
        </p>
      </main>
    </div>
  )
}

export default WomensHealth
