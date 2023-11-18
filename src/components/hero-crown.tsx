import { EnchantTable } from './base/enchant-table';
import { calculateEnchant } from '../helpers/calculate-enchant';
import { toTableRowProps } from '../helpers/to-table-row-props';
import { useFormatter } from '../hooks/use-formatter';

const chances = [60, 50, 40, 35, 30, 28, 26, 24, 22, 20];

export function HeroCrown() {
  const tableRows = toTableRowProps(
    calculateEnchant(chances, 'destroy'),
    'items',
  );
  const formatEnchant = useFormatter({ startIndex: 1, type: 'plus' });
  return (
    <EnchantTable
      title="Венец Героя"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
