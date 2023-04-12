import { EnchantTable } from './base/enchant-table';
import { Mode } from '../types';
import { calculateEnchant } from '../helpers/calculate-enchant';
import { toTableRowProps } from '../helpers/to-table-row-props';
import { useFormatter } from '../hooks/use-formatter';

const chances = [100, 100, 100, 65, 50, 35, 24, 18, 14, 8];

export function DragonEgg() {
  const tableRows = toTableRowProps(
    calculateEnchant(chances, Mode.Destroy),
    'items',
  );
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
