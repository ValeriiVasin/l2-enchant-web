import { EnchantTable } from './base/enchant-table';
import { Mode } from '../types';
import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';
import { useMemo } from 'react';

function useTableRowPropsWrapper(chances: Array<number>) {
  return useMemo(
    () =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useTableRowProps({
        chances,
        mode: 'drop',
        resultMode: 'enchants',
      }),
    [chances],
  );
}

export function DragonPendant() {
  const rowsLevelOne = useTableRowPropsWrapper([100, 90, 80, 70, 70]);
  const rowsLevelTwo = useTableRowPropsWrapper([100, 80, 70, 60, 30]);
  const rowsLevelThree = useTableRowPropsWrapper([90, 50, 30, 12, 5]);
  const rowsLevelFour = useTableRowPropsWrapper([70, 30, 10, 5, 2]);
  const formatEnchant = useFormatter({ startIndex: 1, type: 'plus' });

  return (
    <div>
      <EnchantTable
        title="Подвеска Дракона Ур. 1"
        tableRows={rowsLevelOne}
        formatEnchant={formatEnchant}
      />
      <EnchantTable
        title="Подвеска Дракона Ур. 2"
        tableRows={rowsLevelTwo}
        formatEnchant={formatEnchant}
      />
      <EnchantTable
        title="Подвеска Дракона Ур. 3"
        tableRows={rowsLevelThree}
        formatEnchant={formatEnchant}
      />
      <EnchantTable
        title="Подвеска Дракона Ур. 4"
        tableRows={rowsLevelFour}
        formatEnchant={formatEnchant}
      />
    </div>
  );
}
