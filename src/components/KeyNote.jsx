import React from "react";
import { motion } from "framer-motion";

const speakers = [
  {
    name: "Prof. Sarit Kumar Das",
    image: "./images/skd.jpeg",
    title:
      "Institute Professor & V. Balakrishnan Chair Professor, Department of Mechanical Engineering, IIT Madras, India",
    description: `Prof. Sarit K. Das is a distinguished researcher in thermo-fluidics and nanofluids, with contributions in heat and mass transfer, fuel cells, battery cooling, and bio-microfluidics. His group is internationally known for pioneering work on nanofluids and biochips for medical diagnostics. He has also advanced desalination technologies. A former Director of IIT Ropar and Dean of Academic Research at IIT Madras, Prof. Das has held visiting positions at MIT, USA and several European universities. He has authored 500+ publications with over 28,000 citations, and is a Fellow of INAE, NASI, and AUTSE.`,
  },
  {
    name: "Prof. Pulak Mohan Pandey",
    image: "./images/pmpandey.jpg",
    title:
      "IHFC Chair & Professor (HAG), Department of Mechanical Engineering, IIT Delhi",
    description: `Prof. Pulak Mohan Pandey is a distinguished academician and researcher in Additive Manufacturing, CAD/CAM, Biomedical Applications of 3D Printing, and Non-traditional Machining. He has served as Director of BIET Jhansi (2021–2023) and has been a Professor at IIT Delhi since 2004.`,
  },
  {
    name: "Prof. Uday Shanker Dixit",
    image: "./images/dixit.jpg",
    title:
      "Professor, Department of Mechanical Engineering & Head, Center for Indian Knowledge System, IIT Guwahati",
    description: `Prof. Uday Shanker Dixit is a distinguished academician and researcher in Modelling of Manufacturing Processes, Finite Element Analysis, Soft Computing, Design Optimization, and Design & Manufacturing of Mechatronic Systems.`,
  },
  {
    name: "Prof. Sunil Pandey",
    image: "./images/sunil_pandey.jpg",
    title:
      "Distinguished Professor, Dept. of Mechanical-Mechatronics Engineering, LNMIIT Jaipur",
    description: `Prof. Sunil Pandey, a pioneer in Welding and Manufacturing, holds B.E., M.Tech., and Ph.D. from IIT Delhi with over 49 years of academic, research, and administrative experience. He established world-class Welding Research Laboratories at IIT Delhi, JNU, and LNMIIT.`,
  },
  {
    name: "Dr. Sudip Dey",
    image: "./images/sudipdey.jpeg",
    title:
      "Associate Professor, Department of Mechanical Engineering, NIT Silchar",
    description: `Dr. Sudip Dey received his B.M.E from Jadavpur University and a Post Graduate Diploma in Management. He earned his Ph.D. in Engineering from Jadavpur University. His research spans Classical Mechanics to Quantum Mechanics, and Innovation to Design.`,
  },
  {
    name: "Prof. Goutam Sutradhar",
    image: "./images/gautam.jpg",
    title: "Director NIT Jamshedpur, Former: Director NIT Manipur",
    description: `Prof. (Dr.) Goutam Sutradhar, Director of NIT Jamshedpur and former Director of NIT Manipur, is an eminent academician and researcher in mechanical and materials engineering. He holds a Ph.D. from BIT Mesra and an M.Tech in Foundry Technology from IIT Kharagpur. With over three decades of experience in academia and industry, he has published more than 125 research papers and guided numerous Ph.D. and M.Tech scholars. His expertise includes foundry processes, composite materials, and sustainable manufacturing technologies.`,
  },
  {
    name: "Prof. Rajat Gupta",
    image: "./images/rajat.jpg",
    title:
      "Vice-Chancellor Vel Tech University Chennai, Former: Director NIT Mizoram, Director NIT Srinagar",
    description: `ChatGPT said:

Prof. Rajat Gupta is a distinguished academic and administrator, currently serving as the Vice-Chancellor of Vel Tech University, Chennai. With a rich career in higher education, he has previously held leadership roles as Director of NIT Mizoram and NIT Srinagar, contributing significantly to institutional development, research promotion, and academic excellence. Known for his visionary approach, Prof. Gupta has been instrumental in fostering innovation, strengthening industry-academia collaborations, and enhancing the overall quality of technical education in India, leaving a lasting impact on the institutions he has led.`,
  },
  {
    name: "Prof. Sudarsanam Suresh Babu",
    image: "./images/sudarsanam.jpg",
    title: "University of Maryland, USA",
    description: `Prof. Sudarsanam Suresh Babu is a renowned scholar and researcher at the University of Maryland, USA. With expertise in materials science and engineering, he has made significant contributions to the fields of nanomaterials, additive manufacturing, and advanced characterization techniques. Known for his innovative research and interdisciplinary approach, Prof. Suresh Babu has authored numerous high-impact publications and guided several graduate and doctoral students. His work bridges fundamental science and practical applications, advancing both academic knowledge and industrial technologies in materials engineering.`,
  },
  {
    name:"Sri Hitajit Bhattacharyya",
    image:"./images/hitajit.jpg",
    title:"Chief General Manager,IOCL",
    description:`Current Designation: Chief General Manager (HR), Guwahati Refinery
                Organization: Indian Oil Corporation Limited
                Academic Profile
                B. E. (Mechanical) from National Institute of Technology, Srinagar, J&K
                MBA from Indian Institute of Management, Shillong
                Pursuing PhD (OB&HR) at Indian Institute of Management, Raipur
                Professional Experience:
                • 2 years in Tea industry
                • 34 years in Indian Oil Corporation Ltd in various areas covering, LPG plant 
                operation & maintenance, LPG sales, Petroleum Refinery operation & 
                Maintenance (Mechanical discipline), Materials Management, TPM 
                implementation & finally Human Resources.`
  },
  {
    name: "Prof. Ian Malcolm Richardson",
    image: "./images/ian.jpg",
    title: "Delft University of Technology, Netherlands",
    description: `ChatGPT said:

Prof. Ian Malcolm Richardson is an internationally recognized expert in welding and materials science with over 35 years of academic, research, and industrial experience. He holds a Ph.D. from Cranfield University and has served as Professor and Head of the Department of Materials Science and Engineering at Delft University of Technology. His expertise spans welding physics, arc and laser welding, stress and distortion analysis, and the influence of welding on materials and structures. A Chartered Engineer and Senior Member of The Welding Institute, he has supervised more than 70 postgraduate theses and authored over 250 international publications, significantly advancing joining technology research worldwide.`,
  },
  {
    name: "Dr. D. Biswas",
    image: "./images/biswas.jpg",
    title: "Technical Director, GTRE ,Defence R&D Organisation",
    description: `Dr. D. Biswas is a senior scientist and Technical Director at the Gas Turbine Research Establishment (GTRE), DRDO, Ministry of Defence, Government of India. With over three decades of experience, he has played a vital role in designing and developing the Kaveri engine and advanced systems such as the Variable Exhaust Nozzle and Integrated Nozzle Actuation System. A Mechanical Engineering graduate, he earned his M.Tech and Ph.D. from IIT Kharagpur. His expertise lies in mechanisms, hydraulics, and control systems. Dr. Biswas is a life member of the Aeronautical Society of India and continues to contribute to indigenous jet engine`,
  }
];

export default function KeynoteSpeakers() {
  return (
    <div
      id="keynote"
      className="scroll-mt-9 bg-gradient-to-r from-green-50 to-blue-50 min-h-screen flex flex-col font-sans text-gray-800"
    >
      {/* Header Section */}
      <motion.header
        className="w-5/6 sm:w-3/6 md:w-2/6 bg-gradient-to-r from-green-200 to-blue-200 text-center py-2 mx-auto my-6 rounded-b-3xl shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700 tracking-wide">
          KEYNOTE SPEAKERS
        </h1>
      </motion.header>

      {/* Speakers Grid */}
      <main className="flex-grow px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-blue-200 rounded-xl p-6 shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full shadow-md mb-4"
              />
              <h2 className="text-lg sm:text-xl font-semibold text-blue-800">
                {speaker.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {speaker.title}
              </p>
              {speaker.description && (
                <p className="text-sm text-gray-700 leading-relaxed mt-3 text-justify">
                  {speaker.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
