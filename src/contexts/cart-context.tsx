import { BaseProduct } from "@/@types/base-product";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  loadCartItems,
  loadItemQuantities,
  saveCartItems,
  saveItemQuantities,
  clearCartStorage,
} from "@/utils/cart-storage";

export type CartItem = BaseProduct & {
  quantity?: number;
};

interface CartContextType {
  items: CartItem[];
  itemQuantities: Record<BaseProduct["id"], number>;
  handleProductQuantity: (
    product: BaseProduct,
    operation: "plus" | "minus"
  ) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItemsQuantity: () => number;
  removeProduct: (productId: BaseProduct["id"]) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(loadCartItems);
  const [itemQuantities, setItemQuantities] =
    useState<Record<BaseProduct["id"], number>>(loadItemQuantities);

  // save to local storage
  useEffect(() => {
    saveCartItems(items);
  }, [items]);

  useEffect(() => {
    saveItemQuantities(itemQuantities);
  }, [itemQuantities]);

  const handleProductQuantity = (
    product: BaseProduct,
    operation: "plus" | "minus"
  ) => {
    const quantityChange = operation === "plus" ? 1 : -1;

    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        const newQuantity = (existingItem.quantity ?? 0) + quantityChange;

        if (newQuantity <= 0) {
          return prevItems.filter((item) => item.id !== product.id);
        }

        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setItemQuantities((prev) => {
      const current = prev[product.id] ?? 0;
      const updated = current + quantityChange;

      if (updated <= 0) {
        const { [product.id]: _, ...rest } = prev;
        return rest;
      }

      return { ...prev, [product.id]: updated };
    });
  };

  const removeProduct = (productId: BaseProduct["id"]) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    setItemQuantities((prev) => {
      const { [productId]: _, ...rest } = prev;
      return rest;
    });
  };

  const clearCart = () => {
    setItems([]);
    setItemQuantities({});
    clearCartStorage();
  };

  const getTotalPrice = () =>
    items.reduce((total, item) => total + item.price * (item.quantity ?? 0), 0);

  const getTotalItemsQuantity = () =>
    items.reduce((total, item) => total + (item.quantity ?? 0), 0);

  return (
    <CartContext.Provider
      value={{
        items,
        itemQuantities,
        handleProductQuantity,
        removeProduct,
        clearCart,
        getTotalPrice,
        getTotalItemsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};
