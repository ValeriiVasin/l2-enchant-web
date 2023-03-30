import { EnchantTable } from './base/enchant-table';
import { Mode } from '../types';
import { calculateEnchant } from '../helpers/calculate-enchant';
import { toTableRowProps } from '../helpers/to-table-row-props';
import { useFormatter } from '../hooks/use-formatter';

const chances = [60, 50, 40, 35, 30, 28, 26, 24, 22, 20];

export function TalismanOfEva() {
  const tableRows = toTableRowProps(
    calculateEnchant(chances, Mode.Destroy),
    'items',
  );
  const formatEnchant = useFormatter({ startIndex: 1, type: 'plus' });
  return (
    <EnchantTable
      title="Талисман Евы"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
