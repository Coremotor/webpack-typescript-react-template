export const transformFullName = (string: string) => {
  let arr = string.split(' ');
  arr = arr.slice(0, 2);
  return arr.map((word) => word[0].toUpperCase()).join('');
};
