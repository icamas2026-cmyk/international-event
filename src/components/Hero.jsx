import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-14 relative top-0 h-screen flex flex-col items-center text-center text-white bg-gray-300 px-3 sm:px-4"
      style={{
        backgroundImage: "url('./images/campus.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 sm:h-60 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full gap-10 sm:gap-30 lg:gap-10 pb-16">
        <div className="flex items-center justify-center w-full mt-10">
          <img
            src="./images/newlogo.jpeg"
            alt="ICAMAS Logo"
            className="w-16 sm:w-20 md:w-24 rounded-full shadow-lg"
          />
        </div>

        {/* Chief Guest & Guest of Honour */}
        {/* <div className="w-full max-w-4xl">
          <div className="flex flex-row justify-center items-start gap-6 sm:gap-10">
            
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
        </div> */}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative top-5 text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-bold max-w-xl md:max-w-7xl leading-snug px-2"
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
          className="relative text-xs sm:text-xl md:text-xl max-w-6xl text-center text-gray-100"
        >
          Conference Dates: <strong>10<sup>th</sup>–12<sup>th</sup> March, 2026</strong>
          <br />

          <span className="text-xs sm:text-base text-green-400 font-semibold animate-pulse">
            Outstanding extended papers will be submitted for possible publication in special/general issue of the SCIE/ESCI/SCOPUS Indexed journals.
            <span className="text-red-500 animate-pulse"> New</span>
          </span><br />
          <span className="text-yellow-400 text-xs sm:text-sm font-semibold">Dear Author, Thank you for your patience and overwhelming response. Your manuscript is currently under review, and you will be notified once the review process is complete.</span>
        </motion.p>

      </div>


    </section>
  );
}
