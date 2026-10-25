import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Star,
  Video,
  UserRound,
  CheckCircle,
  Stethoscope
} from 'lucide-react'

function DoctorDetails() {
  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')
  const [appointmentType, setAppointmentType] = useState('In-person')
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')

  const doctor = {
    name: 'Dr. Sarah Thomas',
    specialization: 'General Physician',
    experience: '8 years of experience',
    rating: '4.9',
    reviews: '120 reviews',
    location: 'HealthNest Medical Centre',
    fee: '₹500',
    about:
      'Dr. Sarah Thomas provides general health consultations and preventive healthcare guidance. Book a consultation to discuss your health concerns.',
    availability: ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM']
  }

  const handleBooking = (e) => {
    e.preventDefault()

    if (!appointmentDate || !appointmentTime) {
      setMessage('Please select an appointment date and time.')
      return
    }

    setMessage(
      `Demo booking submitted for ${appointmentDate} at ${appointmentTime}. No real appointment has been booked.`
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-8 text-[#183D32] sm:px-8">
      <div className="mx-auto max-w-5xl">

        <Link
          to="/appointments"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Appointments
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Doctor information */}
          <div className="space-y-6 lg:col-span-2">

            <section className="rounded-3xl border border-[#E3E8DF] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#E8EFE5]">
                  <UserRound size={48} className="text-[#64816A]" />
                </div>

                <div className="flex-1">
                  <p className="mb-2 text-sm font-medium text-[#64816A]">
                    Doctor Profile
                  </p>

                  <h1 className="text-2xl font-bold sm:text-3xl">
                    {doctor.name}
                  </h1>

                  <p className="mt-2 flex items-center gap-2 text-sm text-[#64816A]">
                    <Stethoscope size={17} />
                    {doctor.specialization}
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    {doctor.experience}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF5D9] px-3 py-1 font-semibold text-[#87651A]">
                      <Star size={15} fill="currentColor" />
                      {doctor.rating}
                    </span>
                    <span className="text-gray-500">
                      {doctor.reviews}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-[#F2F5EF] px-4 py-3 sm:text-right">
                  <p className="text-xs text-gray-500">Consultation fee</p>
                  <p className="mt-1 text-xl font-bold">{doctor.fee}</p>
                </div>

              </div>
            </section>

            <section className="rounded-3xl border border-[#E3E8DF] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold">About the doctor</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {doctor.about}
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-[#E8EFE5] p-3">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Consultation location</p>
                    <p className="mt-1 text-sm text-gray-500">
                      {doctor.location} (demo information)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-[#E8EFE5] p-3">
                    <Video size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Consultation options</p>
                    <p className="mt-1 text-sm text-gray-500">
                      In-person or online (demo options)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-[#E3E8DF] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold">Available time slots</h2>
              <p className="mt-2 text-sm text-gray-500">
                These are example times, not live doctor availability.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {doctor.availability.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setAppointmentTime(time)}
                    className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                      appointmentTime === time
                        ? 'border-[#183D32] bg-[#183D32] text-white'
                        : 'border-[#DCE5D9] bg-white hover:bg-[#F2F5EF]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </section>

          </div>

          {/* Appointment booking form */}
          <aside className="h-fit rounded-3xl border border-[#E3E8DF] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Book an appointment</h2>
            <p className="mt-2 text-sm text-gray-500">
              Enter your preferred consultation details.
            </p>

            <form onSubmit={handleBooking} className="mt-6 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  <CalendarDays size={16} className="mr-2 inline" />
                  Appointment date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full rounded-xl border border-[#DCE5D9] px-3 py-3 outline-none focus:border-[#64816A]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  <Clock size={16} className="mr-2 inline" />
                  Appointment time
                </label>
                <select
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                  className="w-full rounded-xl border border-[#DCE5D9] bg-white px-3 py-3 outline-none focus:border-[#64816A]"
                  required
                >
                  <option value="">Choose a time</option>
                  {doctor.availability.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Consultation type
                </label>
                <select
                  value={appointmentType}
                  onChange={(e) => setAppointmentType(e.target.value)}
                  className="w-full rounded-xl border border-[#DCE5D9] bg-white px-3 py-3 outline-none focus:border-[#64816A]"
                >
                  <option>In-person</option>
                  <option>Online</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Reason for visit
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Briefly describe your reason..."
                  rows={3}
                  className="w-full resize-none rounded-xl border border-[#DCE5D9] px-3 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <div className="rounded-xl bg-[#F2F5EF] p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Consultation fee</span>
                  <span className="font-bold">{doctor.fee}</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Example fee only. No payment will be collected.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#183D32] px-4 py-3 font-semibold text-white transition hover:bg-[#285746]"
              >
                Request Appointment
              </button>

              {message && (
                <div
                  role="status"
                  className="rounded-xl bg-[#E8EFE5] p-3 text-sm leading-6 text-[#183D32]"
                >
                  <CheckCircle size={17} className="mr-2 inline" />
                  {message}
                </div>
              )}

              <p className="text-xs leading-5 text-gray-500">
                This is a frontend demonstration. It does not contact a doctor
                or create a real appointment.
              </p>

            </form>
          </aside>

        </div>
      </div>
    </div>
  )
}

export default DoctorDetails
