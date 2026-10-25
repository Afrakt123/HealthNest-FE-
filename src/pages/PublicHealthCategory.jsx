import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Leaf,
  CheckCircle2,
  Circle,
  Sparkles,
  Target,
  BookOpen,
  HeartPulse,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categoryData = {
  'maternal-care': {
    title: 'Maternal Care',
    subtitle: 'A beautiful journey begins with caring for yourself.',
    description:
      'Explore gentle wellness ideas and supportive information for the journey through pregnancy and motherhood.',
    quote: 'You are growing through a beautiful journey. Take it one day at a time.',
    icon: Heart,
    color: 'bg-rose-50 text-rose-600',
    activities: [
      'Make time for rest and relaxation',
      'Drink water regularly throughout the day',
      'Attend recommended prenatal appointments',
      'Spend a few minutes doing something you enjoy',
    ],
    articles: [
      {
        title: 'Making time for rest',
        text: 'Rest and relaxation are important parts of everyday well-being. Give yourself permission to slow down when you need to.',
      },
      {
        title: 'Preparing for appointments',
        text: 'Writing down questions before a healthcare appointment can help you remember what you want to discuss.',
      },
      {
        title: 'Building a support system',
        text: 'Talking with trusted family members, friends, or healthcare professionals can help you feel supported.',
      },
    ],
  },
  'elderly-care': {
    title: 'Elderly Care',
    subtitle: 'Every stage of life deserves care and connection.',
    description:
      'Discover everyday ideas that encourage independence, social connection, and healthy ageing.',
    quote: 'Small moments of care can make every day more meaningful.',
    icon: Heart,
    color: 'bg-amber-50 text-amber-700',
    activities: [
      'Spend time talking with someone you care about',
      'Include gentle movement if suitable for you',
      'Make time for a favourite hobby',
      'Keep planned healthcare appointments',
    ],
    articles: [
      {
        title: 'Stay socially connected',
        text: 'Conversations, shared activities, and time with loved ones can help make everyday life more meaningful.',
      },
      {
        title: 'Enjoy gentle movement',
        text: 'Choose activities that suit your abilities and comfort. Ask a healthcare professional if you are unsure what is suitable.',
      },
      {
        title: 'Keep a daily routine',
        text: 'A comfortable routine for meals, sleep, hobbies, and appointments can help make daily activities easier to organize.',
      },
    ],
  },
  'womens-health': {
    title: "Women's Health",
    subtitle: 'Understand your body. Make space for yourself.',
    description:
      "Explore general information about women's wellness, menstrual health, self-care, and everyday well-being.",
    quote: 'Your well-being matters. Give yourself the same care you give others.',
    icon: HeartPulse,
    color: 'bg-purple-50 text-purple-700',
    activities: [
      'Take a few minutes for yourself today',
      'Notice how you feel and record your mood if you wish',
      'Make time for a relaxing activity',
      'Write down any health questions you want to discuss with a professional',
    ],
    articles: [
      {
        title: 'Get to know your cycle',
        text: 'Learning about your usual menstrual pattern can help you notice changes worth discussing with a healthcare professional.',
      },
      {
        title: 'Make room for self-care',
        text: 'A little time for rest, enjoyable activities, and supportive conversations can be part of a healthy routine.',
      },
      {
        title: 'Understand your health',
        text: 'Reliable health information can help you prepare questions and have more informed conversations with your healthcare provider.',
      },
    ],
  },
  'fitness-wellness': {
    title: 'Fitness & Wellness',
    subtitle: 'Small steps today. Stronger habits tomorrow.',
    description:
      'Explore simple ideas for movement, hydration, sleep, and creating healthy habits at your own pace.',
    quote: 'You do not have to do everything today. Just start with one small step.',
    icon: Leaf,
    color: 'bg-sky-50 text-sky-700',
    activities: [
      'Take a short walk or choose movement that suits you',
      'Drink water regularly throughout the day',
      'Make time for a relaxing break',
      'Plan a comfortable bedtime routine',
    ],
    articles: [
      {
        title: 'Start with small habits',
        text: 'Choose one realistic habit at a time. Repeating manageable actions can help you build a routine that works for you.',
      },
      {
        title: 'Make movement enjoyable',
        text: 'Walking, dancing, stretching, and other suitable activities can help you find a form of movement you enjoy.',
      },
      {
        title: 'Give sleep some attention',
        text: 'A regular bedtime routine and a comfortable sleeping environment may help support better sleep habits.',
      },
    ],
  },
};

function PublicHealthCategory() {
  const { category } = useParams();
  const data = categoryData[category];
  const [completedActivities, setCompletedActivities] = useState([]);

  if (!data) {
    return (
      <div className="flex min-h-screen flex-col bg-[#FAFAF5] text-[#183D32]">
        <Navbar />
        <main className="mx-auto flex flex-1 flex-col items-center justify-center px-5 py-32 text-center">
          <Leaf size={48} className="mb-5 text-[#64816A]" />
          <h1 className="font-serif text-3xl font-bold">Category not found</h1>
          <p className="mt-3 text-[#748078]">
            Let's find another way to support your wellness journey.
          </p>
          <Link
            to="/"
            className="mt-6 rounded-full bg-[#183D32] px-6 py-3 text-white transition hover:bg-[#285A47]"
          >
            Return Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = data.icon;
  const progress =
    (completedActivities.length / data.activities.length) * 100;

  const toggleActivity = (activity) => {
    setCompletedActivities((previous) =>
      previous.includes(activity)
        ? previous.filter((item) => item !== activity)
        : [...previous, activity]
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">
      <Navbar />

      <main className="pt-24">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden px-5 py-16 sm:py-24">
          <div className="absolute -right-20 -top-10 h-72 w-72 rounded-full bg-[#E2EBDD] opacity-70 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#F0EDE0] opacity-70 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#64816A] transition hover:text-[#183D32]"
              >
                <ArrowLeft size={17} />
                Back to Home
              </Link>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCE5D7] bg-white px-4 py-2 text-sm text-[#54785D]">
                <Sparkles size={16} />
                YOUR WELLNESS JOURNEY
              </div>

              <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {data.title}
                <span className="mt-3 block italic text-[#64816A]">
                  Starts With You.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#748078] sm:text-lg">
                {data.description}
              </p>

              <a
                href="#daily-challenge"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#183D32] px-7 py-3.5 font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#285A47]"
              >
                Explore Your Activities
                <ArrowRight size={18} />
              </a>

              <p className="mt-5 flex items-center gap-2 text-sm text-[#64816A]">
                <Heart size={16} />
                No account needed to explore.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#DCE8D7] via-[#EDF0E5] to-[#C4D5C2] p-5 sm:p-8">
                <div className="rounded-[1.5rem] bg-white p-6 shadow-sm sm:p-8">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${data.color}`}
                  >
                    <Icon size={32} />
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#64816A]">
                    A LITTLE REMINDER
                  </p>

                  <h2 className="mt-4 font-serif text-2xl font-semibold leading-relaxed sm:text-3xl">
                    "{data.quote}"
                  </h2>

                  <div className="mt-7 flex items-center gap-3 rounded-2xl bg-[#F0F5EC] p-4">
                    <div className="rounded-xl bg-white p-3 text-[#64816A]">
                      <HeartPulse size={23} />
                    </div>
                    <div>
                      <p className="font-semibold">Care for yourself</p>
                      <p className="mt-1 text-sm text-[#748078]">
                        One step at a time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WELLNESS ARTICLES */}
        <section className="border-y border-[#E9EDE5] bg-white/70 px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718B71]">
                LEARN AND DISCOVER
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                A little knowledge goes a long way.
              </h2>
              <p className="mt-4 leading-7 text-[#748078]">
                Explore simple ideas that may help you make informed choices
                about your everyday well-being.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {data.articles.map((article, index) => (
                <article
                  key={article.title}
                  className="rounded-3xl border border-[#E8EBE2] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#284C38]/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF1E7] text-[#52775B]">
                    <BookOpen size={23} />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#829087]">
                    WELLNESS NOTE 0{index + 1}
                  </p>
                  <h3 className="mt-3 font-serif text-xl font-semibold">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#748078]">
                    {article.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE DAILY CHALLENGE */}
        <section
          id="daily-challenge"
          className="px-5 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF1E7] text-[#52775B]">
                <Target size={28} />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#718B71]">
                YOUR GENTLE DAILY CHALLENGE
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Small steps count.
              </h2>
              <p className="mt-4 text-[#748078]">
                Choose the activities that you complete. Go at your own pace.
              </p>
            </div>

            <div className="mt-10 rounded-[2rem] border border-[#E8EBE2] bg-white p-6 shadow-lg shadow-[#284C38]/5 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-semibold">
                    Your wellness checklist
                  </h3>
                  <p className="mt-2 text-sm text-[#748078]">
                    Every small action is worth celebrating.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#EAF1E7] px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-[#285A47]">
                    {completedActivities.length}/{data.activities.length}
                  </p>
                  <p className="text-xs text-[#64816A]">Completed</p>
                </div>
              </div>

              <div className="mt-7 h-3 overflow-hidden rounded-full bg-[#E9EDE5]">
                <div
                  className="h-full rounded-full bg-[#64816A] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-2 text-right text-sm text-[#64816A]">
                {Math.round(progress)}% completed
              </p>

              <div className="mt-7 space-y-3">
                {data.activities.map((activity) => {
                  const completed = completedActivities.includes(activity);

                  return (
                    <button
                      key={activity}
                      type="button"
                      onClick={() => toggleActivity(activity)}
                      aria-pressed={completed}
                      className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${
                        completed
                          ? 'border-[#C9D8C6] bg-[#F0F5EC]'
                          : 'border-[#E8EBE2] bg-white hover:bg-[#FAFAF5]'
                      }`}
                    >
                      <span
                        className={`mt-0.5 shrink-0 ${
                          completed ? 'text-[#52775B]' : 'text-[#AAB6A8]'
                        }`}
                      >
                        {completed ? (
                          <CheckCircle2 size={23} />
                        ) : (
                          <Circle size={23} />
                        )}
                      </span>
                      <span
                        className={`text-sm leading-6 sm:text-base ${
                          completed
                            ? 'text-[#52775B] line-through'
                            : 'text-[#183D32]'
                        }`}
                      >
                        {activity}
                      </span>
                    </button>
                  );
                })}
              </div>

              {completedActivities.length === data.activities.length && (
                <div className="mt-6 rounded-2xl bg-[#183D32] p-5 text-white">
                  <div className="flex items-center gap-3">
                    <Sparkles size={25} />
                    <div>
                      <h4 className="font-semibold">Wonderful work! 🌿</h4>
                      <p className="mt-1 text-sm leading-6 text-white/80">
                        You've completed every activity on this checklist.
                        Celebrate the effort you made today!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <p className="mt-6 text-xs leading-6 text-[#829087]">
                This checklist is optional and is not a medical assessment.
                Your selections are temporary and will reset if you refresh
                this page.
              </p>
            </div>
          </div>
        </section>

        {/* SIGNUP CALL TO ACTION */}
        <section className="px-5 pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#183D32] via-[#24533E] to-[#54785D] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D0E0CD]">
                YOUR JOURNEY, YOUR CHOICES
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-5xl">
                Ready to make your wellness journey personal?
              </h2>
              <p className="mt-5 leading-7 text-white/80">
                Create a HealthNest account to explore personal health goals,
                organize appointments, and keep track of your wellness
                activities.
              </p>
              <Link
                to="/signup"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FAFAF5] px-7 py-3.5 font-semibold text-[#183D32] transition hover:bg-white"
              >
                Join HealthNest
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* HEALTH INFORMATION NOTE */}
        <section className="px-5 pb-12">
          <div className="mx-auto max-w-5xl rounded-2xl border border-[#E8EBE2] bg-white p-5">
            <p className="text-sm leading-7 text-[#748078]">
              <strong className="text-[#183D32]">
                A note about health information:
              </strong>{' '}
              This page provides general wellness education and motivational
              activities. It does not diagnose or treat medical conditions
              and is not a substitute for advice from a qualified healthcare
              professional.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PublicHealthCategory;
