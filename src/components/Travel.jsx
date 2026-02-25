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
    link: "https://www.google.com/maps/place/hotel+obsidian+blue+itanagar/data=!4m2!3m1!1s0x3744074b55b3de2b:0x386ca8913f115884?sa=X&ved=1t:242&ictx=111",
  },
  {
    title: "Cygnett Inn Trendz",
    img: "./images/inn.jpg",
    description:
      "It is a premium hotel in Itanagar offering excellent amenities, fine dining options, and seamless transport connectivity—making it ideal for conference participants. With its modern rooms, dedicated business facilities, and professional event services, it ensures a productive and comfortable stay.",
    link: "https://www.google.com/maps/place/cygnett+inn+trendz+itanagar/data=!4m2!3m1!1s0x3744077324618b57:0xd1bbd870fa1b18e0?sa=X&ved=1t:242&ictx=111",
  },
  {
    title: "Hotel Blue Pine",
    img: "./images/pine.avif",
    description:
      "It is a centrally located, budget-friendly option in Itanagar, ideal for travelers attending conferences or exploring city highlights. Its convenient proximity to transport and tourist spots, free cancellation policies, and in-house restaurant make it appealing.",
    link: "https://www.google.com/maps/place/hotel+blue+pine+itanagar/data=!4m2!3m1!1s0x374407b1db959e83:0x58d1654059f52e4d?sa=X&ved=1t:242&ictx=111",
  },
  {
    title: "Donyi Polo International Hotel",
    img: "./images/donyipolo.jpg",
    description:
      "A well-regarded hotel in Itanagar offering comfortable rooms, modern amenities, and convenient access to the city centre — ideal for conference participants looking for a relaxing and well-connected stay.",
    link: "https://share.google/tFoQ7DAcTX9etG3Se",
  },
  {
    title: "Hotel Moomsie",
    img: "./images/moomsie.jpg",
    description:
      "Hotel Moomsie is a popular accommodation option in Itanagar, known for its warm hospitality, comfortable rooms, and easy connectivity to major landmarks and transport hubs in the city.",
    link: "https://www.google.com/search?client=ms-android-motorola-rvo3&hs=p649&sca_esv=d705eb1ba6705ff2&sxsrf=ANbL-n7hZUwcP2wrvjEIEE99jcw74Zcwvg%3A1771994103552&kgmid=%2Fg%2F1hm4913lp&q=Hotel%20Moomsie%20Itanagar&shndl=30&source=sh%2Fx%2Floc%2Funi%2Fm1%2F2&kgs=2118907cf3f953ac",
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
        <h1 className="text-3xl sm:text-3xl font-extrabold text-blue-700" data-aos="fade-down">
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
                {hotel.img ? (
                  <img
                    src={hotel.img}
                    alt={hotel.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                ) : (
                  <div className="w-full h-48 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-teal-100">
                    <span style={{ fontSize: "3rem" }}>🏨</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-blue-900 mb-2">{hotel.title}</h3>
                <p className="text-gray-600 text-sm text-justify">{hotel.description}</p>
                {hotel.link && (
                  <a
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-blue-700 text-white text-xs font-bold rounded-lg hover:bg-blue-900 transition-colors"
                  >
                    📍 View on Map
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
