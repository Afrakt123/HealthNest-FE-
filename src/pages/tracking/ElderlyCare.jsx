
import React, { useState } from 'react'
import {
  ArrowLeft,
  Heart,
  CalendarDays,
  Clock,
  Pill,
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  Droplets,
  Footprints,
  Moon,
  ShieldCheck,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function ElderlyCare() {
  const [tasksDone, setTasksDone] = useState([])
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: 'Example medication',
      time: '08:00',
      note: 'Demo reminder only',
      taken: false,
    },
  ])
  const [appointments, setAppointments] = useState([])
  const [showMedicationForm, setShowMedicationForm] = useState(false)
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)

  const [medName, setMedName] = useState('')
  const [medTime, setMedTime] = useState('')
  const [medNote, setMedNote] = useState('')

  const [appointmentName, setAppointmentName] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')

  const dailyTasks = [
    {
      id: 1,
      title: 'Drink enough water',
      description: 'Keep water available throughout the day.',
      icon: Droplets,
    },
    {
      id: 2,
      title: 'Gentle movement',
      description: 'Choose safe movement suitable for your abilities.',
      icon: Footprints,
    },
    {
      id: 3,
      title: 'Take time to rest',
      description: 'Make time for comfortable rest and sleep.',
      icon: Moon,
    },
    {
      id: 4,
      title: 'Check in with someone',
      description: 'Stay connected with a trusted friend or family member.',
      icon: Heart,
    },
  ]

  const toggleTask = (id) => {
    setTasksDone((previous) =>
      previous.includes(id)
        ? previous.filter((taskId) => taskId !== id)
        : [...previous, id]
    )
  }

  const toggleMedication = (id) => {
    setMedications((previous) =>
      previous.map((med) =>
        med.id === id ? { ...med, taken: !med.taken } : med
      )
    )
  }

  const addMedication = (e) => {
    e.preventDefault()

    if (!medName.trim() || !medTime) {
      return
    }

    setMedications((previous) => [
      ...previous,
      {
        id: Date.now(),
        name: medName.trim(),
        time: medTime,
        note: medNote.trim(),
        taken: false,
      },
    ])

    setMedName('')
    setMedTime('')
    setMedNote('')
    setShowMedicationForm(false)
  }

  const deleteMedication = (id) => {
    setMedications((previous) =>
      previous.filter((med) => med.id !== id)
    )
  }

  const addAppointment = (e) => {
    e.preventDefault()

    if (!appointmentName.trim() || !appointmentDate) {
      return
    }

    setAppointments((previous) => [
      ...previous,
      {
        id: Date.now(),
        name: appointmentName.trim(),
        date: appointmentDate,
      },
    ])

    setAppointmentName('')
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

        {/* Header */}
        <section className="mb-8 rounded-3xl bg-[#F0EDE4] p-6 sm:p-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-white p-4 text-[#64816A]">
              <Heart size={38} />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-[#64816A]">
                Care, comfort and wellbeing
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Elderly Care
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Organise daily wellness activities, medication reminders,
                and healthcare appointments in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Safety notice */}
        <div className="mb-8 rounded-xl border border-[#E7DCC7] bg-white p-4 text-sm leading-6 text-gray-600">
          <strong className="text-[#183D32]">Safety note:</strong> This is
          a demonstration tool. Follow the prescribed medication instructions
          from a healthcare professional. The page does not send alerts,
          verify doses, or contact emergency services.
        </div>

        {/* Summary cards */}
        <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <CheckCircle2 size={22} />
            </div>
            <p className="text-sm text-gray-500">Daily tasks completed</p>
            <h2 className="mt-2 text-2xl font-bold">
              {tasksDone.length} / {dailyTasks.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#F7EFE5] p-3 text-[#9A7048]">
              <Pill size={22} />
            </div>
            <p className="text-sm text-gray-500">Medication reminders</p>
            <h2 className="mt-2 text-2xl font-bold">
              {medications.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <CalendarDays size={22} />
            </div>
            <p className="text-sm text-gray-500">Appointments added</p>
            <h2 className="mt-2 text-2xl font-bold">
              {appointments.length}
            </h2>
          </div>
        </section>

        {/* Daily checklist */}
        <section className="mb-10 rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold">Daily wellness checklist</h2>
          <p className="mt-2 text-sm text-gray-500">
            Mark each activity when it is completed.
          </p>

          <div className="mt-6 space-y-3">
            {dailyTasks.map((task) => {
              const Icon = task.icon
              const done = tasksDone.includes(task.id)

              return (
                <button
                  key={task.id}
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className="flex w-full items-center gap-4 rounded-xl border border-gray-100 p-4 text-left transition hover:bg-[#FAFAF5]"
                >
                  <span className="shrink-0 text-[#64816A]">
                    {done ? (
                      <CheckCircle2 size={23} />
                    ) : (
                      <Circle size={23} />
                    )}
                  </span>

                  <div className="flex-1">
                    <h3 className={done ? 'font-semibold text-gray-400 line-through' : 'font-semibold'}>
                      {task.title}
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {task.description}
                    </p>
                  </div>

                  <Icon
                    size={21}
                    className="hidden text-[#64816A] sm:block"
                  />
                </button>
              )
            })}
          </div>
        </section>

        {/* Medication reminders */}
        <section className="mb-10 rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Medication reminders</h2>
              <p className="mt-2 text-sm text-gray-500">
                Record reminders based on an existing prescription.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowMedicationForm(!showMedicationForm)}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#183D32] px-4 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
            >
              <Plus size={18} />
              Add reminder
            </button>
          </div>

          {showMedicationForm && (
            <form
              onSubmit={addMedication}
              className="mb-6 space-y-4 rounded-xl bg-[#FAFAF5] p-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Medication name
                </label>
                <input
                  type="text"
                  value={medName}
                  onChange={(e) => setMedName(e.target.value)}
                  placeholder="Enter the prescribed medication name"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Reminder time
                </label>
                <input
                  type="time"
                  value={medTime}
                  onChange={(e) => setMedTime(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Notes (optional)
                </label>
                <input
                  type="text"
                  value={medNote}
                  onChange={(e) => setMedNote(e.target.value)}
                  placeholder="Optional notes from your prescription"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
              >
                Save reminder
              </button>
            </form>
          )}

          <div className="space-y-3">
            {medications.map((med) => (
              <div
                key={med.id}
                className="flex flex-col justify-between gap-4 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                    <Pill size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{med.name}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={15} />
                      {med.time}
                    </p>
                    {med.note && (
                      <p className="mt-1 text-sm text-gray-500">{med.note}</p>
                    )}
                    <p className={`mt-2 text-xs font-medium ${med.taken ? 'text-[#64816A]' : 'text-gray-500'}`}>
                      {med.taken ? 'Marked as taken' : 'Not marked as taken'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => toggleMedication(med.id)}
                    className="rounded-lg border border-[#DCE6D9] px-3 py-2 text-sm font-medium text-[#183D32] hover:bg-[#EEF3E9]"
                  >
                    {med.taken ? 'Undo' : 'Mark taken'}
                  </button>

                  <button
                    type="button"
                    onClick={() => deleteMedication(med.id)}
                    aria-label={`Delete reminder for ${med.name}`}
                    className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Appointments */}
        <section className="mb-10 rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Healthcare appointments</h2>
              <p className="mt-2 text-sm text-gray-500">
                Keep a list of appointments you need to attend.
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
                  Appointment details
                </label>
                <input
                  type="text"
                  value={appointmentName}
                  onChange={(e) => setAppointmentName(e.target.value)}
                  placeholder="Example: Doctor visit"
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

              <button
                type="submit"
                className="rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
              >
                Save appointment
              </button>
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
                Add an appointment to list it here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                      <CalendarDays size={21} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{appointment.name}</h3>
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

        {/* Safety reminders */}
        <section className="rounded-2xl bg-[#183D32] p-6 text-white sm:p-8">
          <div className="flex items-start gap-4">
            <ShieldCheck size={26} className="mt-1 shrink-0" />
            <div>
              <h2 className="text-xl font-bold">Safety reminders</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                <li>• Keep emergency contact details somewhere accessible.</li>
                <li>• Keep prescribed medicines in their original packaging.</li>
                <li>• Ask a healthcare professional or pharmacist if medication instructions are unclear.</li>
                <li>• For an emergency, contact local emergency services or seek urgent medical help.</li>
              </ul>

              <p className="mt-4 flex items-center gap-2 text-xs text-white/60">
                <Phone size={14} />
                This page does not place calls or send alerts.
              </p>
            </div>
          </div>
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          All entries are temporary demo data and reset when the page is refreshed.
        </p>
      </main>
    </div>
  )
}

export default ElderlyCare
