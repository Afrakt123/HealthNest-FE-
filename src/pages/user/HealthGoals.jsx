
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Moon,
  Dumbbell,
  Salad,
  Brain,
  HeartPulse,
  Droplets,
  Footprints,
  Sparkles,
  Check,
  Save,
  Leaf,
} from 'lucide-react'

const goals = [
  {
    id: 'sleep',
    title: 'Better Sleep',
    description: 'Build a healthy sleep routine and feel more rested.',
    icon: Moon,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: 'fitness',
    title: 'Fitness & Exercise',
    description: 'Stay active and make movement part of your day.',
    icon: Dumbbell,
    color: 'bg-sky-50 text-sky-700',
  },
  {
    id: 'nutrition',
    title: 'Healthy Nutrition',
    description: 'Develop balanced eating habits and better food choices.',
    icon: Salad,
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    id: 'mental',
    title: 'Mental Wellness',
    description: 'Make time for relaxation and emotional wellbeing.',
    icon: Brain,
    color: 'bg-purple-50 text-purple-700',
  },
  {
    id: 'heart',
    title: 'Heart Health',
    description: 'Build everyday habits that support heart health.',
    icon: HeartPulse,
    color: 'bg-rose-50 text-rose-700',
  },
  {
    id: 'hydration',
    title: 'Stay Hydrated',
    description: 'Remember to drink water regularly throughout the day.',
    icon: Droplets,
    color: 'bg-cyan-50 text-cyan-700',
  },
  {
    id: 'activity',
    title: 'Daily Activity',
    description: 'Create a routine that includes regular movement.',
    icon: Footprints,
    color: 'bg-amber-50 text-amber-700',
  },
  {
    id: 'selfcare',
    title: 'Self-Care',
    description: 'Make time for yourself and your personal wellbeing.',
    icon: Sparkles,
    color: 'bg-pink-50 text-pink-700',
  },
]

function HealthGoals() {
  const [selectedGoals, setSelectedGoals] = useState([])
  const [message, setMessage] = useState('')

  const toggleGoal = (goalId) => {
    setSelectedGoals((previous) =>
      previous.includes(goalId)
        ? previous.filter((id) => id !== goalId)
        : [...previous, goalId]
    )

    setMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (selectedGoals.length === 0) {
      setMessage('Please select at least one health goal.')
      return
    }

    setMessage(
      `You selected ${selectedGoals.length} health goal${
        selectedGoals.length === 1 ? '' : 's'
      }. Your selection is saved for this demo session.`
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">
      <header className="border-b border-[#E6EAE1] bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Leaf size={28} className="text-[#64816A]" />
            <span className="font-serif text-2xl font-bold">
              HealthNest
            </span>
          </Link>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#52775B] transition hover:bg-[#EAF1E7]"
          >
            <ArrowLeft size={16} />
            Dashboard
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10 sm:py-12">
        <section className="mb-9">
          <p className="text-sm font-medium uppercase tracking-widest text-[#64816A]">
            YOUR WELLNESS JOURNEY
          </p>

          <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
            Set Your Health Goals
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#748078]">
            Choose the areas of wellbeing you want to focus on.
            You can select more than one goal.
          </p>
        </section>

        <section className="mb-7 rounded-3xl bg-[#183D32] p-6 text-white sm:flex sm:items-center sm:justify-between sm:p-8">
          <div>
            <div className="flex items-center gap-2 text-white/70">
              <Sparkles size={18} />
              <span className="text-sm">Your personal wellness plan</span>
            </div>

            <h2 className="mt-3 font-serif text-2xl font-semibold">
              Small steps make a difference
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
              Start with the goals that matter most to you.
              You can change your choices whenever you need.
            </p>
          </div>

          <div className="mt-5 flex h-20 w-20 shrink-0 flex-col items-center justify-center self-start rounded-2xl bg-white/10 sm:ml-6 sm:mt-0">
            <span className="text-3xl font-semibold">
              {selectedGoals.length}
            </span>
            <span className="text-xs text-white/70">Selected</span>
          </div>
        </section>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal) => {
              const Icon = goal.icon
              const isSelected = selectedGoals.includes(goal.id)

              return (
                <button
                  key={goal.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleGoal(goal.id)}
                  className={`relative rounded-2xl border bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-lg ${
                    isSelected
                      ? 'border-[#64816A] ring-2 ring-[#64816A]/20'
                      : 'border-[#E6EAE1]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${goal.color}`}
                    >
                      <Icon size={24} />
                    </div>

                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                        isSelected
                          ? 'border-[#183D32] bg-[#183D32] text-white'
                          : 'border-[#DCE5D8] text-transparent'
                      }`}
                    >
                      <Check size={15} />
                    </span>
                  </div>

                  <h3 className="mt-5 font-semibold">{goal.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#748078]">
                    {goal.description}
                  </p>
                </button>
              )
            })}
          </div>

          {message && (
            <div
              role="status"
              className={`mt-6 rounded-xl border p-4 text-sm ${
                selectedGoals.length > 0 &&
                !message.startsWith('Please')
                  ? 'border-[#C9DEC7] bg-[#F0F7ED] text-[#355C3C]'
                  : 'border-amber-200 bg-amber-50 text-amber-800'
              }`}
            >
              {message}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 border-t border-[#E6EAE1] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#829087]">
              {selectedGoals.length} of {goals.length} goals selected
            </p>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#183D32] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#285A47]"
            >
              <Save size={17} />
              Save My Goals
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-xs leading-5 text-[#829087]">
          Frontend demo: your selections are not permanently stored
          or connected to a health record.
        </p>
      </main>
    </div>
  )
}

export default HealthGoals
