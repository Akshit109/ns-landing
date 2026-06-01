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
    pnl: "4170489.76",
    presentValue: "30878148.80",
    totalInvested: "26707659.04"
  },
  {
    assetClass: "DEBT",
    pnl: "850163.32",
    presentValue: "9449147.33",
    totalInvested: "8598984.01"
  },
  {
    assetClass: "GOLD",
    pnl: "2302411.40",
    presentValue: "4703904.01",
    totalInvested: "2401492.61"
  },
  {
    assetClass: "SILVER",
    pnl: "902452.18",
    presentValue: "1444682.15",
    totalInvested: "542229.97"
  },
  {
    assetClass: "LIQUID",
    pnl: "-3.15",
    presentValue: "1312270.00",
    totalInvested: "1312273.15"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "178002.01",
    presentValue: "1048410.12",
    totalInvested: "870408.11"
  },
  {
    assetClass: "HYBRID",
    pnl: "863.67",
    presentValue: "244849.35",
    totalInvested: "243985.68"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "-93314.41",
    totalInvested: "-93314.41"
  }
];
