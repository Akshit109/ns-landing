"use client"

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const HeroPage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.3,
        duration: 0.8,
        ease: "easeOut" 
      }
    })
  };

  return (
    <div className="relative min-h-screen w-screen">
      <div 
        className="absolute inset-0 w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero_bg.webp")' }}
      />
      <Navbar />
      <div className="relative min-h-screen w-screen flex flex-col items-center justify-center">
        <div className="w-[90%] max-w-6xl mx-auto text-left">
          <motion.h1 
            className="text-5xl md:text-[9rem] font-bold mb-6 drop-shadow-xl bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent leading-[1.1] pb-2 tracking-[0.15em]"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            EVERYTHING
          </motion.h1>
          <motion.h1 
            className="text-5xl md:text-[9rem] font-bold mb-6 drop-shadow-xl bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent leading-[1.1] pb-2 tracking-widest"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            EVERYWHERE
          </motion.h1>
          <motion.h1 
            className="text-5xl md:text-[9rem] font-bold mb-6 drop-shadow-xl bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent leading-[1.1] pb-2 tracking-[0.13em]"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            ALL AT ONCE
          </motion.h1>
        </div>
        <motion.h1 
          className="text-4xl md:text-5xl font-normal mb-6 drop-shadow-xl bg-gradient-to-r md:-ml-28 from-white to-gray-700  bg-clip-text text-transparent  pb-2 mt-10 "
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          One Portfolio Solution Across All Asset Classes
        </motion.h1>
      </div>
    </div>
  );
};

export default HeroPage;