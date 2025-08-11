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
    pnl: "2406424.10",
    presentValue: "27646832.71",
    totalInvested: "25240408.60"
  },
  {
    assetClass: "DEBT",
    pnl: "754804.05",
    presentValue: "8401763.11",
    totalInvested: "7646959.06"
  },
  {
    assetClass: "GOLD",
    pnl: "969201.06",
    presentValue: "3069634.68",
    totalInvested: "2100433.62"
  },
  {
    assetClass: "LIQUID",
    pnl: "9350.66",
    presentValue: "1845240.45",
    totalInvested: "1835889.79"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "1023920.16",
    totalInvested: "1023920.16"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "114928.33",
    presentValue: "884072.48",
    totalInvested: "769144.15"
  },
  {
    assetClass: "SILVER",
    pnl: "147429.00",
    presentValue: "660535.68",
    totalInvested: "513106.68"
  },
  {
    assetClass: "HYBRID",
    pnl: "-97.26",
    presentValue: "13902.44",
    totalInvested: "13999.69"
  }
]; 