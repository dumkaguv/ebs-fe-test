import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "@/components/ui";
import { CartItem, useCartContext } from "@/contexts/cart-context";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  item: CartItem;
}

export const ButtonAddToCart: FC<Props> = ({ item, className, ...props }) => {
  const { itemQuantities, handleProductQuantity } = useCartContext();

  return (
    <Button
      onClick={() => handleProductQuantity(item, "plus")}
      className={className}
      {...props}
    >
      Add to cart {itemQuantities[item.id] && `(${itemQuantities[item.id]})`}
    </Button>
  );
};
