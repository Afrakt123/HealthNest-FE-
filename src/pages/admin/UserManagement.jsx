
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Users,
  Search,
  UserRound,
  Eye,
  UserCheck,
  UserX,
  X,
  ShieldCheck
} from 'lucide-react'

const initialUsers = [
  {
    id: 1,
    name: 'Ananya Nair',
    email: 'ananya@example.com',
    category: 'Women’s Health',
    joined: '12 Oct 2026',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Rahul Menon',
    email: 'rahul@example.com',
    category: 'Fitness & Wellness',
    joined: '10 Oct 2026',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Meera Thomas',
    email: 'meera@example.com',
    category: 'Maternal Care',
    joined: '08 Oct 2026',
    status: 'Inactive'
  },
  {
    id: 4,
    name: 'Arjun Kumar',
    email: 'arjun@example.com',
    category: 'General Health',
    joined: '05 Oct 2026',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Sara Joseph',
    email: 'sara@example.com',
    category: 'Elderly Care',
    joined: '02 Oct 2026',
    status: 'Active'
  }
]

function UserManagement() {
  const [users, setUsers] = useState(initialUsers)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [selectedUser, setSelectedUser] = useState(null)
  const [notice, setNotice] = useState('')

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      `${user.name} ${user.email} ${user.category}`
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === 'All' || user.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const toggleStatus = (id) => {
    setUsers((previous) =>
      previous.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === 'Active' ? 'Inactive' : 'Active'
            }
          : user
      )
    )

    const currentUser = users.find((user) => user.id === id)

    if (currentUser) {
      setNotice(
        `${currentUser.name}'s demo status changed to ${
          currentUser.status === 'Active' ? 'Inactive' : 'Active'
        }.`
      )
    }

    setSelectedUser(null)
  }

  const activeCount = users.filter(
    (user) => user.status === 'Active'
  ).length

  const inactiveCount = users.length - activeCount

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-8 text-[#183D32] sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Back navigation */}
        <Link
          to="/admin-dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Admin Dashboard
        </Link>

        {/* Page heading */}
        <div className="mt-6">
          <p className="text-sm font-medium text-[#64816A]">
            Administration / User Management
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            User Management
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            View demo user accounts, search for users, and manage their
            displayed account status.
          </p>
        </div>

        {/* Demo notice */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E3E8DF] bg-white p-4">
          <ShieldCheck
            size={22}
            className="mt-0.5 shrink-0 text-[#64816A]"
          />
          <p className="text-sm leading-6 text-gray-600">
            <span className="font-semibold text-[#183D32]">
              Demo data:
            </span>{' '}
            These are fictional users. Changes only affect this page's
            temporary React state; no real accounts are modified.
          </p>
        </div>

        {/* Summary cards */}
        <div className="mt-7 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#E8EFE5] p-3">
                <Users size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total users</p>
                <p className="mt-1 text-2xl font-bold">{users.length}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#E8EFE5] p-3">
                <UserCheck size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active users</p>
                <p className="mt-1 text-2xl font-bold">{activeCount}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#F8EAE5] p-3">
                <UserX size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Inactive users</p>
                <p className="mt-1 text-2xl font-bold">{inactiveCount}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Search and filters */}
        <section className="mt-8 rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
          <h2 className="font-bold">Find users</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3 rounded-xl border border-[#DCE5D9] px-4">
              <Search size={19} className="shrink-0 text-[#64816A]" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, email, or category..."
                className="w-full bg-transparent py-3.5 text-sm outline-none"
                aria-label="Search users"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter users by status"
              className="rounded-xl border border-[#DCE5D9] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#64816A]"
            >
              <option value="All">All account statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

          </div>
        </section>

        {/* User table */}
        <section className="mt-7">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold">User Accounts</h2>
            <span className="text-sm text-gray-500">
              {filteredUsers.length} results
            </span>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E3E8DF] bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-[#F2F5EF] text-[#64816A]">
                <tr>
                  <th className="px-5 py-4 font-semibold">User</th>
                  <th className="px-5 py-4 font-semibold">Health category</th>
                  <th className="px-5 py-4 font-semibold">Joined</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#EDF0E9]">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-[#FCFCF8]">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8EFE5]">
                          <UserRound size={19} />
                        </div>

                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="mt-1 text-xs text-gray-500">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {user.category}
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {user.joined}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          user.status === 'Active'
                            ? 'bg-[#E8EFE5] text-[#285746]'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedUser(user)}
                          title="View user details"
                          aria-label={`View ${user.name}`}
                          className="rounded-lg border border-[#DCE5D9] p-2 hover:bg-[#F2F5EF]"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleStatus(user.id)}
                          title={
                            user.status === 'Active'
                              ? 'Deactivate demo account'
                              : 'Activate demo account'
                          }
                          aria-label={`${
                            user.status === 'Active' ? 'Deactivate' : 'Activate'
                          } ${user.name}`}
                          className="rounded-lg border border-[#DCE5D9] p-2 hover:bg-[#F2F5EF]"
                        >
                          {user.status === 'Active' ? (
                            <UserX size={17} />
                          ) : (
                            <UserCheck size={17} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="5" className="px-5 py-12 text-center">
                      <Users
                        size={30}
                        className="mx-auto text-[#64816A]"
                      />
                      <p className="mt-3 font-semibold">No users found</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Try changing your search or status filter.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Status message */}
        {notice && (
          <p
            role="status"
            className="mt-5 rounded-xl bg-[#E8EFE5] p-4 text-sm font-medium"
          >
            {notice}
          </p>
        )}

        {/* User details modal */}
        {selectedUser && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={() => setSelectedUser(null)}
          >
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="user-detail-title"
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-[#64816A]">User details</p>
                  <h2
                    id="user-detail-title"
                    className="mt-1 text-xl font-bold"
                  >
                    {selectedUser.name}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedUser(null)}
                  aria-label="Close user details"
                  className="rounded-lg p-2 hover:bg-[#F2F5EF]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="text-gray-500">Email address</p>
                  <p className="mt-1 break-all font-medium">
                    {selectedUser.email}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Health category</p>
                  <p className="mt-1 font-medium">
                    {selectedUser.category}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Joined date</p>
                  <p className="mt-1 font-medium">
                    {selectedUser.joined}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Account status</p>
                  <p className="mt-1 font-medium">{selectedUser.status}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedUser(null)}
                className="mt-6 w-full rounded-xl bg-[#183D32] px-4 py-3 font-semibold text-white hover:bg-[#285746]"
              >
                Close
              </button>
            </section>
          </div>
        )}

      </div>
    </div>
  )
}

export default UserManagement
