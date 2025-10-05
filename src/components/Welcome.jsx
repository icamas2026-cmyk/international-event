import React from "react";
import { motion } from "framer-motion";

// Animation variants
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const textVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function Welcome() {
  return (
    <motion.section
      id="welcome"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4 max-w-6xl mx-auto overflow-x-hidden"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        ICAMAS-2026 <span className="text-red-500">Welcomes You</span>
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-8">
        <motion.div className="flex flex-col md:w-1/2 gap-6" variants={imageVariant}>
          <img
            src="./images/welcome-image1.png"
            alt="Conference Setup"
            className="w-full h-full object-cover rounded shadow-lg hover:scale-105 transition-transform duration-500"
            style={{ minHeight: "100%" }}
          />
        </motion.div>

        
        <motion.div className="text-[#540000] md:w-1/2 space-y-4 text-justify" variants={textVariant}>
          <p>
            The 1st International Conference on Advances in Mechanical and
            Aerospace Sciences (ICAMAS-2026) will be held at the National
            Institute of Technology Arunachal Pradesh. Aligned with the{" "}
            <strong>Viksit Bharat 2047 Vision</strong>, the conference underscores
            key national priorities such as economic diversification, sustainable
            development, and the advancement of a knowledge-driven economy.
          </p>
          <p>
            ICAMAS-2026 will bring together leading researchers, industry
            professionals, and practitioners to share insights and explore the
            latest developments in Mechanical and Aerospace Engineering. With a
            particular emphasis on sustainability and renewable energy, the
            conference seeks to address global challenges through
            interdisciplinary engineering solutions.
          </p>
          <p>
            By highlighting innovative technologies and methodologies, ICAMAS-2026
            aims to support India’s ambition of becoming a global leader in green
            technology, while also contributing to the wider global effort toward
            a sustainable and resilient future.
          </p>
        </motion.div>
      </div>

      {/* Invitation text */}
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
  );
}
