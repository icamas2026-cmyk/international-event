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
    // { name: "Publication", href: "#travel" },
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

          <img src="/ica.png" alt="Logo" className="h-16 w-auto" />

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
            backgroundSize: "cover", // makes image cover entire section
            backgroundPosition: "bottom", // positions image at the bottom
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
              <br />
              <br />
              All accepted & presented papers will be published in Scopus
              indexed conference proceedings
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
                desc: "The National Institute of Technology, Arunachal Pradesh was established in the year 2010 by MHRD, Govt. of India and was inaugurated on 18th of August, 2010 as a member of a group of ten new NITs. These new NITs were established as centers of excellence in technical education to combat the growing need for technological professionals in India as well as in the world. It is one of the 31 National Institutes of Technology in India and is recognized as an Institute of National Importance. ",
                img: "./nit.jpg",
              },
              {
                title: "Recognition",
                desc: "Presently the Institute is running in the project phase with a yearly intake of 230 undergraduate students in six major Engineering departments such as Bio-Technology, Civil Engineering, Computer Science and Engineering, Electrical Engineering, Electronics and Communication Engineering and Mechanical Engineering. Each department is equipped with well-established state-of-the-art laboratories to crater the holistic development of the students.",
                img: "./library.jpg",
              },
              {
                title: "Research & Development",
                desc: "Despite of few geographical constraints, the Institute has thrived through rigorous challenges and has evolved to see new heights with a present capacity of 850 students pursuing various bachelor, master as well as doctorate degrees from the departments. The faculty and student of the Institute are also engaged in various R&D projects sponsored by various Government agencies and the current value of such running project is around 10 Crore.",
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

        <section className="bg-gray-50 text-gray-800 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            {/* Left Side - Image with animation */}
            <motion.img
              src="/depatment.jpg"
              alt="Mechanical Engineering Department"
              className="rounded-xl shadow-lg md:w-1/2 max-h-80 object-cover hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            {/* Right Side - Text with animation */}
            <motion.div
              className="md:w-1/2 space-y-4"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-900">
                About Department
              </h2>
              <p className="text-justify leading-relaxed text-gray-700">
                The Department of Mechanical Engineering at
                <strong> NIT Arunachal Pradesh </strong> was established in
                August 2013. The department offers a four-year B.Tech degree in
                Mechanical Engineering with an annual intake of 40 students.
              </p>
              <p className="text-justify leading-relaxed text-gray-700">
                Since July 2019, the department has also been offering a
                <strong> 2-year M.Tech. programme </strong> in Fluids and
                Thermal Engineering with an intake of 20 students.
              </p>
              <p className="text-justify leading-relaxed text-gray-700">
                Additionally, the department initiated its
                <strong> Ph.D. research programme </strong> in 2015-16,
                contributing to advanced research and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            {/* Call for Papers */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-red-900">
                Call for Papers
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Authors are invited to SUBMIT an abstract of the proposed work
                before the deadline. Abstract should have a minimum of 250 words
                and not more than 500 words. Abstract & Paper submission through{" "}
                <a
                  href="https://www.easychair.org"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  www.easychair.org
                </a>
                .
              </p>
              <p className="mt-2 text-gray-700">
                All submitted papers must be original and should not be under
                consideration for publication in any other journal or
                conference. Full length paper is limited to 10–12 pages as per
                the proposed format.
              </p>
            </motion.div>

            {/* Submission Categories */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold text-red-800">
                Submission Categories
              </h3>
              <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                <li>Full Research Papers</li>
                <li>Comprehensive Review Papers</li>
              </ul>
            </motion.div>

            {/* Topics */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-red-800 mb-4">
                Unpublished Original technical papers are sought in the
                following topics which include, but are not limited to:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 list-disc ml-6">
                <li>Experimental and Computational Fluid Mechanics</li>
                <li>Clean Energy Systems and Renewable Technologies</li>
                <li>Dynamic Systems, Control, and AI Integration</li>
                <li>Mechatronics and Robotics</li>
                <li>Computational Mechanics</li>
                <li>Modelling and Simulation</li>
                <li>Biomechanics and Biomedical Engineering</li>
                <li>Advanced Materials and Manufacturing</li>
                <li>Digital Manufacturing and Industry 4.0</li>
                <li>Aerodynamics</li>
                <li>Flight Mechanics, Dynamics, Testing and Simulation</li>
                <li>Aircraft Structure and Design</li>
                <li>Control Systems and Avionics</li>
                <li>Fuels and Combustion</li>
                <li>Advanced techniques in UAV and MAV</li>
                <li>Aircraft, Spacecraft, and Rocket Design</li>
                <li>Smart Materials for Space Exploration</li>
                <li>Sustainable Aviation and Sustainable Space</li>
                <li>Remote Sensing and Applications</li>
                <li>Active and Passive Space Control</li>
                <li>Space Policy and Space Law</li>
                <li>Autonomous Taxiing</li>
                <li>Hybrid Aircrafts</li>
                <li>Satellite Communication</li>
                <li>IoT in Aerospace Applications</li>
                <li>Sensors and Applications</li>
                <li>IoT and Cyber-Physical Systems in Engineering</li>
                <li>Multiscale and Multiphysics Engineering Solutions</li>
                <li>FEA & CFD in Engineering</li>
              </ul>
            </motion.div>

            {/* NEW Publication Section */}
            {/* NEW Publication Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h2 className="text-3xl font-bold text-red-900 mb-4">
                Publication
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>All accepted & presented papers</strong> will be
                published in{" "}
                <strong>Scopus indexed conference proceedings</strong> and
                selected papers in{" "}
                <strong>SCI/SCOPUS Indexed International Journals.</strong>
                Abstracts of all accepted papers will be published in the{" "}
                <strong>Conference Abstract Book</strong> and included in the{" "}
                <strong>conference kit</strong> for all the registered
                participants.
              </p>
            </motion.div>
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
                © ICAMAS 2026 – All Rights Reserved.
              </p>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-lg font-bold text-[#540000] mb-2">
                Contact Us
              </h3>
              <p className="text-[#540000] mb-1">Dr. Ravi Ranjan kumar</p>
              <p className="text-[#540000] mb-1">[Organizing Secretary]</p>
              <p className="text-[#540000] mb-1">
                icamas2026@gmail.com <br />ravi@nitap.ac.in</p>
              <p className="text-[#540000]">(+91)-9085659292</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
} 
