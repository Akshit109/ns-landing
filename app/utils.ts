export function cleanSymbol(symbol: string): string {
    return symbol.replace(/-T$|-BL$|#$/, '');
  }
  
  export function formatIndianCurrency(amount: number): string {
    // Handle negative numbers
    const isNegative = amount < 0;
    const absAmount = Math.abs(amount);
  
    const num = absAmount.toString();
    const [integerPart, decimalPart] = num.split('.');
  
    // Only add comma if the number has more than 3 digits
    if (integerPart.length <= 3) {
      const result = `${integerPart}${decimalPart ? `.${decimalPart}` : ''}`;
      return isNegative ? `-${result}` : result;
    }
  
    const lastThreeDigits = integerPart.slice(-3);
    const otherDigits = integerPart.slice(0, -3);
  
    const formattedIntegerPart = otherDigits.replace(
      /\B(?=(\d{2})+(?!\d))/g,
      ','
    );
    const result = `${formattedIntegerPart},${lastThreeDigits}${
      decimalPart ? `.${decimalPart}` : ''
    }`;
  
    return isNegative ? `-${result}` : result;
  }
  
  export function getSmallcaseDataWithStrategies(
    holdingsData,
    smallcaseData,
    summary
  ) {
    const cash = summary.find((item) => item.assetClass === 'CASH');
    const portfolioHedge = summary.find(
      (item) => item.assetClass === 'PORTFOLIO HEDGE'
    );
    const strategies = {
      Cash: [
        {
          Symbol: 'Cash',
          quantity: 1,
          'Current Market Price': cash.presentValue,
          'Total Cost': cash.totalInvested,
        },
      ],
      // 'Portfolio Hedge': [
      //   {
      //     Symbol: 'Portfolio Hedge',
      //     quantity: 1,
      //     'Current Market Price': portfolioHedge.presentValue,
      //     'Total Cost': portfolioHedge.totalInvested,
      //   },
      // ],
    };
    const cleanedHoldingsData = holdingsData.map((holding) => ({
      ...holding,
      Symbol: cleanSymbol(holding.Symbol),
    }));
  
    cleanedHoldingsData.forEach((holding) => {
      let remainingQuantity =
        holding['Quantity Available'] + holding['Quantity Pledged (Margin)'];
  
      if (holding['ASSET CLASS LEVEL 2']) {
        const strategy = holding['ASSET CLASS LEVEL 2'];
        if (!strategies[strategy]) strategies[strategy] = [];
        strategies[strategy].push({ ...holding, quantity: remainingQuantity });
        remainingQuantity = 0;
      } else {
        if (holding['ASSET CLASS'] === 'EQUITY') {
          // Loop through smallcases
          for (const [smallcaseName, stocks] of Object.entries(smallcaseData)) {
            // Ignore -T at the end of the symbol
            const matchedStock = stocks.find((stock) => {
              return stock.ticker === holding.Symbol.replace(/-T$/, '');
            });
            if (matchedStock) {
              const quantityToAdd = Math.min(
                remainingQuantity,
                matchedStock.shares
              );
              if (!strategies[smallcaseName]) strategies[smallcaseName] = [];
              strategies[smallcaseName].push({
                ...holding,
                quantity: quantityToAdd,
              });
              remainingQuantity -= quantityToAdd;
              if (remainingQuantity === 0) break;
            }
          }
          // Add remaining quantity to 'Other' strategy
          if (remainingQuantity > 0) {
            if (!strategies['Other']) strategies['Other'] = [];
            strategies['Other'].push({ ...holding, quantity: remainingQuantity });
          }
        } else {
          const strategy = holding['ASSET CLASS'];
          if (!strategies[strategy]) strategies[strategy] = [];
          strategies[strategy].push({ ...holding, quantity: remainingQuantity });
        }
      }
    });
  
    return strategies;
  }
  
  export function getSectorData(holdingsData, smallcaseData) {
    return holdingsData.map((holding) => {
      const smallcase = smallcaseData[holding.Symbol];
      return {
        ...holding,
        sector: smallcase ? smallcase.sector : 'Other',
      };
    });
  }
  
  export function getSmallcaseData(holdingsData, smallcaseData) {
    // Remove -T from Symbol of holdingsData
    const cleanedHoldingsData = holdingsData.map((holding) => ({
      ...holding,
      Symbol: cleanSymbol(holding.Symbol),
    }));
  
    return cleanedHoldingsData.map((holding) => {
      let totalMatchedShares = 0;
      const matchedSmallcases = [];
  
      for (const [smallcaseName, stocks] of Object.entries(smallcaseData)) {
        const matchedStock = stocks.find((stock) => {
          return stock.ticker === holding.Symbol;
        });
        if (matchedStock) {
          matchedSmallcases.push(smallcaseName);
          totalMatchedShares += matchedStock.shares;
        }
      }
  
      const holdingQuantity = holding['Quantity Available'];
      const smallcases =
        holding['ASSET CLASS LEVEL 2'] ||
        (holding['ASSET CLASS'] === 'DEBT' ||
        holding.Symbol.includes('DIRECT PLAN')
          ? ''
          : matchedSmallcases.length > 0
          ? totalMatchedShares === holdingQuantity
            ? matchedSmallcases.join(', ')
            : [...matchedSmallcases, 'Other'].join(', ')
          : 'Other');
  
      return {
        ...holding,
        smallcases,
      };
    });
  }
  
  export function getLongTermQuantity(mappingData, symbol) {
    const longTermHolding = mappingData?.find((item) => item.symbol === symbol);
    return longTermHolding ? longTermHolding.long_term_quantity : 0;
  }
  
  export const strategyTables = [
    { name: 'NS N50 Momentum', route: 'n50' },
    { name: 'NS N200 Momentum', route: 'n200' },
    { name: 'NS N500 Momentum', route: 'n500' },
    { name: 'NS Focused Growth', route: 'focused-growth' },
    { name: 'NS Low Volatility', route: 'low-volatility' },
    { name: 'NS Flexicap Value', route: 'flexicap-value' },
  ];
  