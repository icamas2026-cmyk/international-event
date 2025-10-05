import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function VerticalTicker({ items, height = 150, speed = 10, textClass = "" }) {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const listHeight = container.scrollHeight / 2; 
    const duration = listHeight / speed;

    controls.start({
      y: [-0, -listHeight],
      transition: { duration: duration, ease: "linear", repeat: Infinity },
    });
  }, [controls, items, speed]);

  const tickerItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
        height: `${height}px`,
        borderRadius: "1rem",
      }}
    >
      <motion.div animate={controls}>
        {tickerItems.map((item, idx) => {
          if (item.subItems) {
            return (
              <div key={idx} className={`${textClass} py-4 shadow-md`}>
                <div className="font-bold p-2">{item.title}</div>
                <div className="ml-5 space-y-2">
                  {item.subItems.map((sub, i) => (
                    <div key={i}>{sub}</div>
                  ))}
                </div>
              </div>
            );
          }

          
          if (typeof item === "object" && item.event) {
            return (
              <div key={idx} className={`py-2 px-3 ${textClass} text-left shadow-md`}>
                <span className="font-semibold text-blue-700">{item.event}</span>
                <br />
                <span className="text-gray-600 text-sm">{item.note}</span>
                <br />
                <span className="text-gray-500 text-xs mt-1">📅 {item.date}</span>
              </div>
            );
          }

          return (
            <div key={idx} className={`py-4 ${textClass} shadow-md`}>
              {item}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}


export default function KeydatesAwardsPublications() {
  const importantDates = [
    { date: "—", event: "Abstract acceptance notification", note: "Within 15 days of submission" },
    { date: "31/12/2025", event: "Early registration deadline", note: "Last date to benefit from early registration" },
    { date: "15/01/2026", event: "Full paper submission deadline", note: "All papers must be submitted by this date" },
    { date: "—", event: "Paper acceptance notification", note: "Within 15 days of full paper submission" },
    { date: "20/02/2026", event: "Final registration deadline", note: "Mandatory for accepted papers to be included" },
    { date: "10–12/03/2026", event: "Conference Dates", note: "Conference sessions and keynotes" },
  ];

  const awards = [
   {
    title: "☞ Best Paper Awards in all verticals:",
    subItems: [
      "1.Materials & Manufacturing",
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

  const publications = [
    "All accepted & presented papers will be published in Scopus indexed conference proceedings and selected papers in SCI/SCOPUS Indexed International Journals.(Approval Awaiting)",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 flex flex-col items-center justify-center py-4 px-4 sm:px-6 lg:px-10">

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl md:max-w-7xl">
        {/* Awards Card */}
        <motion.div
          className="bg-white text-black text-justify rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 underline underline-offset-4 text-center">
            Awards
          </h3>
          <VerticalTicker items={awards} height={150} speed={30} textClass="text-blue-700 text-sm" />
        </motion.div>

        {/* Important Dates Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl text-center font-bold mb-4 underline underline-offset-4 text-gray-800">
            Important Dates
          </h3>
          <VerticalTicker items={importantDates} height={150} speed={20} />
        </motion.div>

        {/* Publications Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 underline underline-offset-4 text-gray-800">
            Publications
          </h3>
          <p className="text-blue-700 text-md">{publications}</p>
        </motion.div>
      </div>
    </section>
  );
}
