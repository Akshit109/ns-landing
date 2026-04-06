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
    pnl: "1316200.33",
    presentValue: "27384510.11",
    totalInvested: "26068309.78"
  },
  {
    assetClass: "DEBT",
    pnl: "682178.34",
    presentValue: "9263383.82",
    totalInvested: "8581205.48"
  },
  {
    assetClass: "GOLD",
    pnl: "1933711.41",
    presentValue: "4394401.05",
    totalInvested: "2460689.64"
  },
  {
    assetClass: "LIQUID",
    pnl: "2918.53",
    presentValue: "2356415.42",
    totalInvested: "2353496.89"
  },
  {
    assetClass: "SILVER",
    pnl: "802589.49",
    presentValue: "1398432.41",
    totalInvested: "595842.92"
  },
  {
    assetClass: "INViTs/REiTs",
    pnl: "140902.63",
    presentValue: "1011310.74",
    totalInvested: "870408.11"
  },
  {
    assetClass: "Other",
    pnl: "-5316.50",
    presentValue: "520493.94",
    totalInvested: "525810.44"
  },
  {
    assetClass: "CASH",
    pnl: "0.00",
    presentValue: "398875.11",
    totalInvested: "398875.11"
  },
  {
    assetClass: "HYBRID",
    pnl: "-7211.33",
    presentValue: "188475.74",
    totalInvested: "195687.07"
  }
];
