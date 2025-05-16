"use client"

import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

const WhyNs = () => {
  return (
    <div id="why-ns" className="h-[70vh]  py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text Section - Left side on MD+ */}
          <div className="w-full md:w-1/3 order-1">
            <h2 className="text-4xl md:text-6xl text-customLightGray font-normal mb-10">
              Why Nifty Shloka?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-10">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center gap-3">
                  <div className="text-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xl md:text-2xl text-customLightGray">Multi-asset allocation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xl md:text-2xl text-customLightGray">Actively monitored strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xl md:text-2xl text-customLightGray">Single portfolio view</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xl md:text-2xl text-customLightGray">Built on Zerodha</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Section - Right side on MD+ */}
          <div className="w-full md:w-2/3 order-2 flex flex-col md:flex-row gap-8">
            {/* First Card */}
            <motion.div 
              className="w-full md:w-1/2 bg-[#111111] rounded-lg p-8 shadow-lg order-2 md:order-1 flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div>
                <h3 className="text-2xl text-customLightGray font-medium mb-6">For Pro/Professional Investors</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-customLightGray">Trade across multiple assets effortlessly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-customLightGray">Optimize portfolios for consistent growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-customLightGray">Reduce risk with expert-backed insights</span>
                  </li>
                </ul>
                <div className="h-[60px] mt-4"></div>
              </div>
              <div className="mt-8">
                <Link
                  href="/professional-investors"
                  className="inline-flex w-fit items-center gap-2 mt-2 px-4 py-2 bg-ctaColor text-customLightGray hover:bg-customLightGray hover:text-ctaColor transition-all duration-700 ease-in-out rounded-lg shadow-sm font-medium"
                >
                  Start Investing
                </Link>
              </div>
            </motion.div>
            
            {/* Second Card */}
            <motion.div 
              className="w-full md:w-1/2 bg-[#111111] rounded-lg p-8 shadow-lg order-3 md:order-2 flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
            >
              <div>
                <h3 className="text-2xl text-customLightGray font-medium mb-6">New to Investing?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-customLightGray">Quant Powered Strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-customLightGray">Guided, smart investing for steady returns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-customLightGray">Simple and effective approach</span>
                  </li>
                  <li className="flex items-start mt-4">
                    <span className="mr-2 text-customLightGray">Nifty Shloka is built for serious capital—designed for those who are ready to invest with intention, not just participate.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/new-to-investing"
                  className="inline-flex w-fit items-center gap-2 mt-2 px-4 py-2 bg-ctaColor text-customLightGray hover:bg-customLightGray hover:text-ctaColor transition-all duration-700 ease-in-out rounded-lg shadow-sm font-medium"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyNs;

