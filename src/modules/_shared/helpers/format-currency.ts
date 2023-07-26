export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
  }).format(value);
};
