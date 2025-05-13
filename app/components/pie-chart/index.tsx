"use client"

import React from 'react';
import { summary, AssetData } from './summaryData';
import ThreeDimensionalAssetClassDarkMode from './ThreeDimensionalAssetClassDarkMode';

interface PieChartProps {
  data?: AssetData[];
}

const PieChart: React.FC<PieChartProps> = ({ data = summary }) => {
  

  return (
    <div className="bg-cardBgColor rounded-xl p-6 shadow-lg">
      
      {/* Three.js Pie Chart */}
      <ThreeDimensionalAssetClassDarkMode summary={data} />
      
      
    </div>
  );
};

export default PieChart;
