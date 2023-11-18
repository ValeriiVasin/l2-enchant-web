import { EnchantTable } from './base/enchant-table';
import { Mode, TableRowProps } from '../types';
import { calculateEnchant } from '../helpers/calculate-enchant';
import { toTableRowProps } from '../helpers/to-table-row-props';
import { useFormatter } from '../hooks/use-formatter';
import { adjustTablePropsPrice } from '../helpers/adjust-table-props-price';

function prepareRows(): Array<TableRowProps> {
  const chances = [100, 50, 50, 50, 50, 100, 30, 20, 10, 2];
  const prices = [2, 10, 10, 10, 20, 0, 8, 8, 8, 8];

  const tableRows = adjustTablePropsPrice(
    toTableRowProps(calculateEnchant(chances, 'safe'), 'enchants'),
    prices,
  );

  // Lv.6 = Lv.5 x2, adjust Lv.6 and above with the price of Lv.5
  return tableRows.map((row, index) =>
    index <= 4 ? row : { ...row, result: row.result + tableRows[4].result },
  );
}

export function DimensionalTalisman() {
  const tableRows = prepareRows();
  const formatEnchant = useFormatter({ startIndex: 1, type: 'level' });

  return (
    <EnchantTable
      title="Талисман Иного Измерения"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
