import React from "react";
import { motion } from "framer-motion";

const membersData = {
  patron: [
    {
      name: "Prof. Mohan V Aware",
      role: "Director, NIT Arunachal Pradesh, India",
      img: "./images/director.jpg",
    },
  ],
  chairperson: [
    {
      name: "Dr. M. D. Ghatak",
      role: "HoD, Mechanical Engineering, NIT Arunachal Pradesh",
      img: "./images/manjula.jpg",
    },
  ],
  organizingSecretary: [
    {
      name: "Dr. Dipak Sen",
      role: "Department of Mechanical Engineering, NIT Arunachal Pradesh",
      img: "./images/dipak.jpg",
    },
    {
      name: "Dr. Ravi Ranjan Kumar",
      role: "Department of Mechanical Engineering, NIT Arunachal Pradesh",
      img: "./images/rr.jpg",
    },
  ],
  organizingCommittee: [
    { name: "Prof. Ram Prakash Sharma", img: "./images/rp.jpg" },
    { name: "Dr. Dipak Sen", img: "./images/dipak.jpg" },
    { name: "Dr. Prases Kumar Mohanty", img: "./images/prases.jpg" },
    { name: "Dr. Anup Paul", img: "./images/anup.jpg" },
    { name: "Dr. Manjula Das Ghatak", img: "./images/manjula.jpg" },
    { name: "Dr. Sandip Kumar Mandal", img: "./images/sk.jpg" },
    { name: "Dr. Ravi Ranjan Kumar", img: "./images/rr.jpg" },
  ],
  studentCommittee: [{ name: "Abhijeet", img: "./images/me.jpeg" }],
};

const Section = ({ title, members }) => (
  <section className="flex flex-col justify-center max-w-6xl mx-auto my-10 p-4 sm:p-6 bg-white bg-opacity-90 rounded-xl shadow-lg w-full">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6 underline decoration-blue-300 decoration-2 underline-offset-4">
      {title}
    </h2>

    <div className="flex justify-center flex-wrap gap-6">
      {members.map((member, idx) => (
        <motion.div
          key={idx}
          className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl hover:-translate-y-2 transition-transform w-[85%] sm:w-[45%] md:w-[28%] lg:w-[20%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-200"
          />
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            {member.name}
          </h3>
          {member.role && (
            <p className="text-sm text-gray-600 whitespace-pre-line mt-1 leading-snug">
              {member.role}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default function Committee() {
  return (
    <div
      id="committee"
      className="scroll-mt-5 bg-gradient-to-br from-green-50 via-blue-50 to-green-100 min-h-screen p-3 sm:p-6"
    >
      {/* Responsive Header */}
      <motion.header
        className="bg-gradient-to-r from-green-200 to-blue-200 text-center py-3 px-4 sm:px-6 rounded-b-3xl shadow-md w-[90%] sm:w-3/4 md:w-2/4 lg:w-1/3 mx-auto my-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700">
          COMMITTEE MEMBERS
        </h1>
      </motion.header>

      {/* Sections */}
      <Section title="Patron" members={membersData.patron} />
      <Section title="Chairperson" members={membersData.chairperson} />
      <Section title="Organizing Secretary" members={membersData.organizingSecretary} />
      <Section title="Organizing Committee" members={membersData.organizingCommittee} />
      <Section title="Student Organizing Committee" members={membersData.studentCommittee} />
    </div>
  );
}
