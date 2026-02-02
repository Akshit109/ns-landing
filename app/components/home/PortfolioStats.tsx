"use client"

import React from "react";
import { motion } from "framer-motion";

const PortfolioStats = () => {
  const portfolioMetrics = [
    {
      name: "Beta",
      value: "0.34",
      description: "Portfolio volatility is ~65% lower than NIFTY → much less sensitive to market swings."
    },
    {
      name: "Jensen's Alpha",
      value: "9%",
      description: "Portfolio delivers strong positive excess returns above expected CAPM returns."
    },
    {
      name: "Sharpe Ratio",
      value: "0.99",
      description: "Portfolio offers good risk-adjusted performance — stronger than the market benchmark."
    },
    {
      name: "Up/Down Ratio",
      value: "1.55",
      description: "Gains on rising days are significantly larger than losses on falling days → positive asymmetry."
    },
    {
      name: "Information Ratio",
      value: "0.44",
      description: "Outperformance relative to NIFTY is modest but more consistent than before."
    }
  ];

  const cardMetrics = [
    { label: "Beta", value: "0.34" },
    { label: "Jensen's Alpha", value: "9%" },
    { label: "Sharpe Ratio", value: "0.99" },
    { label: "Information ratio", value: "0.44" },
    { label: "Up/Down Ratio", value: "1.55" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full text-white py-12 px-4 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Section - Title and Metrics List */}
          <div className="flex-1 lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                Portfolio
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ctaColor italic">
                STATISTICS
              </h3>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {portfolioMetrics.map((metric, index) => (
                <motion.li
                  key={metric.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-1"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-ctaColor font-semibold text-lg">
                      {metric.name}
                    </span>
                    <span className="text-ctaColor font-bold text-lg">
                      ({metric.value}):
                    </span>
                  </div>
                  <p className="text-customLightGray text-base leading-relaxed">
                    {metric.description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Section - Statistics Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 lg:max-w-md w-full"
          >
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-600">
              <div className="space-y-6">
                {cardMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + (0.1 * index) }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-3 border-b border-gray-600 last:border-b-0"
                  >
                    <span className="text-white font-medium text-lg md:text-xl italic">
                      {metric.label}
                    </span>
                    <span className="text-ctaColor font-bold text-xl md:text-2xl">
                      {metric.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioStats;
