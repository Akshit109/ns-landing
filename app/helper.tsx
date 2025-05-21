export async function fetchData(url: string) {
    const res = await fetch(url, {
      next: { revalidate: 600 },
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await res.json();
    return data;
  }
  
  interface Item {
    Date: string;
  }
  
  export const filterData = (
    data: Item[],
    range: string,
    dateKey?: string,
    endDate?: Date
  ) => {
    const startDate = new Date();
    switch (range) {
      case '3M':
        startDate.setMonth(startDate.getMonth() - 3);
        break;
      case '6M':
        startDate.setMonth(startDate.getMonth() - 6);
        break;
      case '1Y':
        startDate.setFullYear(startDate.getFullYear() - 1);
        break;
      case '3Y':
        startDate.setFullYear(startDate.getFullYear() - 3);
        break;
      case '5Y':
        startDate.setFullYear(startDate.getFullYear() - 5);
        break;
      case '10Y':
        startDate.setFullYear(startDate.getFullYear() - 10);
        break;
      case 'Lifetime':
        startDate.setTime(new Date('2023-08-18').getTime());
        break;
      case 'ALL':
        return data; // Return all data without filtering
      default:
        break;
    }
  
    return data.filter((item) => {
      const itemDate = dateKey
        ? new Date(item[dateKey as keyof Item])
        : new Date(item.Date);
      return itemDate >= startDate && (!endDate || itemDate <= endDate);
    });
  };
  
  export interface GraphDataItem {
    Date: string;
    Drawdown: number;
  }
  
  export const calculateMaxDrawdownDuration = (
    data: GraphDataItem[],
    key: string
  ): number => {
    let maxDuration = 0;
    let currentDuration = 0;
  
    data.forEach((item:any) => {
      if (item[key] < 0) {
        currentDuration += 1;
        if (currentDuration > maxDuration) {
          maxDuration = currentDuration;
        }
      } else {
        currentDuration = 0;
      }
    });
  
    return maxDuration;
  };
  