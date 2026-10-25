
import React, { useState } from 'react'
import {
  ArrowLeft,
  Baby,
  CalendarDays,
  Heart,
  HeartPulse,
  CheckCircle2,
  Circle,
  Droplets,
  Footprints,
  Moon,
  Plus,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function MaternalCare() {
  const [completedTasks, setCompletedTasks] = useState([])
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)
  const [appointmentTitle, setAppointmentTitle] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: 'Routine prenatal check-up',
      date: 'Add your appointment date',
    },
  ])

  const careTasks = [
    {
      id: 1,
      title: 'Drink enough water',
      description: 'Keep water nearby throughout the day.',
      icon: Droplets,
    },
    {
      id: 2,
      title: 'Take a gentle walk',
      description: 'Only if suitable for you and approved by your clinician.',
      icon: Footprints,
    },
    {
      id: 3,
      title: 'Get enough rest',
      description: 'Make time for rest and comfortable sleep.',
      icon: Moon,
    },
    {
      id: 4,
      title: 'Attend prenatal appointments',
      description: 'Follow the appointment schedule advised by your clinician.',
      icon: HeartPulse,
    },
  ]

  const toggleTask = (id) => {
    setCompletedTasks((previous) =>
      previous.includes(id)
        ? previous.filter((taskId) => taskId !== id)
        : [...previous, id]
    )
  }

  const addAppointment = (e) => {
    e.preventDefault()

    if (!appointmentTitle.trim() || !appointmentDate) {
      return
    }

    setAppointments((previous) => [
      ...previous,
      {
        id: Date.now(),
        title: appointmentTitle.trim(),
        date: appointmentDate,
      },
    ])

    setAppointmentTitle('')
    setAppointmentDate('')
    setShowAppointmentForm(false)
  }

  const deleteAppointment = (id) => {
    setAppointments((previous) =>
      previous.filter((appointment) => appointment.id !== id)
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#183D32]">
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <Link
          to="/health-tracking"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Health Tracking
        </Link>

        {/* Page heading */}
        <section className="mb-8 rounded-3xl bg-[#F0EDE4] p-6 sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-white p-4 text-[#64816A]">
              <Baby size={38} />
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#64816A]">
                <Heart size={16} />
                Specialised wellness
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Maternal Care
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                A supportive space to organise pregnancy wellness habits,
                prenatal appointments, and daily care reminders.
              </p>
            </div>
          </div>
        </section>

        {/* Demo notice */}
        <div className="mb-8 rounded-xl border border-[#E7DCC7] bg-white p-4 text-sm leading-6 text-gray-600">
          <strong className="text-[#183D32]">Please note:</strong> This is a
          demonstration page. It does not calculate pregnancy dates, monitor
          a baby's health, or replace advice from a qualified healthcare
          professional.
        </div>

        {/* Welcome cards */}
        <section className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                <Baby size={23} />
              </div>
              <h2 className="text-lg font-bold">Your pregnancy journey</h2>
            </div>

            <p className="text-sm leading-6 text-gray-600">
              Every pregnancy is different. Your healthcare professional can
              help you understand your stage of pregnancy and the care
              appropriate for you.
            </p>

            <p className="mt-4 text-sm font-medium text-[#64816A]">
              Personalised pregnancy details can be added later.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-[#F7EFE5] p-3 text-[#9A7048]">
                <Sparkles size={23} />
              </div>
              <h2 className="text-lg font-bold">A little care each day</h2>
            </div>

            <p className="text-sm leading-6 text-gray-600">
              Use the checklist below to organise your daily routine. Choose
              activities that are appropriate for your individual needs and
              your clinician's advice.
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-[#64816A] transition-all"
                style={{
                  width: `${(completedTasks.length / careTasks.length) * 100}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              {completedTasks.length} of {careTasks.length} checklist items
              completed
            </p>
          </div>
        </section>

        {/* Daily checklist */}
        <section className="mb-10 rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Daily care checklist</h2>
            <p className="mt-2 text-sm text-gray-500">
              Tick an item when you have completed it.
            </p>
          </div>

          <div className="space-y-3">
            {careTasks.map((task) => {
              const Icon = task.icon
              const isCompleted = completedTasks.includes(task.id)

              return (
                <button
                  key={task.id}
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className="flex w-full items-center gap-4 rounded-xl border border-gray-100 p-4 text-left transition hover:bg-[#FAFAF5]"
                >
                  <div className="shrink-0 text-[#64816A]">
                    {isCompleted ? (
                      <CheckCircle2 size={23} />
                    ) : (
                      <Circle size={23} />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`font-semibold ${
                        isCompleted ? 'text-gray-400 line-through' : ''
                      }`}
                    >
                      {task.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {task.description}
                    </p>
                  </div>

                  <Icon
                    size={21}
                    className="hidden shrink-0 text-[#64816A] sm:block"
                  />
                </button>
              )
            })}
          </div>
        </section>

        {/* Appointments */}
        <section className="rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Prenatal appointments</h2>
              <p className="mt-2 text-sm text-gray-500">
                Keep your upcoming appointments organised.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAppointmentForm(!showAppointmentForm)}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#183D32] px-4 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
            >
              <Plus size={18} />
              Add appointment
            </button>
          </div>

          {showAppointmentForm && (
            <form
              onSubmit={addAppointment}
              className="mb-6 space-y-4 rounded-xl bg-[#FAFAF5] p-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Appointment name
                </label>

                <input
                  type="text"
                  value={appointmentTitle}
                  onChange={(e) => setAppointmentTitle(e.target.value)}
                  placeholder="Example: Prenatal check-up"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Appointment date
                </label>

                <input
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                />
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
                  onClick={() => setShowAppointmentForm(false)}
                  className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {appointments.length === 0 ? (
            <div className="rounded-xl bg-[#FAFAF5] px-5 py-10 text-center">
              <CalendarDays
                size={30}
                className="mx-auto mb-3 text-[#64816A]"
              />
              <p className="font-medium">No appointments added</p>
              <p className="mt-2 text-sm text-gray-500">
                Add an appointment to see it listed here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 p-4"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                      <CalendarDays size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {appointment.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {appointment.date}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteAppointment(appointment.id)}
                    className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          Checklist items and appointments are temporary demo data and will
          reset when the page is refreshed.
        </p>
      </main>
    </div>
  )
}

export default MaternalCare
