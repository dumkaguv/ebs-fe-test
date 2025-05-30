import { Product } from "@/@types/product";
import { Filters } from "@/components/shared";
import { ProductList } from "@/components/shared/product";
import { apiClient } from "@/services/api-client";
import { FC, useEffect, useState } from "react";

export const HomePage: FC = () => {
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

  return (
    <div className="mt-5 flex flex-col gap-4">
      <section className="rounded-md bg-neutral-900 p-4 shadow-sm">
        <Filters categories={categories} />
      </section>

      <section className="rounded-md bg-neutral-900 p-6 shadow-sm">
        <ProductList items={items} isLoading={isLoading} isError={isError} />
      </section>
    </div>
  );
};
