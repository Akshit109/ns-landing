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
    pnl: "3279497.77",
    presentValue: "29499524.16",
    totalInvested: "26220026.39"
  },
  {
    assetClass: "DEBT",
    pnl: "862628.29",
    presentValue: "9407210.08",
    totalInvested: "8544581.79"
  },
  {
    assetClass: "GOLD",
    pnl: "2514267.60",
    presentValue: "4974957.24",
    totalInvested: "2460689.64"
  },
  {
    assetClass: "SILVER",
    pnl: "1000461.57",
    presentValue: "1596304.49",
    totalInvested: "595842.92"
  },
  {
    assetClass: "LIQUID",
    pnl: "5500.17",
    presentValue: "1194832.00",
    totalInvested: "1189331.83"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "148014.43",
    presentValue: "1152600.76",
    totalInvested: "1004586.33"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "892557.14",
    totalInvested: "892557.14"
  },
  {
    assetClass: "HYBRID",
    pnl: "870.50",
    presentValue: "172859.59",
    totalInvested: "171989.08"
  }
]; 