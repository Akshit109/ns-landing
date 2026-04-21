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
    pnl: "4121434.84",
    presentValue: "30299920.55",
    totalInvested: "26178485.71"
  },
  {
    assetClass: "DEBT",
    pnl: "860150.39",
    presentValue: "9448270.00",
    totalInvested: "8588119.61"
  },
  {
    assetClass: "GOLD",
    pnl: "2326863.18",
    presentValue: "4787552.82",
    totalInvested: "2460689.64"
  },
  {
    assetClass: "LIQUID",
    pnl: "5483.92",
    presentValue: "2304481.04",
    totalInvested: "2298997.13"
  },
  {
    assetClass: "SILVER",
    pnl: "943244.80",
    presentValue: "1539087.72",
    totalInvested: "595842.92"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "187885.13",
    presentValue: "1058293.24",
    totalInvested: "870408.11"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "739217.83",
    totalInvested: "739217.83"
  },
  {
    assetClass: "HYBRID",
    pnl: "4632.81",
    presentValue: "216619.76",
    totalInvested: "211986.95"
  }
];
