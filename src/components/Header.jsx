import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-[#5B0000]">ICAMAS</div>
          <nav className="space-x-6 text-[#5B0000] font-medium">
            <a href="#" className="hover:text-gray-700">Home</a>
            <a href="#" className="hover:text-gray-700">About Arunachal</a>
            <a href="#" className="hover:text-gray-700">Visa</a>
            <a href="#" className="hover:text-gray-700">Registration</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
