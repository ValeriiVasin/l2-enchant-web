import { EnchantTable } from './base/enchant-table';
import { Mode } from '../types';
import { calculateEnchant } from '../helpers/calculate-enchant';
import { toTableRowProps } from '../helpers/to-table-row-props';
import { useFormatter } from '../hooks/use-formatter';

function BelowSix() {
  const chances = [100, 50, 50, 50, 50];
  const tableRows = toTableRowProps(
    calculateEnchant(chances, Mode.Safe),
    'enchants',
  );

  const formatEnchant = useFormatter({ startIndex: 1, type: 'level' });

  return (
    <EnchantTable
      title="Талисман Иного Измерения"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

function AboveSix() {
  const chances = [30, 20, 10, 2];
  const tableRows = toTableRowProps(
    calculateEnchant(chances, Mode.Safe),
    'enchants',
  );
  const formatEnchant = useFormatter({ startIndex: 7, type: 'level' });
  return (
    <EnchantTable
      title="Талисман Иного Измерения"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

export function DimensionalTalisman() {
  return (
    <div>
      <BelowSix />
      <AboveSix />
    </div>
  );
}
