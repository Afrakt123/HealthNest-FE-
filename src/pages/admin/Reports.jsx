
import React, { useMemo, useState } from 'react'
import {
  ArrowDownToLine,
  CalendarDays,
  ChartColumn,
  Users,
  HeartPulse,
  CalendarCheck,
  FileText,
  TrendingUp,
  Activity,
  Filter,
} from 'lucide-react'

const initialReports = [
  {
    id: 1,
    title: 'User Registration Report',
    category: 'Users',
    period: 'October 2026',
    description: 'Summary of registered users and account activity.',
    value: '248',
    change: '+12%',
  },
  {
    id: 2,
    title: 'Health Category Report',
    category: 'Categories',
    period: 'October 2026',
    description: 'Overview of user interest across health categories.',
    value: '9',
    change: '+2',
  },
  {
    id: 3,
    title: 'Appointment Report',
    category: 'Appointments',
    period: 'October 2026',
    description: 'Demo summary of scheduled and completed appointments.',
    value: '86',
    change: '+8%',
  },
  {
    id: 4,
    title: 'Platform Activity Report',
    category: 'Activity',
    period: 'October 2026',
    description: 'Overview of sample activity recorded on the platform.',
    value: '1,240',
    change: '+15%',
  },
]

const stats = [
  {
    title: 'Total Users',
    value: '248',
    change: '+12%',
    icon: Users,
  },
  {
    title: 'Health Categories',
    value: '9',
    change: 'Available',
    icon: HeartPulse,
  },
  {
    title: 'Appointments',
    value: '86',
    change: '+8%',
    icon: CalendarCheck,
  },
  {
    title: 'Activities Recorded',
    value: '1,240',
    change: '+15%',
    icon: Activity,
  },
]

function Reports() {
  const [reports, setReports] = useState(initialReports)
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [periodFilter, setPeriodFilter] = useState('All')

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesCategory =
        categoryFilter === 'All' ||
        report.category === categoryFilter

      const matchesPeriod =
        periodFilter === 'All' ||
        report.period === periodFilter

      const matchesSearch =
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.description.toLowerCase().includes(searchTerm.toLowerCase())

      return matchesCategory && matchesPeriod && matchesSearch
    })
  }, [reports, categoryFilter, periodFilter, searchTerm])

  const downloadReport = (report) => {
    const content = [
      `HealthNest Report: ${report.title}`,
      `Category: ${report.category}`,
      `Period: ${report.period}`,
      `Summary: ${report.description}`,
      `Displayed value: ${report.value}`,
      `Change: ${report.change}`,
      '',
      'Note: This is sample demonstration data, not actual user or medical data.',
    ].join('\n')

    const file = new Blob([content], {
      type: 'text/plain;charset=utf-8',
    })

    const url = URL.createObjectURL(file)
    const link = document.createElement('a')

    link.href = url
    link.download = `${report.title.toLowerCase().replaceAll(' ', '-')}.txt`
    link.click()

    URL.revokeObjectURL(url)
  }

  const downloadAllReports = () => {
    const content = filteredReports
      .map((report) => {
        return [
          `Report: ${report.title}`,
          `Category: ${report.category}`,
          `Period: ${report.period}`,
          `Summary: ${report.description}`,
          `Value: ${report.value}`,
          `Change: ${report.change}`,
          '---',
        ].join('\n')
      })
      .join('\n\n')

    const file = new Blob(
      [
        content,
        '\n\nNote: This is sample demonstration data, not actual user or medical data.',
      ],
      { type: 'text/plain;charset=utf-8' }
    )

    const url = URL.createObjectURL(file)
    const link = document.createElement('a')

    link.href = url
    link.download = 'healthnest-reports.txt'
    link.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-8 text-[#183D32] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#64816A]">
              Admin Panel
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl">
              Reports & Analytics
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              View sample platform statistics and download demonstration
              reports for HealthNest.
            </p>
          </div>

          <button
            type="button"
            onClick={downloadAllReports}
            disabled={filteredReports.length === 0}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#285747] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ArrowDownToLine size={18} />
            Download Reports
          </button>
        </div>

        {/* Statistics cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-[#E5E9DF] bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      {stat.title}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                      {stat.value}
                    </h2>
                  </div>

                  <div className="rounded-xl bg-[#EDF3E9] p-3 text-[#42664A]">
                    <Icon size={23} />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-[#64816A]">
                  <TrendingUp size={16} />
                  <span>{stat.change}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Report filters */}
        <div className="mb-6 rounded-2xl border border-[#E5E9DF] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Filter size={19} />
            <h2 className="font-semibold">Filter Reports</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label
                htmlFor="report-search"
                className="mb-2 block text-sm font-medium"
              >
                Search reports
              </label>

              <input
                id="report-search"
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by title or description"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#64816A] focus:ring-2 focus:ring-[#64816A]/20"
              />
            </div>

            <div>
              <label
                htmlFor="report-category"
                className="mb-2 block text-sm font-medium"
              >
                Category
              </label>

              <select
                id="report-category"
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#64816A]"
              >
                <option value="All">All categories</option>
                <option value="Users">Users</option>
                <option value="Categories">Categories</option>
                <option value="Appointments">Appointments</option>
                <option value="Activity">Activity</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="report-period"
                className="mb-2 block text-sm font-medium"
              >
                Period
              </label>

              <select
                id="report-period"
                value={periodFilter}
                onChange={(event) => setPeriodFilter(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#64816A]"
              >
                <option value="All">All periods</option>
                <option value="October 2026">October 2026</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reports list */}
        <div className="overflow-hidden rounded-2xl border border-[#E5E9DF] bg-white shadow-sm">
          <div className="flex flex-col gap-2 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold">Available Reports</h2>
              <p className="mt-1 text-sm text-gray-500">
                {filteredReports.length} report(s) found
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays size={17} />
              October 2026
            </div>
          </div>

          {filteredReports.length === 0 ? (
            <div className="px-5 py-16 text-center">
              <FileText
                size={40}
                className="mx-auto mb-3 text-gray-300"
              />

              <h3 className="font-semibold">No reports found</h3>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or filters.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm('')
                  setCategoryFilter('All')
                  setPeriodFilter('All')
                }}
                className="mt-4 rounded-lg bg-[#EDF3E9] px-4 py-2 text-sm font-semibold text-[#183D32] hover:bg-[#DDE9D8]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredReports.map((report) => (
                <div
                  key={report.id}
                  className="flex flex-col gap-4 p-5 transition hover:bg-[#FAFAF5]/70 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-[#EDF3E9] p-3 text-[#42664A]">
                      <ChartColumn size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold">{report.title}</h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {report.description}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#EDF3E9] px-3 py-1 text-xs font-medium text-[#42664A]">
                          {report.category}
                        </span>

                        <span className="text-xs text-gray-500">
                          {report.period}
                        </span>

                        <span className="text-xs text-gray-500">
                          Sample value: {report.value}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => downloadReport(report)}
                    className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-[#D9E3D5] px-4 py-2.5 text-sm font-semibold transition hover:bg-[#EDF3E9] sm:self-center"
                  >
                    <ArrowDownToLine size={16} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Demo data notice */}
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <strong>Demo data notice:</strong> These figures are examples for
          the frontend. They are not calculated from a database and do not
          represent actual users, appointments, or medical records.
        </div>
      </div>
    </div>
  )
}

export default Reports
