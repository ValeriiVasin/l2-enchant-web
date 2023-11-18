import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';
import { Mode } from '../types';
import { EnchantTable } from './base/enchant-table';

function CrystalAdenWeapon() {
  const chances: Array<Array<number>> = [
    [70, 60, 50, 40, 60],
    [55, 50, 45, 40, 50],
    [45, 40, 35, 30, 30],
    [25, 20, 15, 10],
  ];
  const tableRows = useTableRowProps({
    chances,
    mode: 'drop',
    resultMode: 'both',
  });
  const formatEnchant = useFormatter({ type: 'level', startIndex: 2 });
  return (
    <EnchantTable
      title="Кристалл Адена - Оружие"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

function CrystalAdenArmor() {
  const chances: Array<Array<number>> = [
    [70, 60, 50, 40, 30],
    [55, 50, 45, 40, 30],
    [45, 40, 35, 30, 30],
    [25, 20, 15, 10],
  ];
  const tableRows = useTableRowProps({
    chances,
    mode: 'drop',
    resultMode: 'both',
  });
  const formatEnchant = useFormatter({ type: 'level', startIndex: 2 });
  return (
    <EnchantTable
      title="Кристалл Адена - Броня"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

export function CrystalAden() {
  return (
    <div className="pure-g">
      <CrystalAdenWeapon />
      <CrystalAdenArmor />
    </div>
  );
}
