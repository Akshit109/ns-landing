import { cleanSymbol } from '@/app/utils';

export const parseFloatValue = (value: any) => {
  const parsedValue = parseFloat(value);
  return Number.isNaN(parsedValue) ? value : parsedValue;
};

export function checkMissingMappingData(
  mappingData: any,
  mfHoldingsData: any,
  equityHoldingsData: any
) {
  const combinedData = [...mfHoldingsData.data, ...equityHoldingsData.data];
  return combinedData.filter(
    (row: any) =>
      !mappingData?.data?.find(
        (item: any) => item.symbol === cleanSymbol(row.Symbol)
      )
  );
}

export function calculateHoldingsSummary(
  mfHoldingsData: any,
  equityHoldingsData: any,
  cashData: any,
  positionsData: any,
  mappingData: any
) {
  const combinedData = [...mfHoldingsData.data, ...equityHoldingsData.data];

  type SummaryType = {
    [key: string]: { totalInvested: number; presentValue: number };
  };

  const summary: SummaryType = combinedData.reduce(
    (acc: SummaryType, row: any) => {
      const assetClassField = row['ASSET CLASS'];
      const invested =
        (parseFloatValue(row['Quantity Available']) +
          parseFloatValue(row['Quantity Pledged (Margin)'])) *
        parseFloatValue(row['Average Price']);
      const presentValue =
        (parseFloatValue(row['Quantity Available']) +
          parseFloatValue(row['Quantity Pledged (Margin)'])) *
        parseFloatValue(row['Previous Closing Price']);

      if (!acc[assetClassField]) {
        acc[assetClassField] = { totalInvested: 0, presentValue: 0 };
      }

      acc[assetClassField].totalInvested += invested;
      acc[assetClassField].presentValue += presentValue;

      return acc;
    },
    {}
  );

  summary.CASH = {
    totalInvested: cashData.latestCashValue,
    presentValue: cashData.latestCashValue,
  };

  // summary['PORTFOLIO HEDGE'] = {
  //   totalInvested: positionsData.portfolioHedge.totalInvested,
  //   presentValue: positionsData.portfolioHedge.currentValue,
  // };

  return Object.entries(summary)
    .map(([assetClass, values]) => ({
      assetClass,
      totalInvested: values.totalInvested.toFixed(2),
      presentValue: values.presentValue.toFixed(2),
      pnl: (values.presentValue - values.totalInvested).toFixed(2),
    }))
    .sort((a, b) => parseFloat(b.presentValue) - parseFloat(a.presentValue));
}

export const colors = [
  '#3366cc',
  '#dc3912',
  '#ff9900',
  '#109618',
  '#990099',
  '#0099c6',
  '#dd4477',
  '#66aa00',
  '#b82e2e',
  '#316395',
];

export function calculateAssetClassPieChartData(
  summary: any,
  totalCurrentValueOfHoldings: number
) {
  const pieChartData = summary.map((row: any) => ({
    name: row.assetClass,
    value: (row.presentValue / totalCurrentValueOfHoldings) * 100,
  }));

  return pieChartData;
}

export function getLongTermQuantity(
  mappingData: Array<{ symbol: string; long_term_quantity: number }>,
  symbol: string
) {
  const longTermHolding = mappingData?.find((item) => item.symbol === symbol);
  return longTermHolding ? longTermHolding.long_term_quantity : 0;
}
