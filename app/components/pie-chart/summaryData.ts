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
    pnl: "3895967.74",
    presentValue: "30354367.73",
    totalInvested: "26458399.99"
  },
  {
    assetClass: "DEBT",
    pnl: "840819.72",
    presentValue: "9432627.44",
    totalInvested: "8591807.72"
  },
  {
    assetClass: "GOLD",
    pnl: "2399253.95",
    presentValue: "4800746.56",
    totalInvested: "2401492.61"
  },
  {
    assetClass: "SILVER",
    pnl: "906669.42",
    presentValue: "1448899.39",
    totalInvested: "542229.97"
  },
  {
    assetClass: "LIQUID",
    pnl: "6691.74",
    presentValue: "1210485.10",
    totalInvested: "1203793.37"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "181702.74",
    presentValue: "1052110.85",
    totalInvested: "870408.11"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "554395.19",
    totalInvested: "554395.19"
  },
  {
    assetClass: "HYBRID",
    pnl: "1219.47",
    presentValue: "237205.68",
    totalInvested: "235986.20"
  },
  {
    assetClass: "Other",
    pnl: "-2308.54",
    presentValue: "207116.00",
    totalInvested: "209424.54"
  }
];
