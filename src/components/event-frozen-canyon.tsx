import { EnchantTable } from './base/enchant-table';
import { Mode } from '../types';
import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';

const chances = [8, 7, 6, 5, 4, 2, 1.3, 1, 0.3, 0.07, 0.04, 0.04, 0.03, 0.01];

// https://l2central.info/classic/events_and_promos/2092.html?lang=ru
export function EventFrozenCanyon() {
  const tableRows = useTableRowProps({
    chances,
    mode: Mode.Safe,
    resultMode: 'enchants',
  });
  const formatEnchant = useFormatter({ startIndex: 2, type: 'level' });
  return (
    <EnchantTable
      title="Кукла-снеговик"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
