import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ImportantDates() {
    const importantDates = [
     { date: "30/11/2025", event: "Abstract submission deadline", note: "All abstract must be submitted by this date" },
     { date: "31/12/2025", event: "Early registration deadline", note: "Last date to benefit from early registration" },
     { date: "15/01/2026", event: "Full paper submission deadline", note: "All papers must be submitted by this date" },
     { date: "—", event: "Paper acceptance notification", note: "Within 15 days of submission" },
     { date: "20/02/2026", event: "Final registration deadline", note: "Mandatory for accepted papers to be included" },
    { date: "10–12/03/2026", event: "Conference Dates", note: "Conference sessions and keynotes" },
  ];

  return (
    <section id="dates-section" className="scroll-mt-14 py-4 bg-blue-50 text-center">
        <motion.header
                        className="bg-gradient-to-r from-green-200 to-blue-200 text-center rounded-b-3xl shadow-md w-11/12 sm:w-2/3 md:w-2/6 mx-auto p-4 sm:p-2"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                      >
                        <h1 className=" text-3xl sm:text-4xl text-blue-700 font-extrabold tracking-wide">
                          IMPORTANT DATES
                        </h1>
        </motion.header>
        <div className="py-10 max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 px-4">
          {importantDates.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow-md p-4 text-left hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
          <h3 className="font-semibold text-blue-800">{item.event}</h3>
          <p className="text-gray-600 text-sm">{item.note}</p>
          <p className="text-gray-500 text-xs mt-2">📅 {item.date}</p>
          </motion.div>
          ))}
        </div>

      </section>
  )
}
