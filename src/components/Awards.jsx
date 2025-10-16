import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Awards() {
    const awards = [
     {
       title: "☞ Best Paper Awards in all verticals:",
       subItems: [
         "1. Materials & Manufacturing",
         "2. Structures, Mechanics, Design & Control",
         "3. Propulsion, Aerodynamics, Fluid & Thermal",
       ],
      
     },
     "☞ Best Poster award in all aforementioned verticals",
     "☞ Best Session award in each session",
     {
       title: "*** Young Researcher Award:",
       subItems: [
         "☞ Three awards will be presented to researchers under 35 for outstanding scientific work.",
         "☞ Eligible papers must have no more than three authors.",
         "☞ Only papers presented in person by the first/corresponding author during the award session will be considered.",
         "☞ Awardees will receive a medal, certificate, and complimentary registration for the next edition of ICAMAS.",
       ],
      
     },
   ];
  return (
    <section id="awards-section" className="scroll-mt-14 py-4 bg-white text-center">
        <motion.header
                        className="bg-gradient-to-r from-green-200 to-blue-200 text-center rounded-b-3xl shadow-md w-11/12 sm:w-2/3 md:w-2/6 mx-auto p-4 sm:p-2"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                      >
                        <h1 className=" text-3xl sm:text-4xl text-blue-700 font-extrabold tracking-wide">
                          AWARDS
                        </h1>
        </motion.header>
        <div className="py-10 max-w-xl mx-auto grid gap-4 px-4">
        {awards.map((item, idx) => (
        <motion.div
          key={idx}
          className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
        {item.title && <h3 className="font-bold text-base md:text-xl text-blue-800 mb-2">{item.title}</h3>}
        {item.subItems ? (
          <ul className="list-disc ml-4 text-sm md:text-md text-gray-700">
            {item.subItems.map((sub, i) => (
              <li key={i} className="mb-1">{sub}</li>
            ))}
          </ul>
          ) : (
            typeof item === "string" && <p className="text-sm md:text-md text-gray-700">{item}</p>
          )}
        </motion.div>
        ))}
        </div>
      </section>
  )
}
