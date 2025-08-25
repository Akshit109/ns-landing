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
    pnl: "3629705.91",
    presentValue: "28661012.38",
    totalInvested: "25031306.47"
  },
  {
    assetClass: "DEBT",
    pnl: "697449.42",
    presentValue: "8414401.86",
    totalInvested: "7716952.43"
  },
  {
    assetClass: "GOLD",
    pnl: "1070889.45",
    presentValue: "3171323.07",
    totalInvested: "2100433.62"
  },
  {
    assetClass: "LIQUID",
    pnl: "12632.43",
    presentValue: "2648530.00",
    totalInvested: "2635897.57"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "126483.37",
    presentValue: "895627.52",
    totalInvested: "769144.15"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "745931.20",
    totalInvested: "745931.20"
  },
  {
    assetClass: "SILVER",
    pnl: "140517.48",
    presentValue: "653624.16",
    totalInvested: "513106.68"
  },
  {
    assetClass: "HYBRID",
    pnl: "132.78",
    presentValue: "20131.86",
    totalInvested: "19999.08"
  }
]; 