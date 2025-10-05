import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const travelInfo = [
  {
    title: "Nearest Airport",
    img: "./images/donyi.jpg",
    description:
      "Donyi Polo Airport, Itanagar (Approx. 20 km). Connected by regular flights from major Indian cities. Taxis and cabs are available to reach NIT Arunachal Pradesh.",
  },
  {
    title: "Nearest Railway Station",
    img: "./images/nahar.webp",
    description:
      "Naharlagun Railway Station (Approx. 30 km). Well connected to Guwahati and other parts of India. Local transport and taxis are easily available to reach the campus.",
  },
  {
    title: "Bus Services",
    img: "./images/bus.webp",
    description:
      "Regular bus services operate from Guwahati to Itanagar and Naharlagun. Comfortable overnight buses and state transport buses are available. From Itanagar/Naharlagun, taxis can be hired to reach NIT Arunachal Pradesh.",
  },
];

const accommodations = [
  {
    title: "Hotel Obsidian Blue",
    img: "./images/blue.avif",
    description:
      "It is a modern, 3-star hotel in Itanagar offering amenities such as free Wi-Fi, an in-house restaurant. The hotel provides comfortable, spacious rooms with mountain views and aims to offer a hospitable, homely atmosphere with professional service.",
  },
  {
    title: "Cygnett Inn Trendz",
    img: "./images/inn.jpg",
    description:
      "It is a premium hotel in Itanagar offering excellent amenities, fine dining options, and seamless transport connectivity—making it ideal for conference participants. With its modern rooms, dedicated business facilities, and professional event services, it ensures a productive and comfortable stay.",
  },
  {
    title: "Hotel Blue Pine",
    img: "./images/pine.avif",
    description:
      "It is a centrally located, budget-friendly option in Itanagar, ideal for travelers attending conferences or exploring city highlights. Its convenient proximity to transport and tourist spots, free cancellation policies, and in-house restaurant make it appealing.",
  },
];

export default function TravelAccommodation() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="travel" className="scroll-mt-13 bg-gray-50 text-gray-800 min-h-screen font-sans py-4">
      {/* Header */}
      <header className="w-11/12 sm:w-2/3 md:w-2/6 flex flex-col justify-center items-center mx-auto bg-gradient-to-br from-green-200 to-blue-200 text-center py-2 rounded-b-3xl shadow-md">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700" data-aos="fade-down">
          TRAVEL & ACCOMMODATION
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Travel Section */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-center text-teal-700 mb-10">
            Travel Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {travelInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all"
                data-aos="zoom-in"
                data-aos-delay={idx * 200}
              >
                <img
                  src={info.img}
                  alt={info.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm text-justify">{info.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accommodation Section */}
        <section data-aos="fade-up" className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-teal-700 mb-10">
            Accommodation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {accommodations.map((hotel, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all"
                data-aos="flip-left"
                data-aos-delay={idx * 200}
              >
                <img
                  src={hotel.img}
                  alt={hotel.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">{hotel.title}</h3>
                <p className="text-gray-600 text-sm text-justify">{hotel.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
