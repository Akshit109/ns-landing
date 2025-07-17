'use client';
import React, { useState } from 'react';
import PartnerModal from '../components/home/PartnerModal';

const NewToInvestingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            New to Investing
          </h1>
          <p className="text-gray-600 mb-8">
            Start your investment journey with us. Get guidance and support for beginners.
          </p>
          
          <button
            onClick={handleOpenModal}
            className="w-full bg-ctaColor text-black py-3 px-6 rounded-md hover:bg-customLightGray hover:text-ctaColor focus:outline-none focus:ring-2 focus:ring-ctaColor focus:ring-offset-2 transition-all duration-700 ease-in-out font-medium text-lg"
          >
            Get Investment Guidance
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
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
