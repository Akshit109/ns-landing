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
    pnl: "3723328.82",
    presentValue: "28820810.75",
    totalInvested: "25097481.93"
  },
  {
    assetClass: "DEBT",
    pnl: "783482.04",
    presentValue: "8690424.87",
    totalInvested: "7906942.83"
  },
  {
    assetClass: "GOLD",
    pnl: "1735238.64",
    presentValue: "3890800.25",
    totalInvested: "2155561.61"
  },
  {
    assetClass: "LIQUID",
    pnl: "11977.71",
    presentValue: "2307221.00",
    totalInvested: "2295243.29"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "176759.59",
    presentValue: "961036.80",
    totalInvested: "784277.21"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "1221448.41",
    totalInvested: "1221448.41"
  },
  {
    assetClass: "SILVER",
    pnl: "279839.95",
    presentValue: "809073.60",
    totalInvested: "529233.65"
  },
  {
    assetClass: "HYBRID",
    pnl: "519.89",
    presentValue: "27519.17",
    totalInvested: "26999.28"
  }
]; 