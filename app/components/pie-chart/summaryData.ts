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
    pnl: "3781015.64",
    presentValue: "29953568.18",
    totalInvested: "26172552.54"
  },
  {
    assetClass: "DEBT",
    pnl: "815003.73",
    presentValue: "9369390.25",
    totalInvested: "8554386.52"
  },
  {
    assetClass: "GOLD",
    pnl: "3182300.55",
    presentValue: "5642990.19",
    totalInvested: "2460689.64"
  },
  {
    assetClass: "LIQUID",
    pnl: "10741.15",
    presentValue: "2739250.00",
    totalInvested: "2728508.85"
  },
  {
    assetClass: "SILVER",
    pnl: "1232193.62",
    presentValue: "1820031.30",
    totalInvested: "587837.68"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "145792.61",
    presentValue: "1135281.84",
    totalInvested: "989489.23"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "720879.13",
    totalInvested: "720879.13"
  },
  {
    assetClass: "HYBRID",
    pnl: "4879.82",
    presentValue: "136871.94",
    totalInvested: "131992.12"
  }
]; 