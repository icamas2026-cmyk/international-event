import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-14 relative min-h-screen flex flex-col items-center  text-center text-white bg-gray-300 px-3 sm:px-4"
      style={{
        backgroundImage: "url('./images/campus.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 sm:h-60 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full gap-20 sm:gap-20 md:gap-12">
        {/* Logo */}
        <div className="flex relative top-6 justify-center">
          <img
            src="./images/newlogo.jpeg"
            alt="ICAMAS Logo"
            className="w-16 sm:w-20 md:w-24 rounded-full shadow-lg"
          />
        </div>

        {/* Chief Guest & Guest of Honour */}
        <div className="flex flex-col sm:flex-row relative md:top-10 lg:top-0 justify-center items-center gap-6 sm:gap-10 w-full max-w-4xl">
          {/* Chief Guest */}
          <div className="flex flex-col items-center text-center flex-1">
            <h1 className="text-base sm:text-lg md:text-2xl font-extrabold mb-1">
              Chief Guest
            </h1>
            <img
              src="./images/Narayanan_Chairman.png"
              alt="isrochairman"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-md shadow-white object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm md:text-base leading-snug">
              <span className="block font-bold text-white text-sm sm:text-base">
                Dr. V. Narayanan
              </span>
              <span className="block text-gray-200">Chairman, ISRO</span>
              <span className="block text-gray-200">
                Secretary, Dept. of Space
              </span>
              <span className="block text-gray-200">
                Chairman, Space Commission
              </span>
            </p>
          </div>

          {/* Guest of Honour */}
          <div className="flex flex-col items-center text-center flex-1">
            <h1 className="text-base sm:text-lg md:text-2xl font-extrabold mb-1">
              Guest of Honour
            </h1>
            <img
              src="./images/Arun.jpg"
              alt="arun"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-md shadow-white object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm md:text-base leading-snug">
              <span className="block font-bold text-white text-sm sm:text-base">
                Dr. Arun Kumar Jha
              </span>
              <span className="block text-gray-200">
                Chancellor, NIAMT, Ranchi
              </span>
              <span className="block text-gray-200 text-xs sm:text-sm">
                Former Economic Advisor, MoHFW (GoI)
              </span>
              <span className="block text-gray-200 text-xs sm:text-sm">
                Additional Economic Advisor, MHA (GoI)
              </span>
            </p>
          </div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative md:top-20 lg:top-0 text-3xl sm:text-3xl md:text-4xl font-bold max-w-xl md:max-w-7xl leading-snug px-2"
        >
          1st International Conference on Advances in Mechanical and Aerospace
          Sciences <br className="hidden sm:block" />
          (ICAMAS-2026)
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative md:top-20 lg:-top-10 lg:bottom-10 text-xs sm:text-base md:text-xl max-w-4xl text-center text-gray-100 lg:text-black"
        >
          Conference Dates: <strong>10–12 March, 2026</strong>
          <br />
          All accepted & presented papers will be published in{" "}
          <strong>Scopus-indexed conference proceedings</strong>.
        </motion.p>
      </div>
    </section>
  );
}
