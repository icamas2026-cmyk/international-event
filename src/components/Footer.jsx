import React from 'react'

const Footer = () => {
  return (
    <div id="contact">
      <footer className="bg-blue-100 py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="md:w-1/2">
              <img src="./images/logo.png" alt="NIT Logo" className="w-20 mb-4" />
              <p className="text-[#3912e9] mb-4 text-justify">
                National Institute of Technology Arunachal Pradesh (NITAP) is
                one of the 31 prestigious NITs in India, recognized as an
                Institute of National Importance under the NIT Act, 2007.
                Established in 2010 by the Government of India, it fosters
                excellence in technical education and research in the
                northeastern region of India.
              </p>
              <p className="text-[#0b47de] font-medium">
                © ICAMAS 2026 – All Rights Reserved.
              </p>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-lg font-bold text-[#3116df] mb-2">
                Contact Us
              </h3>
              <p className="text-[#2115c9] mb-1">
                ✉ icamas2026@nitap.ac.in<br />
              </p>
              <p className="text-[#2115c9]">📞 9085659292/9485231949</p>
            </div>
          </div>
        </footer>

    </div>
  )
}

export default Footer
