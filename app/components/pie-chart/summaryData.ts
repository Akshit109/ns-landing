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
    pnl: "1889087.07",
    presentValue: "28063622.48",
    totalInvested: "26174535.41"
  },
  {
    assetClass: "DEBT",
    pnl: "837301.65",
    presentValue: "9418507.13",
    totalInvested: "8581205.48"
  },
  {
    assetClass: "GOLD",
    pnl: "2087728.29",
    presentValue: "4548417.93",
    totalInvested: "2460689.64"
  },
  {
    assetClass: "LIQUID",
    pnl: "4263.80",
    presentValue: "2696927.97",
    totalInvested: "2692664.17"
  },
  {
    assetClass: "SILVER",
    pnl: "823976.04",
    presentValue: "1419818.96",
    totalInvested: "595842.92"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "144177.30",
    presentValue: "1046469.64",
    totalInvested: "902292.34"
  },
  {
    assetClass: "Other",
    pnl: "-14909.22",
    presentValue: "354754.01",
    totalInvested: "369663.23"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "245171.49",
    totalInvested: "245171.49"
  },
  {
    assetClass: "HYBRID",
    pnl: "-6161.68",
    presentValue: "181826.11",
    totalInvested: "187987.80"
  }
]; 