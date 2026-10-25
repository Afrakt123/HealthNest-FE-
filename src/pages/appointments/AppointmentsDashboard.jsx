
import React, { useState } from 'react'
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Pill,
  Activity,
  Plus,
  CheckCircle2,
  Trash2,
  Bell,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function AppointmentsDashboard() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: 'Routine health check-up',
      doctor: 'Healthcare professional',
      date: '2026-10-25',
      time: '10:00',
      status: 'Upcoming',
    },
    {
      id: 2,
      title: 'Follow-up consultation',
      doctor: 'Healthcare professional',
      date: '2026-10-29',
      time: '15:30',
      status: 'Upcoming',
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [doctor, setDoctor] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const addAppointment = (e) => {
    e.preventDefault()

    if (!title.trim() || !date || !time) {
      return
    }

    setAppointments((previous) => [
      ...previous,
      {
        id: Date.now(),
        title: title.trim(),
        doctor: doctor.trim() || 'Not specified',
        date,
        time,
        status: 'Upcoming',
      },
    ])

    setTitle('')
    setDoctor('')
    setDate('')
    setTime('')
    setShowForm(false)
  }

  const deleteAppointment = (id) => {
    setAppointments((previous) =>
      previous.filter((appointment) => appointment.id !== id)
    )
  }

  const markCompleted = (id) => {
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
          to="/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        {/* Header */}
        <section className="mb-8 rounded-3xl bg-[#F0EDE4] p-6 sm:p-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-white p-4 text-[#64816A]">
              <CalendarDays size={38} />
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#64816A]">
                <Bell size={16} />
                Stay organised
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Appointments & Reminders
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Manage your healthcare appointments and find your reminders
                from one convenient place.
              </p>
            </div>
          </div>
        </section>

        {/* Demo notice */}
        <div className="mb-8 rounded-xl border border-[#E7DCC7] bg-white p-4 text-sm leading-6 text-gray-600">
          <strong className="text-[#183D32]">Demo data:</strong> The listed
          appointments are examples. This page does not send notifications
          or book appointments with real healthcare providers.
        </div>

        {/* Summary cards */}
        <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <CalendarDays size={22} />
            </div>
            <p className="text-sm text-gray-500">Total appointments</p>
            <h2 className="mt-2 text-2xl font-bold">
              {appointments.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#F7EFE5] p-3 text-[#9A7048]">
              <Clock size={22} />
            </div>
            <p className="text-sm text-gray-500">Upcoming</p>
            <h2 className="mt-2 text-2xl font-bold">{upcomingCount}</h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <CheckCircle2 size={22} />
            </div>
            <p className="text-sm text-gray-500">Marked completed</p>
            <h2 className="mt-2 text-2xl font-bold">{completedCount}</h2>
          </div>
        </section>

        {/* Quick links */}
        <section className="mb-10">
          <h2 className="mb-5 text-xl font-bold">Quick access</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link
              to="/medication-reminders"
              className="group flex items-center justify-between rounded-2xl border border-[#E7E9DF] bg-white p-6 transition hover:border-[#64816A] hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                  <Pill size={24} />
                </div>

                <div>
                  <h3 className="font-bold">Medication Reminders</h3>
                  <p className="mt-2 text-sm leading-5 text-gray-500">
                    Organise reminders based on your existing prescriptions.
                  </p>
                </div>
              </div>

              <ArrowRight
                size={20}
                className="shrink-0 text-[#64816A] transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/activity-reminders"
              className="group flex items-center justify-between rounded-2xl border border-[#E7E9DF] bg-white p-6 transition hover:border-[#64816A] hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#F7EFE5] p-3 text-[#9A7048]">
                  <Activity size={24} />
                </div>

                <div>
                  <h3 className="font-bold">Activity Reminders</h3>
                  <p className="mt-2 text-sm leading-5 text-gray-500">
                    Plan your wellness activities and daily routines.
                  </p>
                </div>
              </div>

              <ArrowRight
                size={20}
                className="shrink-0 text-[#64816A] transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>

        {/* Appointment list */}
        <section className="rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">My appointments</h2>
              <p className="mt-2 text-sm text-gray-500">
                Add, review, or update your appointment list.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
            >
              <Plus size={18} />
              Add appointment
            </button>
          </div>

          {showForm && (
            <form
              onSubmit={addAppointment}
              className="mb-6 space-y-4 rounded-xl bg-[#FAFAF5] p-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Appointment title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Example: General check-up"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Doctor or clinic (optional)
                </label>
                <input
                  type="text"
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  placeholder="Enter doctor or clinic name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
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
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
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
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                  />
                </div>
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
                  className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {appointments.length === 0 ? (
            <div className="rounded-xl bg-[#FAFAF5] p-8 text-center">
              <CalendarDays
                size={30}
                className="mx-auto mb-3 text-[#64816A]"
              />
              <p className="font-medium">No appointments added</p>
              <p className="mt-2 text-sm text-gray-500">
                Select Add appointment to create your first entry.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {appointments
                .slice()
                .sort((a, b) =>
                  `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)
                )
                .map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex flex-col justify-between gap-4 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                        <CalendarDays size={21} />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {appointment.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {appointment.doctor}
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                          {appointment.date} · {appointment.time}
                        </p>

                        <span
                          className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                            appointment.status === 'Completed'
                              ? 'bg-[#EEF3E9] text-[#64816A]'
                              : 'bg-[#F7EFE5] text-[#9A7048]'
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => markCompleted(appointment.id)}
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
                ))}
            </div>
          )}
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          Appointments are stored temporarily in this page. Refreshing will
          reset the demo data.
        </p>
      </main>
    </div>
  )
}

export default AppointmentsDashboard
