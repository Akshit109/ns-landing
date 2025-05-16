"use client"

import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { name: "Pie", target: "pie-section" },
    { name: "Performance", target: "latest-performance" },
    { name: "Why NS", target: "why-ns" },
    { name: "Partner with NS", target: "partner-with-ns" }
  ];

  return (
    <div className="w-full flex justify-center absolute top-4 z-10 px-4">
      <nav className="flex items-center justify-between px-8 py-2 bg-white rounded-full shadow-md max-w-4xl w-full">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="mr-4"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 ml-4">
          {navItems.map((item, index) => (
            <ScrollLink 
              key={index} 
              to={item.target} 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-black  font-medium text-sm cursor-pointer no-underline"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
        
        {/* <div className="md:hidden">
          <button className="text-black hover:text-green-500 text-sm font-medium">
            Menu
          </button>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar; 