import { test } from '@jest/globals';
import { Mode } from '../types';
import { calculateEnchant } from './calculate-enchant';

const chances = [50, 50, 50];

test('strategy: drop', () => {
  expect(calculateEnchant(chances, Mode.Drop)).toMatchSnapshot();
});

test('strategy: destroy', () => {
  expect(calculateEnchant(chances, Mode.Destroy)).toMatchSnapshot();
});

test('strategy: safe', () => {
  expect(calculateEnchant(chances, Mode.Safe)).toMatchSnapshot();
});
