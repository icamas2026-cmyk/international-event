import React from "react";
import { motion } from "framer-motion";
import { image, title } from "framer-motion/client";
import ReactMarkdown from "react-markdown";

const speakers = [
  {
    name: "Prof. Sarit Kumar Das",
    image: "./images/skd.jpeg",
    title:
      "Institute Professor & V. Balakrishnan Chair Professor, Department of Mechanical Engineering, IIT Madras, India",
    description: `Prof. Sarit K. Das is a distinguished **researcher in thermo-fluidics and nanofluids**, with contributions in heat and mass transfer, fuel cells, battery cooling, and bio-microfluidics. His group is internationally known for pioneering work on nanofluids and biochips for medical diagnostics. He has also advanced desalination technologies. A **former Director of IIT Ropar** and **Dean of Academic Research at IIT Madras**, Prof. Das has held visiting positions at MIT, USA and several European universities. He has authored **500+ publications with over 28,000 citations**, and is a **Fellow of INAE, NASI, and AUTSE**.`,
  },
  {
    name: "Prof. Pulak Mohan Pandey",
    image: "./images/pmpandey.jpg",
    title:
      "IHFC Chair & Professor (HAG), Department of Mechanical Engineering, IIT Delhi",
    description: `Prof. Pulak Mohan Pandey is a distinguished academician and **researcher specializing in Additive Manufacturing, CAD/CAM, Biomedical Applications of 3D Printing, and Non-traditional Machining**. He has been a **Professor at IIT Delhi** since 2004 and served as **Director of BIET Jhansi** from 2021 to 2023. Prof. Pandey’s work bridges cutting-edge research and practical applications, advancing technology in manufacturing and biomedical engineering, and establishing him as a leading figure in both academic and industrial communities. He has also mentored numerous students and guided impactful research projects globally.`,
  },
  {
    name: "Prof. Uday Shanker Dixit",
    image: "./images/dixit.jpg",
    title:
      "Professor, Department of Mechanical Engineering & Head, Center for Indian Knowledge System, IIT Guwahati",
    description:`Prof. Uday Shanker Dixit is a distinguished academician and researcher known for his extensive contributions to the fields of **Manufacturing Process Modelling, Finite Element Analysis, and the Design and Manufacturing of Mechatronic Systems**. His research seamlessly integrates theoretical and practical aspects of mechanical engineering, driving innovation in advanced manufacturing technologies. Served as Officiating **Director CIT, Kokrajhar**. Prof. Dixit’s work has significantly influenced modern engineering practices, making him a respected figure in academia and research worldwide.
`,
  },
  {
    name: "Prof. Sunil Pandey",
    image: "./images/sunil_pandey.jpg",
    title:
      "Distinguished Professor, Dept. of Mechanical-Mechatronics Engineering, LNMIIT Jaipur",
    description: `Prof. Sunil Pandey, a distinguished expert in **Welding and Manufacturing**, holds **B.E., M.Tech., and Ph.D. degrees from IIT Delhi**. With over **49 years of academic, research, and administrative experience**, he has made outstanding contributions to engineering education and technological advancement.
    **Former Director of SLIET**. A pioneer in his field, Prof. Pandey established world-class **Welding Research Laboratories at IIT Delhi, Jawaharlal Nehru University (JNU), and LNMIIT**, fostering innovation, industrial collaboration, and cutting-edge research in welding science and advanced manufacturing processes.
`,
  },
  {
    name: "Dr. Sudip Dey",
    image: "./images/sudipdey.jpeg",
    title:
      "Associate Professor, Department of Mechanical Engineering, NIT Silchar",
    description: `Dr. Sudip Dey holds a **Bachelor’s degree in Mechanical Engineering and a Ph.D. in Engineering from Jadavpur University**, along with a Post Graduate Diploma in Management. His diverse research interests bridge the realms of **Classical and Quantum Mechanics**, as well as Innovation and Design. With a strong interdisciplinary approach, Dr. Dey has contributed significantly to advancing scientific understanding and practical applications across engineering and physics, reflecting his commitment to excellence in both research and education. He has also guided numerous students and research projects, fostering the next generation of innovators and scientists.`,
  },
  {
    name: "Prof. Goutam Sutradhar",
    image: "./images/gautam.jpg",
    title: "Director NIT Jamshedpur, Former: Director NIT Manipur",
    description: `Prof. Goutam Sutradhar, is an eminent academician and researcher in **Mechanical and ,Materials engineering**. He holds a **Ph.D. from BIT Mesra, an M.Tech in Foundry Technology from IIT Kharagpur and Bachelor's degree in Mechanical Engineering from Jalpaiguri Government Engineering College.** With over three decades of experience in academia and industry, he has published more than **125 research papers** and guided numerous Ph.D. and M.Tech scholars. His expertise includes foundry processes, composite materials, and sustainable manufacturing technologies.He continues to play a pivotal role in advancing technical education and fostering innovation in engineering research.`,
  },
  {
    name: "Prof. Rajat Gupta",
    image: "./images/rajat.jpg",
    title:
      "Vice-Chancellor Vel Tech University Chennai, Former: Director NIT Mizoram, Director NIT Srinagar",
    description: `Prof. Rajat Gupta is a distinguished academic and administrator, He was appointed as the **officiating Director of NIT Silchar** Known for his visionary approach. **Ph.d from Indian Institute of Technology, Delhi**. He has published more than **165 research papers** in various National / International Journals/ Conferences and also written **05 Chapters in books**. His research areas include among others, **Fluid Mechanics, CFD, Non-Conventional Energy, Thermo-fluids, etc**. Prof. Gupta has been instrumental in fostering innovation, and enhancing the overall quality of technical education in India .`,
  },
  {
    name: "Prof. Sudarsanam Suresh Babu",
    image: "./images/sudarsanam.jpg",
    title: "University of Maryland, USA",
    description: `Prof. Sudarsanam  Babu is a globally renowned materials scientist and engineer, currently serving as the **Director of the Center for Research in Additive Manufacturing (CFRAM)** at the **University of Maryland, USA**. He is widely recognized for his pioneering work in **additive manufacturing, welding science, and advanced materials processing**. A Fellow of **ASM International** and the **American Welding Society**, Prof. Babu’s groundbreaking research has advanced understanding of **microstructural evolution, phase transformations, and 3D printing technologies**. With numerous high-impact publications, patents, and global collaborations, he continues to drive innovation in **sustainable and intelligent manufacturing systems** worldwide.
`,
  },
  {
    name:"Sri Hitajit Bhattacharyya",
    image:"./images/hitajit.jpg",
    title:"Chief General Manager,IOCL",
    description:`Sri Hitajit Bhattacharyya is the **Chief General Manager (HR) at Guwahati Refinery, Indian Oil Corporation Limited**, with over **34 years of distinguished service** in diverse operational and managerial domains. He holds a **B.E. in Mechanical Engineering from NIT Srinagar, an MBA from IIM Shillong, and is pursuing a Ph.D. in OB & HR at IIM Raipur**. His professional journey spans LPG plant operations, refinery maintenance, materials management, TPM implementation, and human resources. With an additional 2 years of experience in the tea industry, he exemplifies leadership excellence, combining deep technical expertise with strategic HR management in the energy sector.`
  },
  {
    name: "Prof. Tobias Plessing",
    image: "./images/tobias-plessing.jpg",
    title: "Head of Institute , Institute for Hydrogen and Energy Technology (iwe)",
    description: `Prof. Tobias Plessing is a **Professor of Energy Technology at Hof University**, where he leads the **Institute for Hydrogen and Energy Technology** and the Research Group **“Innovative Energy Systems and Hydrogen Technologies”**. He studied **mechanical engineering at RWTH Aachen University**. Among his key achievements are contributions to flame diagnostics (including work on flameless oxidation FLOX) , industrial experience in glass and **solar-glass technology**, and research leadership in renewable energy systems—especially biomass utilisation, solar ice-storage systems and hydrogen technologies. `,
  },
  {
    name: "Dr. D. Biswas",
    image: "./images/biswas.jpg",
    title: "Technical Director, GTRE ,Defence R&D Organisation",
    description: `Dr. D. Biswas is a **senior scientist** and **Technical Director at the Gas Turbine Research Establishment (GTRE)**, DRDO, Ministry of Defence, Government of India. With over three decades of experience, he has played a vital role in designing and developing the **Kaveri engine** and advanced systems such as the **Variable Exhaust Nozzle and Integrated Nozzle Actuation System**. A Mechanical Engineering graduate, he earned his **M.Tech and Ph.D. from IIT Kharagpur**. His expertise lies in mechanisms, hydraulics, and control systems. Dr. Biswas is a life member of the **Aeronautical Society of India** and continues to contribute to indigenous **jet engine**`,
  },
  {
    name:"Prof. Siby John",
    image:"./images/john.png",
    title:"Director, GKCIET Malda (WB)",
    description:`Prof. Siby John, is a distinguished academician and environmental engineer. He holds a **B.Tech in Civil Engineering, an M.Tech in Environmental Engineering, and a Ph.D. from IIT Kanpur**. With over **150 research papers, 7 books, and 4000 citations**, he has made significant contributions to environmental pollution control and sustainable development. A recipient of several prestigious awards, Prof. John is a Fellow of the **Institution of Engineers (India)** and an active member of multiple professional societies in the field of environmental engineering.He continues to inspire research and innovation aimed at achieving a cleaner and more sustainable future.`
  },
  {
    name:"Prof. B. B. Saha",
    image:"./images/BSaha.jpg",
    title:"Professor, Kyushu University, Japan",
    description:`Prof. Bidyut Baran Saha is a **Professor and Principal Investigator at the International Institute for Carbon-Neutral Energy Research and a Professor at the Mechanical Engineering Department of Kyushu University, Japan**. He received his **B.Sc. (Hons.) and M.Sc. degrees from the University of Dhaka** and was the **1st Bose Fellow** at the same institution. He received his **Ph.D. in 1997 from the Tokyo University of Agriculture and Technology, Japan**. His research interests include thermally powered energy conversion systems (including adsorption cooling, refrigeration, and desalination cycles), thermal energy storage, heat and mass transfer analysis, energy analysis and energy policy. He has published **500 articles** in Scopus-indexed journals and international conference proceedings. He has edited eleven books and holds thirty-one patents. `
  },
  {
    name:"Assoc Prof Anutosh Chakraborty",
    image:"./images/anutosh.jpeg",
    title:"Associate Professor, School of Mechanical & Aerospace Engineering",
    description:`Anutosh Chakraborty is an Associate Professor at the School of **Mechanical and Aerospace Engineering of Nanyang Technological University (NTU) Singapore**. He obtained his **BSc Eng from BUET Bangladesh**. He then obtained **MEng and PhD in Mechanical Engineering from the Department of Mechanical Engineering, National University of Singapore (NUS)**. After graduation, Dr Chakraborty worked at the Institute for Materials, Chemistry and Engineering, Kyushu University, Japan as a lecturer (2006 – 2007). He was then awarded the **JSPS fellowship**. He joined the MAE NTU in 2010 as an Assistant Professor and promoted to a tenured Associate Professor in 2017. He has trained 8 PhDs and 5 post-doctoral fellows. He has published 5 book chapters **6 patents and more than 150 peer-reviewed papers**`
  },
  {
    name:"Dr. S. P. Aggarwal",
    image:"./images/aggarwal.jpg",
    title:"Director, NESAC",
    description:`Dr. S. P. Aggarwal assumed the charge of **Director, NESAC with effect from 17th September, 2021**. He has taken important initiatives towards effective utilization of **Space Science and Technology for various developmental activities of NER such as Natural Resource Management, Infrastructure Planning, Disaster Risk Management, Weather forecasting, Satellite communication applications, ICT based and Geo-governance related applications**, etc. Prior to this assignment, he was the **Group Head of Water Resources Department at Indian Institute of Remote Sensing (IIRS), ISRO, Dehradun**. Dr. Aggarwal is a highly accomplished scientist in the field of Remote Sensing and GIS applications in water resources management, disaster management and climate change impact assessment and at the same time he has immensely contributed in the capacity building and outreach program of ISRO.`
  }
];

export default function KeynoteSpeakers() {
  return (
    <div
      id="keynote"
      className="scroll-mt-11 bg-gradient-to-r from-green-50 to-blue-50 min-h-screen flex flex-col font-sans text-gray-800"
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
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => (
                        <p
                          {...props}
                          className="text-sm text-gray-700 leading-relaxed mt-3 text-justify"
                        />
                    ),
                    strong: ({ node, ...props }) => (
                        <strong
                        {...props}
                        className="font-semibold text-gray-900"
                        />
                    ),
                    }}
                  skipHtml={false} 
                  >
                  {speaker.description}
                </ReactMarkdown>
              )}

            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
