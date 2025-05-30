import { HTMLAttributes, useMemo } from "react";
import { cn } from "@/utils";

import { CartItem } from "@/contexts/cart-context";
import { BaseProduct } from "@/@types/base-product";
import { ProductListCard } from "./product-list-card";
import { ProductListCardSkeleton } from "./product-list-card-skeleton";

interface Props<T extends CartItem> extends HTMLAttributes<HTMLDivElement> {
  items: T[];
  isLoading?: boolean;
  isError?: boolean;
  title?: string;
}

export const ProductList = <T extends BaseProduct>({
  items,
  title = `Items (${items.length})`,
  isLoading,
  isError,
  className,
  ...props
}: Props<T>) => {
  const skeletons = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => (
        <ProductListCardSkeleton key={i} />
      )),
    [],
  );

  return (
    <>
      <h2 className="mb-8 text-4xl">
        {isError ? "Failed to load items. Try again later." : title}
      </h2>
      <div className={cn("", className)} {...props}>
        <ul className="grid grid-cols-4 gap-5">
          {isLoading
            ? skeletons
            : items.map((item) => (
                <li
                  key={item.id}
                  className="flex h-full flex-col rounded-md bg-neutral-950/20 p-0.5 shadow-md shadow-neutral-800 duration-200 hover:scale-[1.02] hover:bg-neutral-800"
                >
                  <ProductListCard item={item} />
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};
