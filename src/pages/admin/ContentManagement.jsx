
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  FileText,
  BookOpen,
  Clock,
  Eye,
  ShieldCheck
} from 'lucide-react'

const initialArticles = [
  {
    id: 1,
    title: 'Understanding the Importance of Sleep',
    category: 'Sleep',
    author: 'HealthNest Team',
    readTime: '4 min',
    status: 'Published',
    content:
      'Sleep is an important part of general health and wellbeing. A regular sleep schedule and comfortable sleeping environment may support better sleep.'
  },
  {
    id: 2,
    title: 'The Basics of Balanced Nutrition',
    category: 'Nutrition',
    author: 'HealthNest Team',
    readTime: '5 min',
    status: 'Published',
    content:
      'A varied eating pattern can help provide the nutrients your body needs. Individual nutritional needs differ, so seek professional guidance when necessary.'
  },
  {
    id: 3,
    title: 'Making Physical Activity Part of Your Day',
    category: 'Fitness',
    author: 'HealthNest Team',
    readTime: '4 min',
    status: 'Draft',
    content:
      'Physical activity can include walking, household tasks, cycling, and structured exercise. Choose activities that suit your ability and circumstances.'
  },
  {
    id: 4,
    title: 'Looking After Your Mental Wellbeing',
    category: 'Mental Wellness',
    author: 'HealthNest Team',
    readTime: '5 min',
    status: 'Published',
    content:
      'Mental wellbeing includes emotional health, social connection, and how we manage everyday experiences. Support is available when difficult feelings become overwhelming.'
  },
  {
    id: 5,
    title: 'Understanding Preventive Healthcare',
    category: 'General Health',
    author: 'HealthNest Team',
    readTime: '4 min',
    status: 'Draft',
    content:
      'Preventive healthcare may include check-ups, recommended screening, vaccinations, and discussions about health risks with a healthcare professional.'
  }
]

const articleCategories = [
  'Sleep',
  'Nutrition',
  'Fitness',
  'Mental Wellness',
  'General Health',
  'Heart Health',
  'Maternal Care',
  'Elderly Care',
  'Women’s Health'
]

function ContentManagement() {
  const [articles, setArticles] = useState(initialArticles)
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [previewArticle, setPreviewArticle] = useState(null)
  const [notice, setNotice] = useState('')

  const emptyForm = {
    title: '',
    category: 'General Health',
    author: 'HealthNest Team',
    readTime: '4 min',
    status: 'Draft',
    content: ''
  }

  const [formData, setFormData] = useState(emptyForm)

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      `${article.title} ${article.author} ${article.category}`
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesCategory =
      categoryFilter === 'All' || article.category === categoryFilter

    const matchesStatus =
      statusFilter === 'All' || article.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  const publishedCount = articles.filter(
    (article) => article.status === 'Published'
  ).length

  const draftCount = articles.filter(
    (article) => article.status === 'Draft'
  ).length

  const openAddForm = () => {
    setFormData(emptyForm)
    setEditingId(null)
    setShowForm(true)
    setNotice('')
    setPreviewArticle(null)
  }

  const openEditForm = (article) => {
    setFormData({
      title: article.title,
      category: article.category,
      author: article.author,
      readTime: article.readTime,
      status: article.status,
      content: article.content
    })

    setEditingId(article.id)
    setShowForm(true)
    setNotice('')
    setPreviewArticle(null)
  }

  const closeForm = () => {
    setShowForm(false)
    setEditingId(null)
    setFormData(emptyForm)
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

    const title = formData.title.trim()
    const content = formData.content.trim()

    if (!title || !content) {
      setNotice('Please enter both an article title and article content.')
      return
    }

    const duplicate = articles.some(
      (article) =>
        article.title.toLowerCase() === title.toLowerCase() &&
        article.id !== editingId
    )

    if (duplicate) {
      setNotice('An article with this title already exists.')
      return
    }

    const updatedArticle = {
      ...formData,
      title,
      content,
      author: formData.author.trim() || 'HealthNest Team'
    }

    if (editingId !== null) {
      setArticles((previous) =>
        previous.map((article) =>
          article.id === editingId
            ? { ...article, ...updatedArticle }
            : article
        )
      )

      setNotice('Article updated in the demo.')
    } else {
      setArticles((previous) => [
        {
          ...updatedArticle,
          id: Date.now()
        },
        ...previous
      ])

      setNotice('Article added in the demo.')
    }

    closeForm()
  }

  const handleDelete = (id) => {
    const article = articles.find((item) => item.id === id)

    if (!article) return

    const confirmed = window.confirm(
      `Delete the article "${article.title}" from this demo?`
    )

    if (!confirmed) return

    setArticles((previous) =>
      previous.filter((item) => item.id !== id)
    )

    setNotice('Article removed from the demo list.')

    if (previewArticle?.id === id) {
      setPreviewArticle(null)
    }
  }

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

        {/* Page heading */}
        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-[#64816A]">
              Administration / Content Management
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Content Management
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Create, edit, review, and organize HealthNest educational articles.
            </p>
          </div>

          <button
            type="button"
            onClick={openAddForm}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#183D32] px-5 py-3 font-semibold text-white hover:bg-[#285746]"
          >
            <Plus size={19} />
            Add Article
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
            Articles are stored in temporary React state. Changes are not
            saved to a database and will reset when the page is refreshed.
            Health articles should be reviewed for accuracy before publication.
          </p>
        </div>

        {/* Summary cards */}
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#E8EFE5] p-3">
                <FileText size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total articles</p>
                <p className="mt-1 text-2xl font-bold">{articles.length}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#E8EFE5] p-3">
                <BookOpen size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Published</p>
                <p className="mt-1 text-2xl font-bold">{publishedCount}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#FFF1D9] p-3">
                <Clock size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Drafts</p>
                <p className="mt-1 text-2xl font-bold">{draftCount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add/Edit form */}
        {showForm && (
          <section className="mt-7 rounded-2xl border border-[#E3E8DF] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">
                  {editingId !== null ? 'Edit Article' : 'Create Article'}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Enter the article details below.
                </p>
              </div>

              <button
                type="button"
                onClick={closeForm}
                aria-label="Close article form"
                className="rounded-lg p-2 hover:bg-[#F2F5EF]"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 grid gap-5 sm:grid-cols-2">

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Article title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter article title"
                  maxLength={150}
                  className="w-full rounded-xl border border-[#DCE5D9] px-4 py-3 outline-none focus:border-[#64816A]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                >
                  {articleCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Author name"
                  className="w-full rounded-xl border border-[#DCE5D9] px-4 py-3 outline-none focus:border-[#64816A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Estimated reading time
                </label>
                <select
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                >
                  <option>2 min</option>
                  <option>3 min</option>
                  <option>4 min</option>
                  <option>5 min</option>
                  <option>7 min</option>
                  <option>10 min</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Article status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#DCE5D9] bg-white px-4 py-3 outline-none focus:border-[#64816A]"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Article content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your educational article here..."
                  rows={7}
                  maxLength={10000}
                  className="w-full resize-y rounded-xl border border-[#DCE5D9] px-4 py-3 leading-6 outline-none focus:border-[#64816A]"
                  required
                />
                <p className="mt-1 text-right text-xs text-gray-400">
                  {formData.content.length}/10000 characters
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-xl bg-[#183D32] px-5 py-3 font-semibold text-white hover:bg-[#285746]"
                >
                  {editingId !== null ? 'Save Changes' : 'Create Article'}
                </button>

                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-xl border border-[#DCE5D9] px-5 py-3 font-semibold hover:bg-[#F2F5EF]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Search and filters */}
        <section className="mt-8 rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm">
          <h2 className="font-bold">Find articles</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-[#DCE5D9] px-4">
              <Search size={19} className="shrink-0 text-[#64816A]" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="w-full bg-transparent py-3.5 text-sm outline-none"
              />
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              aria-label="Filter by category"
              className="rounded-xl border border-[#DCE5D9] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#64816A]"
            >
              <option value="All">All categories</option>
              {articleCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter by status"
              className="rounded-xl border border-[#DCE5D9] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#64816A]"
            >
              <option value="All">All statuses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </section>

        {/* Article list */}
        <section className="mt-7">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold">Educational Articles</h2>
            <span className="text-sm text-gray-500">
              {filteredArticles.length} results
            </span>
          </div>

          <div className="mt-4 space-y-4">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="rounded-2xl border border-[#E3E8DF] bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">

                  <div className="flex items-start gap-4">
                    <div className="hidden rounded-xl bg-[#E8EFE5] p-3 sm:block">
                      <FileText size={24} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#E8EFE5] px-3 py-1 text-xs font-semibold text-[#285746]">
                          {article.category}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            article.status === 'Published'
                              ? 'bg-[#E8EFE5] text-[#285746]'
                              : 'bg-[#FFF1D9] text-[#87651A]'
                          }`}
                        >
                          {article.status}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold">
                        {article.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {article.content.length > 180
                          ? `${article.content.slice(0, 180)}...`
                          : article.content}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
                        <span>Author: {article.author}</span>
                        <span>Reading time: {article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:shrink-0">
                    <button
                      type="button"
                      onClick={() => setPreviewArticle(article)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DCE5D9] px-3 py-2.5 text-sm font-semibold hover:bg-[#F2F5EF]"
                    >
                      <Eye size={16} />
                      Preview
                    </button>

                    <button
                      type="button"
                      onClick={() => openEditForm(article)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DCE5D9] px-3 py-2.5 text-sm font-semibold hover:bg-[#F2F5EF]"
                    >
                      <Pencil size={16} />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(article.id)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-100 px-3 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="mt-5 rounded-2xl border border-dashed border-[#C8D6C4] bg-white p-10 text-center">
              <FileText size={32} className="mx-auto text-[#64816A]" />
              <h3 className="mt-3 font-bold">No articles found</h3>
              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or filters, or create a new article.
              </p>
            </div>
          )}
        </section>

        {/* Notice */}
        {notice && (
          <p
            role="status"
            className="mt-6 rounded-xl bg-[#E8EFE5] p-4 text-sm font-medium"
          >
            {notice}
          </p>
        )}

        {/* Article preview modal */}
        {previewArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={() => setPreviewArticle(null)}
          >
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="article-preview-title"
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#64816A]">
                    {previewArticle.category} · {previewArticle.readTime}
                  </p>
                  <h2
                    id="article-preview-title"
                    className="mt-2 text-2xl font-bold"
                  >
                    {previewArticle.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setPreviewArticle(null)}
                  aria-label="Close article preview"
                  className="rounded-lg p-2 hover:bg-[#F2F5EF]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                <BookOpen size={17} />
                By {previewArticle.author}
              </div>

              <div className="mt-6 whitespace-pre-wrap text-sm leading-7 text-gray-700">
                {previewArticle.content}
              </div>

              <p className="mt-6 rounded-xl bg-[#F2F5EF] p-4 text-xs leading-6 text-gray-600">
                Preview mode. This content is sample educational material.
                Health-related content should be reviewed before publication.
              </p>

              <button
                type="button"
                onClick={() => setPreviewArticle(null)}
                className="mt-5 w-full rounded-xl bg-[#183D32] px-4 py-3 font-semibold text-white hover:bg-[#285746]"
              >
                Close Preview
              </button>
            </section>
          </div>
        )}

      </div>
    </div>
  )
}

export default ContentManagement
