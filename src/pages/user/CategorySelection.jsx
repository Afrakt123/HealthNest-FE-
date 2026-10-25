import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Leaf,
  Baby,
  Heart,
  HeartPulse,
  Dumbbell,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

const categories = [
  {
    id: 'maternal-care',
    title: 'Maternal Care',
    description: 'Pregnancy, motherhood and maternal wellness.',
    icon: Baby,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    id: 'elderly-care',
    title: 'Elderly Care',
    description: 'Healthy ageing, daily care and well-being.',
    icon: Heart,
    color: 'bg-amber-50 text-amber-700',
  },
  {
    id: 'womens-health',
    title: "Women's Health",
    description: 'Women’s wellness, menstrual health and PCOS education.',
    icon: HeartPulse,
    color: 'bg-purple-50 text-purple-700',
  },
  {
    id: 'fitness-wellness',
    title: 'Fitness & Wellness',
    description: 'Fitness activities and healthy everyday habits.',
    icon: Dumbbell,
    color: 'bg-sky-50 text-sky-700',
  },
];

function CategorySelection() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories((previous) =>
      previous.includes(categoryId)
        ? previous.filter((id) => id !== categoryId)
        : [...previous, categoryId]
    );
  };

  const handleContinue = () => {
    if (selectedCategories.length === 0) {
      return;
    }

    // Temporary storage until the backend is connected.
    localStorage.setItem(
      'healthNestCategories',
      JSON.stringify(selectedCategories)
    );

    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF5] px-5 py-8 text-[#183D32] sm:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Logo */}
        <Link
          to="/"
          className="mb-12 flex items-center justify-center gap-2"
        >
          <Leaf size={32} className="text-[#64816A]" />
          <span className="font-serif text-3xl font-bold">
            HealthNest
          </span>
        </Link>

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF1E7] text-[#52775B]">
            <HeartPulse size={32} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#718B71]">
            YOUR PERSONAL WELLNESS JOURNEY
          </p>

          <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">
            What would you like to focus on?
          </h1>

          <p className="mt-4 leading-7 text-[#748078]">
            Choose the health categories that match your needs.
            We'll use your choices to personalize your HealthNest dashboard.
          </p>

          <p className="mt-3 text-sm font-medium text-[#64816A]">
            Select one or more categories.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategories.includes(category.id);

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => toggleCategory(category.id)}
                aria-pressed={isSelected}
                className={`relative rounded-3xl border bg-white p-6 text-left transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  isSelected
                    ? 'border-[#64816A] bg-[#F0F5EC] ring-2 ring-[#64816A]/20'
                    : 'border-[#E6EAE1] hover:border-[#C9D8C6]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.color}`}
                  >
                    <Icon size={28} />
                  </div>

                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                      isSelected
                        ? 'border-[#52775B] bg-[#52775B] text-white'
                        : 'border-[#DCE5D7] text-transparent'
                    }`}
                  >
                    <CheckCircle2 size={19} />
                  </div>
                </div>

                <h2 className="mt-6 font-serif text-xl font-semibold">
                  {category.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#748078]">
                  {category.description}
                </p>

                <p
                  className={`mt-5 text-sm font-semibold ${
                    isSelected ? 'text-[#52775B]' : 'text-[#829087]'
                  }`}
                >
                  {isSelected ? 'Selected ✓' : 'Select this category'}
                </p>
              </button>
            );
          })}
        </div>

        {/* Continue */}
        <div className="mx-auto mt-10 max-w-xl text-center">
          <button
            type="button"
            onClick={handleContinue}
            disabled={selectedCategories.length === 0}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#183D32] px-7 py-4 font-semibold text-white transition hover:bg-[#285A47] disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:min-w-72"
          >
            Continue to Dashboard
            <ArrowRight size={19} />
          </button>

          <p className="mt-4 flex items-center justify-center gap-2 text-xs leading-5 text-[#829087]">
            <ShieldCheck size={16} />
            You can change your preferences later.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategorySelection;