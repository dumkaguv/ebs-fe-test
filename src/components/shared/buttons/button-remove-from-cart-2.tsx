import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "@/components/ui";
import { CartItem, useCartContext } from "@/contexts/cart-context";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  itemId: CartItem["id"];
}

export const ButtonRemoveFromCart: FC<Props> = ({
  itemId,
  className,
  ...props
}) => {
  const { itemQuantities, removeProduct } = useCartContext();

  return (
    <Button
      onClick={() => removeProduct(itemId)}
      disabled={!itemQuantities[itemId]}
      className={className}
      {...props}
    >
      Remove
    </Button>
  );
};
