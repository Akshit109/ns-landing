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
    pnl: "3999578.67",
    presentValue: "30760113.74",
    totalInvested: "26760535.07"
  },
  {
    assetClass: "DEBT",
    pnl: "878973.17",
    presentValue: "9485246.35",
    totalInvested: "8606273.18"
  },
  {
    assetClass: "GOLD",
    pnl: "2231839.62",
    presentValue: "4664682.19",
    totalInvested: "2432842.57"
  },
  {
    assetClass: "SILVER",
    pnl: "868714.26",
    presentValue: "1410944.23",
    totalInvested: "542229.97"
  },
  {
    assetClass: "LIQUID",
    pnl: "0.00",
    presentValue: "1213240.00",
    totalInvested: "1213240.00"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "181180.02",
    presentValue: "1051588.13",
    totalInvested: "870408.11"
  },
  {
    assetClass: "HYBRID",
    pnl: "-839.82",
    presentValue: "259145.36",
    totalInvested: "259985.18"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "183981.24",
    totalInvested: "183981.24"
  }
];
