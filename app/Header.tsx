"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <img
              src="/logo.jpg"
              alt="Schoolfee"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#00468e] font-medium transition duration-300"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/registration"
              className="bg-[#f4951d] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#00468e] focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#00468e] hover:bg-blue-50 transition"
              >
                {item.name}
              </Link>
            ))}

            {/* APPLY BUTTON (MOBILE) */}
            <Link
              href="/registration"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-4 bg-[#f4951d] text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-md"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
