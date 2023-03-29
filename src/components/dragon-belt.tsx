import { EnchantTable } from './base/enchant-table';
import { Mode } from '../types';
import { useTableRowProps } from '../hooks/use-table-row-props';

const chances = [95, 90, 85, 55, 50, 40, 33, 30, 25, 15];

export function DragonBelt() {
  const tableRows = useTableRowProps({
    chances,
    mode: Mode.Destroy,
    resultMode: 'items',
  });
  return <EnchantTable title="Пояс Дракона" tableRows={tableRows} />;
}
