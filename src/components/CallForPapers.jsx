import React from 'react';
import { motion } from "framer-motion";

const CallForPapers = () => {
  return (
    <section id="callforpapers" className="scroll-mt-6 min-h-[70%] lg:min-h-screen py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

        {/* Header */}
        <motion.header
          className="bg-gradient-to-r from-green-200 to-blue-200 text-center rounded-b-3xl shadow-md w-11/12 sm:w-2/3 md:w-2/6 mx-auto p-4 sm:p-2 my-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700">CALL FOR PAPERS</h2>
        </motion.header>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="mt-4 text-sm sm:text-base text-gray-700">
            Authors are invited to submit an abstract of the proposed work before the deadline. Abstract should have a minimum of 250 words and not more than 500 words.
          </p>
          <p className="mt-2 text-sm sm:text-base text-gray-700">
            All submitted papers must be original and should not be under consideration for publication in any other journal or conference. Full length paper is limited to 10–12 pages as per the proposed format.
          </p>
        </motion.div>

        {/* Submission Categories */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl sm:text-2xl font-semibold text-blue-800 mb-2">Submission Categories</h3>
          <ul className="list-disc ml-6 text-sm sm:text-base text-gray-700 space-y-1">
            <li>Full Research Papers</li>
          </ul>
        </motion.div>

        {/* Topics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl sm:text-2xl font-semibold text-blue-800 mb-4">
            Unpublished Original technical papers are sought in the following topics:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 text-sm sm:text-base text-gray-700 list-disc ml-6">
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

      </div>
    </section>
  )
}

export default CallForPapers;
