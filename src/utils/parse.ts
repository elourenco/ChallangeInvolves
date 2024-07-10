import type { IComplexData } from "../types/complex-data";

export const parseExpensiveData = (data: IComplexData[]): IComplexData[] => {
  return data.map(item => {
    return {
      ...item,
      value: item.value
    }
  });
}