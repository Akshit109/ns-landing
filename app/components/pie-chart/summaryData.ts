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
    pnl: "4787342.34",
    presentValue: "30300669.68",
    totalInvested: "25513327.34"
  },
  {
    assetClass: "DEBT",
    pnl: "798750.18",
    presentValue: "8624812.37",
    totalInvested: "7826062.19"
  },
  {
    assetClass: "GOLD",
    pnl: "1573266.35",
    presentValue: "3789467.96",
    totalInvested: "2216201.61"
  },
  {
    assetClass: "LIQUID",
    pnl: "2675.38",
    presentValue: "2014919.15",
    totalInvested: "2012243.77"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "197322.65",
    presentValue: "1096561.56",
    totalInvested: "899238.91"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "800794.32",
    totalInvested: "800794.32"
  },
  {
    assetClass: "SILVER",
    pnl: "338150.57",
    presentValue: "875435.82",
    totalInvested: "537285.25"
  },
  {
    assetClass: "HYBRID",
    pnl: "1688.88",
    presentValue: "47687.05",
    totalInvested: "45998.17"
  }
]; 