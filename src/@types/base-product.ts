import { Product } from "./product";

export interface BaseProduct
  extends Pick<Product, "id" | "title" | "price" | "category" | "image"> {
  rating?: Product["rating"];
  description?: Product["description"];
}
