import React from 'react';

const Disclaimer = () => {
  return (
    <div className="w-full flex justify-center">
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
        <div className="mb-8">
          <p className="text-xs md:text-sm text-customDarkGray text-center m-0">
            Disclaimer: Nifty Shloka is a strategy offering and not an advisory product. Investments are subject to market risks. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
