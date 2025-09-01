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
    pnl: "2941599.78",
    presentValue: "28014485.83",
    totalInvested: "25072886.06"
  },
  {
    assetClass: "DEBT",
    pnl: "670616.48",
    presentValue: "8387568.92",
    totalInvested: "7716952.43"
  },
  {
    assetClass: "GOLD",
    pnl: "1219937.94",
    presentValue: "3320371.56",
    totalInvested: "2100433.62"
  },
  {
    assetClass: "LIQUID",
    pnl: "8535.34",
    presentValue: "2250288.00",
    totalInvested: "2241752.66"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "150152.00",
    presentValue: "919296.15",
    totalInvested: "769144.15"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "1491468.69",
    totalInvested: "1491468.69"
  },
  {
    assetClass: "SILVER",
    pnl: "161994.60",
    presentValue: "675101.28",
    totalInvested: "513106.68"
  },
  {
    assetClass: "HYBRID",
    pnl: "35.52",
    presentValue: "20034.60",
    totalInvested: "19999.08"
  }
]; 