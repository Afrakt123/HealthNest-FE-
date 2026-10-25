
import React, { useState } from 'react'
import {
  ArrowLeft,
  Bell,
  Clock,
  Activity,
  Droplets,
  Footprints,
  Moon,
  Plus,
  CheckCircle2,
  Circle,
  Trash2,
  CalendarDays,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function ActivityReminders() {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: 'Morning walk',
      category: 'Exercise',
      time: '07:00',
      frequency: 'Daily',
      completed: false,
    },
    {
      id: 2,
      title: 'Drink water',
      category: 'Hydration',
      time: '10:00',
      frequency: 'Daily',
      completed: false,
    },
    {
      id: 3,
      title: 'Relax before bedtime',
      category: 'Rest',
      time: '21:00',
      frequency: 'Daily',
      completed: false,
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Exercise')
  const [time, setTime] = useState('')
  const [frequency, setFrequency] = useState('Daily')
  const [filter, setFilter] = useState('All')

  const addReminder = (e) => {
    e.preventDefault()

    if (!title.trim() || !time) {
      return
    }

    setReminders((previous) => [
      ...previous,
      {
        id: Date.now(),
        title: title.trim(),
        category,
        time,
        frequency,
        completed: false,
      },
    ])

    setTitle('')
    setCategory('Exercise')
    setTime('')
    setFrequency('Daily')
    setShowForm(false)
  }

  const toggleCompleted = (id) => {
    setReminders((previous) =>
      previous.map((reminder) =>
        reminder.id === id
          ? { ...reminder, completed: !reminder.completed }
          : reminder
      )
    )
  }

  const deleteReminder = (id) => {
    setReminders((previous) =>
      previous.filter((reminder) => reminder.id !== id)
    )
  }

  const getCategoryIcon = (value) => {
    if (value === 'Hydration') return Droplets
    if (value === 'Rest') return Moon
    if (value === 'Exercise') return Footprints
    return Activity
  }

  const filteredReminders =
    filter === 'All'
      ? reminders
      : reminders.filter((reminder) => reminder.category === filter)

  const completedCount = reminders.filter(
    (reminder) => reminder.completed
  ).length

  const pendingCount = reminders.length - completedCount

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <Link
          to="/appointments"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Appointments
        </Link>

        {/* Heading */}
        <section className="mb-8 rounded-3xl bg-[#F0EDE4] p-6 sm:p-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-white p-4 text-[#64816A]">
              <Bell size={38} />
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#64816A]">
                <Activity size={16} />
                Build healthy routines
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Activity Reminders
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Organise reminders for exercise, hydration, rest, and other
                everyday wellness activities.
              </p>
            </div>
          </div>
        </section>

        {/* Demo notice */}
        <div className="mb-8 rounded-xl border border-[#E7DCC7] bg-white p-4 text-sm leading-6 text-gray-600">
          <strong className="text-[#183D32]">Demo data:</strong> These
          reminders are managed inside this page. They do not trigger
          actual phone alarms or notifications.
        </div>

        {/* Summary cards */}
        <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <CalendarDays size={22} />
            </div>
            <p className="text-sm text-gray-500">Total reminders</p>
            <h2 className="mt-2 text-2xl font-bold">{reminders.length}</h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#F7EFE5] p-3 text-[#9A7048]">
              <Clock size={22} />
            </div>
            <p className="text-sm text-gray-500">Pending</p>
            <h2 className="mt-2 text-2xl font-bold">{pendingCount}</h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <CheckCircle2 size={22} />
            </div>
            <p className="text-sm text-gray-500">Completed</p>
            <h2 className="mt-2 text-2xl font-bold">{completedCount}</h2>
          </div>
        </section>

        {/* Reminder actions */}
        <section className="mb-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Your activity plan</h2>
              <p className="mt-2 text-sm text-gray-500">
                Filter your reminders or create a new one.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
            >
              <Plus size={18} />
              Add reminder
            </button>
          </div>
        </section>

        {/* Add form */}
        {showForm && (
          <form
            onSubmit={addReminder}
            className="mb-8 space-y-5 rounded-2xl border border-[#E7E9DF] bg-white p-6"
          >
            <h3 className="text-lg font-bold">Create an activity reminder</h3>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Activity name
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Example: Evening stretching"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
              >
                <option>Exercise</option>
                <option>Hydration</option>
                <option>Rest</option>
                <option>Nutrition</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Reminder time
              </label>

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Frequency
              </label>

              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
              >
                <option>Daily</option>
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Once</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
              >
                Save reminder
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

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {['All', 'Exercise', 'Hydration', 'Rest', 'Nutrition', 'Other'].map(
            (value) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === value
                    ? 'bg-[#183D32] text-white'
                    : 'border border-[#E7E9DF] bg-white text-gray-600 hover:bg-[#EEF3E9]'
                }`}
              >
                {value}
              </button>
            )
          )}
        </div>

        {/* Reminder list */}
        <section className="rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          {filteredReminders.length === 0 ? (
            <div className="rounded-xl bg-[#FAFAF5] p-8 text-center">
              <Bell
                size={30}
                className="mx-auto mb-3 text-[#64816A]"
              />
              <p className="font-medium">No reminders in this category</p>
              <p className="mt-2 text-sm text-gray-500">
                Add a reminder or choose another category.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredReminders
                .slice()
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((reminder) => {
                  const Icon = getCategoryIcon(reminder.category)

                  return (
                    <article
                      key={reminder.id}
                      className="rounded-xl border border-gray-100 p-5"
                    >
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div className="flex items-start gap-4">
                          <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                            <Icon size={23} />
                          </div>

                          <div>
                            <h3 className="font-semibold">{reminder.title}</h3>

                            <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                              <Clock size={15} />
                              {reminder.time} · {reminder.frequency}
                            </p>

                            <span className="mt-2 inline-block rounded-full bg-[#F0EDE4] px-3 py-1 text-xs font-medium text-[#64816A]">
                              {reminder.category}
                            </span>

                            <p className={`mt-2 flex items-center gap-1 text-xs font-medium ${
                              reminder.completed
                                ? 'text-[#64816A]'
                                : 'text-gray-500'
                            }`}>
                              {reminder.completed ? (
                                <CheckCircle2 size={14} />
                              ) : (
                                <Circle size={14} />
                              )}
                              {reminder.completed
                                ? 'Marked completed'
                                : 'Pending'}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => toggleCompleted(reminder.id)}
                            className="rounded-lg border border-[#DCE6D9] px-3 py-2 text-sm font-medium text-[#183D32] hover:bg-[#EEF3E9]"
                          >
                            {reminder.completed
                              ? 'Undo'
                              : 'Mark completed'}
                          </button>

                          <button
                            type="button"
                            onClick={() => deleteReminder(reminder.id)}
                            aria-label={`Delete ${reminder.title}`}
                            title="Delete reminder"
                            className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </article>
                  )
                })}
            </div>
          )}
        </section>

      </main>
    </div>
  )
}

export default ActivityReminders
