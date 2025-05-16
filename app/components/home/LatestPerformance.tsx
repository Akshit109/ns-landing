"use client";

import React from "react";
import DataGraphPage from "../data-graph";

const PieSection = () => {
  return (
    <div id="latest-performance">
      <div className="flex flex-col items-center justify-center text-center px-4 ">
        <div className="grid grid-cols-12 gap-12 md:gap-24 w-full max-w-[1400px]">
          {/* performance screenshot section */}
          <div className="col-span-12">
            <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
              {/* Chart Section */}
              <div className="md:w-1/2 border-b pb-4">
                {/* Chart Placeholder replaced with table */}
                <div className="overflow-x-auto">
                  <table className="min-w-[600px] w-full text-center border-separate border-spacing-0 bg-ctaColor rounded-lg shadow-lg">
                    <caption className="text-customLightGray text-3xl font-normal mb-2 bg-black rounded-lg py-2 caption-top text-center">
                      Why Nifty <span className="text-ctaColor">Shloka</span>?
                    </caption>
                    <thead>
                      <tr className="bg-ctaColor text-black">
                        <th className="border border-black px-6 py-3 text-lg font-bold"></th>
                        <th className="border border-black px-6 py-3 text-lg font-bold">
                          Nifty Shloka
                        </th>
                        <th className="border border-black px-6 py-3 text-lg font-bold">
                          NIFTY 50
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-black text-lg">
                      <tr>
                        <td className="border border-black px-6 py-3 font-medium text-left">
                          Return(TWRR)
                        </td>
                        <td className="border border-black px-6 py-3 font-semibold">
                          31.64%
                        </td>
                        <td className="border border-black px-6 py-3 font-semibold">
                          23.99%
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-black px-6 py-3 font-medium text-left">
                          Risk(Max Drawdown)
                        </td>
                        <td className="border border-black px-6 py-3 font-semibold text-customRed">
                          -7.94%
                        </td>
                        <td className="border border-black px-6 py-3 font-semibold text-customRed">
                          -15.77%
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-black px-6 py-3 font-medium text-left">
                          Current Drawdown
                        </td>
                        <td className="border border-black px-6 py-3 font-semibold text-customRed">
                          -0.92%
                        </td>
                        <td className="border border-black px-6 py-3 font-semibold text-customRed">
                          -8.42%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex flex-col md:flex-row md:justify-between text-xs text-white mt-2 px-2">
                    <span className="text-customLightGray">
                      *Launched in August 2023 (~ 21 months)
                    </span>
                    <span className="text-customLightGray">
                      As of 11-May-25
                    </span>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="text-left md:w-1/2  md:flex md:flex-col md:justify-start  items-start md:ml-32">
                <h2 className="text-4xl text-customLightGray  font-medium mb-12 mt-6">
                  Latest Performance
                </h2>
                <div className="text-left text-customLightGray text-xl md:text-2xl font-extralight leading-tight">
                  <p>
                    Our Objective:
                    <br />
                    Maximize risk adjusted returns
                    <br />
                    Even through market volatility
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Graph screenshot section */}
          <div className="col-span-12">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
              {/* Chart Section */}
              <div className="md:w-2/3 order-2 md:order-2">
                <DataGraphPage />
              </div>

              {/* Description Section */}
              <div className="md:w-1/3 md:flex md:flex-col md:justify-start order-1 md:order-1">
                <h2 className="text-4xl text-customLightGray  font-medium mt-12 mb-6">
                  Portfolio Performance
                </h2>
                <a
                  href="https://support.zerodha.com/category/console/portfolio/console-holdings/articles/performance-curve"
                  className="inline-flex w-fit items-center gap-2 mt-2 px-4 py-2 bg-ctaColor text-customLightGray hover:bg-customLightGray hover:text-ctaColor transition-all duration-700 ease-in-out rounded-lg shadow-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Zerodha's performance methodology
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7"
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
