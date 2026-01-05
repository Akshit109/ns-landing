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
    pnl: "4501715.09",
    presentValue: "31048942.47",
    totalInvested: "26547227.38"
  },
  {
    assetClass: "DEBT",
    pnl: "823298.57",
    presentValue: "8441728.44",
    totalInvested: "7618429.87"
  },
  {
    assetClass: "GOLD",
    pnl: "2309987.91",
    presentValue: "4673586.52",
    totalInvested: "2363598.61"
  },
  {
    assetClass: "LIQUID",
    pnl: "13543.38",
    presentValue: "1832161.32",
    totalInvested: "1818617.94"
  },
  {
    assetClass: "SILVER",
    pnl: "842624.73",
    presentValue: "1414370.25",
    totalInvested: "571745.52"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "177337.49",
    presentValue: "1106905.14",
    totalInvested: "929567.65"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "780866.37",
    totalInvested: "780866.37"
  },
  {
    assetClass: "HYBRID",
    pnl: "3599.02",
    presentValue: "104592.54",
    totalInvested: "100993.52"
  }
]; 