'use client';
import React, { useState } from 'react';
import PartnerModal from '../components/home/PartnerModal';

const ProfessionalInvestorsPage = () => {
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
            Professional Investors
          </h1>
          <p className="text-gray-600 mb-8">
            Get in touch with us to discuss investment opportunities
          </p>
          
          <button
            onClick={handleOpenModal}
            className="w-full bg-ctaColor text-black py-3 px-6 rounded-md hover:bg-customLightGray hover:text-ctaColor focus:outline-none focus:ring-2 focus:ring-ctaColor focus:ring-offset-2 transition-all duration-700 ease-in-out font-medium text-lg"
          >
            Contact Professional Team
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            Connect with our professional investment team
          </p>
        </div>
      </div>
      
      {/* Partner Modal */}
      <PartnerModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        inquiryType="professional"
        title="Professional Investment Services"
        description="Connect with our professional investment team to discuss advanced strategies and opportunities."
      />
    </div>
  );
};

export default ProfessionalInvestorsPage; 