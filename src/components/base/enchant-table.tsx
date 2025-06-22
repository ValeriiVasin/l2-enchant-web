import { FormatEnchantFunction, TableRowProps } from '@/types';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow as ShadcnTableRow,
  TableCell,
} from '@/components/ui/table';

type EnchantTableProps = {
  tableRows: Array<TableRowProps>;
  title: string;
  formatEnchant?: FormatEnchantFunction;
};

const defaultFormatEnchant: FormatEnchantFunction = (index: number) =>
  `+${index + 1}`;

export function EnchantTable({
  title,
  tableRows,
  formatEnchant = defaultFormatEnchant,
}: EnchantTableProps) {
  return (
    <div className="rounded-md border shadow-sm mb-8 overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-100 dark:bg-gray-700">
          <ShadcnTableRow>
            <TableHead
              colSpan={3}
              className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center"
            >
              {title}
            </TableHead>
          </ShadcnTableRow>
        </TableHeader>
        <TableBody>
          {tableRows.map((props, index) => (
            <ShadcnTableRow key={index}>
              <TableCell>{formatEnchant(props.index)}</TableCell>
              <TableCell>{props.chance}%</TableCell>
              <TableCell>{props.result.toFixed(2)}</TableCell>
            </ShadcnTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
