import React from "react";
import { motion } from "framer-motion";

const registrationFees = [
  { desc: "Indian students/scholars (Early bird)", amount: "Rs. 4000/-" },
  { desc: "Indian students/scholars (after 31/12/25)", amount: "Rs. 5000/-" },
  { desc: "International students/scholars (Early bird)", amount: "$100" },
  { desc: "International students/scholars (after 31/12/25)", amount: "$150" },
  { desc: "Indian academicians (Early bird)", amount: "Rs. 7000/-" },
  { desc: "Indian academicians (after 31/12/25)", amount: "Rs. 8000/-" },
  { desc: "International academicians (Early bird)", amount: "$200" },
  { desc: "International academicians (after 31/12/25)", amount: "$300" },
  { desc: "Industry participants from India (Early bird)", amount: "Rs. 10,000/-" },
  { desc: "Industry participants from India (after 31/12/25)", amount: "Rs. 11,000/-" },
  { desc: "Industry participants from outside India (Early bird)", amount: "$300" },
  { desc: "Industry participants from outside India (after 31/12/25)", amount: "$400" },
];

const bankDetails = [
  { label: "Bank Name", value: "SBI Bank" },
  { label: "Account Number", value: "34181796920" },
  { label: "Payee Name", value: "PROJECT ACCOUNT NIT ARUNACHAL PRADESH" },
  { label: "IFSC Code", value: "SBIN0009535" },
  { label: "Branch Address", value: "(09535)-Nirjuli, Dist. Papumpare, Arunachal Pradesh -791109" },
  { label: "MICR No.", value: "791002004" },
  { label: "SWIFT/BIC", value: "SBININBB159" },
  { label: "Country", value: "India" },
];

export default function Registration() {
  return (
    <section
      id="registration"
      className="scroll-mt-6 min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 text-gray-800 py-8 sm:py-12"
    >
      {/* Header */}
      <motion.header
        className="bg-gradient-to-r from-green-200 to-blue-200 text-center rounded-b-3xl shadow-md w-11/12 sm:w-2/3 md:w-2/6 mx-auto p-4 sm:p-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl text-blue-700 font-extrabold tracking-wide">
          REGISTRATION
        </h1>
      </motion.header>

      {/* Registration Form Section */}
      <motion.section
        className="max-w-4xl mx-auto my-8 sm:my-12 p-6 sm:p-4 bg-white rounded-2xl shadow-xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700">Registration Form</h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Click the button below to complete your registration.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfrrZceq92j-CfSf8ensgDFCpfAL457zSFRsAFQInoKyHM_Zg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-400 to-blue-400 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500"
        >
          Register Now
        </a>
      </motion.section>

      {/* Registration Fees Section */}
      <motion.section
        className="max-w-4xl mx-auto my-8 sm:my-12 p-6 sm:p-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 text-center">
          Registration Fees
        </h2>
        <p className="mt-4 text-gray-700 text-center text-sm sm:text-base">
          The registration fee covers participation in Technical Sessions, Conference kit, Lunch, and Tea/Coffee.
        </p>

        <ul className="mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-800 list-disc list-inside">
          {registrationFees.map((fee, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              {fee.desc} – <span className="font-semibold">{fee.amount}</span>
            </motion.li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs sm:text-sm italic text-red-600">
          NOTE: Lodging is not included in the registration fees.
        </p>
      </motion.section>

      {/* Bank Details Section */}
      <motion.section
        className="max-w-4xl mx-auto my-8 sm:my-12 p-6 sm:p-8 bg-white rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 text-center">
          Bank Details
        </h2>
        <p className="mt-4 text-gray-700 text-center text-sm sm:text-base">
          Please use the following details for payment of registration fees:
        </p>

        <ul className="mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-800 list-disc list-inside">
          {bankDetails.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <span className="font-semibold">{item.label}:</span> {item.value}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </section>
  );
}
