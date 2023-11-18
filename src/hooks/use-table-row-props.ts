import { useMemo } from 'react';
import { calculateEnchant } from '../helpers/calculate-enchant';
import { toTableRowProps } from '../helpers/to-table-row-props';
import { unwrapSafeDrops } from '../helpers/unwrap-safe-drops';
import { EnchantResultMode, EnchantMode, TableRowProps } from '../types';

type UseTableRowPropsOptions = {
  chances: Array<number> | Array<Array<number>>;
  mode: EnchantMode;
  resultMode: EnchantResultMode;
};

function shouldUnwrapChances(
  chances: UseTableRowPropsOptions['chances'],
): chances is Array<Array<number>> {
  return Array.isArray(chances[0]);
}

export function useTableRowProps({
  chances,
  mode,
  resultMode,
}: UseTableRowPropsOptions): Array<TableRowProps> {
  return useMemo(() => {
    if (shouldUnwrapChances(chances)) {
      return toTableRowProps(unwrapSafeDrops(chances), resultMode);
    }

    return toTableRowProps(calculateEnchant(chances, mode), resultMode);
  }, [chances, mode, resultMode]);
}
