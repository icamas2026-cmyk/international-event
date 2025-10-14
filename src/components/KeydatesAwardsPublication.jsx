// import React, { useEffect, useRef, useState } from "react";
// import { motion, useAnimation } from "framer-motion";

// function VerticalTicker({ items, height = 150, speed = 10, textClass = "" }) {
//   const containerRef = useRef(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const listHeight = container.scrollHeight / 2;
//     const duration = listHeight / speed;

//     controls.start({
//       y: [0, -listHeight],
//       transition: { duration, ease: "linear", repeat: Infinity },
//     });
//   }, [controls, items, speed]);

//   const tickerItems = [...items, ...items];

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         overflow: "hidden",
//         height: `${height}px`,
//         borderRadius: "1rem",
//       }}
//     >
//       <motion.div animate={controls}>
//         {tickerItems.map((item, idx) => {
//           if (item.subItems) {
//             return (
//               <div key={idx} className={`${textClass} py-3 shadow-md`}>
//                 <div className="font-bold p-2">{item.title}</div>
//                 <div className="ml-5 space-y-1">
//                   {item.subItems.map((sub, i) => (
//                     <div key={i}>{sub}</div>
//                   ))}
//                 </div>
//               </div>
//             );
//           }

//           if (typeof item === "object" && item.event) {
//             return (
//               <div key={idx} className={`py-2 px-3 ${textClass} text-left shadow-md`}>
//                 <span className="font-semibold text-blue-700">{item.event}</span>
//                 <br />
//                 <span className="text-gray-600 text-sm">{item.note}</span>
//                 <br />
//                 <span className="text-gray-500 text-xs mt-1">📅 {item.date}</span>
//               </div>
//             );
//           }

//           return (
//             <div key={idx} className={`py-3 ${textClass} shadow-md`}>
//               {item}
//             </div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// }

// export default function KeydatesAwardsPublications() {
//   const [showAllAwards, setShowAllAwards] = useState(false);
//   const [showAllDates, setShowAllDates] = useState(false);

//   const importantDates = [
//     { date: "—", event: "Abstract acceptance notification", note: "Within 15 days of submission" },
//     { date: "31/12/2025", event: "Early registration deadline", note: "Last date to benefit from early registration" },
//     { date: "15/01/2026", event: "Full paper submission deadline", note: "All papers must be submitted by this date" },
//     { date: "—", event: "Paper acceptance notification", note: "Within 15 days of full paper submission" },
//     { date: "20/02/2026", event: "Final registration deadline", note: "Mandatory for accepted papers to be included" },
//     { date: "10–12/03/2026", event: "Conference Dates", note: "Conference sessions and keynotes" },
//   ];

//   const awards = [
//     {
//       title: "☞ Best Paper Awards in all verticals:",
//       subItems: [
//         "1. Materials & Manufacturing",
//         "2. Structures, Mechanics, Design & Control",
//         "3. Propulsion, Aerodynamics, Fluid & Thermal",
//       ],
//     },
//     "☞ Best Poster award in all aforementioned verticals",
//     "☞ Best Session award in each session",
//     {
//       title: "*** Young Researcher Award:",
//       subItems: [
//         "☞ Three awards will be presented to researchers under 35 for outstanding scientific work.",
//         "☞ Eligible papers must have no more than three authors.",
//         "☞ Only papers presented in person by the first/corresponding author during the award session will be considered.",
//         "☞ Awardees will receive a medal, certificate, and complimentary registration for the next edition of ICAMAS.",
//       ],
//     },
//   ];

//   const publications = [
//   "High quality, original and unpublished research papers will be published in the following journals:",
//   "1. Transactions of the Indian Institute of Metals; Springer [Q2, SCIE, I.F: 1.6]",
//   "2. Advances in Computational Design, An International Journal; Techno Press [ESCI; I.F: 0.9]",
//   "3. Journal of Micromanufacturing; SAGE [Q2, SCOPUS]",
//   "4. International Journal of Energy for a Clean Environment; Begell House [Q2, SCOPUS]",
//   "5. Advanced Manufacturing; ELS Publishing [SCOPUS]",
// ];
  

//   return (
//     <section className="bg-gradient-to-br from-green-50 via-blue-50 to-green-100 flex flex-col items-center justify-center p-10 px-4 sm:px-6 lg:px-10">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl md:max-w-7xl">
        
//         {/* Awards Card */}
//         <motion.div
//           className="bg-white text-black text-justify rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col transition-all duration-500"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-xl sm:text-2xl font-bold mb-4 underline underline-offset-4 text-center">
//             Awards
//           </h3>

//           {/* Show ticker only when not expanded */}
//           {!showAllAwards && (
//             <>
//               <VerticalTicker items={awards} height={150} speed={30} textClass="text-blue-700 text-sm" />
//               <button
//                 className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
//                 onClick={() => setShowAllAwards(true)}
//               >
//                 View All
//               </button>
//             </>
//           )}

//           {/* Show full list BELOW when expanded */}
//           {showAllAwards && (
//             <>
//               <div className="mt-6 space-y-3 text-blue-700 text-sm">
//                 {awards.map((item, idx) => (
//                   <div key={idx} className="shadow-md p-3 rounded-lg bg-blue-50">
//                     {item.title && <div className="font-bold mb-1">{item.title}</div>}
//                     {item.subItems ? (
//                       <ul className="ml-4 list-disc">
//                         {item.subItems.map((sub, i) => (
//                           <li key={i}>{sub}</li>
//                         ))}
//                       </ul>
//                     ) : (
//                       typeof item === "string" && <div>{item}</div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Show Less below the full content */}
//               <button
//                 className="mt-6 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
//                 onClick={() => setShowAllAwards(false)}
//               >
//                 Show Less
//               </button>
//             </>
//           )}
//         </motion.div>

//         {/* Important Dates Card */}
//         <motion.div
//           className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col transition-all duration-500"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-xl sm:text-2xl text-center font-bold mb-4 underline underline-offset-4 text-gray-800">
//             Important Dates
//           </h3>

//           {!showAllDates && (
//             <>
//               <VerticalTicker items={importantDates} height={150} speed={20} />
//               <button
//                 className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
//                 onClick={() => setShowAllDates(true)}
//               >
//                 View All
//               </button>
//             </>
//           )}

//           {showAllDates && (
//             <>
//               <div className="mt-6 space-y-3 text-blue-700 text-sm">
//                 {importantDates.map((item, idx) => (
//                   <div key={idx} className="shadow-md p-3 rounded-lg bg-blue-50">
//                     <div className="font-semibold">{item.event}</div>
//                     <div className="text-gray-600 text-sm">{item.note}</div>
//                     <div className="text-gray-500 text-xs mt-1">📅 {item.date}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Show Less BELOW */}
//               <button
//                 className="mt-6 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
//                 onClick={() => setShowAllDates(false)}
//               >
//                 Show Less
//               </button>
//             </>
//           )}
//         </motion.div>

//         {/* Publications Card */}
//         <motion.div
//           className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col text-justify"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 underline underline-offset-4 text-gray-800">
//             Publications
//           </h3>
//           <div className="text-blue-700 text-sm sm:text-base space-y-2">
//               {publications.map((pub, idx) => (
//               <p key={idx}>{pub}</p>
//               ))}
//           </div>

//         </motion.div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
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
                <p className="font-semibold">{item.title}</p>
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
                <div className="font-bold p-2">{item.title}</div>
                <div className="ml-5 space-y-1">
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
            <div key={idx} className={`py-3 ${textClass} shadow-md`}>
              {typeof item === "string" ? item : JSON.stringify(item)}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function KeydatesAwardsPublications() {
  const [showAllAwards, setShowAllAwards] = useState(false);
  const [showAllDates, setShowAllDates] = useState(false);
  const [showAllPublications, setShowAllPublications] = useState(false);

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

  // Publication partners with logos/images
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
      title: "Advanced Manufacturing; ELS Publishing [SCOPUS]",
      img: "./images/advancedmanufacturing.png",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 via-blue-50 to-green-100 flex flex-col items-center justify-center p-10 px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl md:max-w-7xl">
        
        {/* Awards Card */}
        <motion.div
          className="bg-white text-black text-justify rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 underline underline-offset-4 text-center">
            Awards
          </h3>

          {!showAllAwards && (
            <>
              <VerticalTicker items={awards} height={230} speed={30} textClass="text-blue-700 text-sm" />
              <button
                className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
                onClick={() => setShowAllAwards(true)}
              >
                View All
              </button>
            </>
          )}

          {showAllAwards && (
            <>
              <div className="mt-6 space-y-3 text-blue-700 text-sm">
                {awards.map((item, idx) => (
                  <div key={idx} className="shadow-md p-3 rounded-lg bg-blue-50">
                    {item.title && <div className="font-bold mb-1">{item.title}</div>}
                    {item.subItems ? (
                      <ul className="ml-4 list-disc">
                        {item.subItems.map((sub, i) => (
                          <li key={i}>{sub}</li>
                        ))}
                      </ul>
                    ) : (
                      typeof item === "string" && <div>{item}</div>
                    )}
                  </div>
                ))}
              </div>

              <button
                className="mt-6 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
                onClick={() => setShowAllAwards(false)}
              >
                Show Less
              </button>
            </>
          )}
        </motion.div>

        {/* Important Dates Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl text-center font-bold mb-4 underline underline-offset-4 text-gray-800">
            Important Dates
          </h3>

          {!showAllDates && (
            <>
              <VerticalTicker items={importantDates} height={230} speed={20} />
              <button
                className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
                onClick={() => setShowAllDates(true)}
              >
                View All
              </button>
            </>
          )}

          {showAllDates && (
            <>
              <div className="mt-6 space-y-3 text-blue-700 text-sm">
                {importantDates.map((item, idx) => (
                  <div key={idx} className="shadow-md p-3 rounded-lg bg-blue-50">
                    <div className="font-semibold">{item.event}</div>
                    <div className="text-gray-600 text-sm">{item.note}</div>
                    <div className="text-gray-500 text-xs mt-1">📅 {item.date}</div>
                  </div>
                ))}
              </div>

              <button
                className="mt-6 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
                onClick={() => setShowAllDates(false)}
              >
                Show Less
              </button>
            </>
          )}
        </motion.div>

        {/* Publications Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col text-justify transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 underline underline-offset-4 text-gray-800">
            Publications
          </h3>

          {!showAllPublications && (
            <>
              <p className="font-semibold">
                  High quality, original and unpublished research papers will be published in the following journals:
              </p>
              <VerticalTicker items={publications.map(pub=>pub.title)} height={150} speed={20} textClass="text-blue-700 text-sm"/>
              <button
                className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
                onClick={() => setShowAllPublications(true)}
              >
                View All
              </button>
            </>
          )}

          {showAllPublications && (
            <>
              <div className="mt-4 text-blue-700 text-sm sm:text-base space-y-4">
                <p className="font-semibold">
                  High quality, original and unpublished research papers will be published in the following journals:
                </p>
                {publications.map((pub, idx) => (
                  <motion.div
                    key={idx}
                    className="shadow-md p-3 rounded-lg bg-blue-50 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                  >
                    <p className="mb-2">{pub.title}</p>
                    <img
                      src={pub.img}
                      alt={pub.title}
                      className="rounded-md shadow-md w-40 sm:w-48"
                    />
                  </motion.div>
                ))}
              </div>

              <button
                className="mt-6 text-blue-600 hover:text-blue-800 text-sm font-semibold underline self-center"
                onClick={() => setShowAllPublications(false)}
              >
                Show Less
              </button>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

