import React from 'react';
import { motion } from "framer-motion";

const CallForPapers = () => {
  return (
    <section
      id="callforpapers"
      className="scroll-mt-6 min-h-[70%] lg:min-h-screen py-8 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

        {/* Header */}
        <motion.header
          className="bg-gradient-to-r from-green-200 to-blue-200 text-center rounded-b-3xl shadow-md w-11/12 sm:w-2/3 md:w-2/6 mx-auto p-4 sm:p-2 my-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700">
            CALL FOR PAPERS
          </h2>
        </motion.header>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="mt-6 text-sm sm:text-base text-blue-700">
            Authors are encouraged to submit an abstract of their proposed work before the specified deadline. The abstract should be between 250 and 500 words in length. Both abstract and full paper submissions must be made through Microsoft CMT. All submissions must be original, unpublished, and not under review by any other journal or conference. Full-length research papers should follow the prescribed format and be limited to 10–12 pages. The conference invites original contributions from researchers, academicians, and industry professionals in areas including, but not limited to, the following:
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
        </motion.div>

        {/* Topics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >

          {/* Three-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Category 1 */}
            <div className="bg-gray-50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-green-700 mb-3 text-center">
                Materials and Manufacturing
              </h4>
              <ul className="list-disc ml-6 text-sm sm:text-base text-gray-700 space-y-1">
                <li>Advanced Materials and Manufacturing</li>
                <li>Digital Manufacturing and Industry 4.0/5.0</li>
                <li>Micro and Nano Manufacturing</li>
                <li>Conventional/Unconventional Machining</li>
                <li>Welding, Casting, Forming</li>
                <li>Composite Materials</li>
                <li>Powder Metallurgy</li>
                <li>Materials Characterization</li>
                <li>Maintenance Engineering, Machine Tools</li>
                <li>Supply Chain Management</li>
                <li>Reliability Engineering / Quality Engineering</li>
                <li>Product Life Cycle Management</li>
                <li>CAD/CAM</li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="bg-gray-50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-green-700 mb-3 text-center">
                Structures, Mechanics, Design and Control
              </h4>
              <ul className="list-disc ml-6 text-sm sm:text-base text-gray-700 space-y-1">
                <li>Product Design and Development</li>
                <li>Modelling and Simulation</li>
                <li>Fatigue, Fracture and Failure Analysis</li>
                <li>Vibrations and Multi-body Dynamics</li>
                <li>Tribology</li>
                <li>Robotics and Mechatronics</li>
                <li>Advanced Techniques in UAV and MAV</li>
                <li>Computational Mechanics</li>
                <li>Sensors and Actuators</li>
                <li>Optimization, Fuzzy and Uncertainty Quantification</li>
                <li>Machines and Mechanisms</li>
                <li>Biomaterials and Biomechanics</li>
                <li>Aircraft, Spacecraft, Rocket Structure and Design</li>
                <li>Control Systems and Avionics</li>
                <li>Space Exploration and Satellite Technology</li>
                <li>Flight Mechanics, Dynamics, Testing and Simulation</li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="bg-gray-50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-green-700 mb-3 text-center">
                Propulsion, Aerodynamics, Fluids and Thermal
              </h4>
              <ul className="list-disc ml-6 text-sm sm:text-base text-gray-700 space-y-1">
                <li>Experimental and Computational Fluid Dynamics</li>
                <li>Heat and Mass Transfer</li>
                <li>Clean Energy Systems and Renewable Technologies</li>
                <li>Fuels and Combustion</li>
                <li>Alternative Fuels and IC Engines</li>
                <li>Micro and Nanoscale Processes</li>
                <li>Instability, Transition and Turbulence</li>
                <li>Multiphase Fluid Dynamics and Heat Transfer</li>
                <li>Newtonian & Non-Newtonian Fluids</li>
                <li>Energy Conversion and Storage</li>
                <li>Phase-Change Phenomena</li>
                <li>Fluid-Structure Interaction</li>
                <li>Refrigeration and Air-Conditioning</li>
                <li>Thermal Management</li>
                <li>Fluid Machinery</li>
                <li>Aerodynamics and Aeroacoustics</li>
                <li>Machine Learning and AI Applications</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallForPapers;
