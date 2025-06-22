import { FormatEnchantFunction, TableRowProps } from '../../types';
import { TableRow } from './table-row';

type EnchantTableProps = {
  tableRows: Array<TableRowProps>;
  title: string;
  formatEnchant?: FormatEnchantFunction;
};

export function EnchantTable({
  title,
  tableRows,
  formatEnchant,
}: EnchantTableProps) {
  return (
    <table className="min-w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th
            className="py-2 px-4 text-center font-semibold text-gray-700"
            colSpan={3}
          >
            {title}
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {tableRows.map((props, index) => (
          <TableRow key={index} {...props} formatEnchant={formatEnchant} />
        ))}
      </tbody>
    </table>
  );
}
