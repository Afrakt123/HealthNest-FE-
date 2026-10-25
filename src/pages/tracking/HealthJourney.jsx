
import React, { useState } from 'react'
import {
  ArrowLeft,
  Activity,
  CalendarDays,
  CheckCircle2,
  Clock,
  Heart,
  Footprints,
  Plus,
  Sparkles,
  Target,
  Trash2,
  TrendingUp,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function HealthJourney() {
  const [filter, setFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [entryTitle, setEntryTitle] = useState('')
  const [entryCategory, setEntryCategory] = useState('Wellness')
  const [entryDate, setEntryDate] = useState('')
  const [entryNote, setEntryNote] = useState('')

  const [entries, setEntries] = useState([
    {
      id: 1,
      title: 'Morning walk completed',
      category: 'Fitness',
      date: '2026-10-19',
      note: 'Recorded a 25-minute walk.',
    },
    {
      id: 2,
      title: 'Daily wellness checklist',
      category: 'Wellness',
      date: '2026-10-18',
      note: 'Completed a few daily wellness activities.',
    },
    {
      id: 3,
      title: 'Symptom journal updated',
      category: 'Health',
      date: '2026-10-17',
      note: 'Added a personal health journal entry.',
    },
  ])

  const categories = ['All', 'Fitness', 'Health', 'Wellness', 'Appointment']

  const filteredEntries =
    filter === 'All'
      ? entries
      : entries.filter((entry) => entry.category === filter)

  const addEntry = (e) => {
    e.preventDefault()

    if (!entryTitle.trim() || !entryDate) {
      return
    }

    const newEntry = {
      id: Date.now(),
      title: entryTitle.trim(),
      category: entryCategory,
      date: entryDate,
      note: entryNote.trim(),
    }

    setEntries((previous) => [newEntry, ...previous])
    setEntryTitle('')
    setEntryCategory('Wellness')
    setEntryDate('')
    setEntryNote('')
    setShowForm(false)
  }

  const deleteEntry = (id) => {
    setEntries((previous) =>
      previous.filter((entry) => entry.id !== id)
    )
  }

  const getCategoryIcon = (category) => {
    if (category === 'Fitness') return Footprints
    if (category === 'Health') return Heart
    if (category === 'Appointment') return CalendarDays
    return Sparkles
  }

  const getCategoryStyle = (category) => {
    if (category === 'Fitness') {
      return 'bg-[#EEF3E9] text-[#64816A]'
    }

    if (category === 'Health') {
      return 'bg-[#F7EFE5] text-[#9A7048]'
    }

    if (category === 'Appointment') {
      return 'bg-[#EAF0F7] text-[#496987]'
    }

    return 'bg-[#F1EDF8] text-[#79649B]'
  }

  const fitnessCount = entries.filter(
    (entry) => entry.category === 'Fitness'
  ).length

  const healthCount = entries.filter(
    (entry) => entry.category === 'Health'
  ).length

  const wellnessCount = entries.filter(
    (entry) => entry.category === 'Wellness'
  ).length

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
              <TrendingUp size={38} />
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#64816A]">
                <Sparkles size={16} />
                Your progress, in one place
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                My Health Journey
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Review your recorded activities and personal wellness
                milestones in a simple timeline.
              </p>
            </div>
          </div>
        </section>

        {/* Demo notice */}
        <div className="mb-8 rounded-xl border border-[#E7DCC7] bg-white p-4 text-sm leading-6 text-gray-600">
          <strong className="text-[#183D32]">Demo data:</strong> The
          timeline below contains examples and entries added on this page.
          It does not automatically collect information from your other
          HealthNest pages.
        </div>

        {/* Summary */}
        <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <Activity size={22} />
            </div>
            <p className="text-sm text-gray-500">Total entries</p>
            <h2 className="mt-2 text-2xl font-bold">{entries.length}</h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <Footprints size={22} />
            </div>
            <p className="text-sm text-gray-500">Fitness entries</p>
            <h2 className="mt-2 text-2xl font-bold">{fitnessCount}</h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#F7EFE5] p-3 text-[#9A7048]">
              <Heart size={22} />
            </div>
            <p className="text-sm text-gray-500">Health entries</p>
            <h2 className="mt-2 text-2xl font-bold">{healthCount}</h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#F1EDF8] p-3 text-[#79649B]">
              <Target size={22} />
            </div>
            <p className="text-sm text-gray-500">Wellness entries</p>
            <h2 className="mt-2 text-2xl font-bold">{wellnessCount}</h2>
          </div>
        </section>

        {/* Timeline heading and action */}
        <section className="mb-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold">Your timeline</h2>
              <p className="mt-2 text-sm text-gray-500">
                Your recorded milestones, arranged by date.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
            >
              <Plus size={18} />
              Add entry
            </button>
          </div>
        </section>

        {/* Add entry form */}
        {showForm && (
          <form
            onSubmit={addEntry}
            className="mb-8 space-y-5 rounded-2xl border border-[#E7E9DF] bg-white p-6"
          >
            <h3 className="text-lg font-bold">Add a timeline entry</h3>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Entry title
              </label>
              <input
                type="text"
                value={entryTitle}
                onChange={(e) => setEntryTitle(e.target.value)}
                placeholder="Example: Completed a workout"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Category
              </label>
              <select
                value={entryCategory}
                onChange={(e) => setEntryCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
              >
                <option>Fitness</option>
                <option>Health</option>
                <option>Wellness</option>
                <option>Appointment</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Date
              </label>
              <input
                type="date"
                value={entryDate}
                onChange={(e) => setEntryDate(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Notes (optional)
              </label>
              <textarea
                value={entryNote}
                onChange={(e) => setEntryNote(e.target.value)}
                rows={3}
                placeholder="Write a short note about this milestone..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
              >
                Save entry
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Category filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === category
                  ? 'bg-[#183D32] text-white'
                  : 'border border-[#E7E9DF] bg-white text-gray-600 hover:bg-[#EEF3E9]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Timeline entries */}
        <section className="rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          {filteredEntries.length === 0 ? (
            <div className="py-10 text-center">
              <CalendarDays
                size={32}
                className="mx-auto mb-3 text-[#64816A]"
              />
              <h3 className="font-semibold">No entries in this category</h3>
              <p className="mt-2 text-sm text-gray-500">
                Add an entry or choose another filter.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEntries
                .slice()
                .sort((a, b) => b.date.localeCompare(a.date))
                .map((entry) => {
                  const Icon = getCategoryIcon(entry.category)

                  return (
                    <div key={entry.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`rounded-xl p-3 ${getCategoryStyle(entry.category)}`}
                        >
                          <Icon size={21} />
                        </div>
                        <div className="mt-3 min-h-8 w-px flex-1 bg-gray-200" />
                      </div>

                      <div className="min-w-0 flex-1 rounded-xl border border-gray-100 p-4">
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                          <div>
                            <span
                              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getCategoryStyle(entry.category)}`}
                            >
                              {entry.category}
                            </span>

                            <h3 className="mt-3 break-words font-semibold">
                              {entry.title}
                            </h3>

                            <p className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                              <CalendarDays size={14} />
                              {entry.date}
                            </p>

                            {entry.note && (
                              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                                {entry.note}
                              </p>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete ${entry.title}`}
                            title="Delete entry"
                            className="self-start rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          )}
        </section>

        {/* Encouragement */}
        <section className="mt-8 rounded-2xl bg-[#EEF3E9] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-white p-3 text-[#64816A]">
              <CheckCircle2 size={24} />
            </div>

            <div>
              <h2 className="text-lg font-bold">Every step counts</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Use your journey timeline to reflect on your habits and
                prepare questions for your healthcare professional. Progress
                looks different for everyone.
              </p>
            </div>
          </div>
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          Timeline entries are temporary demo data. Refreshing this page
          resets them.
        </p>
      </main>
    </div>
  )
}

export default HealthJourney
