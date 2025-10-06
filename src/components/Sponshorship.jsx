import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const sponsors = [
  { level: "Diamond Sponsor", amount: "₹5,00,000", benefits: "5 registrations + 1 exhibition booth" },
  { level: "Platinum Sponsor", amount: "₹3,00,000", benefits: "4 registrations + 1 exhibition booth" },
  { level: "Gold Sponsor", amount: "₹2,00,000", benefits: "3 registrations + 1 exhibition booth" },
  { level: "Silver Sponsor", amount: "₹1,00,000", benefits: "2 registrations + 1 exhibition booth" },
  { level: "Bronze Sponsor", amount: "₹50,000", benefits: "1 registration + 1 exhibition booth" },
];

export default function Sponsorship() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset:0 });
  }, []);

  return (
    <section
      id="sponsorship"
      className="scroll-mt-14 min-h-[70%] md:min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-200 px-2 py-4 font-sans text-gray-800"
    >
      {/* Header */}
      <header
        className="w-full max-w-3xl text-center bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-b-3xl py-4 mb-8 shadow-md"
        data-aos="fade-down"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
          Conference Sponsorship Opportunities
        </h1>
      </header>

      {/* Description */}
      <p
        className="text-center text-base sm:text-lg mb-10 max-w-3xl"
        data-aos="fade-up"
      >
        The organising committee offers opportunities for sponsorship to
        advertise your company, products, and services during the conference.
      </p>

      {/* Responsive Table */}
      <div className="w-full max-w-4xl" data-aos="fade-up" data-aos-duration="1000">
        <table className="w-full table-auto border-collapse bg-white rounded-xl shadow-lg text-sm sm:text-base">
          <thead>
            <tr className="bg-gradient-to-r from-green-400 to-blue-400 text-white text-left">
              <th className="py-3 px-4 font-semibold">Sponsorship Level</th>
              <th className="py-3 px-4 font-semibold">Amount (INR)</th>
              <th className="py-3 px-4 font-semibold">Benefits</th>
            </tr>
          </thead>
          <tbody>
            {sponsors.map((sponsor, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 0 ? "bg-green-50" : "bg-green-100"} hover:bg-green-200 transition-colors duration-200`}
                data-aos="fade-up"
                data-aos-delay={idx * 0}
              >
                <td className="py-3 px-4 font-medium">{sponsor.level}</td>
                <td className="py-3 px-4">{sponsor.amount}</td>
                <td className="py-3 px-4">{sponsor.benefits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <p
        className="text-center text-gray-700 text-sm sm:text-base mt-8 px-4 max-w-3xl"
        data-aos="fade-up"
      >
        For sponsorship inquiries, please contact the organizing committee at{" "}
        <span className="font-semibold text-blue-700">icamas2026@nitap.ac.in</span>
      </p>
    </section>
  );
}
