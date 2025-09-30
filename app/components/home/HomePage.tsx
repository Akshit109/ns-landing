"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false }}
      className="min-h-[50vh] md:h-[70vh] flex flex-col gap-6 md:gap-10 items-center justify-center px-4"
    >
      <p className="text-lg sm:text-xl font-light md:text-4xl text-customLightGray max-w-5xl text-center">
        Your entire investing journey—simplified into one modern portfolio.
      </p>
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Nifty Shloka Logo"
        width={288}
        height={288}
        style={{ height: "auto" }}
        className="my-6 md:my-12 w-28 h-28 sm:w-32 sm:h-32 md:w-72 md:h-72 object-contain"
      />
   
    </motion.div>
  );
};

export default HomePage;