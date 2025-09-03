import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function UnifiedClone() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-[#5B0000] font-sans">
      {/* Updated Header */}
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src="/logo.png" alt="Institute Logo" className="h-12 w-auto" />
          <nav className="hidden md:flex gap-6 text-sm md:text-base font-medium">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="nitap.html" className="hover:underline">
              About NIT Arunachal Pradesh
            </a>
            <a href="#registration" className="hover:underline">
              Registration
            </a>
            <a href="keydates.html" className="hover:underline">
              Key Dates
            </a>
            <a href="#visa" className="hover:underline">
              Visa
            </a>
            <a href="#submission" className="hover:underline">
              Submission
            </a>
            <a href="#program" className="hover:underline">
              Program
            </a>
            <a href="#committees" className="hover:underline">
              Committees
            </a>
            <a href="#keynotes" className="hover:underline">
              Key Notes
            </a>
            <a href="sponsorship.html" className="hover:underline">
              Sponsorship
            </a>
            <a href="#travel" className="hover:underline text-center">
              Accomodation
              <br />& Travel
            </a>
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? "X" : "M"}
          </button>
        </div>

        {open && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-black opacity-40"
              onClick={() => setOpen(false)}
            ></div>

            <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6 space-y-4 overflow-y-auto">
              <a
                href="#home"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                About Arunachal Pradesh
              </a>
              <a
                href="#registration"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                Registration
              </a>
              <a
                href="#dates"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                Key Dates
              </a>
              <a
                href="#visa"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                Visa
              </a>
              <a
                href="#submission"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                Submission
              </a>
              <a
                href="#program"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                Program
              </a>
              <a
                href="#committees"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                Committees
              </a>
              <a
                href="#keynotes"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                Key Notes
              </a>
              <a
                href="#sponsorship"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                Sponsorship
              </a>
              <a
                href="#travel"
                className="block hover:underline"
                onClick={() => setOpen(false)}
              >
                Accomodation & Travel
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="pt-32">
        <section
          id="hero"
          className="relative h-[90vh] bg-cover  bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/mnit-campus.jpg')",
            backgroundSize: "cover", // makes image cover entire section
            backgroundPosition: "bottom", // positions image at the bottom
            backgroundRepeat: "no-repeat", // prevents image from repeating
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
            <p className="text-xl md:text-2xl">
              Conference dates: 10-12 March, 2026
            </p>
          </div>
        </section>

        {/* Welcome Section */}
        <section id="welcome" className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            ICAMAS-2026 <span className="text-red-500">Welcomes You</span>
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left side - Two images stacked or side by side */}
            <div className="flex flex-col md:flex-col gap-6 md:w-1/2">
              <img
                src="/welcome-image1.png"
                alt="Conference Setup"
                className="w-full h-full object-cover rounded shadow"
                style={{ minHeight: "100%" }}
              />
            </div>

            {/* Right side - Text content */}
            <div className="text-[#540000] md:w-1/2 space-y-4">
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
            </div>
          </div>
        </section>
        <p>
          You are cordially invited to be a part of ICAMAS-2026 to be held in{" "}
          <strong>hybrid mode during 10-12 March 2026</strong>.
        </p>

        {/* Conference Section */}
        <section
          id="conference"
          className="py-12 px-4 bg-yellow-50 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Conferences</h2>
          <p className="text-[#540000] mb-8">
            The 3–day event will provide the ideal opportunity for researchers,
            industrialists, and equipment manufacturers/suppliers to meet, share
            ideas and learn about the latest scientific and technological
            advances in all of the listed fields, along with the future
            directions that each of the fields is taking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                The International Conference on Maintenance Engineering (IncoME)
              </h3>
              <p className="text-sm text-[#540000] mb-2">
                IncoME aims to provide a common platform by which professionals,
                engineers, practitioners, and researchers working in the field
                of plant maintenance and reliability can share their
                experiences.
              </p>
              <a
                href="#"
                className="text-red-600 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                The Efficiency and Performance Engineering Network (TEPEN)
                Conferences
              </h3>
              <p className="text-sm text-[#540000] mb-2">
                (TEPEN) is an international network of world leading researchers
                in the field of efficiency and performance engineering.
              </p>
              <a
                href="#"
                className="text-red-600 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                International Conference on Damage Assessment of Structures
                (DAMAS)
              </h3>
              <p className="text-sm text-[#540000] mb-2">
                DAMAS is one of the most influential conferences in the field of
                structural damage identification and machine fault diagnosis in
                the world and is held every two years.
              </p>
              <a
                href="#"
                className="text-red-600 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Scope Section */}
        <section id="scope" className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Scope of the Conference</h2>
          <p className="text-[#540000] mb-4">
            The conference covers a broad area with multi-disciplinary interests
            in the fields of plant maintenance, asset management, reliability,
            condition monitoring, artificial intelligence and related areas,
            ranging from fundamental research to real-world applications.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src="/welcome-image.jpg"
              alt="Scope Image"
              className="md:w-1/2 rounded shadow"
            />
            <div className="md:w-1/2 text-[#540000] space-y-1">
              <p>
                The conference welcomes the submission of papers in the nature
                of original research, technical review and tutorial from the
                following, but not limited to, cyber physical systems
                applications in following areas:
              </p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Artificial Intelligence / Machine Learning</li>
                <li>Asset Management</li>
                <li>Biomedical Damage Detection and Analysis</li>
                <li>Condition Monitoring and Machine Health Monitoring</li>
                <li>Condition–based and Predictive Maintenance</li>
                <li>Damage Assessment & Health Management</li>
                <li>Electrical Vehicle Energy Management</li>
                <li>Health, Safety & Carbon Neutralization with CPS</li>
                <li>Industrial Internet of Things (IIoT)</li>
                <li>Life Cycle Cost Optimisation</li>
                <li>Machine Lube Oil Analysis & Monitoring</li>
                <li>Maintenance Auditing</li>
                <li>Maintenance Organisation</li>
                <li>Maintenance Performance Measurement</li>
                <li>Manufacturing Process Monitoring</li>
                <li>Mobile Technology</li>
                <li>Non–Destructive Testing with CPS</li>
                <li>Plant Outage</li>
                <li>Prognostics and Health Management</li>
                <li>Reliability, Availability, Maintainability & Safety</li>
                <li>Sensors, Instrumentation and Measurement Systems</li>
                <li>Signal and Image Processing Methods in CPS</li>
                <li>Structural Integrity</li>
                <li>Vibro–acoustics Monitoring</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-red-500">Contact Us</span>
              <span className="text-[#540000]"> To Know More</span>
            </h2>

            <form action="#" method="POST" className="max-w-4xl">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="w-full bg-red-300 p-4 mb-4 rounded focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="w-full bg-red-300 p-4 mb-4 rounded focus:outline-none"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="MESSAGE"
                className="w-full bg-red-300 p-4 mb-4 rounded focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#540000] font-semibold py-2 px-6 rounded"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-red-100 py-10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img src="/logo.png" alt="NIT Logo" className="w-20 mb-4" />
              <p className="text-[#540000] mb-4">
                National Institute of Technology Arunachal Pradesh (NITAP) is
                one of the 31 prestigious National Institutes of Technology in
                India, recognized as an Institute of National Importance under
                the NIT Act, 2007. Established in the year 2010 by the
                Government of India, it aims to foster excellence in technical
                education and research in the northeastern region of India. The
                institute is surrounded by lush greenery and scenic hills,
                offering a peaceful and inspiring environment for study and
                innovation.
              </p>
              <p className="text-[#540000] font-medium">
                Copyright © 2024 UNIfied 2024 – All Rights Reserved.
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
