'use client';

import React, { useState } from 'react';
import DataGraphPage from '../data-graph';
import EmailModal from './EmailModal';

const PieSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id='latest-performance'>
      <div className='flex flex-col items-center justify-center text-center px-4'>
        <div className='grid grid-cols-12 gap-6 md:gap-12 lg:gap-24 w-full max-w-[1400px]'>
          {/* performance screenshot section */}
          <div className='col-span-12 md:h-screen flex items-center justify-center'>
            <div className='flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0 w-full'>
              {/* Chart Section */}
              <div className='md:w-1/2 border-b pb-4'>
                {/* Responsive table with card view for mobile */}
                <div className='md:px-0'>
                  <div className='w-full'>
                    <div className='bg-black rounded-lg py-2 mb-4'>
                      <h3 className='text-customLightGray text-2xl md:text-3xl font-normal text-center mt-6 md:mt-0'>
                        Why Nifty <span className='text-ctaColor'>Shloka</span>?
                      </h3>
                    </div>

                    {/* Desktop table - hidden on mobile */}
                    <div className='hidden md:block overflow-x-auto'>
                      <table className='w-full text-center border-separate border-spacing-0 bg-customDarkGray rounded-2xl shadow-lg min-w-[600px]'>
                        <thead>
                          <tr className='bg-customDarkGray text-black'>
                            <th className='border-l border-t border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 text-sm md:text-base lg:text-lg font-bold rounded-tl-2xl'></th>
                            <th className='border-l border-t border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 text-sm md:text-base lg:text-lg font-bold'>
                              Nifty Shloka
                            </th>
                            <th className='border-l border-t border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 text-sm md:text-base lg:text-lg font-bold'>
                              NIFTY 50
                            </th>
                            <th className='border-l border-t border-r border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 text-sm md:text-base lg:text-lg font-bold rounded-tr-2xl'>
                              Alpha
                            </th>
                          </tr>
                        </thead>
                        <tbody className='text-black text-sm md:text-base lg:text-lg'>
                          <tr>
                            <td className='border-l border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 font-medium text-left'>
                              Return (TWRR Annualised)
                            </td>
                            <td className='border-l border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 font-semibold text-green-600'>
                              13.7%
                            </td>
                            <td className='border-l border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 font-semibold text-green-600'>
                              7.6%
                            </td>
                            <td className='border-l border-r border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 font-semibold text-green-600'>
                              80%
                            </td>
                          </tr>
                          <tr>
                            <td className='border-l border-b border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 font-medium text-left rounded-bl-2xl'>
                              Risk (Max Drawdown)
                            </td>
                            <td className='border-l border-b border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 font-semibold text-customRed'>
                              -11.15%
                            </td>
                            <td className='border-l border-b border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 font-semibold text-customRed'>
                              -15.77%
                            </td>
                            <td className='border-l border-r border-b border-black px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 xl:py-6 font-semibold text-green-600 rounded-br-2xl'>
                              29%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile card view - visible only on small screens */}
                    <div className='md:hidden space-y-4'>
                      {/* Return Row */}
                      <div className='bg-customDarkGray rounded-2xl shadow-lg p-4'>
                        <h4 className='text-black font-bold text-base border-b border-black pb-2 mb-3'>
                          Return (TWRR Annualised)
                        </h4>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1 text-sm'>
                              Nifty Shloka
                            </p>
                            <p className='text-green-600 font-semibold text-lg'>
                              13.7%
                            </p>
                          </div>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1 text-sm'>
                              NIFTY 50
                            </p>
                            <p className='text-green-600 font-semibold text-lg'>
                              7.6%
                            </p>
                          </div>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1 text-sm'>
                              Alpha
                            </p>
                            <p className='text-green-600 font-semibold text-lg'>
                              50%
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Risk Row */}
                      <div className='bg-customDarkGray rounded-2xl shadow-lg p-4'>
                        <h4 className='text-black font-bold text-base border-b border-black pb-2 mb-3'>
                          Risk (Max Drawdown)
                        </h4>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1 text-sm'>
                              Nifty Shloka
                            </p>
                            <p className='text-customRed font-semibold text-lg'>
                              -11.15%
                            </p>
                          </div>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1 text-sm'>
                              NIFTY 50
                            </p>
                            <p className='text-customRed font-semibold text-lg'>
                              -15.77%
                            </p>
                          </div>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1 text-sm'>
                              Alpha
                            </p>
                            <p className='text-green-600 font-semibold text-lg'>
                              29%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col md:flex-row md:justify-between text-xs text-white mt-2 px-2'>
                      <div className='text-customLightGray space-y-1 md:space-y-0 md:flex md:flex-col md:items-start'>
                        <div className='text-left'>*Zerodha verified</div>
                        <div className='text-left'>*Launched in August 2023</div>
                      </div>
                      <span className='text-customLightGray mt-2 md:mt-0'>
                        As of 23-Mar-26
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className='text-left md:w-1/2 md:flex md:flex-col md:justify-start items-start md:ml-8 lg:ml-32'>
                <h2 className='text-3xl md:text-4xl text-customLightGray font-medium mb-6 md:mb-12 mt-6'>
                  Latest Performance
                </h2>
                <div className='text-left text-customLightGray text-lg md:text-2xl font-extralight leading-tight'>
                  <p>
                    <span className="font-normal">Our Objective:</span>
                    <br />
                    Maximize risk adjusted returns
                    <br />
                    Even through market volatility
                  </p>
                </div>
                <button
                  onClick={handleDownloadClick}
                  className='inline-flex w-fit items-center gap-2 mt-4 md:mt-2 px-4 py-2 bg-ctaColor no-underline text-black hover:bg-customLightGray hover:text-ctaColor transition-all duration-700 ease-in-out rounded-full shadow-sm font-medium'
                >
                  Download Deck
                </button>
              </div>
            </div>
          </div>
          {/* Graph screenshot section */}
          <div className='col-span-12 md:h-screen flex items-center justify-center'>
            <div className='flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 w-full'>
              {/* Chart Section */}
              <div className='md:w-2/3 order-2 md:order-2 mt-6 md:mt-0'>
                <DataGraphPage />
              </div>

              {/* Description Section */}
              <div className='md:w-1/3 md:flex md:flex-col md:justify-start order-1 md:order-1 text-left'>
                <h2 className='text-3xl md:text-4xl text-customLightGray font-medium mt-24 md:mt-12  mb-4 md:mb-6'>
                  Portfolio Performance
                </h2>
                <p className='text-customLightGray text-lg md:text-2xl font-extralight leading-tight mb-2'>
                  See Zerodha's performance methodology
                </p>
                <a
                  href='https://support.zerodha.com/category/console/portfolio/console-holdings/articles/performance-curve'
                  className='inline-flex w-fit items-center gap-2 mt-2 px-4 py-2 no-underline bg-ctaColor text-black hover:bg-customLightGray hover:text-ctaColor transition-all duration-700 ease-in-out rounded-full shadow-sm font-medium'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='black'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 19L19 5M19 5H9M19 5V15'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Email Modal */}
      <EmailModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default PieSection;
