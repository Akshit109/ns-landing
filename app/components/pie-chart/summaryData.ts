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
    pnl: "1553762.71",
    presentValue: "25698908.77",
    totalInvested: "24145146.06"
  },
  {
    assetClass: "DEBT",
    pnl: "799768.24",
    presentValue: "7864944.97",
    totalInvested: "7065176.74"
  },
  {
    assetClass: "GOLD",
    pnl: "557797.85",
    presentValue: "2467864.73",
    totalInvested: "1910066.88"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "916034.98",
    totalInvested: "916034.98"
  },
  {
    assetClass: "LIQUID",
    pnl: "2326.97",
    presentValue: "871754.00",
    totalInvested: "869427.03"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "61567.62",
    presentValue: "741496.12",
    totalInvested: "679928.50"
  },
  {
    assetClass: "SILVER",
    pnl: "43528.44",
    presentValue: "506321.20",
    totalInvested: "462792.76"
  }
]; 