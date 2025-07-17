'use client';
import React, { useState } from 'react';
import PartnerModal from '../components/home/PartnerModal';

const PartnerPage = () => {
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
            Partner With Us
          </h1>
          <p className="text-gray-600 mb-8">
            Join us as a partner and explore collaboration opportunities
          </p>
          
          <button
            onClick={handleOpenModal}
            className="w-full bg-ctaColor text-black py-3 px-6 rounded-md hover:bg-customLightGray hover:text-ctaColor focus:outline-none focus:ring-2 focus:ring-ctaColor focus:ring-offset-2 transition-all duration-700 ease-in-out font-medium text-lg"
          >
            Start Partnership Inquiry
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            Click to open our partnership inquiry form
          </p>
        </div>
      </div>
      
      {/* Partner Modal */}
      <PartnerModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default PartnerPage;
