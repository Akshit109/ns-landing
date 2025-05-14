"use client"

import React from 'react';
import { motion } from "framer-motion";
import DataGraphPage from '../data-graph';

const PieSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center justify-center text-center px-4">
       
        <motion.div
          className="grid grid-cols-12 gap-12 md:gap-24 w-full max-w-[1400px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
            {/* performance screenshot section */}
          <motion.div
            className="bg-cardBgColor border border-customDarkGray rounded-2xl shadow-[0_0_25px_rgba(176,176,176,0.4)]  p-8 col-span-12"
            variants={cardVariants}
          >
            {/* Chart Section */}
            <div className="mb-6">
            <h2 className="text-4xl text-customDarkGray md:text-6xl font-normal mb-6">
        Latest Performance Snapshot 
        </h2>
              {/* Chart Placeholder replaced with table */}
              <div className="overflow-x-auto">
                <table className="min-w-[600px] w-full text-center border-separate border-spacing-0 bg-ctaColor rounded-lg shadow-lg">
                  <caption className="text-customLightGray text-2xl font-semibold mb-2 bg-black rounded-t-lg py-2">Why Nifty <span className="text-ctaColor">Shloka</span>?</caption>
                  <thead>
                    <tr className="bg-ctaColor text-black">
                      <th className="border border-black px-6 py-3 text-lg font-bold"></th>
                      <th className="border border-black px-6 py-3 text-lg font-bold">Nifty Shloka</th>
                      <th className="border border-black px-6 py-3 text-lg font-bold">NIFTY 50</th>
                    </tr>
                  </thead>
                  <tbody className="text-black text-lg">
                    <tr>
                      <td className="border border-black px-6 py-3 font-medium text-left">Return(TWRR)</td>
                      <td className="border border-black px-6 py-3 font-semibold">31.64%</td>
                      <td className="border border-black px-6 py-3 font-semibold">23.99%</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3 font-medium text-left">Risk(Max Drawdown)</td>
                      <td className="border border-black px-6 py-3 font-semibold text-customRed">-7.94%</td>
                      <td className="border border-black px-6 py-3 font-semibold text-customRed">-15.77%</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-6 py-3 font-medium text-left">Current Drawdown</td>
                      <td className="border border-black px-6 py-3 font-semibold text-customRed">-0.92%</td>
                      <td className="border border-black px-6 py-3 font-semibold text-customRed">-8.42%</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex flex-col md:flex-row md:justify-between text-xs text-white mt-2 px-2">
                  <span className="text-customLightGray">*Launched in August 2023 (~ 21 months)</span>
                  <span className="text-customLightGray">As of 11-May-25</span>
                </div>
              </div>
            </div>
            {/* Description Section */}
            <div className="text-left">
              <h3 className="text-xl md:text-2xl text-customDarkGray font-normal mt-6 mb-3">
                Our Objective
              </h3>
              <ul className="text-base font-light md:text-lg text-customLightGray space-y-2 list-disc pl-4">
                <li>Maximize risk adjusted returns</li>
                <li>Even through market volatility</li>
              </ul>
            </div>
          </motion.div>
          {/* Graph screenshot section */}
          <motion.div
            className="bg-cardBgColor border border-customDarkGray  rounded-2xl shadow-[0_0_25px_rgba(176,176,176,0.4)]  p-8 col-span-12"
            variants={cardVariants}
          >
            {/* Chart Section */}
            <div className="mb-6">
            <h2 className="text-4xl text-customDarkGray md:text-6xl font-normal mb-6">
            Portfolio Performance 
        </h2>
              {/* Chart  */}
              <DataGraphPage/>
             
            </div>
            {/* Description Section */}
            <div>
              <a 
                href="https://support.zerodha.com/category/console/portfolio/console-holdings/articles/performance-curve"
                className="inline-flex  items-center gap-2 mt-6 px-4 py-2 bg-black text-customLightGray hover:bg-black hover:text-ctaColor transition-all duration-700 ease-in-out rounded-lg shadow-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Zerodha's performance methodology
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default PieSection;