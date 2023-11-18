import { test } from '@jest/globals';
import { calculateEnchant } from './calculate-enchant';

const chances = [50, 50, 50];

test('strategy: drop', () => {
  expect(calculateEnchant(chances, 'drop')).toMatchSnapshot();
});

test('strategy: destroy', () => {
  expect(calculateEnchant(chances, 'destroy')).toMatchSnapshot();
});

test('strategy: safe', () => {
  expect(calculateEnchant(chances, 'safe')).toMatchSnapshot();
});
