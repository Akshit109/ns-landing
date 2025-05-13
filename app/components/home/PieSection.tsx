"use client"

import React from 'react';
import { motion } from "framer-motion";
import PieChartSection from '../pie-chart';
const PieSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="min-h-screen  flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl text-customDarkGray font-normal mb-6">
          Built for Modern Investors
        </h2>
        <p className="text-lg font-light md:text-2xl text-customLightGray max-w-2xl">
          A new-age Wealth Tech Platform to enable a Unified Investing Experience across a multi-asset portfolio—powered by Zerodha.
        </p>
        {/* Animated Pie Chart Container (currently with image) */}
        <div className='border border-customDarkGray rounded-2xl shadow-[0_0_25px_rgba(176,176,176,0.4)] mt-6'>
        <PieChartSection />

        </div>
      </div>
    </motion.div>
  )
}

export default PieSection;