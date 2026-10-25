
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Bell,
  ShieldCheck,
  Eye,
  Moon,
  Mail,
  Smartphone,
  HeartPulse,
  Save,
  Leaf,
  CheckCircle,
} from 'lucide-react'

function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    reminderNotifications: true,
    wellnessUpdates: false,
    profileVisibility: 'private',
    displayMode: 'light',
    healthTips: true,
  })

  const [message, setMessage] = useState('')

  const handleToggle = (name) => {
    setSettings((previous) => ({
      ...previous,
      [name]: !previous[name],
    }))
    setMessage('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setSettings((previous) => ({
      ...previous,
      [name]: value,
    }))
    setMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Your settings have been saved for this demo session.')
  }

  const Toggle = ({ checked, onChange, label }) => (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        checked ? 'bg-[#52775B]' : 'bg-[#D6DDD3]'
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition ${
          checked ? 'left-[22px]' : 'left-0.5'
        }`}
      />
    </button>
  )

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

      <main className="mx-auto max-w-4xl px-5 py-10 sm:py-12">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-[#64816A]">
            YOUR PREFERENCES
          </p>

          <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
            Settings
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#748078]">
            Manage your notification, privacy, and display preferences.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="rounded-3xl border border-[#E6EAE1] bg-white p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-[#EAF1E7] p-3 text-[#52775B]">
                <Bell size={22} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Notifications</h2>
                <p className="mt-1 text-sm text-[#829087]">
                  Choose which updates you want to receive.
                </p>
              </div>
            </div>

            <div className="divide-y divide-[#E6EAE1]">
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="flex items-start gap-3">
                  <Mail size={19} className="mt-1 text-[#64816A]" />
                  <div>
                    <h3 className="text-sm font-medium">
                      Email notifications
                    </h3>
                    <p className="mt-1 text-sm text-[#829087]">
                      Receive updates through email.
                    </p>
                  </div>
                </div>
                <Toggle
                  label="Email notifications"
                  checked={settings.emailNotifications}
                  onChange={() => handleToggle('emailNotifications')}
                />
              </div>

              <div className="flex items-center justify-between gap-4 py-4">
                <div className="flex items-start gap-3">
                  <Smartphone size={19} className="mt-1 text-[#64816A]" />
                  <div>
                    <h3 className="text-sm font-medium">
                      Reminder notifications
                    </h3>
                    <p className="mt-1 text-sm text-[#829087]">
                      Get reminders about your planned activities.
                    </p>
                  </div>
                </div>
                <Toggle
                  label="Reminder notifications"
                  checked={settings.reminderNotifications}
                  onChange={() => handleToggle('reminderNotifications')}
                />
              </div>

              <div className="flex items-center justify-between gap-4 py-4">
                <div className="flex items-start gap-3">
                  <HeartPulse size={19} className="mt-1 text-[#64816A]" />
                  <div>
                    <h3 className="text-sm font-medium">
                      Wellness updates
                    </h3>
                    <p className="mt-1 text-sm text-[#829087]">
                      Receive general wellness information.
                    </p>
                  </div>
                </div>
                <Toggle
                  label="Wellness updates"
                  checked={settings.wellnessUpdates}
                  onChange={() => handleToggle('wellnessUpdates')}
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-[#E6EAE1] bg-white p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-purple-50 p-3 text-purple-700">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Privacy</h2>
                <p className="mt-1 text-sm text-[#829087]">
                  Choose your profile visibility preference.
                </p>
              </div>
            </div>

            <label
              htmlFor="profileVisibility"
              className="text-sm font-medium"
            >
              Profile visibility
            </label>

            <select
              id="profileVisibility"
              name="profileVisibility"
              value={settings.profileVisibility}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-[#E1E8DE] bg-white px-4 py-3 text-sm outline-none focus:border-[#64816A] sm:max-w-sm"
            >
              <option value="private">Private — only me</option>
              <option value="caregiver">Shared with my caregiver</option>
            </select>

            <p className="mt-2 text-xs leading-5 text-[#829087]">
              This is a demo preference only. It does not change
              actual access permissions.
            </p>
          </section>

          <section className="rounded-3xl border border-[#E6EAE1] bg-white p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
                <Eye size={22} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Display & Wellness</h2>
                <p className="mt-1 text-sm text-[#829087]">
                  Customize your experience.
                </p>
              </div>
            </div>

            <label htmlFor="displayMode" className="text-sm font-medium">
              Display mode
            </label>

            <div className="relative mt-2 sm:max-w-sm">
              <Moon
                size={18}
                className="pointer-events-none absolute left-3 top-3.5 text-[#829087]"
              />
              <select
                id="displayMode"
                name="displayMode"
                value={settings.displayMode}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#E1E8DE] bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-[#64816A]"
              >
                <option value="light">Light mode</option>
                <option value="dark">Dark mode preference</option>
                <option value="system">Use device preference</option>
              </select>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#E6EAE1] pt-5">
              <div>
                <h3 className="text-sm font-medium">Health tips</h3>
                <p className="mt-1 text-sm text-[#829087]">
                  Show general wellness tips in your experience.
                </p>
              </div>
              <Toggle
                label="Health tips"
                checked={settings.healthTips}
                onChange={() => handleToggle('healthTips')}
              />
            </div>
          </section>

          {message && (
            <div
              role="status"
              className="flex items-start gap-2 rounded-xl border border-[#C9DEC7] bg-[#F0F7ED] p-4 text-sm text-[#355C3C]"
            >
              <CheckCircle size={18} className="mt-0.5 shrink-0" />
              {message}
            </div>
          )}

          <div className="flex justify-end border-t border-[#E6EAE1] pt-6">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#183D32] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#285A47]"
            >
              <Save size={17} />
              Save Settings
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-xs leading-5 text-[#829087]">
          Frontend demo: these settings are not permanently stored,
          and notification delivery is not connected.
        </p>
      </main>
    </div>
  )
}

export default Settings
