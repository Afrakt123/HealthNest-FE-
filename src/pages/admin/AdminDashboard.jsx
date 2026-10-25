
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Users,
  HeartPulse,
  BookOpen,
  CalendarDays,
  Bell,
  FileBarChart,
  Settings,
  UserCog,
  Layers,
  FileText,
  ArrowUpRight,
  Activity,
  Clock,
  LogOut
} from 'lucide-react'

const statistics = [
  {
    title: 'Total Users',
    value: '1,248',
    description: 'Registered accounts',
    icon: Users
  },
  {
    title: 'Health Categories',
    value: '9',
    description: 'Available categories',
    icon: HeartPulse
  },
  {
    title: 'Education Articles',
    value: '36',
    description: 'Learning resources',
    icon: BookOpen
  },
  {
    title: 'Appointments',
    value: '84',
    description: 'Sample appointment records',
    icon: CalendarDays
  }
]

const quickLinks = [
  {
    title: 'User Management',
    description: 'View and manage user accounts',
    icon: UserCog,
    path: '/admin/users'
  },
  {
    title: 'Category Management',
    description: 'Manage health categories',
    icon: Layers,
    path: '/admin/categories'
  },
  {
    title: 'Content Management',
    description: 'Manage health education content',
    icon: FileText,
    path: '/admin/content'
  },
  {
    title: 'Reports',
    description: 'View system reports',
    icon: FileBarChart,
    path: '/admin/reports'
  },
  {
    title: 'Notifications',
    description: 'Manage system announcements',
    icon: Bell,
    path: '/admin/notifications'
  }
]

const recentActivities = [
  {
    id: 1,
    title: 'New user registered',
    description: 'A new account was added to the platform.',
    time: 'Today',
    icon: Users
  },
  {
    id: 2,
    title: 'Health article updated',
    description: 'Educational content was updated.',
    time: 'Yesterday',
    icon: BookOpen
  },
  {
    id: 3,
    title: 'Category reviewed',
    description: 'A health category was reviewed.',
    time: '2 days ago',
    icon: HeartPulse
  },
  {
    id: 4,
    title: 'Monthly report prepared',
    description: 'A sample report entry was created.',
    time: '3 days ago',
    icon: FileBarChart
  }
]

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">

      {/* Top navigation */}
      <header className="border-b border-[#E3E8DF] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">

          <Link to="/admin-dashboard" className="flex items-center gap-3">
            <div className="rounded-xl bg-[#183D32] p-2.5 text-white">
              <ShieldCheck size={25} />
            </div>
            <div>
              <p className="text-lg font-bold">HealthNest</p>
              <p className="text-xs text-[#64816A]">Admin Portal</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Administrator</p>
              <p className="text-xs text-gray-500">Demo account</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EFE5]">
              <UserCog size={21} />
            </div>

            <Link
              to="/admin-login"
              title="Return to admin login"
              className="rounded-xl border border-[#DCE5D9] p-2.5 hover:bg-[#F2F5EF]"
            >
              <LogOut size={18} />
            </Link>
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8">

        {/* Welcome section */}
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-[#64816A]">
              Administration / Overview
            </p>
            <h1 className="mt-2 text-3xl font-bold">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Manage HealthNest users, health categories, educational content,
              and platform information.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 text-sm">
            <Activity size={18} className="text-[#64816A]" />
            <span className="font-medium">Dashboard Overview</span>
          </div>
        </section>

        {/* Demo data notice */}
        <div className="mt-6 rounded-2xl border border-[#E3E8DF] bg-white p-4">
          <p className="text-sm leading-6 text-gray-600">
            <span className="font-semibold text-[#183D32]">
              Demo dashboard:
            </span>{' '}
            All numbers and recent activities on this page are examples.
            They are not retrieved from a database or live user accounts.
          </p>
        </div>

        {/* Statistics */}
        <section className="mt-8">
          <h2 className="text-xl font-bold">Platform Summary</h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {statistics.map((item) => {
              const StatIcon = item.icon

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-xl bg-[#E8EFE5] p-3">
                      <StatIcon size={23} />
                    </div>
                    <ArrowUpRight size={19} className="text-[#64816A]" />
                  </div>

                  <p className="mt-5 text-sm text-gray-500">
                    {item.title}
                  </p>
                  <p className="mt-1 text-3xl font-bold">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        {/* Management links and activity */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          <section className="lg:col-span-2">
            <h2 className="text-xl font-bold">Management</h2>
            <p className="mt-2 text-sm text-gray-500">
              Choose a section to manage.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {quickLinks.map((item) => {
                const QuickIcon = item.icon

                return (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="group rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#AABDA6]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="rounded-xl bg-[#E8EFE5] p-3">
                        <QuickIcon size={22} />
                      </div>

                      <ArrowUpRight
                        size={19}
                        className="text-[#64816A] transition group-hover:translate-x-0.5"
                      />
                    </div>

                    <h3 className="mt-4 font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Recent activities */}
          <section>
            <h2 className="text-xl font-bold">Recent Activities</h2>
            <p className="mt-2 text-sm text-gray-500">
              Example platform activity.
            </p>

            <div className="mt-5 rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
              <div className="space-y-5">
                {recentActivities.map((item) => {
                  const ActivityIcon = item.icon

                  return (
                    <div key={item.id} className="flex items-start gap-3">
                      <div className="rounded-xl bg-[#E8EFE5] p-2.5">
                        <ActivityIcon size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          {item.description}
                        </p>
                        <p className="mt-2 flex items-center gap-1 text-xs text-[#64816A]">
                          <Clock size={13} />
                          {item.time}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <Link
              to="/admin/reports"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 text-sm font-semibold hover:bg-[#F2F5EF]"
            >
              <FileBarChart size={17} />
              View Reports
            </Link>
          </section>

        </div>

        {/* Footer note */}
        <footer className="mt-12 border-t border-[#E3E8DF] py-6">
          <div className="flex flex-col justify-between gap-2 text-xs text-gray-500 sm:flex-row">
            <p>HealthNest Admin Portal</p>
            <p>Frontend demonstration · Sample data only</p>
          </div>
        </footer>

      </main>
    </div>
  )
}

export default AdminDashboard
