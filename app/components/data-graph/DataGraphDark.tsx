'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { filterData } from '../../helper';

// Helper function moved outside component scope
const isDateOlderThanSevenDays = (dateString: string | null): boolean => {
  if (!dateString) return false; // Handle null/undefined case
  const lastUpdatedDate = new Date(dateString);
  const currentDate = new Date();
  const differenceInDays =
    (currentDate.getTime() - lastUpdatedDate.getTime()) / (1000 * 3600 * 24);
  return differenceInDays > 7;
};

// Helper component moved outside the main component
const LastUpdatedStatusDisplay: React.FC<{
  lastUpdatedDate: string | null;
}> = ({ lastUpdatedDate }) => {
  if (!lastUpdatedDate) {
    return (
      <span className='text-yellow-600 text-xs sm:text-sm'>
        No date information available
      </span>
    );
  }

  const isOld = isDateOlderThanSevenDays(lastUpdatedDate);
  return (
    <span className={`dark:text-gray-300 text-xs sm:text-sm`}>
      Last Updated: {lastUpdatedDate}
    </span>
  );
};

interface DataGraphProps {
  data?: Record<string, DataEntry>;
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
  nifty50?: {
    nav: number;
  };
  [key: string]: any;
}

interface ProcessedDataEntry {
  date: number;
  nifty50: number;
  nsBundle: number;
}

const DataGraph: React.FC<DataGraphProps> = ({ data, latestDate }) => {
  const chartRef = useRef<am5.Root | null>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null); // Ref for the chart container
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [range, setRange] = useState('Lifetime');
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filteredData, setFilteredData] = useState<Record<
    string,
    DataEntry
  > | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isChartReady, setIsChartReady] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024); // Default to desktop size

  // Helper function to get responsive height
  const getResponsiveHeight = (width: number): string => {
    if (width < 640) return '450px';
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
    if (data && latestDate) {
      setEndDate(new Date(latestDate));
      setLastUpdated(new Date(latestDate).toISOString().split('T')[0]);
    }
  }, [data, latestDate]);

  useEffect(() => {
    if (!data || !endDate) {
      return;
    }

    try {
      // Convert data to array format with Date property
      const dataArray = Object.entries(data).map(([date, values]) => ({
        Date: date,
        ...values,
      }));

      // Filter data based on selected range
      const filteredEntries = filterData(dataArray, range, 'Date', endDate);

      // Convert filtered entries back to object format
      const filteredDataObj = filteredEntries.reduce<Record<string, DataEntry>>(
        (acc, curr) => {
          const { Date: date, ...values } = curr;
          if (date) {
            acc[date] = values as DataEntry;
          }
          return acc;
        },
        {}
      );

      setFilteredData(filteredDataObj);
    } catch (error) {
      console.error('Error filtering data:', error);
    }
  }, [data, range, endDate]);

  useEffect(() => {
    // Only proceed if filterData is available, container exists, AND the chart is ready to be created
    if (!filteredData || !chartContainerRef.current || !isChartReady) {
      return;
    }

    // Clean up any existing chart before creating a new one
    if (chartRef.current) {
      chartRef.current.dispose();
      chartRef.current = null;
    }

    try {
      // Process data for chart
      const processedData: ProcessedDataEntry[] = Object.entries(filteredData)
        .filter(([date]) => new Date(date) >= new Date('2023-08-16'))
        .map(([date, values]) => {
          const nsBundleNavT =
            ((values?.equity?.total_value || 0) +
              (values?.mf?.total_value || 0)) /
            ((values?.equity?.units || 0) + (values?.mf?.units || 0));
          const nsBundleNav = Number.isFinite(nsBundleNavT)
            ? nsBundleNavT / 1000
            : 0;
          const nifty50Nav = values?.nifty50?.nav || 0;
          const baseNiftyValue = 1235.7161;
          // Simplified normalization check as baseNiftyValue is a non-zero constant
          const normalizedNifty = nifty50Nav / baseNiftyValue;
          return {
            date: new Date(date).getTime(),
            nifty50: Number.isNaN(normalizedNifty) ? 0 : normalizedNifty,
            nsBundle: Number.isNaN(nsBundleNav) ? 0 : nsBundleNav,
          };
        })
        .sort((a, b) => a.date - b.date);

      // Create root using the container ref
      const root = am5.Root.new(chartContainerRef.current);
      chartRef.current = root;

      // Define colors based on theme
      const textColor = isDarkMode ? am5.color(0xffffff) : am5.color(0x000000);
      const gridColor = isDarkMode ? am5.color(0x444444) : am5.color(0xdddddd);
      const niftyColor = isDarkMode ? am5.color(0x64b5f6) : am5.color(0x1e88e5);
      const nsBundleColor = isDarkMode
        ? am5.color(0x81c784)
        : am5.color(0x4caf50);
      const tooltipBackgroundColor = isDarkMode
        ? am5.color(0x333333)
        : am5.color(0xffffff);
      const tooltipTextColor = isDarkMode
        ? am5.color(0xffffff)
        : am5.color(0x000000);

      // Set themes
      root.setThemes([am5themesAnimated.new(root)]);

      // Create chart container
      const container = root.container.children.push(
        am5.Container.new(root, {
          width: am5.percent(100),
          height: am5.percent(100),
          layout: root.verticalLayout,
        })
      );

      // Apply dark mode styles if enabled
      if (isDarkMode) {
        // Set container background to black for dark mode
        container.set(
          'background',
          am5.Rectangle.new(root, {
            fill: am5.color(0x000000),
            fillOpacity: 1,
          })
        );
      } else {
        // Optional: Explicitly set light mode background
        container.set(
          'background',
          am5.Rectangle.new(root, {
            fill: am5.color(0xffffff),
            fillOpacity: 1,
          })
        );
      }

      // Create chart
      const chart = container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: 'panX',
          wheelY: 'zoomX',
          pinchZoomX: true,
          maxTooltipDistance: 0,
          paddingLeft: 0, // Ensure no extra padding
          paddingRight: 0, // Ensure no extra padding
          width: am5.percent(100),
          height: am5.percent(100),
        })
      );

      // Explicitly set the chart and container to take maximum space
      chart.root.dom.style.width = '100%';
      chart.root.dom.style.height = '100%';

      // Set container to occupy full space
      container.setAll({
        width: am5.p100,
        height: am5.p100,
      });

      // Add cursor
      const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
      cursor.lineY.set('visible', false);

      // Create axes
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

      valueAxis.get('renderer').grid.template.setAll({
        stroke: gridColor,
        strokeOpacity: 0.3,
      });

      valueAxis.get('renderer').labels.template.setAll({
        fill: textColor,
      });

      // Common tooltip settings
      const tooltipSettings = {
        getFillFromSprite: false,
        getStrokeFromSprite: false,
        autoTextColor: false,
        background: {
          fill: tooltipBackgroundColor,
          fillOpacity: 0.9,
        },
        label: {
          fill: tooltipTextColor,
        },
      };

      const niftySeries = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: 'Nifty50',
          xAxis: dateAxis,
          yAxis: valueAxis,
          valueYField: 'nifty50',
          valueXField: 'date',
          stroke: niftyColor,
          fill: niftyColor,
          tooltip: am5.Tooltip.new(root, {
            getFillFromSprite: false,
            getStrokeFromSprite: false,
            autoTextColor: false,
            labelText: `[bold]{name}[/]
Date: [bold]{valueX.formatDate('yyyy-MM-dd')}[/]
Value: [bold]{valueY.formatNumber('#,###.##')}[/]`,
          }),
        })
      );

      niftySeries.get('tooltip')?.get('background')?.setAll({
        fill: tooltipBackgroundColor,
        fillOpacity: 0.9,
      });
      niftySeries.get('tooltip')?.label.set('fill', tooltipTextColor);

      // Create series for NS Bundle
      const nsBundleSeries = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: 'NS Bundle',
          xAxis: dateAxis,
          yAxis: valueAxis,
          valueYField: 'nsBundle',
          valueXField: 'date',
          stroke: nsBundleColor,
          fill: nsBundleColor,
          tooltip: am5.Tooltip.new(root, {
            getFillFromSprite: false,
            getStrokeFromSprite: false,
            autoTextColor: false,
            labelText: `[bold]{name}[/]
Date: [bold]{valueX.formatDate('yyyy-MM-dd')}[/]
Value: [bold]{valueY.formatNumber('#,###.##')}[/]`,
          }),
        })
      );

      nsBundleSeries.get('tooltip')?.get('background')?.setAll({
        fill: tooltipBackgroundColor,
        fillOpacity: 0.9,
      });
      nsBundleSeries.get('tooltip')?.label.set('fill', tooltipTextColor);

      niftySeries.data.setAll(processedData);
      nsBundleSeries.data.setAll(processedData);

      // Create legend
      const legend = container.children.push(
        am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          layout: root.horizontalLayout,
          marginTop: 15,
          useDefaultMarker: true,
        })
      );

      // Style legend text
      legend.labels.template.setAll({
        fill: textColor,
        fontSize: windowWidth < 640 ? 10 : 12, // Smaller font on mobile
      });

      // Customize legend markers
      legend.markers.template.setAll({
        width: windowWidth < 640 ? 10 : 15,
        height: windowWidth < 640 ? 10 : 15,
      });

      legend.data.setAll(chart.series.values);

      // Common tooltip content - simplified for mobile
      const getTooltipText = (series: string) => {
        return windowWidth < 640
          ? `[bold]{name}[/]: [bold]{valueY.formatNumber('#,###.##')}[/]`
          : `[bold]{name}[/]
Date: [bold]{valueX.formatDate('yyyy-MM-dd')}[/]
Value: [bold]{valueY.formatNumber('#,###.##')}[/]`;
      };

      // Update tooltip settings for both series
      niftySeries.get('tooltip')?.set('labelText', getTooltipText('Nifty50'));
      nsBundleSeries
        .get('tooltip')
        ?.set('labelText', getTooltipText('NS Bundle'));

      // Make date axis labels responsive
      dateAxis.get('renderer').labels.template.setAll({
        fill: textColor,
        fontSize: windowWidth < 640 ? 10 : 12,
        rotation: windowWidth < 640 ? -45 : 0,
        centerY: windowWidth < 640 ? am5.p50 : am5.p0,
        centerX: windowWidth < 640 ? am5.p100 : am5.p50,
      });

      // Make value axis labels responsive
      valueAxis.get('renderer').labels.template.setAll({
        fill: textColor,
        fontSize: windowWidth < 640 ? 10 : 12,
      });

      // Animation and zoom
      chart.appear(1000, 100);
      dateAxis.zoom(0, 1);

      // Force immediate height setting
      if (chartContainerRef.current) {
        const responsiveHeight = getResponsiveHeight(windowWidth);
        chartContainerRef.current.style.height = responsiveHeight;
        chartContainerRef.current.style.minHeight = responsiveHeight;
      }

      // Multiple resize attempts with different delays
      const timeoutIds: number[] = [];

      // Immediate resize
      root.resize();

      // After a short delay (for the initial layout to settle)
      timeoutIds.push(
        window.setTimeout(() => {
          if (chartRef.current) {
            chartRef.current.resize();
          }
        }, 50)
      );

      // After animation completes
      timeoutIds.push(
        window.setTimeout(() => {
          if (chartRef.current) {
            chartRef.current.resize();
          }
        }, 1200) // Just after the 1000ms appear animation
      );

      // One more time after everything should be stable
      timeoutIds.push(
        window.setTimeout(() => {
          if (chartRef.current) {
            chartRef.current.resize();
          }
        }, 2000)
      );

      // Handle window resize
      const handleResize = () => {
        if (chartRef.current) {
          // Update chart size
          chartRef.current.resize();

          // Update container height based on screen size
          if (chartContainerRef.current) {
            const responsiveHeight = getResponsiveHeight(windowWidth);
            chartContainerRef.current.style.height = responsiveHeight;
            chartContainerRef.current.style.minHeight = responsiveHeight;
          }

          // Update text sizes based on screen width
          const isMobile = windowWidth < 640;

          // Update legend text sizes
          legend.labels.template.setAll({
            fontSize: isMobile ? 10 : 12,
          });

          // Update legend marker sizes
          legend.markers.template.setAll({
            width: isMobile ? 10 : 15,
            height: isMobile ? 10 : 15,
          });

          // Update axis label sizes and rotation
          dateAxis.get('renderer').labels.template.setAll({
            fontSize: isMobile ? 10 : 12,
            rotation: isMobile ? -45 : 0,
            centerY: isMobile ? am5.p50 : am5.p0,
            centerX: isMobile ? am5.p100 : am5.p50,
          });

          valueAxis.get('renderer').labels.template.setAll({
            fontSize: isMobile ? 10 : 12,
          });

          // Update tooltips
          niftySeries
            .get('tooltip')
            ?.set('labelText', getTooltipText('Nifty50'));
          nsBundleSeries
            .get('tooltip')
            ?.set('labelText', getTooltipText('NS Bundle'));
        }
      };

      // Add window resize listener
      window.addEventListener('resize', handleResize);

      // Continue with ResizeObserver setup
      const resizeObserver = new ResizeObserver(() => {
        if (chartRef.current) {
          chartRef.current.resize();
        }
      });

      // Start observing the chart container
      resizeObserver.observe(chartContainerRef.current);

      // Refined cleanup function
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      return () => {
        // Clear all timeout IDs
        timeoutIds.forEach((id) => window.clearTimeout(id));

        // Remove resize listener
        window.removeEventListener('resize', handleResize);

        // Stop observing
        resizeObserver.disconnect();

        // Check if root exists before disposing
        if (chartRef.current) {
          chartRef.current.dispose();
          chartRef.current = null; // Nullify the ref
        }
      };
    } catch (error) {
      console.error('Error in DataGraph:', error);
      // Ensure cleanup happens even if there's an error during setup
      if (chartRef.current) {
        chartRef.current.dispose();
        chartRef.current = null;
      }
    }
  }, [filteredData, isDarkMode, isChartReady, windowWidth]);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(event.target.value);
  };

  return (
    <div className='p-2 sm:p-4 dark:bg-black dark:text-white'>
      {/* <h2 className="text-center  text-xl dark:text-white">
        Portfolio Performance
      </h2> */}
      <div className='mb-2 sm:mb-4'>
        <ButtonGroup className='mr-4 flex flex-wrap gap-1 sm:flex-nowrap w-full'>
          {['Lifetime', '3M', '6M', '1Y'].map((value) => (
            <ToggleButton
              key={value}
              id={`range-${value}`}
              type='radio'
              variant='outline-primary'
              value={value}
              checked={range === value}
              onChange={handleRangeChange}
              className='text-sm sm:text-base flex-1'
            >
              {value}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      {/* Assign the ref to the chart container div */}
      <div
        ref={chartContainerRef}
        id='chartdivportfolio'
        style={{
          width: '100%',
          height: getResponsiveHeight(windowWidth),
          minWidth: '100%',
          minHeight: getResponsiveHeight(windowWidth),
          position: 'relative',
        }}
        className='w-full'
      >
        {!isChartReady && (
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-lg'>Loading chart...</div>
          </div>
        )}
      </div>
      <div className='text-right mt-1 sm:mt-2'>
        {data ? (
          <LastUpdatedStatusDisplay lastUpdatedDate={lastUpdated} />
        ) : (
          <span className='text-red-600 text-xs sm:text-sm'>
            No data available
          </span>
        )}
      </div>
    </div>
  );
};

export default DataGraph;
