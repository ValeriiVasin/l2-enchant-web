import { EnchantResult, EnchantMode } from '../types';

export function calculateEnchant(
  chances: number[],
  mode: EnchantMode,
): Array<EnchantResult> {
  switch (mode) {
    case 'destroy':
      return convertStrategyResult(modeDestroy(chances));
    case 'safe':
      return convertStrategyResult(modeSafe(chances));
    case 'drop':
      return convertStrategyResult(modeDrop(chances));
    case 'double-drop':
      return convertStrategyResult(modeDoubleDrop(chances));
  }
}

type EnchantStrategyResult = {
  chances: Array<number>;
  enchants: Array<number>;
  items: Array<number>;
};

type StrategyFunction = (chances: Array<number>) => EnchantStrategyResult;

const modeDestroy: StrategyFunction = (chances) => {
  const coef = 100 / chances[0];
  const items = [coef];
  const enchants = [coef];

  for (let i = 1; i < chances.length; i++) {
    const chance = chances[i];
    const coef = 100 / chance;

    enchants[i] = enchants[i - 1] * coef + coef;
    items[i] = items[i - 1] * coef;
  }

  return { chances, enchants, items };
};

const modeSafe: StrategyFunction = (chances) => {
  const coef = 100 / chances[0];
  const enchants = [coef];

  for (let i = 1; i < chances.length; i++) {
    const chance = chances[i];
    const coef = 100 / chance;

    enchants[i] = enchants[i - 1] + coef;
  }

  return {
    chances,
    items: Array(chances.length).fill(1),
    enchants,
  };
};

const modeDrop: StrategyFunction = (chances) => {
  const coef = 100 / chances[0];
  const enchants = [coef];

  for (let i = 1; i < chances.length; i++) {
    const chance = chances[i];
    const coef = 100 / chance;

    enchants[i] = (enchants[i - 1] + 1) * coef;
  }

  return {
    chances,
    items: Array(chances.length).fill(1),
    enchants,
  };
};

const modeDoubleDrop: StrategyFunction = (chances) => {
  const coef = 100 / chances[0];
  const items = [1 + coef];
  const enchants = [coef];

  for (let i = 1; i < chances.length; i++) {
    const chance = chances[i];
    const coef = 100 / chance;

    enchants[i] = enchants[i - 1] * 2 * coef + coef;
    // coef times to enchant groups of 2 prev items
    // and `koef - 1` times we receive item back
    items[i] = items[i - 1] * 2 * coef - (coef - 1);
  }

  return {
    chances,
    items,
    enchants,
  };
};

function convertStrategyResult({
  enchants,
  items,
  chances,
}: EnchantStrategyResult): Array<EnchantResult> {
  return enchants.map((enchants, i) => ({
    chance: chances[i],
    enchants,
    items: items[i],
  }));
}
