import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { getProductRoute } from "@/routes/constants/routes-enum";
import * as ProductCard from "@/components/shared/product-card";
import { Button } from "@/components/ui";
import { CartItem, useCartContext } from "@/contexts/cart-context";
import { BaseProduct } from "@/@types/base-product";
import { cn } from "@/utils";

interface Props<T extends CartItem> extends HTMLAttributes<HTMLElement> {
  item: T;
}

export const ProductListCard = <T extends BaseProduct>({
  item,
  className,
  ...props
}: Props<T>) => {
  const { itemQuantities, handleProductQuantity, removeProduct } =
    useCartContext();

  return (
    <article
      className={cn("flex flex-1 flex-col", className)}
      {...props}
    >
      <Link to={getProductRoute(item.id)}>
        <ProductCard.Image
          src={item.image}
          width={250}
          height={250}
          alt={item.title}
        />
        <div className="flex flex-col px-2 py-4">
          <ProductCard.Title className="mb-3 line-clamp-2 text-xl">
            {item.title}
          </ProductCard.Title>

          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1">
              Category:
              <ProductCard.Category>{item.category}</ProductCard.Category>
            </div>

            {item.rating && (
              <div className="inline-flex items-center gap-1">
                Rating: <ProductCard.Rating rating={item.rating} />
              </div>
            )}

            <div className="inline-flex items-center gap-1">
              Price: <ProductCard.Price>{item.price}$</ProductCard.Price>
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-auto flex items-center justify-between gap-4 p-2">
        <Button onClick={() => handleProductQuantity(item, "plus")}>
          Add to cart{" "}
          {itemQuantities[item.id] && `(${itemQuantities[item.id]})`}
        </Button>
        <Button
          onClick={() => removeProduct(item.id)}
          disabled={!itemQuantities[item.id]}
        >
          Remove
        </Button>
      </div>
    </article>
  );
};
