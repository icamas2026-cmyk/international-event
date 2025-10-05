import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-14 relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-gray-300 px-4 p-1"
      style={{
        backgroundImage: "url('./images/campus.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
       <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full space-y-5">

        {/* Logo on top for mobile, center for all */}
        <div className="flex justify-center">
          <img
            src="./images/new logo.jpeg"
            alt="ICAMAS Logo"
            className=" hidden sm:block w-12 sm:w-24 md:w-16 rounded-full"
          />
        </div>

        {/* Chief Guest & Guest of Honour row */}
        <div className="flex flex-row justify-center items-start gap-4 w-full px-2 flex-wrap sm:flex-nowrap">
          {/* Chief Guest */}
          <div className="flex flex-col items-center min-w-[140px] sm:min-w-[220px] flex-1">
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2">
              Chief Guest
            </h1>
            <img
              src="./images/Narayanan_Chairman.png"
              alt="isrochairman"
              className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-md shadow-white object-cover"
            />
            <p className="mt-2 text-sm sm:text-base leading-snug text-center">
              <span className="block font-bold text-white text-base sm:text-lg">
                Dr. V. Narayanan
              </span>
              <span className="block text-gray-200">Chairman, ISRO</span>
              <span className="hidden sm:block text-gray-200">Secretary, Dept. of Space</span>
              <span className="hidden sm:block text-gray-200">Chairman, Space Commission</span>
            </p>
          </div>

          {/* Guest of Honour */}
          <div className="flex flex-col items-center min-w-[140px] sm:min-w-[220px] flex-1">
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2">
              Guest of Honour
            </h1>
            <img
              src="./images/Arun.jpg"
              alt="arun"
              className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-md shadow-white object-cover"
            />
            <p className="mt-2 text-sm sm:text-base leading-snug text-center">
              <span className="block font-bold text-white text-base sm:text-lg">
                Dr. Arun Kumar Jha
              </span>
              <span className="block text-gray-200">Chancellor, NIAMT, Ranchi</span>
              <span className="hidden sm:block text-gray-200 text-xs sm:text-sm">
                Former Economic Advisor, MoHFW (GoI)
              </span>
              <span className="hidden sm:block text-gray-200 text-xs sm:text-sm">
                Additional Economic Advisor, MHA (GoI)
              </span>
            </p>
          </div>
        </div>

        {/* Title + Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold max-w-8xl leading-snug"
        >
          1st International Conference on Advances in Mechanical and Aerospace
          Sciences <br className="hidden sm:block" />
          (ICAMAS-2026)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm sm:text-xl md:text-xl max-w-6xl text-center pb-2 text-black"
        >
          Conference Dates: <strong>10-12 March, 2026</strong>
          <br />
          All accepted & presented papers will be published in{" "}
          <strong>Scopus-indexed conference proceedings</strong>.
        </motion.p>
      </div>
    </section>
  );
}
