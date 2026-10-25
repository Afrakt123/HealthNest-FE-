import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import {
  ArrowRight,
  HeartPulse,
  Activity,
  CalendarDays,
  Bot,
  Baby,
  Heart,
  Dumbbell,
  Stethoscope,
  Leaf,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Users,
} from 'lucide-react';

const categories = [
  {
    icon: Baby,
    title: 'Maternal Care',
    description: 'Support for your motherhood journey',
    color: 'bg-rose-50 text-rose-700',
    path: 'maternal-care',
    gradient: 'from-rose-50 to-orange-50',
  },
  {
    icon: Heart,
    title: 'Elderly Care',
    description: 'Supporting a healthier, active life',
    color: 'bg-amber-50 text-amber-700',
    path: 'elderly-care',
    gradient: 'from-amber-50 to-yellow-50',
  },
  {
    icon: HeartPulse,
    title: "Women's Health",
    description: 'Wellness, cycle and PCOS support',
    color: 'bg-purple-50 text-purple-700',
    path: 'womens-health',
    gradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Wellness',
    description: 'Build healthy everyday habits',
    color: 'bg-sky-50 text-sky-700',
    path: 'fitness-wellness',
    gradient: 'from-sky-50 to-teal-50',
  },
];

const features = [
  {
    icon: Activity,
    title: 'Health Tracking',
    description:
      'Keep track of your daily activities and build healthier routines at your own pace.',
  },
  {
    icon: CalendarDays,
    title: 'Appointments',
    description:
      'Keep your healthcare visits organized and prepare for your appointments.',
  },
  {
    icon: Heart,
    title: 'Smart Reminders',
    description:
      'Create reminders for planned health activities and everyday wellness habits.',
  },
  {
    icon: Bot,
    title: 'AI Health Assistant',
    description:
      'Explore health information and get help understanding common health topics.',
  },
  {
    icon: Stethoscope,
    title: 'Caregiver Support',
    description:
      'Discover ways to organize care and stay connected with trusted care partners.',
  },
  {
    icon: BookOpen,
    title: 'Health Education',
    description:
      'Learn about everyday wellness through easy-to-understand educational content.',
  },
];

const wellnessTips = [
  {
    number: '01',
    title: 'Start small',
    description:
      'You do not have to change everything today. One small, healthy habit is a great beginning.',
    icon: Leaf,
  },
  {
    number: '02',
    title: 'Make time for yourself',
    description:
      'A few quiet moments, a favourite activity, or a relaxing break can be part of your routine.',
    icon: Heart,
  },
  {
    number: '03',
    title: 'Celebrate your progress',
    description:
      'Every effort matters. Focus on the positive steps you take rather than trying to be perfect.',
    icon: Sparkles,
  },
];

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAF5] text-[#183D32]">
      <Navbar />

      {/* HERO SECTION */}

      <section className="relative overflow-hidden pt-20">
        <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#E2EBDD] blur-3xl" />

        <div className="absolute -bottom-10 -left-24 h-72 w-72 rounded-full bg-[#F0EDE0] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
          {/* LEFT CONTENT */}

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCE5D7] bg-white/80 px-4 py-2 text-xs font-medium tracking-wide text-[#54785D]">
              <HeartPulse size={16} />

              YOUR HEALTH. OUR CARE. A BETTER TOMORROW.
            </div>

            <h1 className="max-w-2xl font-serif text-5xl font-medium leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              A Healthier You,

              <span className="mt-2 block italic text-[#64816A]">
                A Brighter Tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#66766D] sm:text-lg">
              Meet your personal health and wellness companion. Discover
              helpful health information, explore wellness activities, and
              find inspiration to take better care of yourself.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-3 rounded-full bg-[#183D32] px-7 py-3.5 font-medium text-white shadow-lg shadow-[#183D32]/10 transition hover:-translate-y-0.5 hover:bg-[#285A47]"
              >
                Join HealthNest

                <ArrowRight size={18} />
              </Link>

              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full border border-[#B8C9B7] px-7 py-3.5 font-medium transition hover:bg-white"
              >
                Explore Wellness

                <ArrowRight size={17} />
              </a>
            </div>

            {/* WELCOME MESSAGE */}

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {['A', 'M', 'S', 'R'].map((letter, index) => (
                  <div
                    key={letter}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FAFAF5] text-sm font-semibold text-white ${
                      [
                        'bg-[#78927A]',
                        'bg-[#B69A83]',
                        'bg-[#8D9DAD]',
                        'bg-[#A6A17B]',
                      ][index]
                    }`}
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <p className="text-sm leading-6 text-[#66766D]">
                A more thoughtful approach
                <br />
                to your everyday well-being.
              </p>
            </div>
          </div>

          {/* RIGHT: DECORATIVE HEALTH DASHBOARD */}

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-[#DCE8D7] via-[#EDF0E5] to-[#C4D5C2]" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/50 p-5 shadow-2xl shadow-[#284C38]/10 backdrop-blur-sm sm:p-8">
              <div className="rounded-[1.8rem] bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#829087]">
                      YOUR PERSONAL SPACE
                    </p>

                    <h2 className="mt-1 font-serif text-2xl font-bold">
                      Your Health Today
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-[#EAF1E7] p-3 text-[#52775B]">
                    <HeartPulse size={25} />
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#F0F5EC] p-4">
                    <Activity
                      className="mb-4 text-[#64816A]"
                      size={24}
                    />

                    <p className="text-sm text-[#718075]">
                      Daily activity
                    </p>

                    <p className="mt-1 font-semibold">
                      Stay active
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F7F1E7] p-4">
                    <Heart
                      className="mb-4 text-[#A58B62]"
                      size={24}
                    />

                    <p className="text-sm text-[#8A806F]">
                      Personal goals
                    </p>

                    <p className="mt-1 font-semibold">
                      Keep growing
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#EDF3F7] p-4">
                    <CalendarDays
                      className="mb-4 text-[#68849B]"
                      size={24}
                    />

                    <p className="text-sm text-[#73828E]">
                      Appointments
                    </p>

                    <p className="mt-1 font-semibold">
                      Stay organized
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F4EDF5] p-4">
                    <Bot
                      className="mb-4 text-[#92779B]"
                      size={24}
                    />

                    <p className="text-sm text-[#897B8D]">
                      Health assistant
                    </p>

                    <p className="mt-1 font-semibold">
                      Find guidance
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#183D32] p-4 text-white">
                  <div className="rounded-xl bg-white/15 p-2">
                    <ShieldCheck size={23} />
                  </div>

                  <div>
                    <p className="font-medium">
                      Your journey, your choices
                    </p>

                    <p className="mt-1 text-xs text-white/70">
                      Personal wellness, all in one place.
                    </p>
                  </div>
                </div>
              </div>

              <p className="py-5 text-center text-sm font-medium tracking-wide text-[#47654B]">
                Small Steps. Meaningful Change.
              </p>
            </div>

            {/* FLOATING MESSAGE */}

            <div className="absolute -right-2 top-12 hidden rounded-2xl border border-white bg-white/95 p-4 shadow-lg sm:block">
              <Leaf size={24} className="text-[#64816A]" />

              <p className="mt-2 text-sm font-semibold">
                Grow at your pace
              </p>

              <p className="text-xs text-[#829087]">
                One day at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH CATEGORIES */}

      <section
        id="categories"
        className="scroll-mt-24 border-y border-[#E9EDE5] bg-white/60 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718B71]">
                CARE THAT FITS YOU
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Explore Health Categories
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-[#748078]">
                Discover helpful information, positive inspiration, and
                interactive wellness activities for different stages and
                needs of life.
              </p>
            </div>

            <span className="inline-flex items-center gap-1 text-sm font-medium text-[#52775B]">
              Your needs, your journey

              <ArrowRight size={16} />
            </span>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(
              ({
                icon: Icon,
                title,
                description,
                color,
                path,
                gradient,
              }) => (
                <Link
                  key={title}
                  to={`/explore/${path}`}
                  className="group flex h-full flex-col rounded-3xl border border-[#E8EBE2] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C9D8C6] hover:shadow-xl hover:shadow-[#284C38]/5 focus:outline-none focus:ring-2 focus:ring-[#64816A] focus:ring-offset-2"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${color} transition group-hover:scale-105`}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="font-serif text-xl font-semibold">
                    {title}
                  </h3>

                  <p className="mt-3 min-h-12 text-sm leading-6 text-[#748078]">
                    {description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#EDF0E8] pt-4">
                    <span className="text-sm font-semibold text-[#52775B]">
                      Discover more
                    </span>

                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-[#52775B] transition group-hover:translate-x-1`}
                    >
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </Link>
              )
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-[#748078]">
            <ShieldCheck size={17} className="text-[#64816A]" />

            <span>
              Explore public wellness content without creating an account.
            </span>
          </div>
        </div>
      </section>

      {/* WELLNESS INSPIRATION */}

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF1E7] px-4 py-2 text-xs font-semibold tracking-wide text-[#52775B]">
                <Sparkles size={16} />

                A LITTLE INSPIRATION
              </div>

              <h2 className="mt-5 max-w-xl font-serif text-3xl font-semibold leading-tight sm:text-5xl">
                You don't have to do it all.

                <span className="mt-2 block italic text-[#64816A]">
                  Just begin somewhere.
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[#748078]">
                Looking after yourself doesn't have to mean making big
                changes overnight. Start with simple habits, give yourself
                time, and discover what works for you.
              </p>

              <a
                href="#wellness-tips"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-[#52775B] transition hover:text-[#183D32]"
              >
                Discover small wellness steps

                <ArrowRight size={18} />
              </a>
            </div>

            <div className="relative rounded-[2rem] bg-gradient-to-br from-[#E5EDE0] via-[#F7F4EA] to-[#D5E3D0] p-6 sm:p-10">
              <div className="rounded-[1.5rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF1E7] text-[#52775B]">
                  <Heart size={28} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#718B71]">
                  A REMINDER FOR YOU
                </p>

                <blockquote className="mt-4 font-serif text-2xl leading-relaxed sm:text-3xl">
                  "Progress is not about being perfect. It's about caring
                  enough to keep trying."
                </blockquote>

                <div className="mt-7 flex items-center gap-3">
                  <div className="h-px w-10 bg-[#A9BDA5]" />

                  <p className="text-sm font-medium text-[#64816A]">
                    Take it one day at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS TIPS */}

      <section
        id="wellness-tips"
        className="scroll-mt-24 border-y border-[#E9EDE5] bg-white/70 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718B71]">
              YOUR EVERYDAY WELLNESS
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Small steps. Meaningful change.
            </h2>

            <p className="mt-4 leading-7 text-[#748078]">
              Simple reminders to help you approach everyday well-being
              with patience and kindness.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {wellnessTips.map(({ number, title, description, icon: Icon }) => (
              <article
                key={number}
                className="rounded-3xl border border-[#E8EBE2] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#284C38]/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF1E7] text-[#52775B]">
                    <Icon size={24} />
                  </div>

                  <span className="font-serif text-3xl text-[#DCE5D7]">
                    {number}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#748078]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="scroll-mt-24 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718B71]">
              YOUR WELLNESS TOOLKIT
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              Everything You Need,

              <span className="block italic text-[#64816A]">
                In One Caring Place.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-[#748078]">
              From health education to personal wellness tracking,
              HealthNest is designed to bring helpful health activities
              together in one place.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="flex gap-4 rounded-2xl border border-[#E8EBE2] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#284C38]/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF1E7] text-[#52775B]">
                  <Icon size={23} />
                </div>

                <div>
                  <h3 className="font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#748078]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#E8EBE2] bg-[#F0F5EC] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={24}
                className="mt-1 shrink-0 text-[#52775B]"
              />

              <div>
                <h3 className="font-semibold">
                  Your personal wellness space
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#748078]">
                  Sign up to explore personal goals, health tracking, and
                  other account-based features.
                </p>
              </div>
            </div>

            <Link
              to="/signup"
              className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#183D32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#285A47] sm:mt-0"
            >
              Create an account

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT / CALL TO ACTION */}

      <section
        id="about"
        className="scroll-mt-24 px-5 pb-16 lg:px-10 lg:pb-20"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#183D32] via-[#24533E] to-[#54785D] px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D0E0CD]">
                A BETTER WAY TO CARE FOR YOURSELF
              </p>

              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                Your Health Journey

                <span className="block italic text-[#D7E5D0]">
                  Starts With You.
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/75">
                Explore helpful wellness content today. When you're ready,
                create your account and start organizing your personal
                health journey with HealthNest.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-3 rounded-full bg-[#FAFAF5] px-7 py-3.5 font-semibold text-[#183D32] transition hover:bg-white"
                >
                  Get Started

                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-medium text-white transition hover:bg-white/10"
                >
                  Login
                </Link>
              </div>
            </div>

            <div className="hidden h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-white/10 lg:flex">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                <Leaf size={52} className="text-[#D7E5D0]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <Footer />
    </div>
  );
}

export default Home;