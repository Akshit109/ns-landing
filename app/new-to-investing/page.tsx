'use client';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PartnerModal from '../components/home/PartnerModal';

const NewToInvestingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    };

    checkDarkMode();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => mediaQuery.removeEventListener('change', checkDarkMode);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classNames('min-h-screen py-12 px-4 sm:px-6 lg:px-8', {
      'bg-gray-50': !isDarkMode,
      'bg-[#080808]': isDarkMode
    })}>
      <div className={classNames('max-w-md mx-auto rounded-lg shadow-md p-8', {
        'bg-white': !isDarkMode,
        'bg-[#1B1C1A]': isDarkMode
      })}>
        <div className="text-center mb-8">
          <h1 className={classNames('text-3xl font-bold mb-4', {
            'text-gray-900': !isDarkMode,
            'text-white': isDarkMode
          })}>
            New to Investing
          </h1>
          <p className={classNames('mb-8', {
            'text-gray-600': !isDarkMode,
            'text-gray-300': isDarkMode
          })}>
            Start your investment journey with us. Get guidance and support for beginners.
          </p>
          
          <button
            onClick={handleOpenModal}
            className="w-full bg-ctaColor text-black py-3 px-6 rounded-md hover:bg-ctaColor/80 hover:text-black focus:outline-none focus:ring-2 focus:ring-ctaColor focus:ring-offset-2 transition-all duration-700 ease-in-out font-medium text-lg"
          >
            Get Investment Guidance
          </button>
          
          <p className={classNames('text-sm mt-4', {
            'text-gray-500': !isDarkMode,
            'text-gray-400': isDarkMode
          })}>
            Click to start your investment journey with personalized guidance
          </p>
        </div>
      </div>
      
      {/* Partner Modal */}
      <PartnerModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        inquiryType="new-investor"
        title="Get Investment Guidance"
        description="Start your investment journey with us. Tell us about your goals and we'll provide personalized guidance."
      />
    </div>
  );
};

export default NewToInvestingPage;
