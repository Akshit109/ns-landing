"use client"

import React from 'react';
import { motion } from "framer-motion";
import PieChartSection from '../pie-chart';
const PieSection = () => {
  return (
    <motion.div
      id="pie-section"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 py-8 md:py-0">
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-customLightGray font-normal mb-4 md:mb-6">
          Built for Modern Investors
        </h2>
        <p className="text-base sm:text-lg font-light md:text-2xl text-customLightGray max-w-5xl mb-6 md:mb-8">
          A new-age wealth-tech platform to enable a unified investing experience across a <br className='hidden md:block'/> multi-asset portfolio—powered by Zerodha.
        </p>
        {/* Animated Pie Chart Container (currently with image) */}
        <div className="w-full max-w-full overflow-x-auto md:overflow-visible">
          <PieChartSection />
        </div>
      </div>
    </motion.div>
  )
}

export default PieSection;