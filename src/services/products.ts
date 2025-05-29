import { Product } from "./../../@types/product";
import { EndpointsEnum } from "./endpoints-enum";
import { fetchInstance } from "./fetchInstance";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetchInstance(EndpointsEnum.products);

  return await response.json();
};
