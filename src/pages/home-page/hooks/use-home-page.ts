import { Product } from "@/@types/product";
import { apiClient } from "@/services/api-client";
import { useEffect, useState } from "react";

export const useHomePage = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [categories, setCategories] = useState<Set<string>>();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const data = await apiClient.products.getAllProducts();
        setCategories(new Set(["all", ...data.map((item) => item.category)]));
        setItems(data);
      } catch (error) {
        console.log("Error to fetch products HomePage fetchItems", error);
        setIsError(true);
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return {
    items,
    isLoading,
    isError,
    categories,
  };
};
