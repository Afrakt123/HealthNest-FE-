
import React, { useState } from 'react'
import {
  ArrowLeft,
  Pill,
  Plus,
  Clock,
  CheckCircle2,
  Circle,
  Trash2,
  Bell,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function MedicationReminders() {
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: 'Example medication',
      dosage: 'As prescribed',
      time: '08:00',
      instructions: 'Follow the instructions provided by your clinician.',
      completed: false,
    },
    {
      id: 2,
      name: 'Example evening medication',
      dosage: 'As prescribed',
      time: '20:00',
      instructions: 'Demo reminder only.',
      completed: false,
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [dosage, setDosage] = useState('')
  const [time, setTime] = useState('')
  const [instructions, setInstructions] = useState('')

  const addMedication = (e) => {
    e.preventDefault()

    if (!name.trim() || !time) {
      return
    }

    setMedications((previous) => [
      ...previous,
      {
        id: Date.now(),
        name: name.trim(),
        dosage: dosage.trim() || 'As prescribed',
        time,
        instructions: instructions.trim(),
        completed: false,
      },
    ])

    setName('')
    setDosage('')
    setTime('')
    setInstructions('')
    setShowForm(false)
  }

  const toggleCompleted = (id) => {
    setMedications((previous) =>
      previous.map((medication) =>
        medication.id === id
          ? { ...medication, completed: !medication.completed }
          : medication
      )
    )
  }

  const deleteMedication = (id) => {
    setMedications((previous) =>
      previous.filter((medication) => medication.id !== id)
    )
  }

  const completedCount = medications.filter(
    (medication) => medication.completed
  ).length

  const pendingCount = medications.length - completedCount

  const sortedMedications = medications
    .slice()
    .sort((a, b) => a.time.localeCompare(b.time))

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
              <Pill size={38} />
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#64816A]">
                <Bell size={16} />
                Your personal reminder list
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Medication Reminders
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Organise medication reminders using the names, times, and
                instructions provided by your healthcare professional.
              </p>
            </div>
          </div>
        </section>

        {/* Safety notice */}
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-[#E7DCC7] bg-white p-4">
          <ShieldCheck size={22} className="mt-1 shrink-0 text-[#64816A]" />

          <p className="text-sm leading-6 text-gray-600">
            <strong className="text-[#183D32]">Medication safety:</strong>{' '}
            This page only stores reminder details temporarily. It does not
            recommend medicines, check whether a dose is correct, send
            notifications, or confirm that a medicine was actually taken.
            Follow your prescription and ask your clinician or pharmacist
            if you are unsure about your instructions.
          </p>
        </div>

        {/* Summary cards */}
        <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <Pill size={22} />
            </div>
            <p className="text-sm text-gray-500">Total reminders</p>
            <h2 className="mt-2 text-2xl font-bold">
              {medications.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#F7EFE5] p-3 text-[#9A7048]">
              <Clock size={22} />
            </div>
            <p className="text-sm text-gray-500">Pending</p>
            <h2 className="mt-2 text-2xl font-bold">{pendingCount}</h2>
          </div>

          <div className="rounded-2xl border border-[#E7E9DF] bg-white p-5">
            <div className="mb-4 inline-flex rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
              <CheckCircle2 size={22} />
            </div>
            <p className="text-sm text-gray-500">Marked completed</p>
            <h2 className="mt-2 text-2xl font-bold">{completedCount}</h2>
          </div>
        </section>

        {/* Reminder list heading */}
        <section className="mb-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Your medication list</h2>
              <p className="mt-2 text-sm text-gray-500">
                Your reminders are arranged by time.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
            >
              <Plus size={18} />
              Add reminder
            </button>
          </div>
        </section>

        {/* Add reminder form */}
        {showForm && (
          <form
            onSubmit={addMedication}
            className="mb-8 space-y-5 rounded-2xl border border-[#E7E9DF] bg-white p-6"
          >
            <h3 className="text-lg font-bold">Add a medication reminder</h3>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Medication name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter the prescribed medication name"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Dosage instructions (optional)
              </label>

              <input
                type="text"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                placeholder="Enter instructions exactly as prescribed"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Reminder time
              </label>

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Additional instructions (optional)
              </label>

              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                rows={3}
                placeholder="Add any relevant notes from your prescription"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#64816A]"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
              >
                Save reminder
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

        {/* Reminder cards */}
        <section className="rounded-2xl border border-[#E7E9DF] bg-white p-6 sm:p-8">
          {sortedMedications.length === 0 ? (
            <div className="rounded-xl bg-[#FAFAF5] p-8 text-center">
              <Pill
                size={32}
                className="mx-auto mb-3 text-[#64816A]"
              />
              <h3 className="font-semibold">No reminders added</h3>
              <p className="mt-2 text-sm text-gray-500">
                Add a reminder using your existing prescription details.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {sortedMedications.map((medication) => (
                <article
                  key={medication.id}
                  className="rounded-xl border border-gray-100 p-5"
                >
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-[#EEF3E9] p-3 text-[#64816A]">
                        <Pill size={23} />
                      </div>

                      <div>
                        <h3
                          className={`font-semibold ${
                            medication.completed
                              ? 'text-gray-400'
                              : 'text-[#183D32]'
                          }`}
                        >
                          {medication.name}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                          Instructions: {medication.dosage}
                        </p>

                        <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                          <Clock size={16} />
                          {medication.time}
                        </p>

                        {medication.instructions && (
                          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-500">
                            {medication.instructions}
                          </p>
                        )}

                        <span
                          className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                            medication.completed
                              ? 'bg-[#EEF3E9] text-[#64816A]'
                              : 'bg-[#F7EFE5] text-[#9A7048]'
                          }`}
                        >
                          {medication.completed ? (
                            <CheckCircle2 size={13} />
                          ) : (
                            <Circle size={13} />
                          )}
                          {medication.completed
                            ? 'Marked completed'
                            : 'Pending'}
                        </span>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => toggleCompleted(medication.id)}
                        className="rounded-lg border border-[#DCE6D9] px-3 py-2 text-sm font-medium text-[#183D32] hover:bg-[#EEF3E9]"
                      >
                        {medication.completed
                          ? 'Undo'
                          : 'Mark completed'}
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteMedication(medication.id)}
                        aria-label={`Delete reminder for ${medication.name}`}
                        title="Delete reminder"
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
          Reminder details are temporary demo data. Refreshing this page
          resets the list. No actual alarm or notification is scheduled.
        </p>
      </main>
    </div>
  )
}

export default MedicationReminders
