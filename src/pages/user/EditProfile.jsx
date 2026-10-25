
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Save,
  UserRound,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  CheckCircle,
} from 'lucide-react'

function EditProfile() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Your changes have been saved for this demo session.')
  }

  const inputClass =
    'mt-2 w-full rounded-xl border border-[#E1E8DE] bg-white px-4 py-3 text-sm text-[#183D32] outline-none transition placeholder:text-[#A0AAA1] focus:border-[#64816A] focus:ring-2 focus:ring-[#64816A]/10'

  const labelClass = 'text-sm font-medium text-[#355346]'

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">
      <header className="border-b border-[#E6EAE1] bg-white">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-serif text-2xl font-bold">
              HealthNest
            </span>
          </Link>

          <Link
            to="/profile"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#52775B] transition hover:bg-[#EAF1E7]"
          >
            <ArrowLeft size={16} />
            Back to Profile
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-10">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-[#64816A]">
            PERSONAL INFORMATION
          </p>

          <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
            Edit Your Profile
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#748078]">
            Update your details to personalize your HealthNest
            experience.
          </p>
        </div>

        <section className="rounded-3xl border border-[#E6EAE1] bg-white p-5 sm:p-8">
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
                    value={formData.fullName}
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
                    value={formData.email}
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
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className={inputClass}
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
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="gender" className={labelClass}>
                  Gender (optional)
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Prefer not to say</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
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
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    rows={3}
                    className={`${inputClass} resize-y pl-10`}
                  />
                </div>
              </div>
            </div>

            {message && (
              <div
                role="status"
                className="flex items-start gap-2 rounded-xl border border-[#C9DEC7] bg-[#F0F7ED] p-4 text-sm text-[#355C3C]"
              >
                <CheckCircle size={18} className="mt-0.5 shrink-0" />
                <span>{message}</span>
              </div>
            )}

            <div className="flex flex-col-reverse gap-3 border-t border-[#E6EAE1] pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => navigate('/profile')}
                className="rounded-full border border-[#DCE5D8] px-6 py-3 text-sm font-medium text-[#52775B] transition hover:bg-[#F6F8F2]"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#183D32] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#285A47]"
              >
                <Save size={17} />
                Save Changes
              </button>
            </div>
          </form>
        </section>

        <p className="mt-5 text-center text-xs leading-5 text-[#829087]">
          Demo only: changes are not permanently stored or connected
          to your Profile page yet.
        </p>
      </main>
    </div>
  )
}

export default EditProfile
