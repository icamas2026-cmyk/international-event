import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Tawang Monastery",
    desc: "The Tawang Monastery, one of the largest in India, is an iconic landmark of Arunachal Pradesh. Nestled amidst the Himalayas at 10,000 feet, it was founded in the 17ᵗʰ century and serves as a spiritual center for Mahayana Buddhism.",
    img: "./images/Tawang-Monastery.jpg",
  },
  {
    title: "Ziro Valley",
    desc: "Ziro Valley, home to the Apatani tribe, is famous for its rice fields, pine-clad hills, and the UNESCO World Heritage Site nomination.",
    img: "./images/Ziro.jpg",
  },
  {
    title: "Namdapha National Park",
    desc: "Namdapha National Park, one of the largest protected areas in India, shelters unique flora and fauna like snow leopards and red pandas.",
    img: "./images/Nam.jpg",
  },
  {
    title: "Itanagar",
    desc: "Itanagar, the capital of Arunachal Pradesh, is known for its rich culture, landscapes, and historical significance.",
    img: "./images/itanagar.jpg",
  },
  {
    title: "Gompa Temple",
    desc: "Gompa Temple is a serene Buddhist monastery reflecting spirituality, culture, and peace with its calm surroundings.",
    img: "./images/gompa.jpg",
  },
  {
    title: "Ita Fort",
    desc: "Ita Fort, built in the 14ᵗʰ–15ᵗʰ century, showcases the ancient stone architecture of the region.",
    img: "./images/ita.jpg",
  },
  {
    title: "Indira Gandhi Park",
    desc: "Indira Gandhi Park is a peaceful hub for cultural events and relaxation amidst greenery.",
    img: "./images/ig.jpg",
  },
  {
    title: "Anini Town",
    desc: "Anini, in Dibang Valley, is known for its untouched beauty and pleasant weather.",
    img: "./images/anini.jpg",
  },
  {
    title: "Mechuka",
    desc: "Mechuka Valley is surrounded by snow-capped mountains and Buddhist monasteries, often called Arunachal’s hidden paradise.",
    img: "./images/mechuka.webp",
  },
];

export default function AboutArunachal() {
  return (
    <section id="about" className="scroll-mt-6 bg-gray-50 text-gray-800 py-8 md:py-12 overflow-x-hidden">
      {/* Header */}
      <motion.header
        className="bg-gradient-to-r from-green-200 to-blue-200 text-center rounded-b-3xl shadow-md w-11/12 sm:w-3/5 md:w-2/5 mx-auto p-4 sm:p-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl text-blue-700 font-extrabold tracking-wide">
          ABOUT ARUNACHAL PRADESH
        </h1>
        <p className="mt-2 text-base sm:text-lg font-medium italic">The Land of the Rising Sun</p>
      </motion.header>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {sections.map((item, idx) => (
          <motion.section
            key={idx}
            className={`flex flex-col md:flex-row items-center my-8 sm:my-12 p-4 sm:p-6 rounded-2xl shadow-lg transition duration-700 ${
              idx % 2 === 1 ? "md:flex-row-reverse bg-blue-50" : "bg-green-50"
            }`}
            initial={{ opacity: 0, x: idx % 2 === 1 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-1/2 rounded-xl shadow-md object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className={`mt-4 md:mt-0 ${idx % 2 === 1 ? "md:mr-6 lg:mr-8" : "md:ml-6 lg:ml-8"}`}>
              <h2
                className={`text-xl sm:text-2xl font-bold uppercase ${
                  idx % 2 === 1 ? "text-green-600" : "text-blue-600"
                }`}
              >
                {item.title}
              </h2>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed text-justify">{item.desc}</p>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Know More Button */}
      <motion.div
        className="text-center my-10 sm:my-14"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://arunachaltourism.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transform transition duration-500"
        >
          Know More
        </a>
      </motion.div>
    </section>
  );
}
