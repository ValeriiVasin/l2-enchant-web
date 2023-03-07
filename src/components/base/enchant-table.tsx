import { FormatEnchantFunction, TableRowProps } from "../../types";
import { TableRow } from "./table-row";

type EnchantTableProps = {
  tableRows: Array<TableRowProps>;
  title: string;
  formatEnchant?: FormatEnchantFunction;
};

export function EnchantTable({
  title,
  tableRows,
  formatEnchant
}: EnchantTableProps) {
  return (
    <table className="pure-table">
      <thead>
        <tr>
          <th colSpan={3}>{title}</th>
        </tr>
      </thead>
      <tbody>
        {tableRows.map((props, index) => (
          <TableRow key={index} {...props} formatEnchant={formatEnchant} />
        ))}
      </tbody>
    </table>
  );
}
