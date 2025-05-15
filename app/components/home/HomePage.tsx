"use client"

import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false }}
      className="h-[70vh] flex flex-col gap-10 items-center justify-center"
    >
      <p className="text-lg font-light md:text-4xl text-customLightGray max-w-5xl">
        Your entire investing journey—simplified into one modern portfolio.
      </p>
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Nifty Shloka Logo"
        className="my-12 w-32 h-32 sm:w-36 sm:h-44 md:w-72 md:h-72 object-contain"
      />
   
    </motion.div>
  );
};

export default HomePage;