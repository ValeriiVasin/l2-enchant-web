import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';
import { EnchantTable } from './base/enchant-table';

const chances: Array<Array<number>> = [
  [50, 45, 40, 35, 50],
  [45, 40, 35, 30, 25, 50],
  [35, 30, 25, 20, 15, 50],
  [35, 30, 25, 20, 15, 50],
];

export function TalismanOfBenir() {
  const tableRows = useTableRowProps({
    chances,
    mode: 'drop',
    resultMode: 'enchants',
  });
  const formatEnchant = useFormatter({ startIndex: 2, type: 'level' });
  return (
    <EnchantTable
      title="Талисман Бенира"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
