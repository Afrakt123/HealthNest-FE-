import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Menu } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#E9EDE5] bg-[#FAFAF5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Leaf size={34} className="text-[#64816A]" />
          <span className="font-serif text-2xl font-bold text-[#183D32]">
            HealthNest
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-[#183D32] transition hover:text-[#64816A]"
          >
            Home
          </Link>

          <a
            href="#about"
            className="text-sm font-medium text-[#183D32] transition hover:text-[#64816A]"
          >
            About
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-[#183D32] transition hover:text-[#64816A]"
          >
            Features
          </a>

          <a
            href="#categories"
            className="text-sm font-medium text-[#183D32] transition hover:text-[#64816A]"
          >
            Health Categories
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-[#183D32] transition hover:text-[#64816A]"
          >
            Contact
          </a>
        </div>

        {/* Login Button */}
        <div className="flex items-center">
          <Link
            to="/login"
            className="rounded-full border border-[#64816A] px-7 py-2.5 text-sm font-medium text-[#183D32] transition hover:bg-[#EAF1E7]"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
