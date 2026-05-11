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
    pnl: "4297826.88",
    presentValue: "30429453.70",
    totalInvested: "26131626.81"
  },
  {
    assetClass: "DEBT",
    pnl: "870638.27",
    presentValue: "9462445.99",
    totalInvested: "8591807.72"
  },
  {
    assetClass: "GOLD",
    pnl: "2309379.04",
    presentValue: "4710871.65",
    totalInvested: "2401492.61"
  },
  {
    assetClass: "SILVER",
    pnl: "850291.58",
    presentValue: "1392521.55",
    totalInvested: "542229.97"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "195132.01",
    presentValue: "1065540.12",
    totalInvested: "870408.11"
  },
  {
    assetClass: "LIQUID",
    pnl: "10649.08",
    presentValue: "1009669.00",
    totalInvested: "999019.92"
  },
  {
    assetClass: "EQUITY\n",
    pnl: "-14854.36",
    presentValue: "395283.00",
    totalInvested: "410137.36"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "276721.92",
    totalInvested: "276721.92"
  },
  {
    assetClass: "HYBRID",
    pnl: "3875.48",
    presentValue: "231861.76",
    totalInvested: "227986.28"
  },
  {
    assetClass: "Other",
    pnl: "0.00",
    presentValue: "0.00",
    totalInvested: "0.00"
  }
];
