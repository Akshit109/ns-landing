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
    pnl: "2890623.29",
    presentValue: "28140220.59",
    totalInvested: "25249597.29"
  },
  {
    assetClass: "DEBT",
    pnl: "740971.86",
    presentValue: "8387930.92",
    totalInvested: "7646959.06"
  },
  {
    assetClass: "GOLD",
    pnl: "1079282.94",
    presentValue: "3179716.56",
    totalInvested: "2100433.62"
  },
  {
    assetClass: "LIQUID",
    pnl: "11151.10",
    presentValue: "2147044.00",
    totalInvested: "2135892.90"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "127700.79",
    presentValue: "896844.94",
    totalInvested: "769144.15"
  },
  {
    assetClass: "SILVER",
    pnl: "145658.28",
    presentValue: "658764.96",
    totalInvested: "513106.68"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "616789.40",
    totalInvested: "616789.40"
  },
  {
    assetClass: "HYBRID",
    pnl: "-60.99",
    presentValue: "13938.71",
    totalInvested: "13999.69"
  }
]; 