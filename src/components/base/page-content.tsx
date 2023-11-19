import { useFormatter } from '../../hooks/use-formatter';
import { useTableRowProps } from '../../hooks/use-table-row-props';
import { EnchantConfig } from '../../types';
import { EnchantTable } from './enchant-table';

type PageContentProps = {
  config: EnchantConfig | Array<EnchantConfig>;
};

export function PageContent({ config }: PageContentProps) {
  const configs = Array.isArray(config) ? config : [config];

  return (
    <div className="pure-g">
      {configs.map((config) => (
        <Table key={config.title} {...config} />
      ))}
    </div>
  );
}

function Table({
  chances,
  mode,
  resultMode,
  type,
  startIndex,
  title,
}: EnchantConfig) {
  const tableRows = useTableRowProps({
    chances,
    mode,
    resultMode,
  });
  const formatEnchant = useFormatter({ startIndex, type });
  return (
    <EnchantTable
      title={title}
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
