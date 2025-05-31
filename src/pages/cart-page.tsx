import { Button, Section } from "@/components/ui";
import { useCartContext } from "@/contexts/cart-context";
import * as ProductCard from "@/components/shared/product-card";
import { Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import { getProductRoute } from "@/routes/constants/routes-enum";
import { ButtonBack } from "@/components/shared";

export default function CartPage(): JSX.Element {
  const {
    items,
    getTotalItemsQuantity,
    getTotalPrice,
    handleProductQuantity,
    removeProduct,
    clearCart,
  } = useCartContext();

  return (
    <Section className="mt-5">
      <ButtonBack />
      <h2 className="mb-8 text-4xl font-bold">{`Your Cart (${getTotalItemsQuantity()})`}</h2>

      {items.length === 0 && (
        <p className="text-xl">Your cart is empty. Please add some items.</p>
      )}
      <ul className="grid gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <div className="grid grid-cols-2 rounded-lg bg-neutral-800 px-4 py-3 max-lg:grid-cols-1 max-lg:gap-2 max-md:px-3 max-md:py-2">
              <div className="flex items-center justify-between gap-3.5 max-lg:gap-5">
                <div className="flex items-center">
                  <Link to={getProductRoute(item.id)}>
                    <ProductCard.Image
                      src={item.image}
                      width={65}
                      height={65}
                      className="h-[65px] min-h-[65px] w-[65px] min-w-[65px] shrink-0 duration-200 hover:scale-[1.06]"
                      title="Open product page"
                    />
                  </Link>
                  <div className="ml-4 flex flex-col gap-y-[3px]">
                    <ProductCard.Title className="line-clamp-2 text-lg font-bold text-white max-lg:text-base">
                      {item.title}
                    </ProductCard.Title>
                    <ProductCard.Category className="text-sm">
                      {item.category}
                    </ProductCard.Category>
                  </div>
                </div>
                <ProductCard.Price className="text-lg font-bold">
                  {item.price}$
                </ProductCard.Price>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-5 max-lg:gap-x-3 lg:ml-[21%]">
                  <Button
                    onClick={() => handleProductQuantity(item, "plus")}
                    size="sm"
                    title="Increase product quantity by 1"
                    aria-label="Increase product quantity by 1"
                    className="h-8 w-8 p-0"
                  >
                    <Plus size={20} />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    onClick={() => handleProductQuantity(item, "minus")}
                    disabled={item.quantity === 1}
                    title="Decrease product quantity by 1"
                    aria-label="Decrease product quantity by 1"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <Minus size={20} />
                  </Button>
                </div>
                <div className="flex gap-x-11 max-lg:gap-x-5">
                  <span className="text-[22px] font-bold max-lg:text-lg">
                    {(item.quantity ?? 1) * item.price}$
                  </span>
                  <Button
                    onClick={() => removeProduct(item.id)}
                    title="Remove product from cart"
                    aria-label="Remove product from cart"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <X size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <div className="mt-10 flex items-center justify-between">
          <Button
            onClick={clearCart}
            size="lg"
          >
            Clear Cart
          </Button>
          <p className="text-xl font-bold">
            Total price: {getTotalPrice().toFixed(2)}$
          </p>
        </div>
      )}
    </Section>
  );
}
