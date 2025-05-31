import { CartItem } from "@/contexts/cart-context";

const CART_ITEMS_KEY = "cartItems";
const ITEM_QUANTITIES_KEY = "itemQuantities";

export const loadCartItems = (): CartItem[] => {
  try {
    const data = localStorage.getItem(CART_ITEMS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const loadItemQuantities = (): Record<number, number> => {
  try {
    const data = localStorage.getItem(ITEM_QUANTITIES_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const saveCartItems = (items: CartItem[]) => {
  try {
    localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));
  } catch {}
};

export const saveItemQuantities = (quantities: Record<number, number>) => {
  try {
    localStorage.setItem(ITEM_QUANTITIES_KEY, JSON.stringify(quantities));
  } catch {}
};

export const clearCartStorage = () => {
  localStorage.removeItem(CART_ITEMS_KEY);
  localStorage.removeItem(ITEM_QUANTITIES_KEY);
};
