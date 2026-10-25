
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  Search,
  Clock,
  Moon,
  Apple,
  Activity,
  Brain,
  HeartPulse,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  BookMarked
} from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'Understanding the Importance of Sleep',
    category: 'Sleep',
    readTime: '4 min read',
    icon: Moon,
    introduction:
      'Sleep is an important part of maintaining general health and wellbeing.',
    sections: [
      {
        heading: 'Why is sleep important?',
        content:
          'Sleep gives your body time to rest. It supports memory, attention, mood, and many normal body functions.'
      },
      {
        heading: 'How can you build a healthy sleep routine?',
        content:
          'Try to keep regular sleep and wake times, make your sleeping space comfortable, and reduce stimulating activities close to bedtime.'
      },
      {
        heading: 'When should you seek help?',
        content:
          'If sleep problems continue, affect your daily activities, or leave you feeling unusually tired, speak with a healthcare professional.'
      }
    ]
  },
  {
    id: 2,
    title: 'The Basics of Balanced Nutrition',
    category: 'Nutrition',
    readTime: '5 min read',
    icon: Apple,
    introduction:
      'A varied eating pattern can help provide the nutrients your body needs.',
    sections: [
      {
        heading: 'What does balanced nutrition mean?',
        content:
          'It generally means eating a variety of foods, including vegetables, fruits, whole grains, and suitable sources of protein and fats.'
      },
      {
        heading: 'Why does variety matter?',
        content:
          'Different foods provide different nutrients. Eating a variety of foods can help you meet your nutritional needs.'
      },
      {
        heading: 'Is one diet suitable for everyone?',
        content:
          'No. Nutritional needs vary with age, activity, health conditions, allergies, and other personal circumstances. A qualified dietitian can offer individual guidance.'
      }
    ]
  },
  {
    id: 3,
    title: 'Making Physical Activity Part of Your Day',
    category: 'Fitness',
    readTime: '4 min read',
    icon: Activity,
    introduction:
      'Physical activity can include walking, household tasks, cycling, dancing, and structured exercise.',
    sections: [
      {
        heading: 'What are the benefits?',
        content:
          'Regular physical activity can support heart health, muscle strength, mobility, mood, and general wellbeing.'
      },
      {
        heading: 'How can you get started?',
        content:
          'Choose an activity that feels manageable and fits your ability. Begin gradually and increase activity at a comfortable pace.'
      },
      {
        heading: 'What if exercise causes symptoms?',
        content:
          'Stop exercising if you develop concerning symptoms. Seek medical advice, and get emergency help for severe chest pain or serious breathing difficulty.'
      }
    ]
  },
  {
    id: 4,
    title: 'Looking After Your Mental Wellbeing',
    category: 'Mental Wellness',
    readTime: '5 min read',
    icon: Brain,
    introduction:
      'Mental wellbeing is an important part of overall health and everyday life.',
    sections: [
      {
        heading: 'What is mental wellbeing?',
        content:
          'It includes your emotional health, how you manage stress, your relationships, and your ability to cope with everyday experiences.'
      },
      {
        heading: 'What habits may help?',
        content:
          'Rest, enjoyable activities, social connection, physical activity when appropriate, and taking breaks may support wellbeing.'
      },
      {
        heading: 'When should you ask for support?',
        content:
          'If difficult feelings continue or interfere with daily life, consider speaking with a qualified mental health professional or another trusted healthcare professional.'
      }
    ]
  },
  {
    id: 5,
    title: 'Understanding Preventive Healthcare',
    category: 'General Health',
    readTime: '4 min read',
    icon: HeartPulse,
    introduction:
      'Preventive healthcare focuses on steps that can help maintain health and identify potential problems early.',
    sections: [
      {
        heading: 'What can preventive care include?',
        content:
          'Depending on your circumstances, it may include routine check-ups, recommended screening tests, vaccinations, and discussions about lifestyle.'
      },
      {
        heading: 'Why are regular check-ups useful?',
        content:
          'They provide an opportunity to discuss concerns, review health risks, and understand which preventive services are appropriate for you.'
      },
      {
        heading: 'Are all screening tests necessary for everyone?',
        content:
          'No. Recommendations depend on factors such as age, medical history, family history, and local healthcare guidance. Ask your healthcare professional which services are appropriate.'
      }
    ]
  },
  {
    id: 6,
    title: 'Everyday Hydration Habits',
    category: 'Nutrition',
    readTime: '3 min read',
    icon: Apple,
    introduction:
      'Water and other suitable fluids help your body carry out normal functions.',
    sections: [
      {
        heading: 'How can you remember to drink?',
        content:
          'Keep water accessible, drink regularly throughout the day, and pay attention to thirst and your individual needs.'
      },
      {
        heading: 'Do fluid needs differ?',
        content:
          'Yes. Weather, activity, age, and some health conditions can affect fluid needs.'
      },
      {
        heading: 'What if you have a fluid restriction?',
        content:
          'Follow the fluid guidance provided by your healthcare professional. General hydration advice may not be appropriate for everyone.'
      }
    ]
  }
]

const categories = [
  'All',
  'Sleep',
  'Nutrition',
  'Fitness',
  'Mental Wellness',
  'General Health'
]

function HealthEducation() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [openArticle, setOpenArticle] = useState(null)
  const [bookmarkedArticles, setBookmarkedArticles] = useState([])

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      article.category === selectedCategory

    const matchesSearch =
      `${article.title} ${article.category} ${article.introduction}`
        .toLowerCase()
        .includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const toggleBookmark = (id) => {
    setBookmarkedArticles((previous) =>
      previous.includes(id)
        ? previous.filter((articleId) => articleId !== id)
        : [...previous, id]
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-8 text-[#183D32] sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Back link */}
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        {/* Page heading */}
        <div className="mt-6 flex items-start gap-4">
          <div className="rounded-2xl bg-[#E8EFE5] p-3">
            <BookOpen size={30} />
          </div>

          <div>
            <p className="text-sm font-medium text-[#64816A]">
              HealthNest / Health Assistant
            </p>
            <h1 className="mt-1 text-3xl font-bold">
              Health Education
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Learn about everyday health topics through simple,
              easy-to-understand educational articles.
            </p>
          </div>
        </div>

        {/* Intro banner */}
        <section className="mt-7 rounded-3xl bg-[#183D32] p-6 text-white sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-white/10 p-3">
              <BookMarked size={28} />
            </div>

            <div>
              <p className="text-sm font-medium text-[#D7E5D5]">
                Your learning library
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                Understand your health, one topic at a time
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#D7E5D5]">
                Explore practical information about healthy routines,
                nutrition, movement, mental wellbeing, and preventive care.
              </p>
              <p className="mt-4 text-sm">
                {articles.length} articles available in this demo
              </p>
            </div>
          </div>
        </section>

        {/* Medical information notice */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E3E8DF] bg-white p-4">
          <ShieldCheck
            size={22}
            className="mt-0.5 shrink-0 text-[#64816A]"
          />
          <div>
            <h2 className="font-semibold">Reliable health decisions matter</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              These are general educational articles for your project demo,
              not personalized medical advice. Discuss personal symptoms,
              test results, or treatment decisions with a qualified
              healthcare professional.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mt-8">
          <label
            htmlFor="education-search"
            className="mb-2 block text-sm font-semibold"
          >
            Search articles
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-[#DCE5D9] bg-white px-4">
            <Search size={20} className="text-[#64816A]" />
            <input
              id="education-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search sleep, nutrition, fitness..."
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

        {/* Article list */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {filteredArticles.map((article) => {
            const ArticleIcon = article.icon
            const isOpen = openArticle === article.id
            const isBookmarked = bookmarkedArticles.includes(article.id)

            return (
              <article
                key={article.id}
                className="overflow-hidden rounded-2xl border border-[#E3E8DF] bg-white shadow-sm"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-[#E8EFE5] p-3">
                        <ArticleIcon size={23} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#64816A]">
                          {article.category}
                        </p>
                        <h2 className="mt-1 text-lg font-bold leading-7">
                          {article.title}
                        </h2>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleBookmark(article.id)}
                      aria-label={
                        isBookmarked
                          ? 'Remove bookmark'
                          : 'Bookmark article'
                      }
                      title={
                        isBookmarked
                          ? 'Remove bookmark'
                          : 'Bookmark article'
                      }
                      className={`shrink-0 rounded-lg p-2 transition ${
                        isBookmarked
                          ? 'bg-[#183D32] text-white'
                          : 'text-[#64816A] hover:bg-[#F2F5EF]'
                      }`}
                    >
                      <BookMarked size={19} />
                    </button>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {article.introduction}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <Clock size={15} />
                    {article.readTime}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setOpenArticle(isOpen ? null : article.id)
                    }
                    aria-expanded={isOpen}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#DCE5D9] px-4 py-3 text-sm font-semibold transition hover:bg-[#F2F5EF]"
                  >
                    {isOpen ? 'Close article' : 'Read article'}
                    {isOpen ? (
                      <ChevronUp size={17} />
                    ) : (
                      <ChevronDown size={17} />
                    )}
                  </button>
                </div>

                {/* Full article content */}
                {isOpen && (
                  <div className="space-y-5 border-t border-[#EDF0E9] bg-[#FCFCF8] p-5 sm:p-6">
                    {article.sections.map((section, index) => (
                      <section key={index}>
                        <h3 className="font-bold">{section.heading}</h3>
                        <p className="mt-2 text-sm leading-7 text-gray-600">
                          {section.content}
                        </p>
                      </section>
                    ))}

                    <p className="rounded-xl bg-[#E8EFE5] p-4 text-xs leading-6 text-[#46644C]">
                      Educational content only. For advice that applies to
                      your personal circumstances, speak with a qualified
                      healthcare professional.
                    </p>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-[#C8D6C4] bg-white p-10 text-center">
            <Search size={32} className="mx-auto text-[#64816A]" />
            <h2 className="mt-3 font-bold">No articles found</h2>
            <p className="mt-2 text-sm text-gray-500">
              Try another search term or select a different category.
            </p>
          </div>
        )}

        {/* Bookmark summary */}
        <div className="mt-8 rounded-2xl border border-[#E3E8DF] bg-white p-5">
          <div className="flex items-center gap-3">
            <BookMarked size={22} className="text-[#64816A]" />
            <div>
              <h2 className="font-bold">Your reading list</h2>
              <p className="mt-1 text-sm text-gray-500">
                {bookmarkedArticles.length} article
                {bookmarkedArticles.length === 1 ? '' : 's'} bookmarked in
                this session.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          HealthNest educational demo · Bookmarks reset when you refresh
          this page.
        </p>

      </div>
    </div>
  )
}

export default HealthEducation
