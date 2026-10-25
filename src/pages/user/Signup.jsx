import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Leaf,
  UserRound,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Baby,
  Heart,
  Stethoscope,
  Dumbbell,
  CheckCircle2,
} from 'lucide-react'

const healthCategories = [
  {
    id: 'maternal-care',
    title: 'Maternal Care',
    description: 'Pregnancy and motherhood support',
    icon: Baby,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    id: 'elderly-care',
    title: 'Elderly Care',
    description: 'Healthy ageing and daily care',
    icon: Heart,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    id: 'womens-health',
    title: "Women's Health",
    description: 'Women’s wellness and PCOS care',
    icon: Stethoscope,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 'fitness-wellness',
    title: 'Fitness & Wellness',
    description: 'Exercise and healthy habits',
    icon: Dumbbell,
    color: 'bg-sky-50 text-sky-600',
  },
]

function Signup() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [selectedCategory, setSelectedCategory] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    const fullName = formData.fullName.trim()
    const email = formData.email.trim()

    if (fullName.length < 2) {
      setError('Please enter your full name.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must contain at least 6 characters.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!selectedCategory) {
      setError('Please select one health category.')
      return
    }

    // Save the selected category for the dashboard.
    localStorage.setItem(
      'healthNestCategories',
      JSON.stringify([selectedCategory])
    )

    // Save basic profile information for the frontend demo.
    // Do not save passwords in localStorage.
    localStorage.setItem(
      'user',
      JSON.stringify({
        fullName,
        email,
      })
    )

    // Carry the email to the login page.
    navigate('/login', {
      state: {
        signupEmail: email,
      },
    })
  }

  const inputClass =
    'w-full rounded-xl border border-[#E2E8DF] bg-white py-3 pl-11 pr-4 text-sm text-[#183D32] outline-none transition placeholder:text-[#A0AAA1] focus:border-[#64816A] focus:ring-2 focus:ring-[#64816A]/20'

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">
      {/* Header */}
      <header className="border-b border-[#E6EAE1] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link to="/" className="flex items-center gap-2">
            <Leaf size={30} className="text-[#64816A]" />

            <span className="font-serif text-2xl font-bold">
              HealthNest
            </span>
          </Link>

          <p className="text-sm text-[#748078]">
            Already a member?{' '}
            <Link
              to="/login"
              className="font-semibold text-[#52775B] hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </header>

      {/* Signup Form */}
      <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF1E7]">
            <Leaf size={30} className="text-[#52775B]" />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#64816A]">
            YOUR PERSONAL HEALTH SPACE
          </p>

          <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Create your account
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#748078]">
            Start your wellness journey with a dashboard designed around
            your health needs.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#E6EAE1] bg-white p-5 shadow-sm sm:p-8"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium"
            >
              Full name
            </label>

            <div className="relative">
              <UserRound
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829087]"
              />

              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                className={inputClass}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Email address
            </label>

            <div className="relative">
              <Mail
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829087]"
              />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className={inputClass}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mt-5">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>

            <div className="relative">
              <Lock
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829087]"
              />

              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                autoComplete="new-password"
                className={`${inputClass} pr-12`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#829087]"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mt-5">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium"
            >
              Confirm password
            </label>

            <div className="relative">
              <Lock
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829087]"
              />

              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Enter your password again"
                autoComplete="new-password"
                className={`${inputClass} pr-12`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                aria-label={
                  showConfirmPassword ? 'Hide password' : 'Show password'
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#829087]"
              >
                {showConfirmPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          {/* Single Health Category Selection */}
          <div className="mt-8">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold">
                  Choose your health category
                </h2>

                <p className="mt-1 text-sm text-[#748078]">
                  Select one category to personalize your dashboard.
                </p>
              </div>

              <span className="text-xs font-medium text-[#64816A]">
                Choose one
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {healthCategories.map(
                ({ id, title, description, icon: Icon, color }) => {
                  const isSelected = selectedCategory === id

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(id)
                        setError('')
                      }}
                      aria-pressed={isSelected}
                      className={`relative rounded-2xl border p-4 text-left transition ${
                        isSelected
                          ? 'border-[#64816A] bg-[#F0F5EC] ring-2 ring-[#64816A]/30'
                          : 'border-[#E6EAE1] bg-white hover:border-[#A6B9A2] hover:bg-[#FAFBF8]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${color}`}
                        >
                          <Icon size={22} />
                        </div>

                        <div className="flex-1 pr-5">
                          <h3 className="font-semibold">{title}</h3>

                          <p className="mt-1 text-xs leading-5 text-[#748078]">
                            {description}
                          </p>
                        </div>
                      </div>

                      {isSelected && (
                        <CheckCircle2
                          size={21}
                          className="absolute right-3 top-3 text-[#52775B]"
                        />
                      )}
                    </button>
                  )
                }
              )}
            </div>
          </div>

          {/* Validation Error */}
          {error && (
            <div
              role="alert"
              className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#183D32] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#285A47]"
          >
            Create Account
            <ArrowRight size={18} />
          </button>

          <p className="mt-5 text-center text-xs leading-5 text-[#829087]">
            Your selected category will be used to personalize your
            HealthNest dashboard.
          </p>

          <p className="mt-5 text-center text-sm text-[#748078]">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-[#52775B] hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>

        <p className="mt-6 text-center text-xs text-[#829087]">
          HealthNest provides general wellness information and is not a
          replacement for professional medical advice.
        </p>
      </main>
    </div>
  )
}

export default Signup