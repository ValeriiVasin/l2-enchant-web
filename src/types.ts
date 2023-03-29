export enum Mode {
  Destroy,
  Drop,
  Safe,
}

export type EnchantResult = {
  items: number;
  enchants: number;
  chance: number;
};

export type EnchantResultMode = 'items' | 'enchants' | 'both';

export type FormatEnchantFunction = (index: number) => string;

export type TableRowProps = {
  index: number;
  chance: number;
  result: number;
  formatEnchant?: FormatEnchantFunction;
};
