export type Mode =
  // item destroys when enchant fails
  // Example: Dragon Belt / "Пояс Дракона"
  | 'destroy'
  // item drops to the safe level when enchant fails
  // example: "Talisman of Authority" / "Талисман Властителя"
  | 'drop'
  // when enchant fails - items stays, only enchant schroll is a price
  // example: "Dimensional Talisman" / "Талисман Иного Измерения"
  | 'safe';

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
