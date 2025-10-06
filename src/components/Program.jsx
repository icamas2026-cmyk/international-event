import React from "react";
import { motion } from "framer-motion";

export default function ProjectDownloads() {
  return (
    <div
      id="program"
      className="min-h-[70%] lg:min-h-screen scroll-mt-13 flex flex-col items-center bg-white text-gray-800"
    > 
      {/* Header */}
      <motion.header
        className=" bg-gradient-to-r from-green-200 to-blue-200 text-center rounded-b-3xl shadow-md w-2/6 my-4 p-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-xl md:text-4xl font-extrabold text-blue-700">
          ICAMAS-2026
        </h1>
      </motion.header>

      {/* Links Section */}
      <div className="flex flex-col items-center p-20 max-w-3xl mx-auto px-4 space-y-10 flex-1">
        {/* Download Brochure */}
        <motion.div
          className=" bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-3xl font-semibold text-teal-700 hover:text-teal-800 transition"
          >
            Download Brochure
          </a>
        </motion.div>

        {/* Download Final Schedule */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-3xl font-semibold text-teal-700 hover:text-teal-800 transition"
          >
            Download Final Schedule
          </a>
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="bg-teal-50 p-6 mt-10 rounded-2xl text-gray-700 text-md leading-relaxed"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          All official documents, including the <b>conference brochure</b> and the{" "}
          <b>final schedule</b>, can be downloaded from this section once released.
          Please check regularly for updates.
        </motion.div>
      </div>
    </div>
  );
}
