import { test, expect } from '@jest/globals';
import { unwrapSafeDrops } from './unwrap-safe-drops';

test('unwraps safe drops', () => {
  expect(
    unwrapSafeDrops([
      [50, 50],
      [25, 25],
    ]),
  ).toMatchSnapshot();
});
