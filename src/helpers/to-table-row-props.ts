import { EnchantResult, EnchantResultMode, TableRowProps } from "../types";

function getResultValue(
  result: EnchantResult,
  mode: EnchantResultMode,
): number {
  if (mode === "enchants") {
    return result.enchants;
  }

  return mode === "items" ? result.items : result.items + result.enchants;
}

export function toTableRowProps(
  results: Array<EnchantResult>,
  mode: EnchantResultMode,
): Array<TableRowProps> {
  return results.map((result, index) => ({
    index,
    chance: result.chance,
    result: getResultValue(result, mode),
  }));
}
