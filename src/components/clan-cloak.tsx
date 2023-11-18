import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';
import { EnchantTable } from './base/enchant-table';

const chances = [85, 80, 75, 60, 50, 40, 30, 20, 15, 7];

function Cloaks() {
  const tableRows = useTableRowProps({
    chances,
    mode: 'destroy',
    resultMode: 'items',
  });
  const formatEnchant = useFormatter({ startIndex: 1, type: 'plus' });
  return (
    <EnchantTable
      title="Плащ Клана (Плащи)"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

function Enchants() {
  const tableRows = useTableRowProps({
    chances,
    mode: 'destroy',
    resultMode: 'enchants',
  });
  const formatEnchant = useFormatter({ startIndex: 1, type: 'plus' });
  return (
    <EnchantTable
      title="Плащ Клана (Заточки)"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

export function ClanCloak() {
  return (
    <>
      <Cloaks />
      <Enchants />
    </>
  );
}
