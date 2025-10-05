import React from "react";
import { motion } from "framer-motion";

export default function AboutDepartment() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 overflow-x-hidden">
        
        <motion.img
          src="./images/depatment.jpg"
          alt="Mechanical Engineering Department"
          className="rounded-xl shadow-lg md:w-1/2 max-h-80 object-cover hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Right Side - Text */}
        <motion.div
          className="md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900">About Department</h2>

          <p className="text-justify leading-relaxed text-gray-700">
            The Department of Mechanical Engineering at <strong>NIT Arunachal Pradesh</strong> 
            was established in August 2013. It offers a <strong>four-year B.Tech. programme</strong> 
            in Mechanical Engineering with an annual intake of 40 students.
          </p>

          <p className="text-justify leading-relaxed text-gray-700">
            Since <strong>July 2025</strong>, the department offers a postgraduate 
            <strong>2-year M.Tech. programme in Digital Manufacturing in Energy Systems</strong> 
            with an intake of 20 students.
          </p>

          <p className="text-justify leading-relaxed text-gray-700">
            Previously, it offered two postgraduate <strong>2-year M.Tech. programmes</strong> — 
            <em>Mechanical System Design and Innovation Technology</em> (2016–2019) and 
            <em>Fluids and Thermal Engineering</em> (2019–2025), each with 20 students.
          </p>

          <p className="text-justify leading-relaxed text-gray-700">
            The department also initiated its <strong>Ph.D. programme</strong> in 2015–16, 
            fostering advanced research and innovation in key areas of <strong>Mechanical Engineering</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
