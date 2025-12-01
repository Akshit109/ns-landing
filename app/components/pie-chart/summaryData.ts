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
    pnl: "4792883.99",
    presentValue: "30220694.65",
    totalInvested: "25427810.67"
  },
  {
    assetClass: "DEBT",
    pnl: "814601.22",
    presentValue: "8660662.00",
    totalInvested: "7846060.78"
  },
  {
    assetClass: "GOLD",
    pnl: "1849293.10",
    presentValue: "4122032.71",
    totalInvested: "2272739.61"
  },
  {
    assetClass: "LIQUID",
    pnl: "9356.53",
    presentValue: "2222665.00",
    totalInvested: "2213308.47"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "177175.85",
    presentValue: "1091579.49",
    totalInvested: "914403.64"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "1016403.28",
    totalInvested: "1016403.28"
  },
  {
    assetClass: "SILVER",
    pnl: "426662.64",
    presentValue: "982103.29",
    totalInvested: "555440.65"
  },
  {
    assetClass: "HYBRID",
    pnl: "2503.20",
    presentValue: "70499.24",
    totalInvested: "67996.04"
  }
]; 