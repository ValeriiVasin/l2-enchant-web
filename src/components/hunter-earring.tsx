import { EnchantTable } from './base/enchant-table';
import { Mode } from '../types';
import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';

const chances = [90, 80, 69, 58, 45, 28, 26, 24, 22, 20];

export function HunterEarring() {
  const tableRows = useTableRowProps({
    chances,
    mode: 'destroy',
    resultMode: 'items',
  });
  const formatEnchant = useFormatter({ startIndex: 1, type: 'plus' });
  return (
    <EnchantTable
      title="Серьга Охотника"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
