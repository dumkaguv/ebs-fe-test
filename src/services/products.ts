import { Product } from "@/@types/product";
import { EndpointsEnum } from "./constants/endpoints-enum";
import { fetchInstance } from "./constants/fetchInstance";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetchInstance(EndpointsEnum.products);

  return await response.json();
};

export const getProductById = async (id: Product["id"]) => {
  const response = await fetchInstance(`${EndpointsEnum.products}/${id}`);

  return await response.json();
};
