import { useFormatter } from '../hooks/use-formatter';
import { useTableRowProps } from '../hooks/use-table-row-props';
import { EnchantTable } from './base/enchant-table';

function CloakLow() {
  const chances = [95, 85, 75, 60, 55, 40, 30, 20];
  const tableRows = useTableRowProps({
    chances,
    mode: 'safe',
    resultMode: 'enchants',
  });
  const formatEnchant = useFormatter({ startIndex: 1, type: 'plus' });
  return (
    <EnchantTable
      title="Плащ Сайхи (Сверкающий Свиток)"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

function CloakHigh() {
  const chances = [10, 1];
  const tableRows = useTableRowProps({
    chances,
    mode: 'safe',
    resultMode: 'enchants',
  });
  const formatEnchant = useFormatter({ startIndex: 9, type: 'plus' });
  return (
    <EnchantTable
      title="Плащ Сайхи (Блестящий Свиток)"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

function SpecialCloak() {
  const chances = [70, 60, 50, 40, 30, 20, 10, 5, 3, 2];
  const tableRows = useTableRowProps({
    chances,
    mode: 'safe',
    resultMode: 'enchants',
  });
  const formatEnchant = useFormatter({ startIndex: 1, type: 'plus' });
  return (
    <EnchantTable
      title="Специальный Плащ Сайхи"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

export function SaihaCloaks() {
  return (
    <div>
      <CloakLow />
      <CloakHigh />
      <SpecialCloak />
    </div>
  );
}
