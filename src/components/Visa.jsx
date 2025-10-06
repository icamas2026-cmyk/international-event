import React from "react";
import { motion } from "framer-motion";

export default function InvitationLetter() {
  return (
    <section id="visa" className="min-h-[70%] lg:min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 py-1 px-4 max-w-6xl mx-auto overflow-x-hidden">
      
      {/* Left Side Image */}
      <motion.div
        className="md:w-1/2 w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="./images/air.jpg"
          alt="Visa Invitation Image"
          className="w-full max-w-2xl rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 mx-auto"
        />
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        className="md:w-1/2 w-full text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          Apply for an Invitation Letter for Visa Purposes
        </h1>
        <p className="text-gray-700 leading-relaxed text-xl">
          Please click the button below, fill out the form with the correct information, 
          and an invitation letter in PDF version will be sent to you via email shortly.
        </p>
        <a
          href="https://forms.gle/c3YC2AV8AdkusGnK7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-4 px-8 py-1 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-500"
        >
          Apply Now
        </a>
      </motion.div>

    </section>
  );
}
