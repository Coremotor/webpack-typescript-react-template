import { TDailyRegister } from 'modules/document-flow/types';

export const dailyRegistersData = (daysCount: number, month: string) => {
  const arr: TDailyRegister[] = [];
  for (let i = 0; i < daysCount; i++) {
    arr.push({
      id: `${i}`,
      date: `${i + 1} ${month} 2023`,
      name: `Ежедневный реестр-0123${i}`,
    });
  }
  return arr;
};
