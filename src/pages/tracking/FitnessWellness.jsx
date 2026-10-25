
import React, { useState } from 'react'
import {
  ArrowLeft,
  Activity,
  Clock,
  Footprints,
  Heart,
  Plus,
  Target,
  TrendingUp,
  Trash2,
  Dumbbell,
  CalendarDays,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function FitnessWellness() {
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      name: 'Morning walk',
      type: 'Walking',
      duration: 25,
      date: 'Today',
    },
    {
      id: 2,
      name: 'Full body stretching',
      type: 'Stretching',
      duration: 15,
      date: 'Yesterday',
    },
  ])

  const [workoutName, setWorkoutName] = useState('')
  const [workoutType, setWorkoutType] = useState('Walking')
  const [duration, setDuration] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [dailyGoal, setDailyGoal] = useState('30')
  const [goalSaved, setGoalSaved] = useState(false)

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  )

  const addWorkout = (e) => {
    e.preventDefault()

    const minutes = Number(duration)

    if (!workoutName.trim() || !Number.isFinite(minutes) || minutes <= 0) {
      alert('Please enter a workout name and a valid duration.')
      return
    }

    setWorkouts((previous) => [
      {
        id: Date.now(),
        name: workoutName.trim(),
        type: workoutType,
        duration: minutes,
        date: 'Today',
      },
      ...previous,
    ])

    setWorkoutName('')
    setWorkoutType('Walking')
    setDuration('')
    setShowForm(false)
  }

  const deleteWorkout = (id) => {
    setWorkouts((previous) =>
      previous.filter((workout) => workout.id !== id)
    )
  }

  const handleGoalSave = (e) => {
    e.preventDefault()

    const goal = Number(dailyGoal)

    if (!Number.isFinite(goal) || goal <= 0 || goal > 1440) {
      alert('Please enter a goal between 1 and 1440 minutes.')
      return
    }

    setDailyGoal(String(goal))
    setGoalSaved(true)
  }

  const goalProgress = Math.min(
    (totalMinutes / Math.max(Number(dailyGoal) || 1, 1)) * 100,
    100
  )

  const workoutTypes = [
    'Walking',
    'Running',
    'Cycling',
    'Strength training',
    'Yoga',
    'Stretching',
    'Other',
  ]

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
              <Activity size={38} />
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#64816A]">
                <Heart size={16} />
                Move at your own pace
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Fitness & Wellness
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Record your workouts, keep an eye on your activity time,
                and build a routine that works for you.
              </p>
            </div>
          </div>
        </section>

        {/* Demo notice */}
        <div className="mb-8 rounded-xl border border-[#E7DCC7] bg-white p-4 text-sm leading-6 text-gray-600">
          <strong className="text-[#183D32]">Demo data:</strong> Workout
          records are entered manually. This page does not connect to a
          smartwatch or measure calories, heart rate, or steps automatically.
        </div>

        {/* Summary cards */}
        <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <Clock size={22} />
            </div>

            <p className="text-sm text-gray-500">Total recorded minutes</p>
            <h2 className="mt-2 text-2xl font-bold">{totalMinutes}</h2>
            <p className="mt-2 text-xs text-gray-500">
              Across all workouts in this session
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#F7EFE5] p-3 text-[#9A7048]">
              <Dumbbell size={22} />
            </div>

            <p className="text-sm text-gray-500">Workouts recorded</p>
            <h2 className="mt-2 text-2xl font-bold">{workouts.length}</h2>
            <p className="mt-2 text-xs text-gray-500">
              Including demo examples
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <Target size={22} />
            </div>

            <p className="text-sm text-gray-500">Activity goal</p>
            <h2 className="mt-2 text-2xl font-bold">{dailyGoal} min</h2>
            <p className="mt-2 text-xs text-gray-500">
              Your selected daily goal
            </p>
          </div>
        </section>

        {/* Goal section */}
        <section className="mb-10 rounded-2xl bg-[#183D32] p-6 text-white sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-white/10 p-3">
              <TrendingUp size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold">Your activity goal</h2>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Set a daily activity-time goal that suits your ability and
                circumstances. Start with a manageable target.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleGoalSave}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end"
          >
            <div className="w-full sm:max-w-xs">
              <label className="mb-2 block text-sm font-medium text-white/90">
                Daily goal in minutes
              </label>

              <input
                type="number"
                min="1"
                max="1440"
                value={dailyGoal}
                onChange={(e) => {
                  setDailyGoal(e.target.value)
                  setGoalSaved(false)
                }}
                required
                className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-[#183D32] outline-none focus:ring-2 focus:ring-[#C5D8AE]"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-[#C5D8AE] px-5 py-3 text-sm font-semibold text-[#183D32] hover:bg-white"
            >
              Save goal
            </button>
          </form>

          {goalSaved && (
            <p className="mt-3 flex items-center gap-2 text-sm text-[#C5D8AE]">
              <CheckCircle2 size={17} />
              Your activity goal has been updated for this session.
            </p>
          )}

          <div className="mt-7">
            <div className="mb-2 flex justify-between gap-3 text-sm">
              <span>Recorded workout time</span>
              <span>
                {totalMinutes} / {dailyGoal || 0} min
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-[#C5D8AE] transition-all"
                style={{ width: `${goalProgress}%` }}
              />
            </div>

            <p className="mt-3 text-xs text-white/65">
              This progress uses the total recorded workout time, including
              older demo entries. It is not a verified daily measurement.
            </p>
          </div>
        </section>

        {/* Add workout */}
        <section className="mb-10">
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Workout journal</h2>
              <p className="mt-2 text-sm text-gray-500">
                Add an exercise or activity you've completed.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
            >
              <Plus size={18} />
              Add workout
            </button>
          </div>

          {showForm && (
            <form
              onSubmit={addWorkout}
              className="mb-6 space-y-5 rounded-2xl border border-[#E7E9DF] bg-white p-6"
            >
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Workout name
                </label>

                <input
                  type="text"
                  value={workoutName}
                  onChange={(e) => setWorkoutName(e.target.value)}
                  placeholder="Example: Evening walk"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Workout type
                </label>

                <select
                  value={workoutType}
                  onChange={(e) => setWorkoutType(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                >
                  {workoutTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Duration in minutes
                </label>

                <input
                  type="number"
                  min="1"
                  max="1440"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="Example: 30"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
                >
                  Save workout
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
        </section>

        {/* Workout list */}
        <section className="rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <CalendarDays size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold">Recent workouts</h2>
              <p className="mt-1 text-sm text-gray-500">
                Review the activities recorded in this session.
              </p>
            </div>
          </div>

          {workouts.length === 0 ? (
            <div className="rounded-xl bg-[#FAFAF5] p-8 text-center">
              <Footprints
                size={30}
                className="mx-auto mb-3 text-[#64816A]"
              />
              <p className="font-medium">No workouts recorded yet</p>
              <p className="mt-2 text-sm text-gray-500">
                Select Add workout to record your first activity.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {workouts.map((workout) => (
                <div
                  key={workout.id}
                  className="flex items-center justify-between gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="mt-1 rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                      <Activity size={21} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="break-words font-semibold">
                        {workout.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {workout.type} · {workout.duration} minutes
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {workout.date}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteWorkout(workout.id)}
                    aria-label={`Delete ${workout.name}`}
                    title="Delete workout"
                    className="shrink-0 rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          Workouts and goals are stored temporarily in page state. Refreshing
          the page resets this demo data.
        </p>
      </main>
    </div>
  )
}

export default FitnessWellness
