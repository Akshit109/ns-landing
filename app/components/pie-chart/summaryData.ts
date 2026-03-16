// Define the type for each asset class entry
export interface AssetData {
  assetClass: string;
  pnl: string;
  presentValue: string;
  totalInvested: string;
}

// Export the summary data as a constant
export const summary: AssetData[] = [
  {
    assetClass: "EQUITY",
    pnl: "1918634.21",
    presentValue: "27869129.93",
    totalInvested: "25950495.72"
  },
  {
    assetClass: "DEBT",
    pnl: "858002.07",
    presentValue: "9439207.55",
    totalInvested: "8581205.48"
  },
  {
    assetClass: "GOLD",
    pnl: "2480438.50",
    presentValue: "4941128.14",
    totalInvested: "2460689.64"
  },
  {
    assetClass: "LIQUID",
    pnl: "6350.33",
    presentValue: "2295686.00",
    totalInvested: "2289335.67"
  },
  {
    assetClass: "SILVER",
    pnl: "985088.05",
    presentValue: "1580930.97",
    totalInvested: "595842.92"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "1406784.48",
    totalInvested: "1406784.48"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "148877.95",
    presentValue: "1153464.28",
    totalInvested: "1004586.33"
  },
  {
    assetClass: "HYBRID",
    pnl: "-4302.54",
    presentValue: "175686.00",
    totalInvested: "179988.54"
  }
]; 