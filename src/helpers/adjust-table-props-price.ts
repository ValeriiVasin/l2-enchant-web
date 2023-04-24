import { TableRowProps } from '../types';

export function adjustTablePropsPrice(
  rows: Array<TableRowProps>,
  prices: Array<number>,
): Array<TableRowProps> {
  if (rows.length !== prices.length) {
    throw new Error('Table rows amount does not match prices amount');
  }

  const result: Array<TableRowProps> = [];

  for (const [index, row] of rows.entries()) {
    if (index === 0) {
      result.push({ ...row, result: row.result * prices[0] });
      continue;
    }

    const prevRow = rows[index - 1];
    const prevResultRow = result[index - 1];
    const diff = row.result - prevRow.result;

    result.push({
      ...row,
      result: prevResultRow.result + diff * prices[index],
    });
  }

  return result;
}
