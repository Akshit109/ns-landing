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
    pnl: "1571049.58",
    presentValue: "27947623.68",
    totalInvested: "26376574.10"
  },
  {
    assetClass: "DEBT",
    pnl: "739576.10",
    presentValue: "9320781.58",
    totalInvested: "8581205.48"
  },
  {
    assetClass: "GOLD",
    pnl: "1868194.05",
    presentValue: "4328883.69",
    totalInvested: "2460689.64"
  },
  {
    assetClass: "LIQUID",
    pnl: "71.87",
    presentValue: "2353564.28",
    totalInvested: "2353492.41"
  },
  {
    assetClass: "SILVER",
    pnl: "773702.15",
    presentValue: "1369545.07",
    totalInvested: "595842.92"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "139991.14",
    presentValue: "1042283.48",
    totalInvested: "902292.34"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "619538.28",
    totalInvested: "619538.28"
  },
  {
    assetClass: "HYBRID",
    pnl: "-7667.18",
    presentValue: "188320.10",
    totalInvested: "195987.27"
  }
];
