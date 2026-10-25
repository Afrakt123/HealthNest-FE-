import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const relatedPages = {
  '/dashboard': [
    { label: 'Health Tracking', to: '/health-tracking' },
    { label: 'Health Goals', to: '/health-goals' },
    { label: 'Appointments', to: '/appointments' },
    { label: 'Health Assistant', to: '/health-assistant' },
    { label: 'Profile', to: '/profile' },
  ],
  '/health-tracking': [
    { label: 'Dashboard', to: '/dashboard', back: true },
    { label: 'Health Goals', to: '/health-goals' },
    { label: 'Health Journey', to: '/health-journey' },
    { label: 'Recommendations', to: '/recommendations' },
  ],
  '/health-goals': [
    { label: 'Dashboard', to: '/dashboard', back: true },
    { label: 'Health Tracking', to: '/health-tracking' },
    { label: 'Health Journey', to: '/health-journey' },
  ],
  '/health-journey': [
    { label: 'Dashboard', to: '/dashboard', back: true },
    { label: 'Health Tracking', to: '/health-tracking' },
    { label: 'Health Goals', to: '/health-goals' },
  ],
  '/appointments': [
    { label: 'Dashboard', to: '/dashboard', back: true },
    { label: 'Manage Appointments', to: '/manage-appointments' },
    { label: 'Doctor Details', to: '/doctor-details' },
    { label: 'Medication Reminders', to: '/medication-reminders' },
  ],
  '/manage-appointments': [
    { label: 'Appointments', to: '/appointments', back: true },
    { label: 'Doctor Details', to: '/doctor-details' },
  ],
  '/doctor-details': [
    { label: 'Appointments', to: '/appointments', back: true },
    { label: 'Manage Appointments', to: '/manage-appointments' },
  ],
  '/medication-reminders': [
    { label: 'Appointments', to: '/appointments', back: true },
    { label: 'Activity Reminders', to: '/activity-reminders' },
  ],
  '/activity-reminders': [
    { label: 'Appointments', to: '/appointments', back: true },
    { label: 'Medication Reminders', to: '/medication-reminders' },
  ],
  '/profile': [
    { label: 'Dashboard', to: '/dashboard', back: true },
    { label: 'Edit Profile', to: '/edit-profile' },
    { label: 'Settings', to: '/settings' },
  ],
  '/edit-profile': [
    { label: 'Profile', to: '/profile', back: true },
    { label: 'Dashboard', to: '/dashboard' },
  ],
  '/settings': [
    { label: 'Dashboard', to: '/dashboard', back: true },
    { label: 'Profile', to: '/profile' },
    { label: 'Edit Profile', to: '/edit-profile' },
  ],
  '/category-selection': [
    { label: 'Dashboard', to: '/dashboard', back: true },
    { label: 'Health Tracking', to: '/health-tracking' },
  ],
  '/health-assistant': [
    { label: 'Dashboard', to: '/dashboard', back: true },
    { label: 'Recommendations', to: '/recommendations' },
    { label: 'Medical Explanation', to: '/medical-explanation' },
    { label: 'Health Education', to: '/health-education' },
  ],
  '/recommendations': [
    { label: 'Health Assistant', to: '/health-assistant', back: true },
    { label: 'Health Tracking', to: '/health-tracking' },
    { label: 'Health Education', to: '/health-education' },
  ],
  '/medical-explanation': [
    { label: 'Health Assistant', to: '/health-assistant', back: true },
    { label: 'Recommendations', to: '/recommendations' },
    { label: 'Health Education', to: '/health-education' },
  ],
  '/health-education': [
    { label: 'Health Assistant', to: '/health-assistant', back: true },
    { label: 'Recommendations', to: '/recommendations' },
  ],
  '/caregiver-management': [
    { label: 'Dashboard', to: '/dashboard', back: true },
    { label: 'Shared Health Info', to: '/shared-health-info' },
  ],
  '/shared-health-info': [
    { label: 'Caregiver Management', to: '/caregiver-management', back: true },
    { label: 'Dashboard', to: '/dashboard' },
  ],
  '/maternal-care': [
    { label: 'Health Tracking', to: '/health-tracking', back: true },
    { label: 'Health Goals', to: '/health-goals' },
    { label: 'Appointments', to: '/appointments' },
  ],
  '/womens-health': [
    { label: 'Health Tracking', to: '/health-tracking', back: true },
    { label: 'Health Goals', to: '/health-goals' },
    { label: 'Recommendations', to: '/recommendations' },
  ],
  '/elderly-care': [
    { label: 'Health Tracking', to: '/health-tracking', back: true },
    { label: 'Appointments', to: '/appointments' },
    { label: 'Caregiver Management', to: '/caregiver-management' },
  ],
  '/fitness-wellness': [
    { label: 'Health Tracking', to: '/health-tracking', back: true },
    { label: 'Health Goals', to: '/health-goals' },
    { label: 'Health Journey', to: '/health-journey' },
  ],
  '/admin-dashboard': [
    { label: 'Admin Login', to: '/admin-login', back: true },
    { label: 'User Management', to: '/admin/users' },
    { label: 'Category Management', to: '/admin/categories' },
    { label: 'Content Management', to: '/admin/content' },
    { label: 'Reports', to: '/admin/reports' },
    { label: 'Notifications', to: '/admin/notifications' },
  ],
  '/admin/users': [{ label: 'Admin Dashboard', to: '/admin-dashboard', back: true }],
  '/admin/categories': [{ label: 'Admin Dashboard', to: '/admin-dashboard', back: true }],
  '/admin/content': [{ label: 'Admin Dashboard', to: '/admin-dashboard', back: true }],
  '/admin/reports': [{ label: 'Admin Dashboard', to: '/admin-dashboard', back: true }],
  '/admin/notifications': [{ label: 'Admin Dashboard', to: '/admin-dashboard', back: true }],
}

export default function RelatedPageLinks() {
  const { pathname } = useLocation()
  const links = relatedPages[pathname]

  // Only show contextual links on pages where they are useful.
  if (!links?.length) return null

  return (
    <nav
      aria-label="Related pages"
      className="mx-auto my-8 w-[calc(100%-2rem)] max-w-7xl rounded-2xl border border-[#E3E9DF] bg-[#FAFAF5] p-4 sm:p-5"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#748078]">
        Continue to
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map(({ label, to, back }) => (
          <Link
            key={to}
            to={to}
            className="inline-flex items-center gap-2 rounded-full border border-[#DCE5D8] bg-white px-4 py-2.5 text-sm font-medium text-[#183D32] transition hover:border-[#A9C3A8] hover:bg-[#EAF1E7]"
          >
            {back && <ArrowLeft size={15} />}
            {label}
            {!back && <ArrowRight size={15} />}
          </Link>
        ))}
      </div>
    </nav>
  )
}
