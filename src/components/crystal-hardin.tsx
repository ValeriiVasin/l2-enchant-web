import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';
import { Mode } from '../types';
import { EnchantTable } from './base/enchant-table';

const chances: Array<Array<number>> = [
  [60, 55, 50, 45, 45],
  [40, 35, 30, 25, 35],
  [30, 25, 20, 15, 25],
  [20, 15, 10, 5],
];

export function CrystalHardin() {
  const tableRows = useTableRowProps({
    chances,
    mode: Mode.Drop,
    resultMode: 'both',
  });
  const formatEnchant = useFormatter({ startIndex: 2, type: 'level' });
  return (
    <EnchantTable
      title="Кристалл Хардина"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
