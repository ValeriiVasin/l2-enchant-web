import { FormatEnchantFunction, TableRowProps } from '../../types';

const defaultFormatEnchant: FormatEnchantFunction = (index: number) =>
  `+${index + 1}`;

export function TableRow({
  index,
  chance,
  result,
  formatEnchant = defaultFormatEnchant,
}: TableRowProps) {
  return (
    <tr className="bg-white hover:bg-gray-50">
      <td className="py-2 px-4 border-r border-gray-200">
        {formatEnchant(index)}
      </td>
      <td className="py-2 px-4 text-center border-r border-gray-200">
        {chance}%
      </td>
      <td className="py-2 px-4 text-right">{result.toFixed(2)}</td>
    </tr>
  );
}
