'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated';
import { ButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import { filterData } from '../../helper';

const isDateOlderThanSevenDays = (dateString: string | null): boolean => {
  if (!dateString) return true;
  const lastUpdatedDate = new Date(dateString);
  const currentDate = new Date();
  const differenceInDays =
    (currentDate.getTime() - lastUpdatedDate.getTime()) / (1000 * 3600 * 24);
  return differenceInDays > 7;
};

const LastUpdatedStatusDisplay: React.FC<{
  lastUpdatedDate: string | null;
}> = ({ lastUpdatedDate }) => {
  const isOld = isDateOlderThanSevenDays(lastUpdatedDate);

  return (
    <span className={isOld ? 'text-red-600' : ''}>
      {lastUpdatedDate ? `Last Updated: ${lastUpdatedDate}` : 'No date information available'}
    </span>
  );
};

interface DataGraphProps {
  portfolioData?: Record<string, DataEntry>;
  niftyData?: Record<string, number>;
  latestDate?: string;
}

interface DataEntry {
  Date?: string;
  equity?: {
    total_value: number;
    units: number;
  };
  mf?: {
    total_value: number;
    units: number;
  };
  [key: string]: any;
}

interface ProcessedDataEntry {
  date: number;
  nifty50: number;
  nsBundle: number;
}



interface PerformanceValues {
  nsBundleValue: number;
  nifty50Value: number;
}

const DataGraph: React.FC<DataGraphProps> = ({
  portfolioData,
  niftyData,
  latestDate,
}) => {
  const chartRef = useRef<am5.Root | null>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [range, setRange] = useState('Lifetime');
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [filteredData, setFilteredData] = useState<Record<
    string,
    DataEntry
  > | null>(null);
  const [filteredNiftyData, setFilteredNiftyData] = useState<Record<
    string,
    number
  > | null>(null);
  const [performanceValues, setPerformanceValues] = useState<PerformanceValues>(
    {
      nsBundleValue: 100,
      nifty50Value: 100,
    }
  );
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isChartReady, setIsChartReady] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);
  


  // New state to store processed performance data
  const [processedPerformanceData, setProcessedPerformanceData] = useState<ProcessedDataEntry[]>([]);

  // Helper function to get responsive height
  const getResponsiveHeight = (width: number): string => {
    if (width < 640) return '400px'; // Reduced height for mobile
    if (width < 1024) return '550px';
    return '650px';
  };

  // This effect runs once on mount to delay the chart readiness signal
  useEffect(() => {
    // Set initial window width and add resize listener
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    updateWindowWidth();

    // Add resize listener
    window.addEventListener('resize', updateWindowWidth);

    // Delay chart initialization to ensure DOM is fully ready
    const timer = setTimeout(() => {
      setIsChartReady(true);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []); // Empty dependency array - runs only once on mount

  useEffect(() => {
    if (portfolioData && latestDate) {
      setEndDate(new Date(latestDate));
      setLastUpdated(new Date(latestDate).toISOString().split('T')[0]);
    }
  }, [portfolioData, latestDate]);

  useEffect(() => {
    if (!portfolioData || !niftyData || !endDate) {
      return;
    }

    try {
      // Convert portfolio data to array format with Date property
      const portfolioArray = Object.entries(portfolioData).map(
        ([date, values]) => ({
          Date: date,
          ...values,
        })
      );

      // Convert nifty data to array format with Date property
      const niftyArray = Object.entries(niftyData).map(([date, value]) => ({
        Date: date,
        value: value,
      }));

      // Filter all datasets based on selected range
      const filteredPortfolioEntries = filterData(
        portfolioArray,
        range,
        'Date',
        endDate || undefined
      );

      const filteredNiftyEntries = filterData(
        niftyArray,
        range,
        'Date',
        endDate || undefined
      );

      // Convert filtered entries back to object format
      const filteredPortfolioObj = filteredPortfolioEntries.reduce<
        Record<string, DataEntry>
      >((acc, curr) => {
        const { Date: date, ...values } = curr;
        if (date) {
          acc[date] = values as DataEntry;
        }
        return acc;
      }, {});

      const filteredNiftyObj = filteredNiftyEntries.reduce<
        Record<string, number>
      >((acc, curr) => {
        const date = (curr as any).Date;
        const value = (curr as any).value;
        if (date) {
          acc[date] = value;
        }
        return acc;
      }, {});

      setFilteredData(filteredPortfolioObj);
      setFilteredNiftyData(filteredNiftyObj);
    } catch (error) {
      console.error('Error filtering data:', error);
    }
  }, [portfolioData, niftyData, range, endDate]);

  // Shared function to calculate performance data
  const calculatePerformanceData = (): ProcessedDataEntry[] => {
    if (!filteredData || !filteredNiftyData) {
      return [];
    }

    try {
      /* ---------- 1. Build common date set ---------- */
      let commonDates = Object.keys(filteredData)
        .filter((d) => filteredNiftyData[d])
        .filter((date) => new Date(date) >= new Date('2023-08-16'))
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

      if (commonDates.length === 0) return [];

      /* ---------- 2. Base values on earliest common date ---------- */
      const baseDate = commonDates[0];
      const baseNifty50 = filteredNiftyData[baseDate] ?? 0;

      const baseBundleDenom =
        (filteredData[baseDate]?.equity?.units || 0) +
        (filteredData[baseDate]?.mf?.units || 0);
      if (baseNifty50 === 0 || baseBundleDenom === 0) return []; // avoid bad maths

      const baseBundleNavT =
        ((filteredData[baseDate]?.equity?.total_value || 0) +
          (filteredData[baseDate]?.mf?.total_value || 0)) /
        baseBundleDenom;

      /* ---------- 3. Build normalised series ---------- */
      const processedData: ProcessedDataEntry[] = commonDates.map((d) => {
        const p = filteredData[d];
        const n = filteredNiftyData[d];

        const denom = (p.equity?.units || 0) + (p.mf?.units || 0);
        const bundleNavT =
          denom === 0
            ? 0
            : ((p.equity?.total_value || 0) + (p.mf?.total_value || 0)) / denom;
        const normalisedBundle =
          bundleNavT && baseBundleNavT ? bundleNavT / baseBundleNavT : 0;
        const normalisedNifty =
          n && baseNifty50 ? n / baseNifty50 : 0;

        return {
          date: new Date(d).getTime(),
          nsBundle: normalisedBundle * 100,
          nifty50: normalisedNifty * 100,
        };
      });

      return processedData;
    } catch (error) {
      console.error('Error calculating performance data:', error);
      return [];
    }
  };

  // Update processed data when filtered data changes
  useEffect(() => {
    const data = calculatePerformanceData();
    setProcessedPerformanceData(data);
  }, [filteredData, filteredNiftyData]);

  const renderPerformanceChart = () => {
    if (!filteredData || !filteredNiftyData || processedPerformanceData.length === 0 || !chartContainerRef.current) {
      return;
    }

    try {
      // Calculate performance values for ₹100 invested
      const latest = processedPerformanceData[processedPerformanceData.length - 1];
      if (latest) {
        setPerformanceValues({
          nsBundleValue: Math.round(latest.nsBundle),
          nifty50Value: Math.round(latest.nifty50),
        });
      }

      /* ---------- Chart rendering ---------- */
      // Create root
      const root = am5.Root.new(chartContainerRef.current);
      chartRef.current = root;

      // Set themes
      root.setThemes([am5themesAnimated.new(root)]);

      // Define colors based on theme
      const textColor = isDarkMode ? am5.color(0xffffff) : am5.color(0x000000);
      const gridColor = isDarkMode ? am5.color(0x444444) : am5.color(0xdddddd);
      const niftyColor = isDarkMode ? am5.color(0x64b5f6) : am5.color(0x1e88e5);
      const nsBundleColor = isDarkMode
        ? am5.color(0x81c784)
        : am5.color(0x4caf50);

      // Create chart container
      const container = root.container.children.push(
        am5.Container.new(root, {
          width: am5.percent(100),
          height: am5.percent(100),
          layout: root.verticalLayout,
        })
      );

      // Create chart
      const chart = container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: 'panX',
          wheelY: 'zoomX',
          pinchZoomX: true,
          maxTooltipDistance: 0,
          width: am5.percent(100),
          height: am5.percent(90),
        })
      );

      // Add cursor
      const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
      cursor.lineY.set('visible', false);

      // Create axes with proper styling
      const dateAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: 'day', count: 1 },
          renderer: am5xy.AxisRendererX.new(root, {
            stroke: gridColor,
          }),
          start: 0,
          end: 1,
          maxDeviation: 0.1,
        })
      );

      // Style date axis
      dateAxis.get('renderer').grid.template.setAll({
        stroke: gridColor,
        strokeOpacity: 0.3,
      });
      dateAxis.get('renderer').labels.template.setAll({
        fill: textColor,
      });

      const valueAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {
            stroke: gridColor,
          }),
        })
      );

      // Style value axis
      valueAxis.get('renderer').grid.template.setAll({
        stroke: gridColor,
        strokeOpacity: 0.3,
      });
      valueAxis.get('renderer').labels.template.setAll({
        fill: textColor,
      });

      // Create shared tooltip with white text for readability
      const tooltip = am5.Tooltip.new(root, {
        getFillFromSprite: false,
        autoTextColor: false,
        labelText: `[bold fontSize:15px #ffffff]📅 {valueX.formatDate('MMM dd, yyyy')}[/]

[fontSize:14px #ffffff]●[/] [bold fontSize:14px #ffffff]Nifty50:[/] [fontSize:14px #ffffff bold]{nifty50.formatNumber('#,###.##')}[/]
[fontSize:14px #ffffff]●[/] [bold fontSize:14px #ffffff]NS:[/] [fontSize:14px #ffffff bold]{nsBundle.formatNumber('#,###.##')}[/]`,
      });

      // Apply basic styling
      tooltip.set('paddingTop', 15);
      tooltip.set('paddingBottom', 15);
      tooltip.set('paddingLeft', 20);
      tooltip.set('paddingRight', 20);

      const niftySeries = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: 'Nifty50',
          xAxis: dateAxis,
          yAxis: valueAxis,
          valueYField: 'nifty50',
          valueXField: 'date',
          stroke: niftyColor,
          fill: niftyColor,
          tooltip,
        })
      );

      // Create series for NS Bundle
      const nsBundleSeries = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: 'NS',
          xAxis: dateAxis,
          yAxis: valueAxis,
          valueYField: 'nsBundle',
          valueXField: 'date',
          stroke: nsBundleColor,
          fill: nsBundleColor,
          tooltip,
        })
      );

      niftySeries.data.setAll(processedPerformanceData);
      nsBundleSeries.data.setAll(processedPerformanceData);

      // Create legend at bottom
      const legend = container.children.push(
        am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          layout: root.horizontalLayout,
          marginTop: 15,
          useDefaultMarker: true,
          clickTarget: "marker", // Only marker is clickable, not text
        })
      );

      // Customize legend markers
      legend.markers.template.setAll({
        width: 15,
        height: 15,
      });

      // Customize legend labels to always show with white text
      legend.labels.template.setAll({
        fill: am5.color(0xffffff), // White text by default
        opacity: 1, // Always visible
      });

      // Disable default label hiding behavior and handle color changes
      legend.labels.template.adapters.add("opacity", function(opacity, target) {
        const series = target?.dataItem?.dataContext;
        if (series && (series as any).isHidden && (series as any).isHidden()) {
          // Change fill color instead of opacity
          target?.set("fill", am5.color(0x888888)); // Gray when hidden
          return 1; // Keep fully visible
        } else {
          target?.set("fill", am5.color(0xffffff)); // White when visible
          return 1; // Keep fully visible
        }
      });

      legend.data.setAll(chart.series.values);

      // Animation and zoom
      chart.appear(1000, 100);
      dateAxis.zoom(0, 1);
    } catch (error) {
      console.error('Error in DataGraph:', error);
    }
  };



  useEffect(() => {
    if (processedPerformanceData.length === 0 || !isChartReady) {
      return;
    }

    // Cleanup previous chart
    if (chartRef.current) {
      chartRef.current.dispose();
      chartRef.current = null;
    }

    // Render performance chart
    renderPerformanceChart();
  }, [processedPerformanceData, isChartReady, isDarkMode, windowWidth]);

  // Cleanup effect for chart disposal
  useEffect(
    () => () => {
      if (chartRef.current) {
        chartRef.current.dispose();
        chartRef.current = null;
      }
    },
    []
  );

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(event.target.value);
  };

  const renderDataStatus = () => {
    if (!filteredData) {
      return <span className="text-red-600">No data available</span>;
    }

    if (!lastUpdated) {
      return (
        <span className="text-yellow-600">No date information available</span>
      );
    }

    return <LastUpdatedStatusDisplay lastUpdatedDate={lastUpdated} />;
  };

  return (
    <div style={{ margin: '10px' }}>
      <div className="flex items-center mb-6 relative">
        
      </div>

      <div className="mb-4">
        <ButtonGroup className="mr-4">
          {['Lifetime', '3M', '6M', '1Y'].map((value) => (
            <ToggleButton
              key={value}
              id={`range-pp-${value}`}
              type="radio"
              variant="outline-primary"
              value={value}
              checked={range === value}
              onChange={handleRangeChange}
            >
              {value}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      
      <div 
        ref={chartContainerRef}
        style={{ width: '100%', height: getResponsiveHeight(windowWidth) }} 
      />
             
       <div className="text-right mt-2">{renderDataStatus()}</div>
    </div>
  );
};

export default DataGraph;
