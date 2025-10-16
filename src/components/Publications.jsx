import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Publications() {
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
   ];
  return (
    <section id="publications-section" className="scroll-mt-14 py-4 bg-green-50         text-center">
        <motion.header
                className="bg-gradient-to-r from-green-200 to-blue-200 text-center rounded-b-3xl shadow-md w-11/12 sm:w-2/3 md:w-2/6 mx-auto p-4 sm:p-2"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              >
                <h1 className=" text-3xl sm:text-4xl text-blue-700 font-extrabold tracking-wide">
                  PUBLICATIONS
                </h1>
            </motion.header>
            
            <div className="py-10 max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-4">
            {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center   justify-between hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
              <img
                src={pub.img}
                alt={pub.title}
                className="w-40 h-auto rounded-md mb-4"
              />
              <p className="font-semibold text-blue-800 text-sm">{pub.title}</p>
              
            </motion.div>
            ))}
            </div>
          </section>
  )
}
