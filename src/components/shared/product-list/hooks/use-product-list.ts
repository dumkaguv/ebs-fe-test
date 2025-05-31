import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CartItem } from "@/contexts/cart-context";
import { sortOptions, sortParams } from "@/components/shared/filter-sort";

export const useProductList = <T extends CartItem>(items: T[]) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sortBy = searchParams.get(sortParams.sortBy);

  const filteredItems =
    category && category !== "all"
      ? items.filter((item) => item.category === category)
      : items;

  const sortedItems = useMemo(() => {
    if (sortBy === sortOptions.priceAsc) {
      return filteredItems.toSorted((a, b) => a.price - b.price);
    }

    if (sortBy === sortOptions.priceDesc) {
      return filteredItems.toSorted((a, b) => b.price - a.price);
    }

    return filteredItems;
  }, [filteredItems, sortBy]);

  return sortedItems;
};
