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
    pnl: "3492490.74",
    presentValue: "30552115.42",
    totalInvested: "27059624.68"
  },
  {
    assetClass: "DEBT",
    pnl: "929948.94",
    presentValue: "9536222.12",
    totalInvested: "8606273.18"
  },
  {
    assetClass: "GOLD",
    pnl: "2118837.03",
    presentValue: "4551679.60",
    totalInvested: "2432842.57"
  },
  {
    assetClass: "SILVER",
    pnl: "788919.64",
    presentValue: "1331149.61",
    totalInvested: "542229.97"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "175652.36",
    presentValue: "1046060.47",
    totalInvested: "870408.11"
  },
  {
    assetClass: "LIQUID",
    pnl: "0.00",
    presentValue: "1014117.00",
    totalInvested: "1014117.00"
  },
  {
    assetClass: "HYBRID",
    pnl: "-598.24",
    presentValue: "259386.94",
    totalInvested: "259985.18"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "89113.74",
    totalInvested: "89113.74"
  }
];
