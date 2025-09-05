import React, { useState } from "react";
import { motion } from "framer-motion";

export default function UnifiedClone() {
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

      {/* Hero Section */}
      <main className="pt-32">
        <section
          id="hero"
          className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/mnit-campus.jpg')",
            position: bottom
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

        {/* Welcome Section */}
        <motion.section
          id="welcome"
          className="py-12 px-4 max-w-6xl mx-auto"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            ICAMAS-2026 <span className="text-red-500">Welcomes You</span>
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <motion.div
              className="flex flex-col md:w-1/2 gap-6"
              variants={imageVariant}
            >
              <img
                src="/welcome-image1.png"
                alt="Conference Setup"
                className="w-full h-full object-cover rounded shadow-lg hover:scale-105 transition-transform duration-500"
                style={{ minHeight: "100%" }}
              />
            </motion.div>

            <motion.div
              className="text-[#540000] md:w-1/2 space-y-4"
              variants={textVariant}
            >
              <p>
                The 1st International Conference on Advances in Mechanical and
                Aerospace Science (ICAMAS-2026) will be held at the National
                Institute of Technology Arunachal Pradesh. Aligned with the{" "}
                <strong>Viksit Bharat 2047 Vision</strong>, the conference
                underscores key national priorities such as economic
                diversification, sustainable development, and the advancement of
                a knowledge-driven economy.
              </p>
              <p>
                ICAMAS-2026 will bring together leading researchers, industry
                professionals, and practitioners to share insights and explore
                the latest developments in Mechanical and Aerospace Engineering.
                With a particular emphasis on sustainability and renewable
                energy, the conference seeks to address global challenges
                through interdisciplinary engineering solutions.
              </p>
              <p>
                By highlighting innovative technologies and methodologies,
                ICAMAS-2026 aims to support India’s ambition of becoming a
                global leader in green technology, while also contributing to
                the wider global effort toward a sustainable and resilient
                future.
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-center mt-8 font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            You are cordially invited to be a part of ICAMAS-2026 in{" "}
            <strong>hybrid mode during 10-12 March 2026</strong>.
          </motion.p>
        </motion.section>

        {/* About NIT Section */}
        <section className="bg-gray-50 text-gray-800 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
              About NIT Arunachal Pradesh
            </h2>

            {[
              {
                title: "Establishment",
                desc: "Founded in 2010 by the Ministry of Human Resource Development, NIT Arunachal Pradesh began as one of the ten new NITs created to meet India’s growing need for skilled engineers and innovators.",
                img: "./nit.jpg",
              },
              {
                title: "Recognition",
                desc: "Recognized as an Institute of National Importance, NIT Arunachal Pradesh admits 180 undergraduate students yearly across core engineering branches, fostering excellence in technical education.",
                img: "./library.jpg",
              },
              {
                title: "Research & Development",
                desc: "With sponsored projects worth nearly 10 Crores, the institute promotes advanced research while encouraging students and faculty to contribute to national and global technological progress.",
                img: "./research.jpg",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: idx % 2 === 1 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-justify">{item.desc}</p>
                </div>
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg shadow-lg md:w-1/3 max-h-64 object-cover hover:scale-105 transition-transform duration-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-red-100 py-10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="md:w-1/2">
              <img src="/logo.png" alt="NIT Logo" className="w-20 mb-4" />
              <p className="text-[#540000] mb-4">
                National Institute of Technology Arunachal Pradesh (NITAP) is
                one of the 31 prestigious NITs in India, recognized as an
                Institute of National Importance under the NIT Act, 2007.
                Established in 2010 by the Government of India, it fosters
                excellence in technical education and research in the
                northeastern region of India.
              </p>
              <p className="text-[#540000] font-medium">
                © 2024 UNIfied – All Rights Reserved.
              </p>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-lg font-bold text-[#540000] mb-2">
                Contact Us
              </h3>
              <p className="text-[#540000] mb-1">NIT Arunachal Pradesh</p>
              <p className="text-[#540000] mb-1">nitap.ac.in</p>
              <p className="text-[#540000]">(+91)-9549654559</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
