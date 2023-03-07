import { useCallback } from "react";
import { FormatEnchantFunction } from "../types";

type UseFormatterOptions = {
  startIndex: number;
  type: "level" | "plus";
};

export function useFormatter({
  startIndex,
  type
}: UseFormatterOptions): FormatEnchantFunction {
  return useCallback(
    (index: number) => {
      const adjustedIndex = index + startIndex;
      return type === "level" ? `Ур.${adjustedIndex}` : `+${adjustedIndex}`;
    },
    [startIndex, type]
  );
}
