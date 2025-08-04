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
    pnl: "2591098.52",
    presentValue: "27796504.79",
    totalInvested: "25205406.27"
  },
  {
    assetClass: "DEBT",
    pnl: "799477.84",
    presentValue: "8364185.39",
    totalInvested: "7564707.55"
  },
  {
    assetClass: "GOLD",
    pnl: "801740.16",
    presentValue: "2867881.05",
    totalInvested: "2066140.89"
  },
  {
    assetClass: "LIQUID",
    pnl: "20348.85",
    presentValue: "1843360.00",
    totalInvested: "1823011.15"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "1269002.25",
    totalInvested: "1269002.25"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "108726.27",
    presentValue: "862725.86",
    totalInvested: "753999.59"
  },
  {
    assetClass: "SILVER",
    pnl: "115779.61",
    presentValue: "620851.20",
    totalInvested: "505071.59"
  },
  {
    assetClass: "HYBRID",
    pnl: "-128.06",
    presentValue: "9871.29",
    totalInvested: "9999.35"
  }
]; 