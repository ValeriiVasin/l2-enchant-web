import { EnchantResult, Mode } from '../types';

export function calculateEnchant(
  chances: number[],
  mode = Mode.Drop,
): Array<EnchantResult> {
  const coef = 100 / chances[0];
  const items = [mode === Mode.Destroy ? coef : 1];
  const enchants = [coef];

  for (let i = 1; i < chances.length; i++) {
    const chance = chances[i];
    const coef = 100 / chance;

    enchants[i] =
      mode === Mode.Safe
        ? enchants[i - 1] + coef
        : enchants[i - 1] * coef + coef;
    items[i] = mode === Mode.Destroy ? items[i - 1] * coef : 1;
  }

  return enchants.map((enchants, i) => ({
    chance: chances[i],
    enchants,
    items: items[i],
  }));
}
