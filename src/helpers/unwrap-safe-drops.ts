import { EnchantResult } from '../types';
import { calculateEnchant } from './calculate-enchant';

export function unwrapSafeDrops(
  chanceGroups: Array<Array<number>>,
): Array<EnchantResult> {
  const resultGroups = chanceGroups.map((group) =>
    calculateEnchant(group, 'drop'),
  );

  for (let i = 1; i < resultGroups.length; i++) {
    const prevGroup = resultGroups[i - 1];
    const carryEnchants = prevGroup[prevGroup.length - 1].enchants;
    const currentGroup = resultGroups[i];

    for (let j = 0; j < currentGroup.length; j++) {
      currentGroup[j].enchants += carryEnchants;
    }
  }

  return resultGroups.flat();
}
