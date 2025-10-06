import React from "react";
import { motion } from "framer-motion";

export default function PaperSubmission() {
  return (
    <section
      id="submission"
      className="scroll-mt-6 min-h-[70%] lg:min-h-screen  flex flex-col items-center  bg-gradient-to-br from-green-50 via-blue-50 to-green-100 text-gray-800 px-4 sm:px-6 lg:px-8 py-6"
    >
      {/* Header */}
      <motion.header
        className="bg-gradient-to-r from-green-200 to-blue-200 text-center rounded-b-3xl shadow-md w-11/12 sm:w-2/3 md:w-2/6 my-4 p-4 sm:p-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700">
          PAPER SUBMISSION
        </h1>
      </motion.header>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto w-full space-y-10 mt-10">
        {/* Microsoft CMT Link */}
        <motion.div
          className="bg-white w-full rounded-2xl shadow-lg p-5 sm:p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICAMAS2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg font-semibold text-teal-700 hover:text-teal-800 transition"
          >
            Submit your paper on Microsoft CMT
          </a>
        </motion.div>

        {/* Submission Guidelines */}
        <motion.div
          className="bg-white w-full rounded-2xl shadow-lg p-5 sm:p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg font-semibold text-teal-700 hover:text-teal-800 transition"
          >
            Submission Guidelines
          </a>
        </motion.div>

        {/* Template Download */}
        <motion.div
          className="bg-white w-full rounded-2xl shadow-lg p-5 sm:p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://docs.google.com/document/d/1VtbJuzPrvEyNkeUWAfKYTBVcuVoP8Rtt/edit?usp=drive_link&ouid=100349544848274028698&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg font-semibold text-teal-700 hover:text-teal-800 transition"
          >
            Paper Submission Template
          </a>
        </motion.div>

        {/* Info Note */}
        <motion.div
          className="bg-teal-50 w-full p-5 sm:p-6 rounded-2xl text-gray-700 text-sm sm:text-base leading-relaxed shadow-md text-justify"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          The Microsoft CMT service is used for managing the peer-reviewing
          process for this conference. This service is provided for free by
          Microsoft, covering all expenses including Azure cloud hosting,
          software development, and support.
        </motion.div>
      </div>
    </section>
  );
}
