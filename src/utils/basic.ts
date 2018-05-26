export function repeat<T>(fn: (time: number) => T, times: number): Array<T> {
  const rst = [];
  for (let i = 0; i < times; i++) {
    rst.push(fn(i));
  }
  return rst;
}
