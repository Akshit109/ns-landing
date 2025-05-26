'use client';

import React from 'react';
import DataGraphPage from '../data-graph';

const PieSection = () => {
  return (
    <div id='latest-performance'>
      <div className='flex flex-col items-center justify-center text-center px-4'>
        <div className='grid grid-cols-12 gap-6 md:gap-12 lg:gap-24 w-full max-w-[1400px]'>
          {/* performance screenshot section */}
          <div className='col-span-12 h-screen flex items-center justify-center'>
            <div className='flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0 w-full'>
              {/* Chart Section */}
              <div className='md:w-1/2 border-b pb-4'>
                {/* Responsive table with card view for mobile */}
                <div className='md:px-0'>
                  <div className='w-full'>
                    <div className='bg-black rounded-lg py-2 mb-4'>
                      <h3 className='text-customLightGray text-2xl md:text-3xl font-normal text-center'>
                        Why Nifty <span className='text-ctaColor'>Shloka</span>?
                      </h3>
                    </div>

                    {/* Desktop table - hidden on mobile */}
                    <div className='hidden md:block'>
                      <table className='w-full text-center border-separate border-spacing-0 bg-ctaColor rounded-lg shadow-lg'>
                        <thead>
                          <tr className='bg-ctaColor text-black'>
                            <th className='border border-black px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-bold'></th>
                            <th className='border border-black px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-bold'>
                              Nifty Shloka
                            </th>
                            <th className='border border-black px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-bold'>
                              NIFTY 50
                            </th>
                          </tr>
                        </thead>
                        <tbody className='text-black text-base md:text-lg'>
                          <tr>
                            <td className='border border-black px-4 md:px-6 py-2 md:py-3 font-medium text-left'>
                              Return(TWRR)
                            </td>
                            <td className='border border-black px-4 md:px-6 py-2 md:py-3 font-semibold'>
                              31.64%
                            </td>
                            <td className='border border-black px-4 md:px-6 py-2 md:py-3 font-semibold'>
                              23.99%
                            </td>
                          </tr>
                          <tr>
                            <td className='border border-black px-4 md:px-6 py-2 md:py-3 font-medium text-left'>
                              Risk(Max Drawdown)
                            </td>
                            <td className='border border-black px-4 md:px-6 py-2 md:py-3 font-semibold text-customRed'>
                              -7.94%
                            </td>
                            <td className='border border-black px-4 md:px-6 py-2 md:py-3 font-semibold text-customRed'>
                              -15.77%
                            </td>
                          </tr>
                          <tr>
                            <td className='border border-black px-4 md:px-6 py-2 md:py-3 font-medium text-left'>
                              Current Drawdown
                            </td>
                            <td className='border border-black px-4 md:px-6 py-2 md:py-3 font-semibold text-customRed'>
                              -0.92%
                            </td>
                            <td className='border border-black px-4 md:px-6 py-2 md:py-3 font-semibold text-customRed'>
                              -8.42%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile card view - visible only on small screens */}
                    <div className='md:hidden space-y-4'>
                      {/* Return Row */}
                      <div className='bg-ctaColor rounded-lg shadow-lg p-4'>
                        <h4 className='text-black font-bold text-lg border-b border-black pb-2 mb-3'>
                          Return(TWRR)
                        </h4>
                        <div className='grid grid-cols-2 gap-4'>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1'>
                              Nifty Shloka
                            </p>
                            <p className='text-black font-semibold text-xl'>
                              31.64%
                            </p>
                          </div>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1'>
                              NIFTY 50
                            </p>
                            <p className='text-black font-semibold text-xl'>
                              23.99%
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Risk Row */}
                      <div className='bg-ctaColor rounded-lg shadow-lg p-4'>
                        <h4 className='text-black font-bold text-lg border-b border-black pb-2 mb-3'>
                          Risk(Max Drawdown)
                        </h4>
                        <div className='grid grid-cols-2 gap-4'>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1'>
                              Nifty Shloka
                            </p>
                            <p className='text-customRed font-semibold text-xl'>
                              -7.94%
                            </p>
                          </div>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1'>
                              NIFTY 50
                            </p>
                            <p className='text-customRed font-semibold text-xl'>
                              -15.77%
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Current Drawdown Row */}
                      <div className='bg-ctaColor rounded-lg shadow-lg p-4'>
                        <h4 className='text-black font-bold text-lg border-b border-black pb-2 mb-3'>
                          Current Drawdown
                        </h4>
                        <div className='grid grid-cols-2 gap-4'>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1'>
                              Nifty Shloka
                            </p>
                            <p className='text-customRed font-semibold text-xl'>
                              -0.92%
                            </p>
                          </div>
                          <div className='text-center'>
                            <p className='text-black font-medium mb-1'>
                              NIFTY 50
                            </p>
                            <p className='text-customRed font-semibold text-xl'>
                              -8.42%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col md:flex-row md:justify-between text-xs text-white mt-2 px-2'>
                      <span className='text-customLightGray'>
                        *Launched in August 2023 (~ 21 months)
                      </span>
                      <span className='text-customLightGray'>
                        As of 11-May-25
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
                <a
                  href='www.google.com'
                  className='inline-flex w-fit items-center gap-2 mt-4 md:mt-2 px-4 py-2 bg-ctaColor no-underline text-black hover:bg-customLightGray hover:text-ctaColor transition-all duration-700 ease-in-out rounded-full shadow-sm font-medium'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Download Deck
                </a>
              </div>
            </div>
          </div>
          {/* Graph screenshot section */}
          <div className='col-span-12 h-screen flex items-center justify-center'>
            <div className='flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 w-full'>
              {/* Chart Section */}
              <div className='md:w-2/3 order-2 md:order-2 mt-6 md:mt-0'>
                <DataGraphPage />
              </div>

              {/* Description Section */}
              <div className='md:w-1/3 md:flex md:flex-col md:justify-start order-1 md:order-1 text-left'>
                <h2 className='text-3xl md:text-4xl text-customLightGray font-medium mt-12  mb-4 md:mb-6'>
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
    </div>
  );
};

export default PieSection;
