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
    pnl: "3912351.62",
    presentValue: "30066857.92",
    totalInvested: "26154506.29"
  },
  {
    assetClass: "DEBT",
    pnl: "789287.13",
    presentValue: "9388271.14",
    totalInvested: "8598984.01"
  },
  {
    assetClass: "GOLD",
    pnl: "2369645.90",
    presentValue: "4771138.51",
    totalInvested: "2401492.61"
  },
  {
    assetClass: "SILVER",
    pnl: "920930.35",
    presentValue: "1463160.32",
    totalInvested: "542229.97"
  },
  {
    assetClass: "LIQUID",
    pnl: "-5.11",
    presentValue: "1111531.00",
    totalInvested: "1111536.11"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "167880.17",
    presentValue: "1038288.28",
    totalInvested: "870408.11"
  },
  {
    assetClass: "HYBRID",
    pnl: "936.56",
    presentValue: "244922.24",
    totalInvested: "243985.68"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "145670.17",
    totalInvested: "145670.17"
  }
];
