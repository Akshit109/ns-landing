import React from 'react';
import Image from 'next/image';

const Disclaimer = () => {
  return (
    <div className="w-full flex justify-center relative">
      <div className="w-full max-w-6xl px-4">
        {/* Quote */}
        <div
          className="flex items-center justify-center text-center w-full h-48 md:h-72 mb-8 md:mb-16 lg:mb-32 bg-cover bg-center"
          style={{ backgroundImage: 'url("/footer_pic.webp")' }}
        >
          <p className="text-lg md:text-3xl lg:text-5xl font-light italic px-4 py-2 rounded">
            "In God we trust, all others must bring data."
          </p>
        </div>
        {/* Disclaimer */}
        <div className="mb-16">
          <p className="text-xs md:text-sm text-customDarkGray text-center m-0">
            Disclaimer: Nifty Shloka is a strategy offering and not an advisory product. Investments are subject to market risks. Past performance is not indicative of future results.
          </p>
        </div>
        
      </div>
        {/* Logo in bottom right of Disclaimer area */}
        <div className="hidden md:flex absolute -bottom-16 right-0 z-10 mr-4 mb-4  flex-row items-center">
          <p className="text-white italic font-light mr-1 text-sm" style={{lineHeight: 1}}>Powered by</p>
          <a href="https://ikensolutions.com/" target="_blank" rel="noopener noreferrer">
            <Image
              // src="https://niftyshloka.com/iken-logo-white.png"
              src='/logo_fixed.svg'
              alt="Iken Solutions Logo"
              width={110}
              height={68}
              className="drop-shadow-lg"
            />
          </a>
        </div>
     
    </div>
  );
};

export default Disclaimer;
