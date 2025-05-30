import { Filters } from "@/components/shared";
import { ProductList } from "@/components/shared";
import { FC } from "react";
import { useHomePage } from "./hooks";

export const HomePage: FC = () => {
  const { items, isLoading, isError, categories } = useHomePage();

  return (
    <div className="mt-5 flex flex-col gap-4">
      <section className="rounded-md bg-neutral-900 p-4 shadow-sm">
        <Filters
          categories={categories}
          isLoading={isLoading}
          isError={isError}
        />
      </section>

      <section className="rounded-md bg-neutral-900 p-6 shadow-sm">
        <ProductList
          items={items}
          isLoading={isLoading}
          isError={isError}
        />
      </section>
    </div>
  );
};
