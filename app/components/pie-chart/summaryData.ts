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
    pnl: "4340045.75",
    presentValue: "30452569.14",
    totalInvested: "26112523.39"
  },
  {
    assetClass: "DEBT",
    pnl: "888704.55",
    presentValue: "9466350.96",
    totalInvested: "8577646.41"
  },
  {
    assetClass: "GOLD",
    pnl: "2471865.35",
    presentValue: "4932554.99",
    totalInvested: "2460689.64"
  },
  {
    assetClass: "SILVER",
    pnl: "1038647.41",
    presentValue: "1634490.33",
    totalInvested: "595842.92"
  },
  {
    assetClass: "LIQUID",
    pnl: "4560.22",
    presentValue: "1193889.06",
    totalInvested: "1189328.84"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "1184938.06",
    totalInvested: "1184938.06"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "167007.39",
    presentValue: "1171593.72",
    totalInvested: "1004586.33"
  },
  {
    assetClass: "HYBRID",
    pnl: "4028.32",
    presentValue: "160018.92",
    totalInvested: "155990.60"
  }
]; 