import { FormatEnchantFunction, TableRowProps } from "../../types";

const defaultFormatEnchant: FormatEnchantFunction = (index: number) =>
  `+${index + 1}`;

export function TableRow({
  index,
  chance,
  result,
  formatEnchant = defaultFormatEnchant
}: TableRowProps) {
  return (
    <tr>
      <td>{formatEnchant(index)}</td>
      <td>{chance}%</td>
      <td>{result.toFixed(2)}</td>
    </tr>
  );
}
