import { EnchantTable } from "./base/enchant-table";
import { Mode } from "../types";
import { useFormatter } from "../hooks/use-formatter";
import { useTableRowProps } from "../hooks/use-table-row-props";

function BigStones() {
  const chances = [35, 25, 15, 10];
  const tableRows = useTableRowProps({
    chances,
    mode: Mode.Drop,
    resultMode: "enchants",
  });
  const formatEnchant = useFormatter({ startIndex: 2, type: "level" });
  return (
    <EnchantTable
      title="Большие Камни"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

function SuperiorStones() {
  const chances = [30, 30, 20, 10];
  const tableRows = useTableRowProps({
    chances,
    mode: Mode.Drop,
    resultMode: "enchants",
  });
  const formatEnchant = useFormatter({ startIndex: 2, type: "level" });
  return (
    <EnchantTable
      title="Исключительные Камни"
      tableRows={tableRows}
      formatEnchant={formatEnchant}
    />
  );
}

export function Stones() {
  return (
    <div className="pure-g">
      <BigStones />
      <SuperiorStones />
    </div>
  );
}
