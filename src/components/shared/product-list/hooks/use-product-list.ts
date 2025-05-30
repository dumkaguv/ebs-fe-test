import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CartItem } from "@/contexts/cart-context";

export const useProductList = <T extends CartItem>(items: T[]) => {
  const [searchParams, _] = useSearchParams();
  const category = searchParams.get("category");

  const filteredItems =
    category && category !== "all"
      ? items.filter((item) => item.category === category)
      : items;

  return useMemo(() => filteredItems, [filteredItems]);
};
