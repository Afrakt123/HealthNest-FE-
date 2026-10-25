import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Leaf,
  UserRound,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
} from 'lucide-react';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!formData.password.trim()) {
      setError('Please enter your password.');
      return;
    }

    // Temporary frontend-only login. Authentication is not connected yet.
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAF5] px-5 py-10 text-[#183D32]">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <Leaf size={32} className="text-[#64816A]" />
          <span className="font-serif text-3xl font-bold">HealthNest</span>
        </Link>

        <div className="rounded-3xl border border-[#E6EAE1] bg-white p-7 shadow-xl shadow-[#183D32]/5 sm:p-9">
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF1E7] text-[#52775B]">
              <UserRound size={28} />
            </div>

            <h1 className="font-serif text-3xl font-semibold">Welcome back</h1>

            <p className="mt-2 text-sm leading-6 text-[#748078]">
              Log in to continue your HealthNest journey.
            </p>
          </div>

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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="w-full py-3 outline-none"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#52775B] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#DCE5D7] px-4 focus-within:border-[#64816A] focus-within:ring-2 focus-within:ring-[#64816A]/15">
                <Lock size={19} className="shrink-0 text-[#829087]" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  className="w-full min-w-0 py-3 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="shrink-0 text-[#829087] hover:text-[#183D32]"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
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
              Log In <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#748078]">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-semibold text-[#52775B] hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-[#829087]">
          Your health and well-being deserve thoughtful care.
        </p>
      </div>
    </div>
  );
}

export default Login;
