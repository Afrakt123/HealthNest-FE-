
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Sparkles,
  Moon,
  Apple,
  Dumbbell,
  Droplets,
  Brain,
  Heart,
  CheckCircle2,
  Circle,
  RotateCcw,
  ShieldCheck
} from 'lucide-react'

const recommendationData = [
  {
    id: 1,
    category: 'Sleep',
    title: 'Build a regular sleep routine',
    description:
      'Try going to bed and waking up at similar times each day.',
    reason:
      'A consistent sleep schedule can help support your natural sleep rhythm.',
    icon: Moon,
    duration: 'Daily habit',
    tasks: [
      'Choose a regular bedtime',
      'Reduce screen time before bed',
      'Create a comfortable sleep environment'
    ]
  },
  {
    id: 2,
    category: 'Nutrition',
    title: 'Add variety to your meals',
    description:
      'Include a variety of vegetables, fruits, whole grains, and suitable protein sources.',
    reason:
      'A varied eating pattern can help you get a range of nutrients.',
    icon: Apple,
    duration: 'At meal times',
    tasks: [
      'Include a fruit or vegetable',
      'Choose a variety of foods',
      'Plan your next balanced meal'
    ]
  },
  {
    id: 3,
    category: 'Fitness',
    title: 'Make time for movement',
    description:
      'Choose an activity that suits your ability, such as walking or gentle stretching.',
    reason:
      'Regular movement can support general health and wellbeing.',
    icon: Dumbbell,
    duration: 'As appropriate',
    tasks: [
      'Choose a comfortable activity',
      'Take a movement break',
      'Record your activity'
    ]
  },
  {
    id: 4,
    category: 'Hydration',
    title: 'Remember to drink water',
    description:
      'Keep water accessible and drink regularly according to your needs.',
    reason:
      'Fluid needs vary with activity, weather, and individual health conditions.',
    icon: Droplets,
    duration: 'Throughout the day',
    tasks: [
      'Keep water nearby',
      'Take regular water breaks',
      'Follow any fluid limits advised by your clinician'
    ]
  },
  {
    id: 5,
    category: 'Mental Wellness',
    title: 'Take a mindful break',
    description:
      'Set aside a few minutes for quiet breathing, journaling, or a relaxing activity.',
    reason:
      'Short breaks can offer an opportunity to pause and manage everyday stress.',
    icon: Brain,
    duration: 'A few minutes',
    tasks: [
      'Pause from your current task',
      'Try comfortable slow breathing',
      'Choose one relaxing activity'
    ]
  },
  {
    id: 6,
    category: 'General Wellness',
    title: 'Make time for routine healthcare',
    description:
      'Keep track of appointments and discuss health concerns with a qualified professional.',
    reason:
      'Routine care can help you discuss your health needs and questions.',
    icon: Heart,
    duration: 'As needed',
    tasks: [
      'Review upcoming appointments',
      'Write down questions for your clinician',
      'Follow your clinician’s care instructions'
    ]
  }
]

const categories = [
  'All',
  'Sleep',
  'Nutrition',
  'Fitness',
  'Hydration',
  'Mental Wellness',
  'General Wellness'
]

function Recommendations() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [completedTasks, setCompletedTasks] = useState([])
  const [savedRecommendations, setSavedRecommendations] = useState([])
  const [search, setSearch] = useState('')

  const filteredRecommendations = recommendationData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory

    const matchesSearch =
      `${item.title} ${item.description} ${item.category}`
        .toLowerCase()
        .includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const toggleTask = (taskId) => {
    setCompletedTasks((previous) =>
      previous.includes(taskId)
        ? previous.filter((id) => id !== taskId)
        : [...previous, taskId]
    )
  }

  const toggleSaved = (id) => {
    setSavedRecommendations((previous) =>
      previous.includes(id)
        ? previous.filter((savedId) => savedId !== id)
        : [...previous, id]
    )
  }

  const resetProgress = () => {
    setCompletedTasks([])
  }

  const totalTasks = recommendationData.reduce(
    (total, item) => total + item.tasks.length,
    0
  )

  const completedCount = completedTasks.length

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-8 text-[#183D32] sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Page heading */}
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <div className="rounded-2xl bg-[#E8EFE5] p-3">
            <Sparkles size={30} />
          </div>

          <div>
            <p className="text-sm font-medium text-[#64816A]">
              HealthNest / Health Assistant
            </p>
            <h1 className="mt-1 text-3xl font-bold">
              Wellness Recommendations
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Explore simple wellness habits and track the steps you want to
              try in your daily routine.
            </p>
          </div>
        </div>

        {/* Demo notice */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E3E8DF] bg-white p-4">
          <ShieldCheck size={22} className="mt-0.5 shrink-0 text-[#64816A]" />
          <div>
            <p className="font-semibold">General wellness suggestions</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              These suggestions are sample content for your project. They are
              not generated from personal health records and do not replace
              medical advice. Choose activities that are appropriate for you.
            </p>
          </div>
        </div>

        {/* Progress summary */}
        <section className="mt-7 rounded-3xl bg-[#183D32] p-6 text-white sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-[#D7E5D5]">
                Your wellness checklist
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                Small steps matter
              </h2>
              <p className="mt-2 text-sm text-[#D7E5D5]">
                Mark the activities you have completed.
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-3xl font-bold">
                {completedCount}/{totalTasks}
              </p>
              <p className="mt-1 text-sm text-[#D7E5D5]">
                Demo tasks completed
              </p>
            </div>
          </div>

          <div
            className="mt-5 h-2 overflow-hidden rounded-full bg-white/20"
            role="progressbar"
            aria-label="Wellness task completion"
            aria-valuemin={0}
            aria-valuemax={totalTasks}
            aria-valuenow={completedCount}
          >
            <div
              className="h-full rounded-full bg-[#B8D7A8] transition-all"
              style={{
                width: `${(completedCount / totalTasks) * 100}%`
              }}
            />
          </div>

          <button
            type="button"
            onClick={resetProgress}
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            <RotateCcw size={16} />
            Reset checklist
          </button>
        </section>

        {/* Search */}
        <div className="mt-8">
          <label htmlFor="recommendation-search" className="mb-2 block text-sm font-semibold">
            Search recommendations
          </label>
          <input
            id="recommendation-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sleep, nutrition, fitness..."
            className="w-full rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 outline-none focus:border-[#64816A]"
          />
        </div>

        {/* Category filters */}
        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? 'bg-[#183D32] text-white'
                  : 'border border-[#DCE5D9] bg-white text-[#64816A] hover:bg-[#F2F5EF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recommendation cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredRecommendations.map((item) => {
            const ItemIcon = item.icon
            const completedForItem = item.tasks.filter((task, index) =>
              completedTasks.includes(`${item.id}-${index}`)
            ).length

            const isSaved = savedRecommendations.includes(item.id)

            return (
              <article
                key={item.id}
                className="flex flex-col rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-xl bg-[#E8EFE5] p-3">
                    <ItemIcon size={24} />
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleSaved(item.id)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                      isSaved
                        ? 'border-[#183D32] bg-[#183D32] text-white'
                        : 'border-[#DCE5D9] text-[#64816A] hover:bg-[#F2F5EF]'
                    }`}
                  >
                    {isSaved ? 'Saved' : 'Save'}
                  </button>
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#64816A]">
                  {item.category}
                </p>

                <h3 className="mt-2 text-lg font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl bg-[#F2F5EF] p-3">
                  <p className="text-xs font-semibold text-[#64816A]">
                    Why try this?
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {item.reason}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold">Action checklist</h4>
                    <span className="text-xs text-gray-500">
                      {completedForItem}/{item.tasks.length}
                    </span>
                  </div>

                  <div className="mt-3 space-y-3">
                    {item.tasks.map((task, index) => {
                      const taskId = `${item.id}-${index}`
                      const isCompleted = completedTasks.includes(taskId)

                      return (
                        <button
                          key={taskId}
                          type="button"
                          onClick={() => toggleTask(taskId)}
                          className="flex w-full items-start gap-2 text-left text-sm leading-5"
                        >
                          {isCompleted ? (
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-[#64816A]"
                            />
                          ) : (
                            <Circle
                              size={18}
                              className="mt-0.5 shrink-0 text-gray-400"
                            />
                          )}

                          <span
                            className={
                              isCompleted
                                ? 'text-gray-400 line-through'
                                : 'text-gray-700'
                            }
                          >
                            {task}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-auto border-t border-[#EDF0E9] pt-4 mt-5">
                  <p className="text-xs text-gray-500">
                    Suggested timing: {item.duration}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {filteredRecommendations.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-[#C8D6C4] bg-white p-10 text-center">
            <Sparkles size={32} className="mx-auto text-[#64816A]" />
            <h2 className="mt-3 font-bold">No recommendations found</h2>
            <p className="mt-2 text-sm text-gray-500">
              Try a different search or choose another category.
            </p>
          </div>
        )}

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          Progress and saved recommendations are held in page state and reset
          when the page is refreshed.
        </p>
      </div>
    </div>
  )
}

export default Recommendations
