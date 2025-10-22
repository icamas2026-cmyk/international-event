import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { title } from "framer-motion/client";

function VerticalTicker({ items, height = 150, speed = 10, textClass = "" }) {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const listHeight = container.scrollHeight / 2;
    const duration = listHeight / speed;

    controls.start({
      y: [0, -listHeight],
      transition: { duration, ease: "linear", repeat: Infinity },
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
          if (item.title && item.img) {
            return (
              <div
                key={idx}
                className={`py-3 px-3 text-center ${textClass} shadow-md flex flex-col items-center justify-center`}
              >
                <div className="font-semibold">{item.title}
                  <p className="text-red-500 animate-pulse">New</p>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="mt-2 w-28 sm:w-36 rounded-md shadow"
                />
              </div>
            );
          }

          if (item.subItems) {
            return (
              <div key={idx} className={`${textClass} py-3 shadow-md`}>
                <div className="font-bold p-2">{item.title}<span className="text-red-500 font-semibold animate-pulse">
                        {" "}
                        New
                      </span>
                  </div>
                <div className="ml-5 space-y-1">
                  {item.subItems.map((sub, i) => (
                    <div key={i}>
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          if (typeof item === "object" && item.event) {
            return (
              <div
                key={idx}
                className={`py-2 px-3 ${textClass} text-left shadow-md`}
              >
                <span className="font-semibold text-blue-700">{item.event}</span>
                <br />
                <span className="text-gray-600 text-sm">{item.note}</span>
                <br />
                <span className="text-gray-500 text-xs mt-1">📅 {item.date}</span>
              </div>
            );
          }

          return (
            <div key={idx} className={`py-3 ${textClass} shadow-md font-semibold`}>
              {typeof item === "string" ? item : JSON.stringify(item)}
              <span className="text-red-500 font-semibold animate-pulse">
                        {" "}
                        New
                      </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function KeydatesAwardsPublications() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const importantDates = [
     { date: "30/11/2025", event: "Abstract submission", note: "Deadline 30 November 2025" },
     { date: "31/12/2025", event: "Early registration deadline", note: "Last date to benefit from early registration" },
     { date: "15/01/2026", event: "Full paper submission deadline", note: "All papers must be submitted by this date" },
     { date: "30/01/2025", event: "Paper acceptance notification", note: "Within 15 days of submission" },
     { date: "20/02/2026", event: "Final registration deadline", note: "Mandatory for accepted papers to be included" },
    { date: "10–12/03/2026", event: "Conference Dates", note: "Conference sessions and keynotes" },
  ];

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

   const publications = [
     {
       title:
         "Transactions of the Indian Institute of Metals; Springer [Q2, SCIE, I.F: 1.6]",
       img: "./images/transaction.png",
       
     },
     {
       title:
         "Advances in Computational Design, An International Journal; Techno Press [ESCI; I.F: 0.9]",
       img: "./images/computational.png",
       
     },
     {
       title: "Journal of Micromanufacturing; SAGE [Q2, SCOPUS]",
       img: "./images/micromanufacturing.png",
       
     },
     {
       title:
         "International Journal of Energy for a Clean Environment; Begell House [Q2, SCOPUS]",
       img: "./images/internaljournal.png",
       
     },
     {
       title: "International Journal of Intelligent Unmanned Systems; Emerald Publishing [ESCI]",
       img: "./images/unmannedsystem.jpg",
       
     },
     {
      title:"Journal of Thermal Engineering; YTU Press [ESCI, I.F: 1.4]",
      img:"./images/thermal.jpg",
     }
   ];

  return (
    <>
      {/* 🔹 Top Section with 3 Cards */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-green-100 flex flex-col items-center justify-center p-10 px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl md:max-w-7xl items-stretch">
          {/* Awards */}
          <motion.div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 underline text-center">Awards</h3>
            <VerticalTicker items={awards} height={400} speed={25} textClass="text-blue-700 text-sm" />
            <button
              className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
              onClick={() => scrollToSection("awards-section")}
            >
              View All
            </button>
          </motion.div>

          {/* Dates */}
          <motion.div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 underline text-center">Important Dates</h3>
            <VerticalTicker items={importantDates} height={400} speed={25} textClass="text-blue-700 text-sm" />
            <button
              className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
              onClick={() => scrollToSection("dates-section")}
            >
              View All
            </button>
          </motion.div>

          {/* Publications */}
          <motion.div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 underline text-center">Publications</h3>
            <p className="text-sm font-semibold text-gray-700 text-justify">All accepted & presented papers will be published in Scopus indexed conference proceedings and outstanding extended papers will be submitted for possible publication in special issue of the following SCIE/ESCI/SCOPUS Indexed journals:</p>
            <p className="animate-pulse text-sm text-justify text-blue-800 font-semibold" >Outstanding extended papers will be submitted for possible publication in special/general issue of the SCIE/ESCI/SCOPUS Indexed journals.</p>
            <VerticalTicker items={publications} height={250} speed={25} textClass="text-blue-700 text-sm" />
            <button
              className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
              onClick={() => scrollToSection("publications-section")}
            >
              View All
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}


