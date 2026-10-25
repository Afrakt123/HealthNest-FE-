
import React, { useMemo, useState } from 'react'
import {
  Bell,
  Plus,
  Search,
  Send,
  Trash2,
  CheckCircle,
  Clock,
  X,
  Megaphone,
  Users,
  Info,
  AlertTriangle,
} from 'lucide-react'

const initialNotifications = [
  {
    id: 1,
    title: 'Welcome to HealthNest',
    message:
      'Welcome to HealthNest! Explore the available health and wellness features.',
    audience: 'All Users',
    type: 'Information',
    status: 'Sent',
    date: '2026-10-18',
  },
  {
    id: 2,
    title: 'Health Profile Reminder',
    message:
      'Complete your health profile to personalize your wellness dashboard.',
    audience: 'All Users',
    type: 'Reminder',
    status: 'Scheduled',
    date: '2026-10-22',
  },
  {
    id: 3,
    title: 'Platform Maintenance',
    message:
      'Some features may be temporarily unavailable during scheduled maintenance.',
    audience: 'All Users',
    type: 'Important',
    status: 'Draft',
    date: '2026-10-25',
  },
]

const typeStyles = {
  Information: 'bg-blue-50 text-blue-700',
  Reminder: 'bg-amber-50 text-amber-700',
  Important: 'bg-red-50 text-red-700',
}

const statusStyles = {
  Sent: 'bg-emerald-50 text-emerald-700',
  Scheduled: 'bg-blue-50 text-blue-700',
  Draft: 'bg-gray-100 text-gray-700',
}

function NotificationsManagement() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [formError, setFormError] = useState('')
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    audience: 'All Users',
    type: 'Information',
    date: '2026-10-30',
  })

  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const matchesSearch =
        notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus =
        statusFilter === 'All' || notification.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [notifications, searchTerm, statusFilter])

  const sentCount = notifications.filter(
    (notification) => notification.status === 'Sent'
  ).length

  const scheduledCount = notifications.filter(
    (notification) => notification.status === 'Scheduled'
  ).length

  const draftCount = notifications.filter(
    (notification) => notification.status === 'Draft'
  ).length

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setNewNotification((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleCreateNotification = (event) => {
    event.preventDefault()
    setFormError('')

    if (
      !newNotification.title.trim() ||
      !newNotification.message.trim() ||
      !newNotification.date
    ) {
      setFormError('Please fill in all the required fields.')
      return
    }

    const notification = {
      id: Date.now(),
      title: newNotification.title.trim(),
      message: newNotification.message.trim(),
      audience: newNotification.audience,
      type: newNotification.type,
      status: 'Draft',
      date: newNotification.date,
    }

    setNotifications((previous) => [notification, ...previous])

    setNewNotification({
      title: '',
      message: '',
      audience: 'All Users',
      type: 'Information',
      date: '2026-10-30',
    })

    setShowForm(false)
  }

  const handleSendNotification = (id) => {
    const confirmed = window.confirm(
      'Mark this notification as sent in the demo? No real notification will be sent.'
    )

    if (!confirmed) return

    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? { ...notification, status: 'Sent' }
          : notification
      )
    )
  }

  const handleDeleteNotification = (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this notification?'
    )

    if (!confirmed) return

    setNotifications((previous) =>
      previous.filter((notification) => notification.id !== id)
    )
  }

  const formatDate = (date) => {
    if (!date) return 'No date'

    return new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-8 text-[#183D32] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#64816A]">
              Admin Panel
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl">
              Notifications Management
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Create and manage sample announcements, reminders, and platform
              notifications.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setFormError('')
              setShowForm(true)
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#285747]"
          >
            <Plus size={18} />
            Create Notification
          </button>
        </div>

        {/* Summary cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: 'Total Notifications',
              value: notifications.length,
              icon: Bell,
              iconStyle: 'bg-[#EDF3E9] text-[#42664A]',
            },
            {
              title: 'Sent',
              value: sentCount,
              icon: CheckCircle,
              iconStyle: 'bg-emerald-50 text-emerald-700',
            },
            {
              title: 'Scheduled',
              value: scheduledCount,
              icon: Clock,
              iconStyle: 'bg-blue-50 text-blue-700',
            },
            {
              title: 'Drafts',
              value: draftCount,
              icon: Megaphone,
              iconStyle: 'bg-amber-50 text-amber-700',
            },
          ].map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-[#E5E9DF] bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <h2 className="mt-3 text-3xl font-bold">{stat.value}</h2>
                  </div>

                  <div className={`rounded-xl p-3 ${stat.iconStyle}`}>
                    <Icon size={22} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Create notification form */}
        {showForm && (
          <div className="mb-8 rounded-2xl border border-[#E5E9DF] bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Create Notification</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Add a notification to the demo list.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setFormError('')
                }}
                aria-label="Close form"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateNotification} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="notification-title"
                    className="mb-2 block text-sm font-medium"
                  >
                    Notification title *
                  </label>

                  <input
                    id="notification-title"
                    name="title"
                    value={newNotification.title}
                    onChange={handleInputChange}
                    placeholder="Enter a title"
                    maxLength={100}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#64816A] focus:ring-2 focus:ring-[#64816A]/20"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="notification-audience"
                    className="mb-2 block text-sm font-medium"
                  >
                    Audience
                  </label>

                  <select
                    id="notification-audience"
                    name="audience"
                    value={newNotification.audience}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#64816A]"
                  >
                    <option>All Users</option>
                    <option>Maternal Care Users</option>
                    <option>Fitness & Wellness Users</option>
                    <option>Elderly Care Users</option>
                    <option>Women&apos;s Health Users</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="notification-type"
                    className="mb-2 block text-sm font-medium"
                  >
                    Notification type
                  </label>

                  <select
                    id="notification-type"
                    name="type"
                    value={newNotification.type}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#64816A]"
                  >
                    <option>Information</option>
                    <option>Reminder</option>
                    <option>Important</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="notification-date"
                    className="mb-2 block text-sm font-medium"
                  >
                    Scheduled date
                  </label>

                  <input
                    id="notification-date"
                    type="date"
                    name="date"
                    value={newNotification.date}
                    onChange={handleInputChange}
                    min="2026-01-01"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#64816A]"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="notification-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message *
                </label>

                <textarea
                  id="notification-message"
                  name="message"
                  value={newNotification.message}
                  onChange={handleInputChange}
                  placeholder="Write your notification message..."
                  rows={4}
                  maxLength={1000}
                  className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#64816A] focus:ring-2 focus:ring-[#64816A]/20"
                  required
                />
              </div>

              {formError && (
                <p role="alert" className="text-sm font-medium text-red-600">
                  {formError}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#183D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285747]"
                >
                  <Plus size={17} />
                  Save as Draft
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setFormError('')
                  }}
                  className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Search and filter */}
        <div className="mb-6 rounded-2xl border border-[#E5E9DF] bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="notification-search"
                className="mb-2 block text-sm font-medium"
              >
                Search notifications
              </label>

              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="notification-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by title or message"
                  className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#64816A]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="notification-status"
                className="mb-2 block text-sm font-medium"
              >
                Filter by status
              </label>

              <select
                id="notification-status"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#64816A]"
              >
                <option value="All">All statuses</option>
                <option value="Sent">Sent</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification list */}
        <div className="overflow-hidden rounded-2xl border border-[#E5E9DF] bg-white shadow-sm">
          <div className="border-b border-gray-100 p-5">
            <h2 className="text-lg font-bold">Notification List</h2>
            <p className="mt-1 text-sm text-gray-500">
              {filteredNotifications.length} notification(s) found
            </p>
          </div>

          {filteredNotifications.length === 0 ? (
            <div className="px-5 py-16 text-center">
              <Bell size={38} className="mx-auto mb-3 text-gray-300" />
              <h3 className="font-semibold">No notifications found</h3>
              <p className="mt-2 text-sm text-gray-500">
                Try another search or status filter.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex flex-col gap-4 p-5 transition hover:bg-[#FAFAF5]/70 lg:flex-row lg:items-start lg:justify-between"
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="rounded-xl bg-[#EDF3E9] p-3 text-[#42664A]">
                      <Bell size={22} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="break-words font-semibold">
                        {notification.title}
                      </h3>

                      <p className="mt-2 break-words text-sm leading-6 text-gray-600">
                        {notification.message}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            typeStyles[notification.type]
                          }`}
                        >
                          {notification.type}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            statusStyles[notification.status]
                          }`}
                        >
                          {notification.status}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
                        <span className="inline-flex items-center gap-1">
                          <Users size={14} />
                          {notification.audience}
                        </span>

                        <span className="inline-flex items-center gap-1">
                          <Clock size={14} />
                          {formatDate(notification.date)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-2 lg:justify-end">
                    {notification.status !== 'Sent' && (
                      <button
                        type="button"
                        onClick={() =>
                          handleSendNotification(notification.id)
                        }
                        className="inline-flex items-center gap-2 rounded-lg bg-[#183D32] px-3 py-2 text-sm font-semibold text-white hover:bg-[#285747]"
                      >
                        <Send size={15} />
                        Mark Sent
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        handleDeleteNotification(notification.id)
                      }
                      aria-label={`Delete ${notification.title}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-red-100 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Demo notice */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <AlertTriangle size={19} className="mt-0.5 shrink-0" />
          <p>
            <strong>Demo only:</strong> Notifications are stored in temporary
            React state. Marking one as sent only changes its status on this
            page; it does not send an email, SMS, or push notification.
          </p>
        </div>

        <div className="mt-4 flex items-start gap-3 text-xs leading-5 text-gray-500">
          <Info size={16} className="mt-0.5 shrink-0" />
          <p>
            This page currently uses sample data. Connecting a backend and a
            notification service will be needed for real delivery and permanent
            storage.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotificationsManagement
