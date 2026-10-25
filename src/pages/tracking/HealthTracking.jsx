import React, { useState, useEffect } from 'react'
import {
  Activity,
  Heart,
  Footprints,
  Moon,
  Droplets,
  Plus,
  ArrowLeft,
  CalendarDays,
  TrendingUp,
  Trash2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const defaultHealthStats = {
  steps: 6240,
  sleep: 7.5,
  water: 6,
  heartRate: 72,
}

const defaultActivities = [
  {
    id: 1,
    title: 'Morning walk',
    category: 'Exercise',
    duration: '25 minutes',
    date: 'Today',
  },
  {
    id: 2,
    title: 'Drank enough water',
    category: 'Hydration',
    duration: '6 glasses',
    date: 'Today',
  },
  {
    id: 3,
    title: 'Evening stretching',
    category: 'Exercise',
    duration: '10 minutes',
    date: 'Yesterday',
  },
]

function readLocalStorage(key, fallback) {
  try {
    const savedValue = localStorage.getItem(key)
    return savedValue ? JSON.parse(savedValue) : fallback
  } catch {
    return fallback
  }
}

function HealthTracking() {
  const [activities, setActivities] = useState(() =>
    readLocalStorage('healthNestActivities', defaultActivities)
  )

  const [healthStats, setHealthStats] = useState(() =>
    readLocalStorage('healthNestHealthStats', defaultHealthStats)
  )

  const [showForm, setShowForm] = useState(false)
  const [showHealthForm, setShowHealthForm] = useState(false)

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Exercise')
  const [duration, setDuration] = useState('')

  const [healthForm, setHealthForm] = useState(() =>
    readLocalStorage('healthNestHealthStats', defaultHealthStats)
  )

  useEffect(() => {
    localStorage.setItem('healthNestActivities', JSON.stringify(activities))
  }, [activities])

  useEffect(() => {
    localStorage.setItem('healthNestHealthStats', JSON.stringify(healthStats))
  }, [healthStats])

  const stepGoal = 8000

  const stepProgress = Math.min(
    (Number(healthStats.steps) / stepGoal) * 100,
    100
  )

  const healthCards = [
    {
      title: 'Steps',
      value: Number(healthStats.steps).toLocaleString(),
      target: 'Target: 8,000 steps',
      icon: Footprints,
    },
    {
      title: 'Sleep',
      value: `${healthStats.sleep} hrs`,
      target: 'Target: 8 hours',
      icon: Moon,
    },
    {
      title: 'Water',
      value: `${healthStats.water} glasses`,
      target: 'Target: 8 glasses',
      icon: Droplets,
    },
    {
      title: 'Heart rate',
      value: `${healthStats.heartRate} bpm`,
      target: 'User-entered reading',
      icon: Heart,
    },
  ]

  const handleHealthFormChange = (e) => {
    const { name, value } = e.target

    setHealthForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const saveHealthStats = (e) => {
    e.preventDefault()

    const steps = Number(healthForm.steps)
    const sleep = Number(healthForm.sleep)
    const water = Number(healthForm.water)
    const heartRate = Number(healthForm.heartRate)

    if (
      healthForm.steps === '' ||
      healthForm.sleep === '' ||
      healthForm.water === '' ||
      healthForm.heartRate === '' ||
      !Number.isFinite(steps) ||
      !Number.isFinite(sleep) ||
      !Number.isFinite(water) ||
      !Number.isFinite(heartRate) ||
      steps < 0 ||
      sleep < 0 ||
      sleep > 24 ||
      water < 0 ||
      heartRate <= 0
    ) {
      alert('Please enter valid health values.')
      return
    }

    setHealthStats({
      steps: Math.floor(steps),
      sleep,
      water: Math.floor(water),
      heartRate: Math.floor(heartRate),
    })

    setShowHealthForm(false)
  }

  const addActivity = (e) => {
    e.preventDefault()

    if (!title.trim() || !duration.trim()) {
      alert('Please enter an activity name and duration.')
      return
    }

    const newActivity = {
      id: Date.now(),
      title: title.trim(),
      category,
      duration: duration.trim(),
      date: 'Today',
    }

    setActivities((previousActivities) => [
      newActivity,
      ...previousActivities,
    ])

    setTitle('')
    setCategory('Exercise')
    setDuration('')
    setShowForm(false)
  }

  const deleteActivity = (id) => {
    setActivities((previousActivities) =>
      previousActivities.filter((activity) => activity.id !== id)
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        {/* Back navigation */}
        <Link
          to="/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#64816A] transition hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#64816A]">
              <Activity size={18} />
              Your wellness overview
            </div>

            <h1 className="text-3xl font-bold sm:text-4xl">
              Health Tracking
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Keep track of your daily activities and build healthier habits
              one step at a time.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                setHealthForm({ ...healthStats })
                setShowHealthForm(!showHealthForm)
              }}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-[#183D32] px-5 py-3 text-sm font-semibold text-[#183D32] transition hover:bg-[#EEF3E9]"
            >
              Edit Health Data
            </button>

            {/* Only change: explicitly open the Add Activity form */}
            {/* <button
              type="button"
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#285747]"
            >
              <Plus size={18} />
              Add Activity
            </button> */}
          </div>
        </div>



        {/* Health statistics */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {healthCards.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-[#E7E9DF] bg-white p-5 shadow-sm"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </span>

                  <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                    <Icon size={21} />
                  </div>
                </div>

                <h2 className="text-2xl font-bold">{stat.value}</h2>

                <p className="mt-2 text-xs text-gray-500">{stat.target}</p>
              </div>
            )
          })}
        </div>

        {/* Edit health data form */}
        {showHealthForm && (
          <section className="mb-10 rounded-2xl border border-[#E7E9DF] bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold">
              Update your health data
            </h2>

            <form onSubmit={saveHealthStats} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Steps walked today
                </label>

                <input
                  type="number"
                  name="steps"
                  min="0"
                  step="1"
                  value={healthForm.steps}
                  onChange={handleHealthFormChange}
                  placeholder="Example: 6240"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Hours of sleep
                </label>

                <input
                  type="number"
                  name="sleep"
                  min="0"
                  max="24"
                  step="0.5"
                  value={healthForm.sleep}
                  onChange={handleHealthFormChange}
                  placeholder="Example: 7.5"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Glasses of water
                </label>

                <input
                  type="number"
                  name="water"
                  min="0"
                  step="1"
                  value={healthForm.water}
                  onChange={handleHealthFormChange}
                  placeholder="Example: 6"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Heart rate (beats per minute)
                </label>

                <input
                  type="number"
                  name="heartRate"
                  min="1"
                  step="1"
                  value={healthForm.heartRate}
                  onChange={handleHealthFormChange}
                  placeholder="Enter a measured value"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                />

                <p className="mt-2 text-xs text-gray-500">
                  Enter a measured reading if available. HealthNest does not
                  measure heart rate itself.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
                >
                  Save Health Data
                </button>

                <button
                  type="button"
                  onClick={() => setShowHealthForm(false)}
                  className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Progress section */}
        <section className="mb-10 rounded-2xl bg-[#183D32] p-6 text-white sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-white/10 p-3">
              <TrendingUp size={25} />
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Your daily progress
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/75">
                Small, consistent habits can help you work towards your
                personal wellness goals.
              </p>
            </div>
          </div>

          <div className="mt-7">
            <div className="mb-2 flex justify-between text-sm">
              <span>Step goal</span>

              <span>
                {Number(healthStats.steps).toLocaleString()} / 8,000
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-[#C5D8AE] transition-all duration-500"
                style={{ width: `${stepProgress}%` }}
              />
            </div>

            <p className="mt-3 text-xs text-white/65">
              {stepProgress >= 100
                ? 'Great! You have reached your step goal.'
                : `${Math.round(stepProgress)}% of your daily step goal completed.`}
            </p>
          </div>
        </section>

        {/* Add activity form */}
        {showForm && (
          <section className="mb-10 rounded-2xl border border-[#E7E9DF] bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold">
              Add a new activity
            </h2>

            <form onSubmit={addActivity} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Activity name
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Example: Morning walk"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
                  required
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
                  <option>Sleep</option>
                  <option>Nutrition</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Duration or amount
                </label>

                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="Example: 25 minutes"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
                >
                  Save Activity
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
          </section>
        )}

        {/* Recent activities */}
        <section className="rounded-2xl border border-[#E7E9DF] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <CalendarDays size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Recent activities
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Activities you have recorded
              </p>
            </div>
          </div>

          {activities.length === 0 ? (
            <div className="rounded-xl bg-[#FAFAF5] px-5 py-10 text-center">
              <Activity
                size={32}
                className="mx-auto mb-3 text-[#64816A]"
              />

              <p className="font-medium">No activities yet</p>

              <p className="mt-2 text-sm text-gray-500">
                Select Add Activity to record your first activity.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="mt-1 rounded-full bg-[#EEF3E9] p-3 text-[#64816A]">
                      <Activity size={19} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="break-words font-semibold">
                        {activity.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {activity.category} · {activity.duration}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {activity.date}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteActivity(activity.id)}
                    aria-label={`Delete ${activity.title}`}
                    title="Delete activity"
                    className="shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          Your health values and activities are saved in this browser.
          They are not automatically synced to other devices or stored in
          your HealthNest database.
        </p>
      </div>
    </div>
  )
}

export default HealthTracking