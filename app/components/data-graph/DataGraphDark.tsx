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
      <span className="text-yellow-600">No date information available</span>
    );
  }

  const isOld = isDateOlderThanSevenDays(lastUpdatedDate);
  return (
    <span className={isOld ? 'text-red-600' : 'dark:text-gray-300'}>
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) =>
      setIsDarkMode(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

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
    // Ensure the container ref exists and filteredData is available
    if (!filteredData || !chartContainerRef.current) {
      return;
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
        })
      );

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
      });

      // Customize legend markers
      legend.markers.template.setAll({
        width: 15,
        height: 15,
      });

      legend.data.setAll(chart.series.values);

      // Animation and zoom
      chart.appear(1000, 100);
      dateAxis.zoom(0, 1);

      // Refined cleanup function
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      return () => {
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
  }, [filteredData, isDarkMode]);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(event.target.value);
  };

  return (
    <div className="p-4 dark:bg-black dark:text-white">
      {/* <h2 className="text-center  text-xl dark:text-white">
        Portfolio Performance
      </h2> */}
      <div className="mb-4">
        <ButtonGroup className="mr-4 ">
          {['Lifetime', '3M', '6M', '1Y', 'ALL'].map((value) => (
            <ToggleButton
              key={value}
              id={`range-${value}`}
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
      {/* Assign the ref to the chart container div */}
      <div
        ref={chartContainerRef}
        id="chartdivportfolio"
        style={{ width: '100%', height: '550px' }}
      />
      <div className="text-right mt-2">
        {data ? (
          <LastUpdatedStatusDisplay lastUpdatedDate={lastUpdated} />
        ) : (
          <span className="text-red-600">No data available</span>
        )}
      </div>
    </div>
  );
};

export default DataGraph;
