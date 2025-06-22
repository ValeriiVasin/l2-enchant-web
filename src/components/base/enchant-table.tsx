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
        <TableHeader>
          <ShadcnTableRow className="bg-primary/5">
            <TableHead
              colSpan={3}
              className="text-center font-semibold text-md text-primary py-2"
            >
              {title}
            </TableHead>
          </ShadcnTableRow>
          <ShadcnTableRow className="bg-muted/50">
            <TableHead className="font-semibold py-1">Enchant</TableHead>
            <TableHead className="font-semibold text-center py-1">
              Chance
            </TableHead>
            <TableHead className="font-semibold text-right py-1">
              Result
            </TableHead>
          </ShadcnTableRow>
        </TableHeader>
        <TableBody>
          {tableRows.map((props, index) => (
            <ShadcnTableRow
              key={index}
              className={
                index % 2 === 0 ? 'bg-gray-50 py-1' : 'bg-gray-100 py-1'
              }
            >
              <TableCell className="font-medium">
                {formatEnchant(props.index)}
              </TableCell>
              <TableCell className="text-center">{props.chance}%</TableCell>
              <TableCell className="text-right">
                {props.result.toFixed(2)}
              </TableCell>
            </ShadcnTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
