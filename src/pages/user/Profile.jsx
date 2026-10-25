
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ArrowLeft,
  Save,
  HeartPulse,
  Leaf,
  ShieldCheck,
} from 'lucide-react'

function Profile() {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    emergencyContact: '',
    healthGoal: 'General wellness',
  })

  const [saved, setSaved] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }))

    setSaved(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
  }

  const inputClass =
    'mt-2 w-full rounded-xl border border-[#E1E8DE] bg-white px-4 py-3 text-sm text-[#183D32] outline-none transition placeholder:text-[#A0AAA1] focus:border-[#64816A] focus:ring-2 focus:ring-[#64816A]/10'

  const labelClass = 'text-sm font-medium text-[#355346]'

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
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#52775B] transition hover:bg-[#EAF1E7]"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-8 sm:py-12">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-[#64816A]">
            YOUR PERSONAL SPACE
          </p>

          <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#748078]">
            Add your details and preferences to personalize your
            HealthNest experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-3xl border border-[#E6EAE1] bg-white p-6 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#EAF1E7] text-[#52775B]">
              <UserRound size={42} />
            </div>

            <h2 className="mt-4 break-words text-xl font-semibold">
              {profile.fullName || 'Your Name'}
            </h2>

            <p className="mt-1 break-all text-sm text-[#829087]">
              {profile.email || 'Your email address'}
            </p>

            <div className="mt-6 rounded-2xl bg-[#F6F8F2] p-4 text-left">
              <div className="flex items-center gap-2">
                <HeartPulse size={20} className="text-[#64816A]" />
                <span className="text-sm font-medium">
                  Health goal
                </span>
              </div>

              <p className="mt-2 text-sm text-[#748078]">
                {profile.healthGoal}
              </p>
            </div>

            <div className="mt-4 flex items-start gap-2 text-left text-xs leading-5 text-[#829087]">
              <ShieldCheck size={17} className="mt-0.5 shrink-0" />
              <p>
                Your profile is currently stored only in this page's
                temporary state.
              </p>
            </div>
          </aside>

          <section className="rounded-3xl border border-[#E6EAE1] bg-white p-5 sm:p-8">
            <div className="mb-7">
              <h2 className="font-serif text-2xl font-semibold">
                Personal Information
              </h2>

              <p className="mt-2 text-sm text-[#829087]">
                Fill in the details you want to include.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name
                  </label>
                  <div className="relative">
                    <UserRound
                      size={18}
                      className="absolute left-3 top-5 text-[#829087]"
                    />
                    <input
                      id="fullName"
                      name="fullName"
                      value={profile.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-5 text-[#829087]"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={profile.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-3 top-5 text-[#829087]"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={profile.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="dateOfBirth" className={labelClass}>
                    Date of Birth
                  </label>
                  <div className="relative">
                    <CalendarDays
                      size={18}
                      className="absolute left-3 top-5 text-[#829087]"
                    />
                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={profile.dateOfBirth}
                      onChange={handleChange}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="gender" className={labelClass}>
                    Gender (optional)
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Prefer not to say</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="emergencyContact"
                    className={labelClass}
                  >
                    Emergency Contact
                  </label>
                  <input
                    id="emergencyContact"
                    name="emergencyContact"
                    type="tel"
                    value={profile.emergencyContact}
                    onChange={handleChange}
                    placeholder="Emergency contact number"
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="address" className={labelClass}>
                    Address
                  </label>
                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-3 top-5 text-[#829087]"
                    />
                    <textarea
                      id="address"
                      name="address"
                      value={profile.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                      rows={3}
                      className={`${inputClass} resize-y pl-10`}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="healthGoal" className={labelClass}>
                    Main Health Goal
                  </label>
                  <select
                    id="healthGoal"
                    name="healthGoal"
                    value={profile.healthGoal}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option>General wellness</option>
                    <option>Fitness and exercise</option>
                    <option>Nutrition and healthy eating</option>
                    <option>Maternal care</option>
                    <option>Women's health</option>
                    <option>Elderly care</option>
                    <option>Better sleep</option>
                  </select>
                </div>
              </div>

              {saved && (
                <div
                  role="status"
                  className="rounded-xl border border-[#C9DEC7] bg-[#F0F7ED] p-4 text-sm text-[#355C3C]"
                >
                  Profile form saved for this session. It has not
                  been stored in a database.
                </div>
              )}

              <div className="flex flex-col gap-3 border-t border-[#E6EAE1] pt-6 sm:flex-row sm:justify-end">
                <Link
                  to="/dashboard"
                  className="rounded-full border border-[#DCE5D8] px-6 py-3 text-center text-sm font-medium text-[#52775B] transition hover:bg-[#F6F8F2]"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#183D32] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#285A47]"
                >
                  <Save size={17} />
                  Save Profile
                </button>
              </div>
            </form>
          </section>
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-[#829087]">
          This is a frontend demo. Profile details are not sent to a
          server or permanently saved.
        </p>
      </main>
    </div>
  )
}

export default Profile
