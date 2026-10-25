
import React, { useState } from 'react'
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Search,
  Plus,
  Trash2,
  CheckCircle2,
  Stethoscope,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function ManageAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: 'General health check-up',
      provider: 'General physician',
      date: '2026-10-25',
      time: '10:00',
      location: 'Clinic',
      status: 'Upcoming',
    },
    {
      id: 2,
      title: 'Follow-up consultation',
      provider: 'Healthcare professional',
      date: '2026-10-29',
      time: '15:30',
      location: 'Clinic',
      status: 'Upcoming',
    },
    {
      id: 3,
      title: 'Routine consultation',
      provider: 'General physician',
      date: '2026-10-12',
      time: '11:00',
      location: 'Online',
      status: 'Completed',
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)

  const [title, setTitle] = useState('')
  const [provider, setProvider] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('Clinic')

  const addAppointment = (e) => {
    e.preventDefault()

    if (!title.trim() || !date || !time) {
      return
    }

    setAppointments((previous) => [
      {
        id: Date.now(),
        title: title.trim(),
        provider: provider.trim() || 'Not specified',
        date,
        time,
        location,
        status: 'Upcoming',
      },
      ...previous,
    ])

    setTitle('')
    setProvider('')
    setDate('')
    setTime('')
    setLocation('Clinic')
    setShowForm(false)
  }

  const deleteAppointment = (id) => {
    setAppointments((previous) =>
      previous.filter((appointment) => appointment.id !== id)
    )
  }

  const toggleStatus = (id) => {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status:
                appointment.status === 'Completed'
                  ? 'Upcoming'
                  : 'Completed',
            }
          : appointment
      )
    )
  }

  const filteredAppointments = appointments
    .filter((appointment) => {
      const search = searchTerm.toLowerCase()

      return (
        appointment.title.toLowerCase().includes(search) ||
        appointment.provider.toLowerCase().includes(search) ||
        appointment.location.toLowerCase().includes(search)
      )
    })
    .filter((appointment) => {
      return (
        statusFilter === 'All' ||
        appointment.status === statusFilter
      )
    })
    .sort((a, b) =>
      `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)
    )

  const upcomingCount = appointments.filter(
    (appointment) => appointment.status === 'Upcoming'
  ).length

  const completedCount = appointments.filter(
    (appointment) => appointment.status === 'Completed'
  ).length

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <Link
          to="/appointments"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Appointments
        </Link>

        {/* Page heading */}
        <section className="mb-8 rounded-3xl bg-[#F0EDE4] p-6 sm:p-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-white p-4 text-[#64816A]">
              <CalendarDays size={38} />
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#64816A]">
                <Stethoscope size={16} />
                Appointment organiser
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Manage Appointments
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Keep your healthcare visits organised. Search your records,
                filter by status, and update your appointment list.
              </p>
            </div>
          </div>
        </section>

        {/* Demo notice */}
        <div className="mb-8 rounded-xl border border-[#E7DCC7] bg-white p-4 text-sm leading-6 text-gray-600">
          <strong className="text-[#183D32]">Demo data:</strong> These
          appointments are examples. Changes are temporary and do not
          contact a real clinic or healthcare professional.
        </div>

        {/* Summary */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <p className="text-sm text-gray-500">All appointments</p>
            <h2 className="mt-2 text-3xl font-bold">
              {appointments.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <p className="text-sm text-gray-500">Upcoming</p>
            <h2 className="mt-2 text-3xl font-bold">{upcomingCount}</h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <p className="text-sm text-gray-500">Completed</p>
            <h2 className="mt-2 text-3xl font-bold">{completedCount}</h2>
          </div>
        </section>

        {/* Search and filters */}
        <section className="mb-6 rounded-2xl border border-[#E7E9DF] bg-white p-5">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search appointments, providers, or locations..."
                className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-[#64816A]"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
            >
              <option value="All">All statuses</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
            </select>

            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
            >
              <Plus size={18} />
              Add appointment
            </button>
          </div>
        </section>

        {/* Add form */}
        {showForm && (
          <form
            onSubmit={addAppointment}
            className="mb-8 space-y-5 rounded-2xl border border-[#E7E9DF] bg-white p-6"
          >
            <h2 className="text-xl font-bold">New appointment</h2>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Appointment title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Example: General health check-up"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Doctor or provider
              </label>

              <input
                type="text"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                placeholder="Enter provider name (optional)"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Date
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Time
                </label>

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Appointment type
              </label>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
              >
                <option value="Clinic">Clinic / In person</option>
                <option value="Online">Online consultation</option>
                <option value="Hospital">Hospital</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
              >
                Save appointment
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Appointment list */}
        <section className="rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Appointment records</h2>
            <p className="mt-2 text-sm text-gray-500">
              Showing {filteredAppointments.length} of {appointments.length}{' '}
              appointments
            </p>
          </div>

          {filteredAppointments.length === 0 ? (
            <div className="rounded-xl bg-[#FAFAF5] p-8 text-center">
              <Search
                size={30}
                className="mx-auto mb-3 text-[#64816A]"
              />
              <p className="font-medium">No matching appointments</p>
              <p className="mt-2 text-sm text-gray-500">
                Try another search term or status filter.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAppointments.map((appointment) => (
                <article
                  key={appointment.id}
                  className="rounded-xl border border-gray-100 p-5"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                        <CalendarDays size={23} />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {appointment.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {appointment.provider}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
                          <span className="flex items-center gap-2">
                            <CalendarDays size={15} />
                            {appointment.date}
                          </span>

                          <span className="flex items-center gap-2">
                            <Clock size={15} />
                            {appointment.time}
                          </span>
                        </div>

                        <p className="mt-2 text-sm text-gray-500">
                          Type: {appointment.location}
                        </p>

                        <span
                          className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                            appointment.status === 'Completed'
                              ? 'bg-[#EEF3E9] text-[#64816A]'
                              : 'bg-[#F7EFE5] text-[#9A7048]'
                          }`}
                        >
                          {appointment.status === 'Completed' && (
                            <CheckCircle2 size={13} />
                          )}
                          {appointment.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => toggleStatus(appointment.id)}
                        className="rounded-lg border border-[#DCE6D9] px-3 py-2 text-sm font-medium text-[#183D32] hover:bg-[#EEF3E9]"
                      >
                        {appointment.status === 'Completed'
                          ? 'Mark upcoming'
                          : 'Mark completed'}
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteAppointment(appointment.id)}
                        aria-label={`Delete ${appointment.title}`}
                        title="Delete appointment"
                        className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          Appointment records are stored temporarily in page state. Refreshing
          the page resets this demo data.
        </p>
      </main>
    </div>
  )
}

export default ManageAppointments
