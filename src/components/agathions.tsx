import { EnchantTable } from './base/enchant-table';
import { Mode } from '../types';
import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';

const chances = [100, 100, 100, 65, 50, 35, 24, 18, 14, 8];

export function DragonEgg() {
  const tableRows = useTableRowProps({
    chances,
    mode: 'destroy',
    resultMode: 'items',
  });
  const formatEnchant = useFormatter({ startIndex: 1, type: 'plus' });
  return (
    <EnchantTable
      title="Агатион Яйцо Дракона"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

export function Agathions() {
  return <DragonEgg />;
}
