import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';
import { Mode } from '../types';
import { EnchantTable } from './base/enchant-table';

const chances: Array<Array<number>> = [
  [60, 55, 50, 40, 50],
  [45, 40, 35, 30, 50, 45],
  [40, 40, 35, 30, 25, 50],
  [35, 30, 25, 20, 15, 50],
  [35, 25, 20, 15, 10, 30],
];

export function TalismanOfMagmeld() {
  const tableRows = useTableRowProps({
    chances,
    mode: 'drop',
    resultMode: 'enchants',
  });
  const formatEnchant = useFormatter({ startIndex: 2, type: 'level' });
  return (
    <EnchantTable
      title="Талисман Магмельда"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
