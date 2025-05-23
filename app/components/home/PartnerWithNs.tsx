"use client"

import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

const PartnerWithNs = () => {
  const points = [
    "Help us connect with potential clients",
    "Earn a fixed fee for each successful onboarding",
    "Offer your clients access to reporting & insights",
    "Leverage our diverse strategies and platform tools"
  ];

  return (
    <motion.div
      id="partner-with-ns"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-3 py-6 md:px-4 md:py-12">
        <motion.div
          className="w-full max-w-[1400px]"
        >
          <p className="text-2xl md:text-6xl text-customLightGray font-normal mb-3 md:mb-6">
            Partner With Nifty Shloka
          </p>
          <p className="text-sm md:text-2xl text-customLightGray mb-4 md:mb-8">
            Become a Distribution Partner and grow with us:
          </p>
          <div className="max-w-xl mx-auto">
            <ul className="space-y-2 md:space-y-6 text-sm md:text-2xl text-customLightGray">
              {points.map((point, index) => (
                <li key={index} className="flex items-center justify-start gap-2 md:gap-3">
                  <div className="text-green-500 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-left">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 md:mt-8 flex justify-center">
            <Link 
              href="/partner"
              className="inline-flex w-fit items-center gap-2 mt-2 px-3 py-1.5 md:px-4 md:py-2 bg-ctaColor text-black hover:bg-customLightGray hover:text-ctaColor transition-all duration-700 ease-in-out rounded-full shadow-sm font-medium no-underline text-sm md:text-base"
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
