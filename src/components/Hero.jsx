// import React from "react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="scroll-mt-14 relative top-0 min-h-screen flex flex-col items-center  text-center text-white bg-gray-300 px-3 sm:px-4"
//       style={{
//         backgroundImage: "url('./images/campus.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "bottom",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
      
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="absolute bottom-0 left-0 w-full h-40 sm:h-60 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      
//       <div className="relative z-10 flex flex-col items-center w-full gap-10 sm:gap-30 lg:gap-10">
        
      
//       <div className="flex items-center justify-between w-full mt-4">
//         <div className="flex-1 flex justify-center">
//           <img
//             src="./images/newlogo.jpeg"
//             alt="ICAMAS Logo"
//             className="w-16 sm:w-20 md:w-24 rounded-full shadow-lg"
//           />
//         </div>
//       </div>


//         {/* Chief Guest & Guest of Honour */}
//         <div className="flex flex-row sm:flex-row relative md:top-10 lg:top-0 justify-center items-center gap-6 sm:gap-18 w-full max-w-4xl">
//           {/* Chief Guest */}
//           <div className="flex flex-col items-center text-center flex-1">
//             <h1 className="text-base sm:text-lg md:text-4xl lg:text-2xl font-extrabold mb-1">
//               Chief Guest
//             </h1>
//             <img
//               src="./images/Narayanan_Chairman.png"
//               alt="isrochairman"
//               className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-md shadow-white object-cover"
//             />
//             <p className="mt-2 text-xs sm:text-sm md:text-base leading-snug">
//               <span className="block font-bold text-white text-sm sm:text-base  md:text-2xl lg:text-base">
//                 Dr. V. Narayanan
//               </span>
//               <span className="block text-gray-200">Chairman, ISRO</span>
//               <span className="block text-gray-200">
//                 Secretary, Dept. of Space
//               </span>
//               <span className="block text-gray-200">
//                 Chairman, Space Commission
//               </span>
//             </p>
//           </div>

//           {/* Guest of Honour */}
//           <div className="flex flex-col items-center text-center flex-1 mb-11">
//             <h1 className="text-base sm:text-lg md:text-4xl lg:text-2xl font-extrabold mb-1">
//               Guest of Honour
//             </h1>
//             <img
//               src="./images/sitharam.jpg"
//               alt="arun"
//               className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-md shadow-white object-cover"
//             />
//             <p className="mt-2 text-xs sm:text-sm md:text-base leading-snug">
//               <span className="block font-bold text-white text-sm sm:text-base  md:text-2xl lg:text-base">
//                 Prof. T. G. Sitharam
//               </span>
//               <span className="block text-gray-200">
//                 Chairman AICTE
//               </span>

//             </p>
//           </div>
//            <div className="flex flex-col items-center text-center flex-1 mb-1">
//             <h1 className="text-base sm:text-lg md:text-4xl lg:text-2xl font-extrabold mb-1">
//               Guest of Honour
//             </h1>
//             <img
//               src="./images/Arun.jpg"
//               alt="arun"
//               className="w-14 h-14 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-md shadow-white object-cover"
//             />
//             <p className="mt-2 text-xs sm:text-sm md:text-base leading-snug">
//               <span className="block font-bold text-white text-sm sm:text-base  md:text-2xl lg:text-base">
//                 Dr. Arun Kumar Jha
//               </span>
//               <span className="block text-gray-200">
//                 Chancellor, NIAMT, Ranchi
//               </span>
//               <span className="block text-gray-200 text-xs sm:text-sm">
//                 Former Economic Advisor, MoHFW (GoI)
//               </span>
//               <span className="hidden sm:block text-gray-200 text-xs sm:text-sm">
//                 Former Additional Economic Advisor, MHA (GoI)
//               </span>

//             </p>
//           </div>
//         </div>

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative md:top-10 lg:-top-5 text-3xl sm:text-5xl md:text-6xl lg:text-3xl font-bold max-w-xl md:max-w-7xl leading-snug px-2"
//         >
//           1<sup>st</sup> International Conference on Advances in Mechanical and Aerospace
//           Sciences <br className="hidden sm:block" />
//           (ICAMAS-2026)
//           <br />
//           <p className="text-xl font-semibold text-red-500">(Hybrid Mode)</p>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="relative -top-10 md:top-20 lg:-top-15 lg:bottom-10 text-xs sm:text-xl md:text-xl max-w-6xl text-center text-gray-100"
//         >
//           Conference Dates: <strong>10<sup>th</sup>–12<sup>th</sup> March, 2026</strong>
//           <br />
//           <br />
//           All accepted & presented papers will be published in{" "}
//           <strong>Scopus-indexed conference proceedings</strong>.
//           <br />
//           <span className="text-xs sm:text-base text-green-400 font-semibold animate-pulse">Outstanding extended papers will be submitted for possible publication in special/general issue of the SCIE/ESCI/SCOPUS Indexed journals.<span className="text-red-500 animate-pulse"> New</span></span>
//         </motion.p>
//         <div className="flex bg-white w-90 rounded-full shadow-lg flex-col justify-center items-center relative md:top-20 lg:-top-10 lg:bottom-10">
//           <h1 className="text-center text-black text-xl md:text-3xl lg:text-2xl font-extrabold p-1">TECHNICAL PARTNER</h1>
//           <img src="./images/Nesac.png" alt="nesac" className="w-30 sm:w-65 md:w-55 lg:w-45" />
//         </div>
//       </div>  
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-14 relative top-0 min-h-screen flex flex-col items-center text-center text-white bg-gray-300 px-3 sm:px-4"
      style={{
        backgroundImage: "url('./images/campus.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 sm:h-60 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full gap-10 sm:gap-30 lg:gap-10">
        <div className="flex items-center justify-center w-full mt-4">
          <img
            src="./images/newlogo.jpeg"
            alt="ICAMAS Logo"
            className="w-16 sm:w-20 md:w-24 rounded-full shadow-lg"
          />
        </div>

        {/* Chief Guest & Guest of Honour */}
        <div className="w-full max-w-4xl">
          <div className="flex flex-row justify-center items-start gap-6 sm:gap-10">
            {/* Guest of Honour 1 */}
            <div className="flex flex-col items-center text-center flex-1 min-h-[360px]">
              <h1 className="text-sm sm:text-lg md:text-2xl font-extrabold mb-2">
                Guest of Honour
              </h1>

              <img
                src="./images/sitharam.jpg"
                alt="sitharam"
                className="w-14 h-14 sm:w-28 sm:h-28 md:w-24 md:h-24 rounded-full shadow-md object-cover"
              />

              <p className="mt-3 text-xs sm:text-sm md:text-base leading-snug">
                <span className="block font-bold text-white md:text-xl">
                  Prof.T.G.Sitharam
                </span>
                <span className="block text-gray-200">Chairman AICTE</span>
              </p>
            </div>
            {/* Chief Guest */}
            <div className="flex flex-col items-center text-center flex-1 min-h-[360px]">
              <h1 className="text-sm sm:text-lg md:text-2xl font-extrabold mb-2">
                Chief Guest
              </h1>

              <img
                src="./images/Narayanan_Chairman.png"
                alt="isrochairman"
                className="w-14 h-14 sm:w-28 sm:h-28 md:w-24 md:h-24 rounded-full shadow-md object-cover"
              />

              <p className="mt-3 text-xs sm:text-sm md:text-base leading-snug">
                <span className="block font-bold text-white md:text-xl">
                  Dr. V. Narayanan
                </span>
                <span className="block text-gray-200">Chairman, ISRO</span>
                <span className="hidden sm:block text-gray-200">Secretary, Dept. of Space</span>
                <span className="hidden sm:block text-gray-200">Chairman, Space Commission</span>
              </p>
            </div>

            {/* Guest of Honour 2 */}
            <div className="flex flex-col items-center text-center flex-1 min-h-[360px]">
              <h1 className="text-sm sm:text-lg md:text-2xl font-extrabold mb-2">
                Guest of Honour
              </h1>

              <img
                src="./images/Arun.jpg"
                alt="arun"
                className="w-14 h-14 sm:w-28 sm:h-28 md:w-24 md:h-24 rounded-full shadow-md object-cover"
              />

              <p className="mt-3 text-xs sm:text-sm md:text-base leading-snug">
                <span className="block font-bold text-white md:text-xl">
                  Dr.Arun Kumar Jha
                </span>
                <span className="block text-gray-200">Chancellor, NIAMT, Ranchi</span>
                <span className="hidden sm:block text-gray-200 text-xs sm:text-sm">
                  Former Economic Advisor, MoHFW (GoI)
                </span>
                <span className="hidden sm:block text-gray-200 text-xs sm:text-sm">
                  Former Additional Economic Advisor, MHA (GoI)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative -top-50 md:top-0 lg:-top-37 text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-bold max-w-xl md:max-w-7xl leading-snug px-2"
        >
          1<sup>st</sup> International Conference on Advances in Mechanical and Aerospace
          Sciences <br className="hidden sm:block" />
          (ICAMAS-2026)
          <br />
          <p className="text-xl font-semibold text-red-500">(Hybrid Mode)</p>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative -top-50 md:top-0 lg:-top-47 lg:bottom-10 text-xs sm:text-xl md:text-xl max-w-6xl text-center text-gray-100"
        >
          Conference Dates: <strong>10<sup>th</sup>–12<sup>th</sup> March, 2026</strong>
          <br />
          All accepted & presented papers will be published in{" "}
          <strong>Scopus-indexed conference proceedings</strong>.
          <br/>
          <span className="text-xs sm:text-base text-green-400 font-semibold animate-pulse">
            Outstanding extended papers will be submitted for possible publication in special/general issue of the SCIE/ESCI/SCOPUS Indexed journals.
            <span className="text-red-500 animate-pulse"> New</span>
          </span>
        </motion.p>

        <div className="flex bg-white w-90 rounded-full shadow-lg flex-col justify-center items-center relative -top-35 lg:-top-40 p-1">
          <h1 className="text-center text-black text-xl md:text-2xl lg:text-2xl font-extrabold p-1">TECHNICAL PARTNER</h1>
          <img src="./images/Nesac.png" alt="nesac" className="w-30 sm:w-65 md:w-55 lg:w-45" />
        </div>
      </div>
    </section>
  );
}
