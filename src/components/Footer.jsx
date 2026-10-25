
import { Leaf } from 'lucide-react'

function Footer() {
  const categories = [
    'Maternal Care',
    'Elderly Care',
    "Women's Health",
    'Fitness & Wellness',
  ]

  return (
    <footer
      id="contact"
      className="border-t border-[#E6EAE1] bg-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <a href="#" className="flex items-center gap-2">
            <Leaf size={29} className="text-[#64816A]" />
            <span className="font-serif text-2xl font-bold">
              HealthNest
            </span>
          </a>

          <p className="mt-4 max-w-xs text-sm leading-6 text-[#748078]">
            A thoughtful companion for a more organized health and wellness journey.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Explore</h3>

          <div className="mt-4 space-y-3 text-sm text-[#748078]">
            <p>
              <a href="#about" className="hover:text-[#183D32]">
                About Us
              </a>
            </p>
            <p>
              <a href="#features" className="hover:text-[#183D32]">
                Features
              </a>
            </p>
            <p>
              <a href="#categories" className="hover:text-[#183D32]">
                Health Categories
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Health Categories</h3>

          <div className="mt-4 space-y-3 text-sm text-[#748078]">
            {categories.map((category) => (
              <p key={category}>{category}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Our Commitment</h3>

          <p className="mt-4 text-sm leading-6 text-[#748078]">
            We aim to make health information and personal wellness management
            easier to understand and organize.
          </p>
        </div>
      </div>

      <div className="border-t border-[#E6EAE1] px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#829087] sm:flex-row">
          <p>© 2026 HealthNest. All rights reserved.</p>
          <p>Designed with care for your well-being.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
