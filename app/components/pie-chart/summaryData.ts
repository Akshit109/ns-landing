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
    pnl: "4117907.30",
    presentValue: "30959388.33",
    totalInvested: "26841481.03"
  },
  {
    assetClass: "DEBT",
    pnl: "1061141.63",
    presentValue: "9667414.81",
    totalInvested: "8606273.18"
  },
  {
    assetClass: "GOLD",
    pnl: "1972051.63",
    presentValue: "4404894.20",
    totalInvested: "2432842.57"
  },
  {
    assetClass: "LIQUID",
    pnl: "904.18",
    presentValue: "1287819.00",
    totalInvested: "1286914.82"
  },
  {
    assetClass: "SILVER",
    pnl: "658573.63",
    presentValue: "1200803.60",
    totalInvested: "542229.97"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "213367.41",
    presentValue: "1083775.52",
    totalInvested: "870408.11"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "707954.55",
    totalInvested: "707954.55"
  },
  {
    assetClass: "HYBRID",
    pnl: "2584.77",
    presentValue: "270569.22",
    totalInvested: "267984.44"
  }
];
