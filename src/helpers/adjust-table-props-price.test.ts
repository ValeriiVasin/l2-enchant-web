import { TableRowProps } from '../types';
import { adjustTablePropsPrice } from './adjust-table-props-price';

function createResultsProps(results: Array<number>): Array<TableRowProps> {
  return results.map((result, index) => ({ index, chance: 0, result }));
}

describe('adjust table props price', () => {
  test('throws when chances length does not match rows', () => {
    expect(() =>
      adjustTablePropsPrice(createResultsProps([1, 2]), [2]),
    ).toThrowError('Table rows amount does not match prices amount');
  });

  test('does not modify existing objects', () => {
    const rows = createResultsProps([1, 2]);
    const prices = [2, 2];
    expect(adjustTablePropsPrice(rows, prices)[0]).not.toBe(rows[0]);
  });

  test('properly sums up prices', () => {
    const rows = createResultsProps([1, 3, 5, 7, 9]);
    const prices = [2, 10, 10, 10, 20];

    expect(
      adjustTablePropsPrice(rows, prices).map((props) => props.result),
    ).toEqual([2, 22, 42, 62, 102]);
  });
});
