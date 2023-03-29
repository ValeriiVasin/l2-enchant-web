import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';
import { Mode } from '../types';
import { EnchantTable } from './base/enchant-table';

const chances: Array<Array<number>> = [
  [70, 60, 50, 40, 60],
  [55, 50, 45, 40, 50],
  [45, 40, 35, 30, 30],
  [25, 20, 15, 10],
];

export function CrystalAden() {
  const tableRows = useTableRowProps({
    chances,
    mode: Mode.Drop,
    resultMode: 'both',
  });
  const formatEnchant = useFormatter({ type: 'level', startIndex: 2 });
  return (
    <EnchantTable
      title="Кристалл Адена"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
