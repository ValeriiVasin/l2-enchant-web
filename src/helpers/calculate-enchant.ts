import { EnchantResult, Mode } from '../types';

export function calculateEnchant(
  chances: number[],
  mode = Mode.Drop,
): Array<EnchantResult> {
  switch (mode) {
    case Mode.Destroy:
      return convertStrategyResult(modeDestroy(chances));
    case Mode.Safe:
      return convertStrategyResult(modeSafe(chances));
    case Mode.Drop:
      return convertStrategyResult(modeDrop(chances));
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

    enchants[i] = enchants[i - 1] * coef + coef;
  }

  return {
    chances,
    items: Array(chances.length).fill(1),
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
