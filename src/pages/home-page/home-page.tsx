import { Filters } from "@/components/shared";
import { ProductList } from "@/components/shared";
import { useHomePage } from "./hooks";
import { Section } from "@/components/ui";

export default function HomePage(): JSX.Element {
  const { items, isLoading, isError, categories } = useHomePage();

  return (
    <div className="mt-5 flex flex-col gap-4">
      <Section>
        <Filters
          categories={categories}
          isLoading={isLoading}
          isError={isError}
        />
      </Section>

      <Section>
        <ProductList
          items={items}
          isLoading={isLoading}
          isError={isError}
        />
      </Section>
    </div>
  );
}
