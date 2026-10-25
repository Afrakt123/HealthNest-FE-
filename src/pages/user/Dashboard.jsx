import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Leaf,
  HeartPulse,
  Activity,
  CalendarDays,
  Bell,
  ArrowRight,
  Baby,
  Heart,
  Dumbbell,
  Stethoscope,
  Clock,
  CheckCircle2,
  Target,
  Sparkles,
  ClipboardCheck,
} from 'lucide-react'

const categoryData = {
  'maternal-care': {
    title: 'Maternal Care',
    subtitle: 'Your pregnancy and motherhood wellness space.',
    icon: Baby,
    color: 'bg-rose-50 text-rose-600',
    banner: 'Your motherhood journey matters.',
    bannerDescription:
      'Keep your appointments organized and build healthy everyday habits throughout your maternal journey.',
    stats: [
      {
        title: 'Wellness',
        value: 'Daily',
        description: 'Check in with yourself',
        icon: HeartPulse,
      },
      {
        title: 'Appointments',
        value: '2',
        description: 'Sample upcoming visits',
        icon: CalendarDays,
      },
      {
        title: 'Reminders',
        value: '3',
        description: 'Suggested reminders',
        icon: Bell,
      },
      {
        title: 'Health Goals',
        value: 'Active',
        description: 'Build healthy habits',
        icon: Target,
      },
    ],
    features: [
      {
        title: 'Pregnancy Wellness',
        description:
          'Explore general information about rest, hydration, nutrition, and wellbeing during pregnancy.',
        icon: HeartPulse,
        action: 'Explore wellness',
      },
      {
        title: 'Maternal Health Journal',
        description:
          'Plan your daily wellness check-ins and note questions for your healthcare professional.',
        icon: ClipboardCheck,
        action: 'View journal',
      },
      {
        title: 'Pregnancy Appointment Planner',
        description:
          'Keep track of antenatal visits and prepare questions before appointments.',
        icon: CalendarDays,
        action: 'Plan appointments',
      },
      {
        title: 'Motherhood Support',
        description:
          'Explore general guidance about preparing for motherhood and seeking support.',
        icon: Baby,
        action: 'Explore support',
      },
    ],
    appointments: [
      {
        title: 'Antenatal Check-up',
        doctor: 'Add your healthcare provider',
        date: 'Add appointment date',
        time: 'Add appointment time',
      },
      {
        title: 'Maternal Wellness Consultation',
        doctor: 'Add your healthcare provider',
        date: 'Add appointment date',
        time: 'Add appointment time',
      },
    ],
    reminders: [
      {
        title: 'Review your antenatal appointment plan',
        time: 'Set your preferred date',
      },
      {
        title: 'Take a moment for your wellbeing',
        time: 'Daily reminder',
      },
      {
        title: 'Prepare questions for your healthcare provider',
        time: 'Before your next visit',
      },
    ],
    tips: [
      'Keep your recommended prenatal appointments.',
      'Discuss medicines, supplements, and health concerns with your healthcare professional.',
      'Seek medical advice if you notice concerning symptoms.',
    ],
  },

  'elderly-care': {
    title: 'Elderly Care',
    subtitle: 'Your daily health and healthy ageing space.',
    icon: Heart,
    color: 'bg-amber-50 text-amber-600',
    banner: 'Small daily steps support healthy ageing.',
    bannerDescription:
      'Organize health check-ups, daily routines, and reminders in one place.',
    stats: [
      {
        title: 'Daily Wellness',
        value: 'Today',
        description: 'Review your routine',
        icon: HeartPulse,
      },
      {
        title: 'Appointments',
        value: '2',
        description: 'Sample upcoming visits',
        icon: CalendarDays,
      },
      {
        title: 'Reminders',
        value: '3',
        description: 'Suggested reminders',
        icon: Bell,
      },
      {
        title: 'Daily Goals',
        value: 'Active',
        description: 'Maintain healthy routines',
        icon: Target,
      },
    ],
    features: [
      {
        title: 'Daily Health Check-in',
        description:
          'Create a routine for recording how you feel and discussing concerns with your care team.',
        icon: HeartPulse,
        action: 'View check-in',
      },
      {
        title: 'Medication Schedule',
        description:
          'Organize reminders for medicines prescribed by your healthcare professional.',
        icon: Bell,
        action: 'Review schedule',
      },
      {
        title: 'Healthcare Visits',
        description:
          'Keep appointments and questions for your doctor organized.',
        icon: CalendarDays,
        action: 'Plan visits',
      },
      {
        title: 'Healthy Ageing',
        description:
          'Explore general information about movement, social connection, and everyday wellbeing.',
        icon: Activity,
        action: 'Explore wellness',
      },
    ],
    appointments: [
      {
        title: 'Routine Health Check-up',
        doctor: 'Add your healthcare provider',
        date: 'Add appointment date',
        time: 'Add appointment time',
      },
      {
        title: 'Follow-up Consultation',
        doctor: 'Add your healthcare provider',
        date: 'Add appointment date',
        time: 'Add appointment time',
      },
    ],
    reminders: [
      {
        title: 'Review your prescribed medication schedule',
        time: 'Follow your prescription',
      },
      {
        title: 'Check your daily wellness routine',
        time: 'Daily reminder',
      },
      {
        title: 'Prepare for your next healthcare visit',
        time: 'Before your appointment',
      },
    ],
    tips: [
      'Use medicines according to your healthcare professional’s instructions.',
      'Keep your living space safe and easy to move around.',
      'Discuss new symptoms or changes in your health with your healthcare provider.',
    ],
  },

  'womens-health': {
    title: "Women's Health",
    subtitle: 'Your personal women’s wellness space.',
    icon: Stethoscope,
    color: 'bg-purple-50 text-purple-600',
    banner: 'Make your wellbeing a priority.',
    bannerDescription:
      'Explore women’s wellness information and organize your personal health goals.',
    stats: [
      {
        title: 'Wellness',
        value: 'Daily',
        description: 'Check in with yourself',
        icon: HeartPulse,
      },
      {
        title: 'Appointments',
        value: '2',
        description: 'Sample upcoming visits',
        icon: CalendarDays,
      },
      {
        title: 'Reminders',
        value: '3',
        description: 'Suggested reminders',
        icon: Bell,
      },
      {
        title: 'Health Goals',
        value: 'Active',
        description: 'Build healthy habits',
        icon: Target,
      },
    ],
    features: [
      {
        title: 'Menstrual Health Journal',
        description:
          'Keep personal notes about your cycle and symptoms. This demo does not predict or diagnose conditions.',
        icon: ClipboardCheck,
        action: 'View journal',
      },
      {
        title: 'PCOS Wellness',
        description:
          'Explore general information about PCOS and prepare questions for a healthcare professional.',
        icon: HeartPulse,
        action: 'Explore wellness',
      },
      {
        title: 'Women’s Health Appointments',
        description:
          'Organize appointments and questions related to your personal health.',
        icon: CalendarDays,
        action: 'Plan appointments',
      },
      {
        title: 'Everyday Wellbeing',
        description:
          'Explore general information about sleep, balanced nutrition, movement, and stress management.',
        icon: Sparkles,
        action: 'Explore wellbeing',
      },
    ],
    appointments: [
      {
        title: 'Women’s Health Consultation',
        doctor: 'Add your healthcare provider',
        date: 'Add appointment date',
        time: 'Add appointment time',
      },
      {
        title: 'Routine Health Check-up',
        doctor: 'Add your healthcare provider',
        date: 'Add appointment date',
        time: 'Add appointment time',
      },
    ],
    reminders: [
      {
        title: 'Update your personal wellness journal',
        time: 'When convenient',
      },
      {
        title: 'Review your health goals',
        time: 'Weekly reminder',
      },
      {
        title: 'Prepare questions for your healthcare provider',
        time: 'Before your next visit',
      },
    ],
    tips: [
      'Keep track of health changes you want to discuss with your doctor.',
      'Choose balanced meals and regular movement that suit your needs.',
      'Seek professional guidance for persistent symptoms or health concerns.',
    ],
  },

  'fitness-wellness': {
    title: 'Fitness & Wellness',
    subtitle: 'Your movement, fitness, and healthy habits space.',
    icon: Dumbbell,
    color: 'bg-sky-50 text-sky-600',
    banner: 'Build healthy habits one day at a time.',
    bannerDescription:
      'Organize your activity goals and create a routine that fits your lifestyle.',
    stats: [
      {
        title: 'Activity',
        value: 'Today',
        description: 'Review your movement',
        icon: Activity,
      },
      {
        title: 'Fitness Goals',
        value: '3',
        description: 'Example goals to review',
        icon: Target,
      },
      {
        title: 'Reminders',
        value: '3',
        description: 'Suggested reminders',
        icon: Bell,
      },
      {
        title: 'Wellness',
        value: 'Active',
        description: 'Keep building healthy habits',
        icon: HeartPulse,
      },
    ],
    features: [
      {
        title: 'Daily Activity',
        description:
          'Plan walking, movement breaks, or other activities suitable for your abilities.',
        icon: Activity,
        action: 'View activities',
      },
      {
        title: 'Fitness Goals',
        description:
          'Set personal goals and review your progress as you build consistent habits.',
        icon: Target,
        action: 'Review goals',
      },
      {
        title: 'Workout Planner',
        description:
          'Organize your preferred activities and plan a balanced weekly routine.',
        icon: Dumbbell,
        action: 'Plan workouts',
      },
      {
        title: 'Healthy Habits',
        description:
          'Build a routine around sleep, hydration, recovery, and everyday wellbeing.',
        icon: Sparkles,
        action: 'Explore habits',
      },
    ],
    appointments: [
      {
        title: 'Fitness Goal Review',
        doctor: 'Add a trainer or healthcare provider if needed',
        date: 'Add appointment date',
        time: 'Add appointment time',
      },
      {
        title: 'Wellness Consultation',
        doctor: 'Add your healthcare provider',
        date: 'Add appointment date',
        time: 'Add appointment time',
      },
    ],
    reminders: [
      {
        title: 'Review your activity goals',
        time: 'Daily reminder',
      },
      {
        title: 'Take a movement break',
        time: 'Choose a suitable time',
      },
      {
        title: 'Review your weekly progress',
        time: 'Weekly reminder',
      },
    ],
    tips: [
      'Start with activity levels that feel comfortable for you.',
      'Include rest and recovery in your routine.',
      'Speak with a healthcare professional before major exercise changes if you have health concerns.',
    ],
  },
}

// Navigation destinations for the existing dashboard cards.
const getStatPath = (title) => {
  if (title === 'Appointments') return '/appointments'
  if (title === 'Reminders') return '/medication-reminders'
  if (title === 'Daily Goals' || title === 'Health Goals' || title === 'Fitness Goals') {
    return '/health-goals'
  }
  return '/health-tracking'
}

const getFeaturePath = (title) => {
  const routes = {
    'Pregnancy Wellness': '/maternal-care',
    'Maternal Health Journal': '/maternal-care',
    'Pregnancy Appointment Planner': '/appointments',
    'Motherhood Support': '/health-education',

    'Daily Health Check-in': '/health-tracking',
    'Medication Schedule': '/medication-reminders',
    'Healthcare Visits': '/appointments',
    'Healthy Ageing': '/elderly-care',

    'Menstrual Health Journal': '/womens-health',
    'PCOS Wellness': '/womens-health',
    'Women’s Health Appointments': '/appointments',
    'Everyday Wellbeing': '/recommendations',

    'Daily Activity': '/health-tracking',
    'Fitness Goals': '/health-goals',
    'Workout Planner': '/fitness-wellness',
    'Healthy Habits': '/recommendations',
  }

  return routes[title] || '/health-tracking'
}

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [userName, setUserName] = useState('User')

  useEffect(() => {
    // Load the single category selected during signup.
    const savedCategories = localStorage.getItem('healthNestCategories')

    if (savedCategories) {
      try {
        const parsed = JSON.parse(savedCategories)

        // Support the array format saved by Signup.jsx.
        // If older data contains multiple selections, use the first.
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSelectedCategory(parsed[0])
        } else if (typeof parsed === 'string') {
          setSelectedCategory(parsed)
        }
      } catch (error) {
        console.error('Unable to load health category:', error)
      }
    }

    // Load basic demo profile information.
    const savedUser = localStorage.getItem('user')

    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser)

        if (parsedUser?.fullName) {
          setUserName(parsedUser.fullName)
        }
      } catch (error) {
        console.error('Unable to load user details:', error)
      }
    }
  }, [])

  const category = categoryData[selectedCategory]
  const CategoryIcon = category?.icon

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">
      {/* Header */}
      <header className="border-b border-[#E6EAE1] bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link to="/" className="flex items-center gap-2">
            <Leaf size={30} className="text-[#64816A]" />

            <span className="font-serif text-2xl font-bold">
              HealthNest
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm text-[#64816A] hover:underline"
            >
              Home
            </Link>

            {/* Profile icon now opens the Profile page */}
            <Link
              to="/profile"
              title={userName}
              aria-label="Open profile"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF1E7] font-semibold"
            >
              {userName.charAt(0).toUpperCase()}
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-10 lg:py-12">
        {!category ? (
          /* No category selected */
          <section className="mx-auto max-w-xl rounded-3xl border border-[#E6EAE1] bg-white p-8 text-center sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF1E7] text-[#52775B]">
              <HeartPulse size={32} />
            </div>

            <h1 className="mt-5 font-serif text-3xl font-semibold">
              Welcome to HealthNest!
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#748078]">
              Choose your health category to create a personalized
              dashboard.
            </p>

            <Link
              to="/signup"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#183D32] px-6 py-3 text-sm font-semibold text-white hover:bg-[#285A47]"
            >
              Choose a Category
              <ArrowRight size={17} />
            </Link>
          </section>
        ) : (
          <>
            {/* Welcome Section */}
            <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-medium text-[#64816A]">
                  YOUR PERSONAL HEALTH SPACE
                </p>

                <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                  Welcome back, {userName}!
                </h1>

                <p className="mt-3 text-[#748078]">
                  {category.subtitle}
                </p>
              </div>

              <div
                className={`flex items-center gap-3 self-start rounded-2xl px-4 py-3 ${category.color}`}
              >
                <CategoryIcon size={26} />

                <div>
                  <p className="text-xs opacity-80">
                    YOUR SELECTED CATEGORY
                  </p>

                  <p className="mt-1 font-semibold">
                    {category.title}
                  </p>
                </div>
              </div>
            </section>

            {/* Personalized Banner */}
            <section className="mt-8 overflow-hidden rounded-3xl bg-[#183D32] p-6 text-white sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <CategoryIcon size={30} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    PERSONALIZED FOR YOU
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                    {category.banner}
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75">
                    {category.bannerDescription}
                  </p>
                </div>
              </div>
            </section>

            {/* Category-specific Statistics */}
            <section className="mt-9">
              <h2 className="font-serif text-2xl font-semibold">
                Your Health Overview
              </h2>

              <p className="mt-2 text-sm text-[#748078]">
                Information and suggested activities for {category.title}.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {category.stats.map(
                  ({ title, value, description, icon: Icon }) => (
                    <Link
                      key={title}
                      to={getStatPath(title)}
                      aria-label={`Open ${title}`}
                      className="block rounded-2xl"
                    >
                      <article className="rounded-2xl border border-[#E6EAE1] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#183D32]/5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF1E7] text-[#52775B]">
                          <Icon size={23} />
                        </div>

                        <p className="mt-5 text-sm text-[#748078]">
                          {title}
                        </p>

                        <h3 className="mt-1 text-2xl font-semibold">
                          {value}
                        </h3>

                        <p className="mt-2 text-xs text-[#829087]">
                          {description}
                        </p>
                      </article>
                    </Link>
                  )
                )}
              </div>


            </section>

            {/* Category-specific Features */}
            <section className="mt-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#718B71]">
                  YOUR PERSONALIZED TOOLS
                </p>

                <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                  Explore {category.title}
                </h2>

                <p className="mt-2 text-sm text-[#748078]">
                  Features chosen for your selected health category.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {category.features.map(
                  ({ title, description, icon: Icon, action }) => (
                    <Link
                      key={title}
                      to={getFeaturePath(title)}
                      aria-label={`Open ${title}`}
                      className="block rounded-2xl"
                    >
                      <article className="flex h-full flex-col rounded-2xl border border-[#E6EAE1] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#183D32]/5">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${category.color}`}
                        >
                          <Icon size={24} />
                        </div>

                        <h3 className="mt-4 font-semibold">{title}</h3>

                        <p className="mt-2 flex-1 text-sm leading-6 text-[#748078]">
                          {description}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#64816A]">
                          <CheckCircle2 size={15} />
                          {action}
                        </div>
                      </article>
                    </Link>
                  )
                )}
              </div>


            </section>

            {/* Category-specific Appointments and Reminders */}
            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* Appointments */}
              <div className="rounded-3xl border border-[#E6EAE1] bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-2xl font-semibold">
                      {selectedCategory === 'maternal-care'
                        ? 'Maternal Appointments'
                        : selectedCategory === 'elderly-care'
                          ? 'Healthcare Visits'
                          : selectedCategory === 'womens-health'
                            ? 'Women’s Health Visits'
                            : 'Fitness & Wellness Plans'}
                    </h2>

                    <p className="mt-2 text-sm text-[#748078]">
                      Plan visits and activities relevant to you.
                    </p>
                  </div>

                  <CalendarDays
                    size={25}
                    className="shrink-0 text-[#64816A]"
                  />
                </div>

                <div className="mt-6 space-y-4">
                  {category.appointments.map((appointment) => (
                    <Link
                      key={appointment.title}
                      to="/appointments"
                      aria-label={`Open ${appointment.title}`}
                      className="block rounded-2xl"
                    >
                      <article className="rounded-2xl bg-[#F6F8F2] p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#64816A]">
                            <CalendarDays size={21} />
                          </div>

                          <div className="min-w-0">
                            <h3 className="font-semibold">
                              {appointment.title}
                            </h3>

                            <p className="mt-1 text-sm text-[#748078]">
                              {appointment.doctor}
                            </p>

                            <p className="mt-2 text-xs leading-5 text-[#64816A]">
                              {appointment.date} · {appointment.time}
                            </p>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

              </div>

              {/* Reminders */}
              <div className="rounded-3xl border border-[#E6EAE1] bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-2xl font-semibold">
                      Your Reminders
                    </h2>

                    <p className="mt-2 text-sm text-[#748078]">
                      Suggested reminders for {category.title.toLowerCase()}.
                    </p>
                  </div>

                  <Bell
                    size={25}
                    className="shrink-0 text-[#64816A]"
                  />
                </div>

                <div className="mt-6 space-y-3">
                  {category.reminders.map((reminder) => (
                    <Link
                      key={reminder.title}
                      to="/medication-reminders"
                      aria-label={`Open reminder: ${reminder.title}`}
                      className="block rounded-2xl"
                    >
                      <article className="flex items-start gap-3 rounded-2xl border border-[#E6EAE1] p-4">
                        <div className="mt-0.5 rounded-lg bg-[#EAF1E7] p-2 text-[#52775B]">
                          <Clock size={18} />
                        </div>

                        <div>
                          <h3 className="text-sm font-medium">
                            {reminder.title}
                          </h3>

                          <p className="mt-1 text-xs text-[#829087]">
                            {reminder.time}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

              </div>
            </section>

            {/* Category-specific Tips */}
            <section className="mt-8 rounded-3xl border border-[#E6EAE1] bg-white p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-[#EAF1E7] p-3 text-[#52775B]">
                  <Sparkles size={25} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#718B71]">
                    WELLNESS CORNER
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-semibold">
                    Tips for {category.title}
                  </h2>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {category.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#64816A]"
                    />

                    <p className="text-sm leading-6 text-[#748078]">
                      {tip}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs leading-5 text-[#829087]">
                HealthNest offers general wellness information, not
                diagnosis or treatment. Consult a qualified healthcare
                professional for personal medical advice.
              </p>
            </section>
          </>
        )}
      </main>
                   {/* Health Assistant Banner */}
        <section className="mx-auto mt-6 w-full max-w-5xl rounded-2xl bg-[#183D32] px-4 py-4 sm:px-5 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <HeartPulse size={19} className="text-white" />
              </div>

              <div className="min-w-0">
                <h2 className="font-serif text-base font-semibold text-white sm:text-lg">
                  Need help understanding health information?
                </h2>

                <p className="mt-1 text-xs leading-5 text-white/75">
                  Explore our health assistant for general wellness information and guidance.
                </p>
              </div>
            </div>

            <Link to="/health-assistant"
              
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#FAFAF5] px-3 py-2 text-xs font-semibold text-[#183D32] transition hover:bg-white sm:px-4 sm:py-2.5 sm:text-sm"
            >
              Explore Assistant
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-[#E6EAE1] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-[#829087] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div className="flex items-center gap-2">
            <Leaf size={18} className="text-[#64816A]" />
            <span>HealthNest · Your personal health space</span>
          </div>

          <Link
            to="/"
            className="self-start font-medium text-[#52775B] hover:underline sm:self-auto"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard