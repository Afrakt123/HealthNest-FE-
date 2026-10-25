import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Leaf,
  Mail,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

function ForgtPswd() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }

    // Frontend demo only. No reset email is sent yet.
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAF5] px-5 py-10 text-[#183D32]">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <Leaf size={32} className="text-[#64816A]" />
          <span className="font-serif text-3xl font-bold">HealthNest</span>
        </Link>

        <div className="rounded-3xl border border-[#E6EAE1] bg-white p-7 shadow-xl shadow-[#183D32]/5 sm:p-9">
          <Link
            to="/login"
            className="mb-7 inline-flex items-center gap-2 text-sm text-[#64816A] hover:text-[#183D32]"
          >
            <ArrowLeft size={16} /> Back to Login
          </Link>

          <div className="mb-7">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF1E7] text-[#52775B]">
              <Mail size={27} />
            </div>

            <h1 className="font-serif text-3xl font-semibold">
              Forgot your password?
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#748078]">
              Enter your email address to begin the password reset process.
            </p>
          </div>

          {submitted ? (
            <div
              role="status"
              className="rounded-2xl border border-[#C9DCC6] bg-[#F0F7ED] p-5"
            >
              <CheckCircle size={30} className="text-[#52775B]" />

              <h2 className="mt-3 font-semibold">
                Request submitted!
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#52775B]">
                Your email has been accepted by this demo form. A real
                password reset email will be available after backend
                integration.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setEmail('')
                  setError('')
                }}
                className="mt-4 text-sm font-semibold underline"
              >
                Try another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-[#DCE5D7] px-4 focus-within:border-[#64816A] focus-within:ring-2 focus-within:ring-[#64816A]/15">
                  <Mail size={19} className="shrink-0 text-[#829087]" />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError('')
                    }}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className="w-full py-3 outline-none"
                  />
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#183D32] px-6 py-3.5 font-medium text-white transition hover:bg-[#285A47]"
              >
                Continue <ArrowRight size={18} />
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-[#748078]">
            Remember your password?{' '}
            <Link
              to="/login"
              className="font-semibold text-[#52775B] hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgtPswd