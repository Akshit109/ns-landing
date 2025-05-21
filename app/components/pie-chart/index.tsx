"use client"

import React from 'react';
import { summary, AssetData } from './summaryData';
import ThreeDimensionalAssetClassDarkMode from './ThreeDimensionalAssetClassDarkMode';

interface PieChartProps {
  data?: AssetData[];
}

const PieChart: React.FC<PieChartProps> = ({ data = summary }) => {
  return (
    <div className="w-full max-w-full overflow-x-auto md:overflow-visible -mx-4 md:mx-0 px-4 md:px-0">
      {/* Three.js Pie Chart */}
      <ThreeDimensionalAssetClassDarkMode summary={data} />
    </div>
  );
};

export default PieChart;
