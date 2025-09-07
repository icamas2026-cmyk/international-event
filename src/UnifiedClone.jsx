import React, { useState } from "react";
import { motion } from "framer-motion";

export default function UnifiedClone() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Arunachal Pradesh", href: "about.html" },
    { name: "Registration", href: "registration.html" },
    { name: "Key Dates", href: "keydates.html" },
    { name: "Visa", href: "visa.html" },
    { name: "Submission", href: "#submission" },
    { name: "Program", href: "#program" },
    { name: "Publication", href: "#travel" },
    { name: "Committees", href: "committees.html" },
    { name: "Key Notes", href: "keyNotes.html" },
    { name: "Sponsorship", href: "sponsorship.html" },
    { name: "Accomodation & Travel", href: "#travel" },
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-white text-[#5B0000] font-sans">
      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center justify-end whitespace-nowrap">
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

          <img src="/ica.png" alt="Logo" className="h-12 w-auto" />

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

      {/* Hero Section */}
      <main className="pt-32">
        <section
          id="hero"
          className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/mnit-campus.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-black/40 w-full h-full absolute top-0 left-0"></div>
          <div className="relative z-10 text-center px-4 text-white">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-6xl font-bold leading-tight mb-6"
            >
              1st International Conference on Advances in Mechanical and
              Aerospace Science (ICAMAS-2026)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl"
            >
              Conference dates: 10-12 March, 2026
            </motion.p>
          </div>
        </section>

        {/* Other sections remain unchanged ... */}
      </main>
    </div>
  );
}
