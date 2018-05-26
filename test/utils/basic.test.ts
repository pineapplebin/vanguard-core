import { repeat } from '../../src/utils/basic';

test('test repeat function', () => {
  const r = repeat((i) => i, 3);
  expect(r).toEqual([0, 1, 2]);
});
