import { EnchantTable } from './base/enchant-table';
import { calculateEnchant } from '../helpers/calculate-enchant';
import { toTableRowProps } from '../helpers/to-table-row-props';
import { useFormatter } from '../hooks/use-formatter';

const chances = [80, 70, 60, 40, 30, 24, 16, 10, 10];

export function TalismanOfAden() {
  const tableRows = toTableRowProps(
    calculateEnchant(chances, 'destroy'),
    'items',
  );
  const formatEnchant = useFormatter({ startIndex: 2, type: 'plus' });
  return (
    <EnchantTable
      title="Талисман Адена"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
