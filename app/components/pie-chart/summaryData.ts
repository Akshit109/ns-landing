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
    pnl: "4395052.85",
    presentValue: "31278424.74",
    totalInvested: "26883371.89"
  },
  {
    assetClass: "DEBT",
    pnl: "978648.91",
    presentValue: "9584922.10",
    totalInvested: "8606273.18"
  },
  {
    assetClass: "GOLD",
    pnl: "2119168.53",
    presentValue: "4552011.10",
    totalInvested: "2432842.57"
  },
  {
    assetClass: "SILVER",
    pnl: "740754.32",
    presentValue: "1282984.29",
    totalInvested: "542229.97"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "193793.06",
    presentValue: "1064201.17",
    totalInvested: "870408.11"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "1037605.50",
    totalInvested: "1037605.50"
  },
  {
    assetClass: "LIQUID",
    pnl: "919.51",
    presentValue: "1015039.15",
    totalInvested: "1014119.64"
  },
  {
    assetClass: "HYBRID",
    pnl: "2735.44",
    presentValue: "262720.62",
    totalInvested: "259985.18"
  }
];
