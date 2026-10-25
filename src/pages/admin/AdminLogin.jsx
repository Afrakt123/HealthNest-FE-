
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ShieldCheck,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowLeft,
  AlertCircle
} from 'lucide-react'

function AdminLogin() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password) {
      setError('Please enter both email and password.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setError(
      'Demo login only. Admin authentication is not connected yet.'
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAF5] px-4 py-10 text-[#183D32]">
      <div className="w-full max-w-md">

        {/* Back to website */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to HealthNest
        </Link>

        {/* Login card */}
        <div className="rounded-3xl border border-[#E3E8DF] bg-white p-6 shadow-sm sm:p-9">

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8EFE5]">
              <ShieldCheck size={34} />
            </div>

            <p className="mt-5 text-sm font-semibold text-[#64816A]">
              HEALTHNEST ADMINISTRATION
            </p>

            <h1 className="mt-2 text-2xl font-bold">
              Admin Login
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Sign-in interface for HealthNest administrators.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="admin-email"
                className="mb-2 block text-sm font-semibold"
              >
                Admin email
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#DCE5D9] px-4 focus-within:border-[#64816A]">
                <Mail size={19} className="shrink-0 text-[#64816A]" />

                <input
                  id="admin-email"
                  type="email"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full bg-transparent py-3.5 text-sm outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="admin-password"
                className="mb-2 block text-sm font-semibold"
              >
                Password
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#DCE5D9] px-4 focus-within:border-[#64816A]">
                <LockKeyhole
                  size={19}
                  className="shrink-0 text-[#64816A]"
                />

                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-transparent py-3.5 text-sm outline-none"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                  aria-label={
                    showPassword ? 'Hide password' : 'Show password'
                  }
                  className="shrink-0 text-[#64816A] hover:text-[#183D32]"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Error or demo message */}
            {error && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-xl bg-[#FFF4E5] p-3 text-sm leading-6 text-[#855D1A]"
              >
                <AlertCircle size={18} className="mt-1 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-[#183D32] px-4 py-3.5 font-semibold text-white transition hover:bg-[#285746]"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 rounded-xl bg-[#F2F5EF] p-4">
            <p className="text-sm font-semibold">Demo notice</p>
            <p className="mt-1 text-xs leading-5 text-gray-600">
              This form checks the entered fields but does not verify
              administrator credentials or grant access.
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            HealthNest · Admin Portal
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
