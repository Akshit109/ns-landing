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
    pnl: "3947830.30",
    presentValue: "30043232.42",
    totalInvested: "26095402.12"
  },
  {
    assetClass: "DEBT",
    pnl: "847522.09",
    presentValue: "9435641.70",
    totalInvested: "8588119.61"
  },
  {
    assetClass: "GOLD",
    pnl: "2290393.37",
    presentValue: "4751083.01",
    totalInvested: "2460689.64"
  },
  {
    assetClass: "LIQUID",
    pnl: "7093.85",
    presentValue: "2306093.94",
    totalInvested: "2299000.09"
  },
  {
    assetClass: "SILVER",
    pnl: "878403.26",
    presentValue: "1474246.18",
    totalInvested: "595842.92"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "182247.16",
    presentValue: "1052655.27",
    totalInvested: "870408.11"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "354294.23",
    totalInvested: "354294.23"
  },
  {
    assetClass: "HYBRID",
    pnl: "1253.22",
    presentValue: "221239.45",
    totalInvested: "219986.22"
  },
  {
    assetClass: "Other",
    pnl: "-2733.06",
    presentValue: "168328.33",
    totalInvested: "171061.40"
  }
];
