export const formatPrice = (val: number) => val.toLocaleString('ru');
export const formatPriceWithSign = (val: number | undefined) => {
  if (typeof val !== 'number') {
    return '';
  }

  return `${formatPrice(val)}\u00A0₽`;
}
