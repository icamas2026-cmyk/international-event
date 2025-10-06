
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full flex justify-between items-center p-2 bg-white shadow-md fixed top-0 z-50">

      {/* Left Logo */}
      <div>
        <img className="w-10 mx-6" src="./images/logo.png" alt="NIT Logo" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex space-x-6 font-medium ">
        <a href="#home" className="hover:text-indigo-600 transition">Home</a>
        <a href="#about" className="hover:text-indigo-600 transition">About</a>
        <a href="#registration" className="hover:text-indigo-600 transition">Registration</a>
        <a href="#callforpapers" className="hover:text-indigo-600 transition">Call For Papers</a>
        <a href="#visa" className="hover:text-indigo-600 transition">Visa</a>
        <a href="#submission" className="hover:text-indigo-600 transition">Submission</a>
        <a href="#program" className="hover:text-indigo-600 transition">Program</a>
        <a href="#committee" className="hover:text-indigo-600 transition">Committees</a>
        <a href="#keynote" className="hover:text-indigo-600 transition">KeyNotes</a>
        <a href="#sponsorship" className="hover:text-indigo-600 transition">Sponsorship</a>
        <a href="#travel" className="hover:text-indigo-600 transition">Travel & Accommodation</a>
      </nav>

      {/* Right Logo */}
      <div>
        <img className="hidden sm:block w-11" src="./images/newlogo.png" alt="ICAI Logo" />
      </div>
      {/* Hamburger Button (Mobile) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-3xl text-gray-800 focus:outline-none mr-4"
      >

        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleMenu} className=" md:text-2xl">
            ✖
          </button>
        </div>

        <nav className="flex flex-col items-start space-y-4 p-6 md:text-lg font-medium">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#registration" onClick={toggleMenu}>Registration</a>
          <a href="#callforpapers" onClick={toggleMenu}>Call For Papers</a>
          <a href="#visa" onClick={toggleMenu}>Visa</a>
          <a href="#submission" onClick={toggleMenu}>Submission</a>
          <a href="#program" onClick={toggleMenu}>Program</a>
          <a href="#committee" onClick={toggleMenu}>Committees</a>
          <a href="#keynote" onClick={toggleMenu}>KeyNotes</a>
          <a href="#sponsorship" onClick={toggleMenu}>Sponsorship</a>
          <a href="#travel" onClick={toggleMenu}>Travel & Accommodation</a>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
        ></div>
      )}
    </header>
  );
}
