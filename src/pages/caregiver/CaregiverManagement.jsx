
import React, { useState } from 'react'
import {
  Users,
  UserPlus,
  Phone,
  Mail,
  ShieldCheck,
  Trash2,
  X,
  Heart,
  Search
} from 'lucide-react'

function CaregiverManagement() {
  const [caregivers, setCaregivers] = useState([
    {
      id: 1,
      name: 'Anita Thomas',
      relationship: 'Daughter',
      email: 'anita@example.com',
      phone: '+91 98765 43210',
      access: 'Health information'
    },
    {
      id: 2,
      name: 'Rahul Thomas',
      relationship: 'Son',
      email: 'rahul@example.com',
      phone: '+91 98765 12345',
      access: 'Appointments'
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    email: '',
    phone: '',
    access: 'Health information'
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newCaregiver = {
      ...formData,
      id: Date.now()
    }

    setCaregivers((previous) => [...previous, newCaregiver])
    setFormData({
      name: '',
      relationship: '',
      email: '',
      phone: '',
      access: 'Health information'
    })
    setShowForm(false)
    setMessage('Caregiver added successfully in this demo.')
  }

  const handleDelete = (id) => {
    setCaregivers((previous) =>
      previous.filter((caregiver) => caregiver.id !== id)
    )
    setMessage('Caregiver removed from this demo.')
  }

  const filteredCaregivers = caregivers.filter((caregiver) =>
    `${caregiver.name} ${caregiver.relationship}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-8 text-[#183D32] sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Page heading */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-[#64816A]">
              HealthNest / Caregiver
            </p>
            <h1 className="mt-2 text-3xl font-bold">
              Caregiver Management
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Manage the people you trust to support you with your healthcare
              and daily wellbeing.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setShowForm((previous) => !previous)
              setMessage('')
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#183D32] px-5 py-3 font-semibold text-white hover:bg-[#285746]"
          >
            {showForm ? <X size={18} /> : <UserPlus size={18} />}
            {showForm ? 'Close Form' : 'Add Caregiver'}
          </button>
        </div>

        {/* Summary cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-[#E8EFE5] p-3">
              <Users size={25} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total caregivers</p>
              <p className="mt-1 text-2xl font-bold">{caregivers.length}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-[#E8EFE5] p-3">
              <Heart size={25} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Your support network</p>
              <p className="mt-1 text-lg font-bold">People you trust</p>
            </div>
          </div>
        </div>

        {/* Privacy notice */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#DCE5D9] bg-[#F0F5ED] p-4">
          <ShieldCheck size={22} className="mt-1 shrink-0" />
          <div>
            <h2 className="font-semibold">Your privacy matters</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This demo only displays sample caregiver information. It does
              not send invitations or grant real access to health records.
              A real system should require your permission before sharing
              personal health information.
            </p>
          </div>
        </div>

        {/* Add caregiver form */}
        {showForm && (
          <section className="mt-6 rounded-2xl border border-[#E3E8DF] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Add a caregiver</h2>
            <p className="mt-2 text-sm text-gray-500">
              Enter the contact details of someone you trust.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full rounded-xl border border-[#DCE5D9] px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Relationship
                </label>
                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                >
                  <option value="">Select relationship</option>
                  <option value="Parent">Parent</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Son">Son</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Professional caregiver">
                    Professional caregiver
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-[#DCE5D9] px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-[#DCE5D9] px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Intended access
                </label>
                <select
                  name="access"
                  value={formData.access}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                >
                  <option>Health information</option>
                  <option>Appointments</option>
                  <option>Medication reminders</option>
                  <option>General support</option>
                </select>
                <p className="mt-2 text-xs text-gray-500">
                  This records your preference in the demo; it does not
                  actually grant access.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-xl bg-[#183D32] px-5 py-3 font-semibold text-white hover:bg-[#285746]"
                >
                  Save Caregiver
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-[#DCE5D9] px-5 py-3 font-semibold hover:bg-[#F2F5EF]"
                >
                  Cancel
                </button>
              </div>

            </form>
          </section>
        )}

        {/* Search */}
        <div className="mt-8 flex items-center gap-3 rounded-xl border border-[#E3E8DF] bg-white px-4">
          <Search size={20} className="text-[#64816A]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or relationship..."
            className="w-full bg-transparent py-4 text-sm outline-none"
          />
        </div>

        {/* Caregiver list */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Your caregivers</h2>

          {filteredCaregivers.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-dashed border-[#C8D6C4] bg-white p-10 text-center">
              <Users size={36} className="mx-auto text-[#64816A]" />
              <p className="mt-4 font-semibold">No caregivers found</p>
              <p className="mt-2 text-sm text-gray-500">
                Try another search or add a caregiver.
              </p>
            </div>
          ) : (
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {filteredCaregivers.map((caregiver) => (
                <article
                  key={caregiver.id}
                  className="rounded-2xl border border-[#E3E8DF] bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EFE5]">
                        <Users size={26} />
                      </div>
                      <div>
                        <h3 className="font-bold">{caregiver.name}</h3>
                        <p className="mt-1 text-sm text-[#64816A]">
                          {caregiver.relationship}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDelete(caregiver.id)}
                      aria-label={`Remove ${caregiver.name}`}
                      title="Remove caregiver"
                      className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-gray-600">
                    <p className="flex items-center gap-3 break-all">
                      <Mail size={17} className="shrink-0 text-[#64816A]" />
                      {caregiver.email}
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone size={17} className="shrink-0 text-[#64816A]" />
                      {caregiver.phone}
                    </p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#F2F5EF] p-3">
                    <p className="text-xs text-gray-500">Intended access</p>
                    <p className="mt-1 text-sm font-semibold">
                      {caregiver.access}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {message && (
          <p
            role="status"
            className="mt-6 rounded-xl bg-[#E8EFE5] p-4 text-sm font-medium"
          >
            {message}
          </p>
        )}

      </div>
    </div>
  )
}

export default CaregiverManagement
