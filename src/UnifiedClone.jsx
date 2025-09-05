import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Arunachal Pradesh", href: "nitap.html" },
    { name: "Registration", href: "#registration" },
    { name: "Key Dates", href: "keydates.html" },
    { name: "Visa", href: "#visa" },
    { name: "Submission", href: "#submission" },
    { name: "Program", href: "#program" },
    { name: "Committees", href: "#committees" },
    { name: "Key Notes", href: "keyNotes.html" },
    { name: "Sponsorship", href: "sponsorship.html" },
    { name: "Accomodation & Travel", href: "#travel" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 flex-wrap items-center justify-end">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-sm md:text-base font-medium text-gray-700 hover:text-red-600 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-6 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-full bg-black transform transition duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-black transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-black transform transition duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setOpen(false)}
          ></div>
          <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6 space-y-4 overflow-y-auto">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="block text-gray-700 hover:text-red-600 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
