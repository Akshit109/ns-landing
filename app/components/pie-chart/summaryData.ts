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
    pnl: "3657658.29",
    presentValue: "29005986.89",
    totalInvested: "25348328.60"
  },
  {
    assetClass: "DEBT",
    pnl: "829537.96",
    presentValue: "9417657.57",
    totalInvested: "8588119.61"
  },
  {
    assetClass: "GOLD",
    pnl: "2254970.35",
    presentValue: "4715659.99",
    totalInvested: "2460689.64"
  },
  {
    assetClass: "SILVER",
    pnl: "773437.93",
    presentValue: "1315667.90",
    totalInvested: "542229.97"
  },
  {
    assetClass: "LIQUID",
    pnl: "8885.50",
    presentValue: "1207893.00",
    totalInvested: "1199007.50"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "182117.79",
    presentValue: "1052525.90",
    totalInvested: "870408.11"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "935447.88",
    totalInvested: "935447.88"
  },
  {
    assetClass: "Other",
    pnl: "-17381.21",
    presentValue: "894467.10",
    totalInvested: "911848.31"
  },
  {
    assetClass: "HYBRID",
    pnl: "1267.95",
    presentValue: "221254.17",
    totalInvested: "219986.22"
  }
];
