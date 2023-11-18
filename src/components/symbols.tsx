import { EnchantTable } from './base/enchant-table';
import { Mode } from '../types';
import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';

function Symbol() {
  const chances = [50, 25, 20, 15, 10, 8, 6, 5, 5, 5, 5];
  const tableRows = useTableRowProps({
    chances,
    mode: 'safe',
    resultMode: 'enchants',
  });
  const formatEnchant = useFormatter({ startIndex: 1, type: 'level' });
  return (
    <EnchantTable
      title="Красящий Порошок"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

function EnhancedSymbol() {
  const chances = [10, 8, 6, 5, 4, 3, 2, 1.5, 0.5];
  const tableRows = useTableRowProps({
    chances,
    mode: 'safe',
    resultMode: 'enchants',
  });
  const formatEnchant = useFormatter({ startIndex: 12, type: 'level' });
  return (
    <EnchantTable
      title="Улучшенный Красящий Порошок"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

export function Symbols() {
  return (
    <div className="pure-g">
      <Symbol />
      <EnhancedSymbol />
    </div>
  );
}
