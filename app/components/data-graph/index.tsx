'use client';

import React from 'react';
import DataGraphDark from './DataGraphDark';
import jsonData from './portfolio_perfomance_may9.json'; // Assuming the JSON file is in the same directory

// Helper function to find the latest date from the JSON data
const getLatestDate = (data: Record<string, any>): string | undefined => {
  const dates = Object.keys(data);
  if (dates.length === 0) {
    return undefined;
  }
  // Sort dates in descending order and take the first one
  return dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];
};

const DataGraphPage = () => {
  const latestDate = getLatestDate(jsonData);

  // Ensure jsonData and latestDate are available before rendering
  if (!jsonData || typeof latestDate === 'undefined') {
    // Optionally, render a loading state or an error message
    return <div>Loading data or data unavailable...</div>;
  }

  return (
    <div>
      {/* Pass the entire jsonData object as the data prop and the determined latestDate */}
      <DataGraphDark data={jsonData} latestDate={latestDate} />
    </div>
  );
};

export default DataGraphPage;
