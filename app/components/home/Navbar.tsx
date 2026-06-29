"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen);
  };

  const navItems = [
  { name: "Home", target: "pie-section" },
  { name: "Reviews", target: "testimonials" },
  { name: "Performance", target: "latest-performance" },
  { name: "Why us", target: "why-ns" },
  { name: "Partner with us", target: "partner-with-ns" }
];

  return (
    <div className="w-full flex justify-center absolute top-4 z-20 px-4">
      <nav className={`flex items-center justify-between px-4 sm:px-8 py-2 bg-white rounded-full shadow-md max-w-4xl w-full transition-all duration-500 ease-in-out`}>
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={32} 
            height={32} 
            className="mr-2 sm:mr-4 sm:w-10 sm:h-10 md:w-[40px] md:h-[36px] object-center"
          />
        </div>
        
        {/* Desktop menu - now visible within navbar when toggled */}
        <div className={`hidden md:flex items-center gap-8 ml-4 ${isDesktopMenuOpen ? 'opacity-100 max-w-[500px]' : 'opacity-0 max-w-0 overflow-hidden'} transition-all duration-500 ease-in-out`}>
          {navItems.map((item, index) => (
            <ScrollLink 
              key={index} 
              to={item.target} 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-black font-medium text-sm cursor-pointer no-underline hover:text-gray-600 transition-colors duration-200 ease-in-out whitespace-nowrap"
              onClick={() => setIsDesktopMenuOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
        
        {/* Hamburger menu button for all screen sizes */}
        <button 
          className="text-black p-1"
          onClick={() => {
            // On mobile (when md:hidden applies), toggle mobile menu
            // On desktop, toggle desktop menu
            if (window.innerWidth < 768) {
              toggleMenu();
            } else {
              toggleDesktopMenu();
            }
          }}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {(isMenuOpen || isDesktopMenuOpen) ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </nav>
      
      {/* Mobile menu - Side drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden">
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end mb-6">
              <button 
                onClick={toggleMenu}
                className="text-black p-1"
                aria-label="Close menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <ScrollLink 
                  key={index} 
                  to={item.target} 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black font-medium text-base cursor-pointer no-underline"
                  onClick={toggleMenu}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 