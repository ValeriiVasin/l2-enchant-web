import { EnchantResult, Mode } from '../types';

export function calculateEnchant(
  chances: number[],
  mode = Mode.Drop,
): Array<EnchantResult> {
  const coef = 100 / chances[0];
  const items = [mode === Mode.Drop ? 1 : coef];
  const enchants = [coef];

  for (let i = 1; i < chances.length; i++) {
    const chance = chances[i];
    const coef = 100 / chance;

    enchants[i] = enchants[i - 1] * coef + coef;
    items[i] = mode === Mode.Drop ? 1 : items[i - 1] * coef;
  }

  return enchants.map((enchants, i) => ({
    chance: chances[i],
    enchants,
    items: items[i],
  }));
}
