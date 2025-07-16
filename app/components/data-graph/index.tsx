'use client';

import React from 'react';
import DataGraphDark from './DataGraphDark';
import portfolioData from './portfolio_perfomance.json'; // Portfolio performance data
import niftyData from './nifty50.json'; // Nifty50 data

// Helper function to find the latest date from the portfolio data
const getLatestDate = (data: Record<string, any>): string | undefined => {
  const dates = Object.keys(data);
  if (dates.length === 0) {
    return undefined;
  }
  // Sort dates in descending order and take the first one
  return dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];
};

const DataGraphPage = () => {
  const latestDate = getLatestDate(portfolioData);

  // Ensure both data sources and latestDate are available before rendering
  if (!portfolioData || !niftyData || typeof latestDate === 'undefined') {
    // Optionally, render a loading state or an error message
    return <div>Loading data or data unavailable...</div>;
  }

  return (
    <div>
      {/* Pass both data sources separately to DataGraphDark */}
      <DataGraphDark 
        portfolioData={portfolioData} 
        niftyData={niftyData} 
        latestDate={latestDate} 
      />
    </div>
  );
};

export default DataGraphPage;
