import React from "react";
import { motion } from "framer-motion";

const nitSections = [
  {
    title: "Establishment",
    desc: "The National Institute of Technology, Arunachal Pradesh was established in 2010 by MHRD, Govt. of India and inaugurated on 18th August 2010. It is one of the 31 National Institutes of Technology in India and recognized as an Institute of National Importance.",
    img: "./images/nit.jpg",
  },
  {
    title: "Recognition",
    desc: "The Institute currently runs six major engineering departments with a yearly intake of 230 undergraduate students. Each department has state-of-the-art laboratories to foster holistic development of students.",
    img: "./images/library.jpg",
  },
  {
    title: "Research & Development",
    desc: "The faculty and students engage in various R&D projects sponsored by government agencies, with a current project value around 10 Crore, contributing to academic excellence and innovation.",
    img: "./images/research.jpg",
  },
];

export default function AboutNIT() {
  return (
    <section className="bg-gray-50 text-gray-800 py-12 overflow-x-hidden">
      <motion.h2
        className="text-3xl font-bold text-center text-blue-900 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About NIT Arunachal Pradesh
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4">
        {nitSections.map((item, idx) => (
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
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">{item.title}</h3>
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
  );
}
