"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const PartnerWithNs = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const points = [
    "Help us connect with potential clients",
    "Earn a fixed fee for each successful onboarding",
    "Offer your clients access to reporting & insights",
    "Leverage our diverse strategies and platform tools"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % points.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          className="bg-cardBgColor border border-customDarkGray rounded-2xl shadow-[0_0_25px_rgba(176,176,176,0.4)]  p-8 w-full max-w-[1400px]"
        >
          <p className="text-4xl md:text-6xl text-customDarkGray font-normal mb-6">
            Partner With Nifty Shloka
          </p>
          <p className="text-lg md:text-2xl text-customLightGray mb-8">
            Become a Distribution Partner and grow with us:
          </p>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6 text-lg font-light md:text-2xl text-customLightGray">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  animate={{
                    scale: activeIndex === index ? 1.1 : 1,
                    color: activeIndex === index ? "#189606" : "#ebebeb",
                    transition: { duration: 0.3 }
                  }}
                  className="flex items-center justify-center"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex justify-center">
            <Link 
              href="/partner"
              className="px-8 py-3 text-lg font-light text-customLightGray bg-black border border-black rounded-lg transition-all duration-700 ease-in-out hover:text-ctaColor inline-flex items-center gap-2"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PartnerWithNs;
