import React from 'react';

const Disclaimer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl px-4  ">
        {/* Quote */}
        <div
          className="flex items-center justify-center text-center w-full h-72 my-16 md:my-32 bg-cover bg-center"
          style={{ backgroundImage: 'url("/footer_pic.webp")' }}
        >
          <p className="text-xl md:text-4xl font-light italic  px-4 py-2 rounded">
            "In God we trust, all others must bring data."
          </p>
        </div>
        
        {/* Disclaimer */}
        <div className="bg-cardBgColor border border-customDarkGray rounded-lg shadow-[0_0_25px_rgba(176,176,176,0.4)] mb-8 p-2">
          <p className="text-sm text-customLightGray text-center m-0">
            Disclaimer: Nifty Shloka is a strategy offering and not an advisory product. Investments are subject to market risks. Past performance is not indicative of future results.
          </p>
        </div>
        
       
      </div>
    </div>
  );
};

export default Disclaimer;
