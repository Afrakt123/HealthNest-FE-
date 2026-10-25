
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  Search,
  HeartPulse,
  Activity,
  Droplets,
  Thermometer,
  Brain,
  ShieldCheck,
  Info
} from 'lucide-react'

const medicalTerms = [
  {
    id: 1,
    term: 'Blood Pressure',
    category: 'Heart Health',
    icon: HeartPulse,
    meaning:
      'Blood pressure is the force of blood pushing against the walls of your blood vessels as your heart pumps.',
    simple:
      'Think of water moving through a pipe. Blood pressure describes how strongly blood pushes against the blood vessel walls.',
    example:
      'A blood pressure reading usually has two numbers, such as 120/80 mmHg. One reading alone does not tell the whole story of your health.',
    note:
      'Your healthcare professional can help interpret your readings based on your health and circumstances.'
  },
  {
    id: 2,
    term: 'Heart Rate',
    category: 'Heart Health',
    icon: HeartPulse,
    meaning:
      'Heart rate is the number of times your heart beats in one minute.',
    simple:
      'It tells you how fast your heart is beating.',
    example:
      'Heart rate can change with exercise, emotions, sleep, medicines, and illness.',
    note:
      'What is normal for you depends on several factors. Seek medical advice if you have concerning symptoms.'
  },
  {
    id: 3,
    term: 'Blood Glucose',
    category: 'General Health',
    icon: Droplets,
    meaning:
      'Blood glucose is the amount of sugar, also called glucose, present in your blood.',
    simple:
      'Your body uses glucose as an important source of energy.',
    example:
      'Blood glucose may be measured using a blood test or a glucose monitoring device.',
    note:
      'The meaning of a result depends on factors such as when you last ate and your medical history.'
  },
  {
    id: 4,
    term: 'Body Mass Index (BMI)',
    category: 'General Health',
    icon: Activity,
    meaning:
      'BMI is a calculation based on a person’s weight and height.',
    simple:
      'It is one measurement sometimes used to screen for weight categories.',
    example:
      'BMI does not directly measure body fat and does not tell the full story of a person’s health.',
    note:
      'A healthcare professional can consider other measurements and personal factors when assessing health.'
  },
  {
    id: 5,
    term: 'Inflammation',
    category: 'General Health',
    icon: Thermometer,
    meaning:
      'Inflammation is part of the body’s response to injury, irritation, or infection.',
    simple:
      'It is one way the body responds when something needs attention.',
    example:
      'Inflammation can sometimes cause redness, swelling, warmth, or pain.',
    note:
      'Inflammation can have different causes. Symptoms that persist or worsen should be assessed by a professional.'
  },
  {
    id: 6,
    term: 'Mental Wellbeing',
    category: 'Mental Wellness',
    icon: Brain,
    meaning:
      'Mental wellbeing relates to how a person thinks, feels, handles stress, and manages everyday life.',
    simple:
      'It includes your emotional wellbeing and how you cope with daily experiences.',
    example:
      'Sleep, social support, enjoyable activities, and professional help when needed can all play a role.',
    note:
      'Mental health concerns are real health concerns. A qualified professional can offer appropriate support.'
  },
  {
    id: 7,
    term: 'Dehydration',
    category: 'General Health',
    icon: Droplets,
    meaning:
      'Dehydration occurs when the body loses more fluid than it takes in.',
    simple:
      'Your body may not have enough water and other fluids to function properly.',
    example:
      'Thirst and dark urine can be signs, although symptoms vary and may have other causes.',
    note:
      'Severe weakness, confusion, fainting, or inability to keep fluids down needs prompt medical assessment.'
  },
  {
    id: 8,
    term: 'Chronic Condition',
    category: 'General Health',
    icon: Activity,
    meaning:
      'A chronic condition is a health condition that usually lasts a long time and may need ongoing care.',
    simple:
      'It is a condition a person may need to manage over months or years.',
    example:
      'Some conditions require regular check-ups, lifestyle adjustments, or prescribed treatment.',
    note:
      'Treatment and monitoring depend on the particular condition and the individual.'
  }
]

const categories = [
  'All',
  'Heart Health',
  'General Health',
  'Mental Wellness'
]

function MedicalExplanation() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTerm, setSelectedTerm] = useState(null)

  const filteredTerms = medicalTerms.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory

    const matchesSearch =
      `${item.term} ${item.meaning} ${item.category}`
        .toLowerCase()
        .includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-8 text-[#183D32] sm:px-8">
      <div className="mx-auto max-w-6xl">

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        {/* Heading */}
        <div className="mt-6 flex items-start gap-4">
          <div className="rounded-2xl bg-[#E8EFE5] p-3">
            <BookOpen size={30} />
          </div>

          <div>
            <p className="text-sm font-medium text-[#64816A]">
              HealthNest / Health Assistant
            </p>
            <h1 className="mt-1 text-3xl font-bold">
              Medical Term Explorer
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Explore common health terms with simple explanations, examples,
              and helpful notes.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E3E8DF] bg-white p-4">
          <ShieldCheck size={22} className="mt-0.5 shrink-0 text-[#64816A]" />
          <div>
            <h2 className="font-semibold">Learn, don't self-diagnose</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              These explanations are for general education. They cannot
              diagnose a condition or interpret your personal test results.
              Please consult a qualified healthcare professional for
              personal medical advice.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mt-8">
          <label
            htmlFor="medical-search"
            className="mb-2 block text-sm font-semibold"
          >
            Search medical terms
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-[#DCE5D9] bg-white px-4">
            <Search size={20} className="text-[#64816A]" />
            <input
              id="medical-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Try blood pressure, BMI, dehydration..."
              className="w-full bg-transparent py-4 text-sm outline-none"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? 'bg-[#183D32] text-white'
                  : 'border border-[#DCE5D9] bg-white text-[#64816A] hover:bg-[#F2F5EF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Term cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredTerms.map((item) => {
            const TermIcon = item.icon

            return (
              <article
                key={item.id}
                className="flex flex-col rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-[#E8EFE5] p-3">
                    <TermIcon size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#64816A]">
                      {item.category}
                    </p>
                    <h2 className="mt-1 text-lg font-bold">{item.term}</h2>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {item.meaning}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedTerm(
                      selectedTerm === item.id ? null : item.id
                    )
                  }
                  className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-xl border border-[#DCE5D9] px-4 py-2.5 mt-5 text-sm font-semibold hover:bg-[#F2F5EF]"
                >
                  <BookOpen size={16} />
                  {selectedTerm === item.id
                    ? 'Hide explanation'
                    : 'Learn more'}
                </button>

                {selectedTerm === item.id && (
                  <div className="mt-4 space-y-4 border-t border-[#EDF0E9] pt-4">
                    <div>
                      <h3 className="text-sm font-bold">In simple English</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.simple}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold">Example</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.example}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#F2F5EF] p-3">
                      <div className="flex items-start gap-2">
                        <Info
                          size={17}
                          className="mt-0.5 shrink-0 text-[#64816A]"
                        />
                        <p className="text-sm leading-6 text-gray-600">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {filteredTerms.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-[#C8D6C4] bg-white p-10 text-center">
            <Search size={32} className="mx-auto text-[#64816A]" />
            <h2 className="mt-3 font-bold">No matching terms</h2>
            <p className="mt-2 text-sm text-gray-500">
              Try another word or select a different category.
            </p>
          </div>
        )}

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          HealthNest educational demo · Explanations are not a substitute for
          professional medical advice.
        </p>

      </div>
    </div>
  )
}

export default MedicalExplanation
