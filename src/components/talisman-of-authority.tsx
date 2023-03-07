import { useFormatter } from "../hooks/use-formatter";
import { useTableRowProps } from "../hooks/use-table-row-props";
import { Mode } from "../types";
import { EnchantTable } from "./base/enchant-table";

const chances: Array<Array<number>> = [
  [70, 60, 50, 40, 50],
  [60, 50, 40, 30, 50],
  [40, 30, 20, 10, 50],
  [25, 20, 15, 10]
];

export function TalismanOfAuthority() {
  const tableRows = useTableRowProps({
    chances,
    mode: Mode.Drop,
    resultMode: "both"
  });
  const formatEnchant = useFormatter({ startIndex: 2, type: "level" });
  return (
    <EnchantTable
      title="Талисман Властителя"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}
