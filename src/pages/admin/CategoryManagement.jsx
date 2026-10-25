
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  Layers,
  HeartPulse,
  Baby,
  Users,
  Activity,
  Apple,
  Brain,
  Heart,
  Stethoscope,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react'

const initialCategories = [
  {
    id: 1,
    name: 'Maternal Care',
    description: 'Wellness information and support for pregnancy and motherhood.',
    icon: 'Baby',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Elderly Care',
    description: 'Health and wellbeing support for older adults.',
    icon: 'Users',
    status: 'Active'
  },
  {
    id: 3,
    name: "Women's Health",
    description: 'General wellness information for women.',
    icon: 'HeartPulse',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Fitness & Wellness',
    description: 'Physical activity and everyday wellness guidance.',
    icon: 'Activity',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Nutrition & Diet',
    description: 'General nutrition education and healthy eating habits.',
    icon: 'Apple',
    status: 'Active'
  },
  {
    id: 6,
    name: 'Mental Wellness',
    description: 'Educational resources about emotional wellbeing.',
    icon: 'Brain',
    status: 'Active'
  },
  {
    id: 7,
    name: 'Heart Health',
    description: 'General education about cardiovascular health.',
    icon: 'Heart',
    status: 'Active'
  },
  {
    id: 8,
    name: 'Chronic Condition Care',
    description: 'General resources for ongoing health management.',
    icon: 'Stethoscope',
    status: 'Active'
  },
  {
    id: 9,
    name: 'Child Care',
    description: 'General child health and wellbeing information.',
    icon: 'Baby',
    status: 'Active'
  }
]

const iconOptions = [
  { label: 'Baby', value: 'Baby' },
  { label: 'People', value: 'Users' },
  { label: 'Heart', value: 'Heart' },
  { label: 'Activity', value: 'Activity' },
  { label: 'Nutrition', value: 'Apple' },
  { label: 'Mental Wellness', value: 'Brain' },
  { label: 'Healthcare', value: 'Stethoscope' },
  { label: 'Health', value: 'HeartPulse' }
]

const iconMap = {
  Baby,
  Users,
  HeartPulse,
  Activity,
  Apple,
  Brain,
  Heart,
  Stethoscope
}

function CategoryManagement() {
  const [categories, setCategories] = useState(initialCategories)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [notice, setNotice] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: 'HeartPulse',
    status: 'Active'
  })

  const filteredCategories = categories.filter((category) =>
    `${category.name} ${category.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      icon: 'HeartPulse',
      status: 'Active'
    })
    setEditingId(null)
    setShowForm(false)
  }

  const openAddForm = () => {
    setNotice('')
    setFormData({
      name: '',
      description: '',
      icon: 'HeartPulse',
      status: 'Active'
    })
    setEditingId(null)
    setShowForm(true)
  }

  const openEditForm = (category) => {
    setNotice('')
    setFormData({
      name: category.name,
      description: category.description,
      icon: category.icon,
      status: category.status
    })
    setEditingId(category.id)
    setShowForm(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const normalizedName = formData.name.trim()

    if (!normalizedName) {
      setNotice('Please enter a category name.')
      return
    }

    const duplicate = categories.some(
      (category) =>
        category.name.toLowerCase() === normalizedName.toLowerCase() &&
        category.id !== editingId
    )

    if (duplicate) {
      setNotice('A category with this name already exists.')
      return
    }

    const updatedCategory = {
      ...formData,
      name: normalizedName,
      description: formData.description.trim()
    }

    if (editingId !== null) {
      setCategories((previous) =>
        previous.map((category) =>
          category.id === editingId
            ? { ...category, ...updatedCategory }
            : category
        )
      )
      setNotice('Category updated in the demo.')
    } else {
      setCategories((previous) => [
        ...previous,
        {
          ...updatedCategory,
          id: Date.now()
        }
      ])
      setNotice('Category added in the demo.')
    }

    resetForm()
  }

  const handleDelete = (id) => {
    const category = categories.find((item) => item.id === id)

    if (!category) return

    const confirmed = window.confirm(
      `Delete the "${category.name}" demo category?`
    )

    if (!confirmed) return

    setCategories((previous) =>
      previous.filter((item) => item.id !== id)
    )

    setNotice(`"${category.name}" was removed from the demo list.`)
  }

  const activeCount = categories.filter(
    (category) => category.status === 'Active'
  ).length

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-4 py-8 text-[#183D32] sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Back link */}
        <Link
          to="/admin-dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64816A] hover:text-[#183D32]"
        >
          <ArrowLeft size={18} />
          Back to Admin Dashboard
        </Link>

        {/* Heading */}
        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-[#64816A]">
              Administration / Category Management
            </p>
            <h1 className="mt-2 text-3xl font-bold">
              Health Categories
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Organize the health and wellness categories available in
              HealthNest.
            </p>
          </div>

          <button
            type="button"
            onClick={openAddForm}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#183D32] px-5 py-3 font-semibold text-white hover:bg-[#285746]"
          >
            <Plus size={19} />
            Add Category
          </button>
        </div>

        {/* Demo notice */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E3E8DF] bg-white p-4">
          <ShieldCheck
            size={22}
            className="mt-0.5 shrink-0 text-[#64816A]"
          />
          <p className="text-sm leading-6 text-gray-600">
            <span className="font-semibold text-[#183D32]">
              Demo mode:
            </span>{' '}
            Categories are managed in temporary page state. Changes are not
            saved to a database and will reset when you refresh.
          </p>
        </div>

        {/* Summary cards */}
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#E8EFE5] p-3">
                <Layers size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total categories</p>
                <p className="mt-1 text-2xl font-bold">
                  {categories.length}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#E8EFE5] p-3">
                <CheckCircle2 size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active categories</p>
                <p className="mt-1 text-2xl font-bold">{activeCount}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#E8EFE5] p-3">
                <HeartPulse size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">HealthNest sections</p>
                <p className="mt-1 text-2xl font-bold">9</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add/Edit form */}
        {showForm && (
          <section className="mt-7 rounded-2xl border border-[#E3E8DF] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold">
                {editingId !== null ? 'Edit Category' : 'Add New Category'}
              </h2>

              <button
                type="button"
                onClick={resetForm}
                aria-label="Close category form"
                className="rounded-lg p-2 hover:bg-[#F2F5EF]"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Category name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter category name"
                  maxLength={60}
                  className="w-full rounded-xl border border-[#DCE5D9] px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Category icon
                </label>
                <select
                  name="icon"
                  value={formData.icon}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                >
                  {iconOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe this health category"
                  rows={3}
                  maxLength={250}
                  className="w-full resize-y rounded-xl border border-[#DCE5D9] px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="flex flex-wrap items-end gap-3">
                <button
                  type="submit"
                  className="rounded-xl bg-[#183D32] px-5 py-3 font-semibold text-white hover:bg-[#285746]"
                >
                  {editingId !== null ? 'Save Changes' : 'Create Category'}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl border border-[#DCE5D9] px-5 py-3 font-semibold hover:bg-[#F2F5EF]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Search */}
        <div className="mt-8">
          <label
            htmlFor="category-search"
            className="mb-2 block text-sm font-semibold"
          >
            Search categories
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-[#DCE5D9] bg-white px-4">
            <Search size={20} className="text-[#64816A]" />
            <input
              id="category-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by category name or description..."
              className="w-full bg-transparent py-4 text-sm outline-none"
            />
          </div>
        </div>

        {/* Category list */}
        <section className="mt-7">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold">All Categories</h2>
            <span className="text-sm text-gray-500">
              {filteredCategories.length} results
            </span>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCategories.map((category) => {
              const CategoryIcon = iconMap[category.icon] || HeartPulse

              return (
                <article
                  key={category.id}
                  className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="rounded-xl bg-[#E8EFE5] p-3">
                      <CategoryIcon size={25} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        category.status === 'Active'
                          ? 'bg-[#E8EFE5] text-[#285746]'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {category.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold">
                    {category.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                    {category.description || 'No description provided.'}
                  </p>

                  <div className="mt-5 flex gap-3 border-t border-[#EDF0E9] pt-4">
                    <button
                      type="button"
                      onClick={() => openEditForm(category)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#DCE5D9] px-3 py-2.5 text-sm font-semibold hover:bg-[#F2F5EF]"
                    >
                      <Pencil size={16} />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(category.id)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-100 px-3 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          {filteredCategories.length === 0 && (
            <div className="mt-5 rounded-2xl border border-dashed border-[#C8D6C4] bg-white p-10 text-center">
              <Layers size={32} className="mx-auto text-[#64816A]" />
              <h3 className="mt-3 font-bold">No categories found</h3>
              <p className="mt-2 text-sm text-gray-500">
                Try another search or add a new category.
              </p>
            </div>
          )}
        </section>

        {notice && (
          <p
            role="status"
            className="mt-6 rounded-xl bg-[#E8EFE5] p-4 text-sm font-medium"
          >
            {notice}
          </p>
        )}

      </div>
    </div>
  )
}

export default CategoryManagement
