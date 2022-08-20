export function range(arg1: number, arg2?: number): Array<number> {
  const arr: Array<number> = [];

  let i = 0;

  while (i < (arg2 || arg1)) {
    arr.push(arg2 ? arg1 + i++ : i++);
  }

  return arr;
}

export function parseToCurrency(amount: number): string {
  return `Rp ${amount
    .toFixed()
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
