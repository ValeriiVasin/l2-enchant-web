import { useFormatter } from "../hooks/use-formatter";
import { useTableRowProps } from "../hooks/use-table-row-props";
import { Mode } from "../types";
import { EnchantTable } from "./base/enchant-table";

const chances = [
  [70, 60, 50, 40, 30],
  [50, 40, 30, 20, 20],
  [30, 20, 15, 10, 25],
  [20, 15, 10, 5]
];

export function GrowthRune() {
  const tableRows = useTableRowProps({
    chances,
    mode: Mode.Drop,
    resultMode: "both"
  });
  const formatEnchant = useFormatter({ startIndex: 2, type: "level" });
  return (
    <EnchantTable
      title="Руна Развития"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
